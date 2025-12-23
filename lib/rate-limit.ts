import { NextRequest } from "next/server";

interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  uniqueTokenPerInterval: number; // Max unique IPs per window
}

interface RateLimitStore {
  [key: string]: number[];
}

const rateLimitStore: RateLimitStore = {};

export function rateLimit(config: RateLimitConfig) {
  return {
    check: async (
      request: NextRequest,
      limit: number,
      token: string
    ): Promise<{ success: boolean; remaining?: number; reset?: number }> => {
      const now = Date.now();
      const windowStart = now - config.interval;

      // Clean up old entries
      if (rateLimitStore[token]) {
        rateLimitStore[token] = rateLimitStore[token].filter(
          (timestamp) => timestamp > windowStart
        );
      } else {
        rateLimitStore[token] = [];
      }

      // Check if limit exceeded
      if (rateLimitStore[token].length >= limit) {
        const oldestTimestamp = rateLimitStore[token][0];
        const resetTime = oldestTimestamp + config.interval;

        return {
          success: false,
          remaining: 0,
          reset: Math.ceil((resetTime - now) / 1000),
        };
      }

      // Add current request
      rateLimitStore[token].push(now);

      return {
        success: true,
        remaining: limit - rateLimitStore[token].length,
      };
    },
  };
}

// Get client IP address
export function getClientIp(request: NextRequest): string {
  // Check various headers for IP
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return "unknown";
}
