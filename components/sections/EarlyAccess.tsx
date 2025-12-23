"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";

export function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const waitlistCount = useWaitlistCount();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || email.split("@")[0], // Use email username if no name provided
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.code === "DUPLICATE_EMAIL") {
          throw new Error("You're already on the list! Check your inbox.");
        }
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitted(true);

      // Track with analytics if available
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "waitlist_signup", {
          email: email,
        });
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(err.message || "Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="early-access" className="border-t py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 animate-scale-in">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-3 text-3xl font-bold">You&apos;re in.</h2>
            <p className="text-muted-foreground">
              We&apos;ll email you at{" "}
              <span className="font-medium text-foreground">{email}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="early-access"
      className="border-t bg-linear-to-b from-white to-gray-50 py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Heading */}
          <h2 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl">
            Join early access
          </h2>
          <p className="mb-12 text-xl text-muted-foreground">
            Be the first to know when we launch. Get 6 months free.
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 animate-fade-in">
              <div className="flex items-center justify-center gap-2 text-sm text-red-800">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <p>{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            {/* Honeypot - invisible to users, filled by bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
              }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-14 flex-1 text-base"
                disabled={loading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-14 px-8 text-base font-medium disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Joining...
                  </span>
                ) : (
                  <>
                    Join waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No spam. No credit card. Just updates when we launch.
            </p>
          </form>

          {/* Benefits - inline */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>6 months free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Early access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span>Shape the product</span>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-white bg-linear-to-br from-blue-400 to-purple-400"
                />
              ))}
            </div>
            <span className="text-muted-foreground">
              <strong className="font-semibold text-foreground">
                {waitlistCount}+
              </strong>{" "}
              freelancers joined
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
