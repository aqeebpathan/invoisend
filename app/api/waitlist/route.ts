import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import {
  sanitizeEmail,
  sanitizeName,
  sanitizeText,
  isValidEmail,
  isDisposableEmail,
} from "@/lib/sanitize";
import { validateHoneypot } from "@/lib/honeypot";

// Rate limiter: 3 requests per 15 minutes per IP
const limiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500,
});

// Security headers
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const clientIp = getClientIp(request);

    // Rate limiting check
    const rateCheck = await limiter.check(request, 3, clientIp);

    if (!rateCheck.success) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many requests. Please try again in ${rateCheck.reset} seconds.`,
          code: "RATE_LIMIT_EXCEEDED",
        },
        {
          status: 429,
          headers: {
            ...securityHeaders,
            "Retry-After": String(rateCheck.reset),
            "X-RateLimit-Limit": "3",
            "X-RateLimit-Remaining": String(rateCheck.remaining),
            "X-RateLimit-Reset": String(rateCheck.reset),
          },
        }
      );
    }

    // Check request size (prevent payload attacks)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10000) {
      // 10KB max
      return NextResponse.json(
        { success: false, error: "Request too large" },
        { status: 413, headers: securityHeaders }
      );
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON" },
        { status: 400, headers: securityHeaders }
      );
    }

    const { name, email, workType, monthlyInvoices, biggestPain, website } =
      body;

    // Honeypot check (website field should be empty)
    if (!validateHoneypot(website)) {
      // Log potential bot but return success to not reveal honeypot
      console.warn(`Bot detected from IP: ${clientIp}`);
      return NextResponse.json(
        { success: true, message: "Thank you for joining!" },
        { status: 200, headers: securityHeaders }
      );
    }

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400, headers: securityHeaders }
      );
    }

    // Sanitize inputs
    const sanitizedEmail = sanitizeEmail(email);
    const sanitizedName = name
      ? sanitizeName(name)
      : sanitizedEmail.split("@")[0];

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address" },
        { status: 400, headers: securityHeaders }
      );
    }

    // Block disposable emails (optional - comment out if too restrictive)
    if (isDisposableEmail(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Temporary email addresses are not allowed" },
        { status: 400, headers: securityHeaders }
      );
    }

    // Validate name length
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be between 2 and 100 characters" },
        { status: 400, headers: securityHeaders }
      );
    }

    // Sanitize optional fields
    const sanitizedWorkType = workType ? sanitizeText(workType, 50) : "";
    const sanitizedMonthlyInvoices = monthlyInvoices
      ? sanitizeText(monthlyInvoices, 10)
      : "";
    const sanitizedBiggestPain = biggestPain
      ? sanitizeText(biggestPain, 500)
      : "";

    // Connect to database with timeout
    const dbTimeout = setTimeout(() => {
      throw new Error("Database connection timeout");
    }, 10000); // 10 seconds

    await connectDB();
    clearTimeout(dbTimeout);

    // Check if email already exists
    const existingUser = await Waitlist.findOne({
      email: sanitizedEmail,
    })
      .lean()
      .exec();

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already on the waitlist",
          code: "DUPLICATE_EMAIL",
        },
        { status: 409, headers: securityHeaders }
      );
    }

    // Create new waitlist entry with IP tracking
    const waitlistEntry = await Waitlist.create({
      name: sanitizedName,
      email: sanitizedEmail,
      workType: sanitizedWorkType,
      monthlyInvoices: sanitizedMonthlyInvoices,
      biggestPain: sanitizedBiggestPain,
      ipAddress: clientIp, // Store IP for security tracking
      userAgent: request.headers.get("user-agent") || "unknown",
    });

    // Log successful signup (for monitoring)
    console.log(`New signup: ${sanitizedEmail} from IP: ${clientIp}`);

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist",
        data: {
          email: waitlistEntry.email,
          createdAt: waitlistEntry.createdAt,
        },
      },
      {
        status: 201,
        headers: {
          ...securityHeaders,
          "X-RateLimit-Remaining": String(rateCheck.remaining),
        },
      }
    );
  } catch (error: any) {
    console.error("Waitlist API Error:", error);

    // Don't expose internal errors to client
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, error: "Invalid input data" },
        { status: 400, headers: securityHeaders }
      );
    }

    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already on the waitlist",
          code: "DUPLICATE_EMAIL",
        },
        { status: 409, headers: securityHeaders }
      );
    }

    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500, headers: securityHeaders }
    );
  }
}

// GET endpoint with rate limiting
export async function GET(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);

    // Rate limit: 10 requests per minute
    const rateCheck = await limiter.check(request, 10, clientIp);

    if (!rateCheck.success) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429, headers: securityHeaders }
      );
    }

    await connectDB();

    const count = await Waitlist.countDocuments();

    return NextResponse.json(
      {
        success: true,
        data: {
          totalSignups: count,
        },
      },
      { headers: securityHeaders }
    );
  } catch (error) {
    console.error("Waitlist GET Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch data" },
      { status: 500, headers: securityHeaders }
    );
  }
}
