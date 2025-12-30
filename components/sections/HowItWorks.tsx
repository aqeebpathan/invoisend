export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add your clients",
      description: "Save their info once. Never retype it again.",
    },
    {
      number: "02",
      title: "Connect Stripe",
      description: "One-time setup. Receive payments directly to your account.",
      badge: "One-time",
    },
    {
      number: "03",
      title: "Create an invoice",
      description: "Simple form. Stripe payment link added automatically.",
    },
    {
      number: "04",
      title: "Send & track",
      description:
        "Invoice sent. Payment tracked. Dashboard updated in real-time.",
    },
    {
      number: "05",
      title: "Get paid instantly",
      description:
        "Client pays via Stripe link. Money goes directly to your account.",
    },
    {
      number: "06",
      title: "Auto-follow-ups",
      description: "Polite reminders sent on schedule. You approve each one.",
    },
  ];

  return (
    <section className="border-t py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            How it works
          </h2>
          <p className="mb-16 text-xl text-muted-foreground">
            Set up once. Use forever. Get paid faster.
          </p>

          <div className="relative">
            <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 md:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="relative z-10 rounded-2xl border-2 bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-blue-700 text-lg font-bold text-white shadow-lg">
                      {step.number}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold flex items-center gap-2 justify-center">
                      {step.title}
                      {step.badge && (
                        <span className="text-xs font-medium rounded-full bg-blue-100 text-blue-700 px-2 py-0.5">
                          {step.badge}
                        </span>
                      )}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Special highlight for Stripe step */}
                    {index === 1 && (
                      <div className="mt-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-3 border border-blue-100">
                        <div className="flex items-center justify-center gap-2">
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="#635BFF"
                          >
                            <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                          </svg>
                          <span className="text-xs font-semibold text-blue-700">
                            Stripe Connect
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Payment link highlight */}
                    {index === 4 && (
                      <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-2 text-xs text-green-700 font-medium">
                        💳 Instant transfer
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom info cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-6 text-left">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Stripe Connect Security
              </h3>
              <p className="text-sm text-muted-foreground">
                We never see your Stripe credentials. OAuth connection means
                your account stays secure and under your control.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-6 text-left">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                You stay in control
              </h3>
              <p className="text-sm text-muted-foreground">
                Every reminder is drafted for you, but you review and approve
                before sending. No automation surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
