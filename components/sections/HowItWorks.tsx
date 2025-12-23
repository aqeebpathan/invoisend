export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add your clients",
      description: "Save their info once. Never retype it again.",
    },
    {
      number: "02",
      title: "Create an invoice",
      description: "Simple form. Stripe link added automatically.",
    },
    {
      number: "03",
      title: "Send & track",
      description: "Invoice sent. Payment tracked. Dashboard updated.",
    },
    {
      number: "04",
      title: "Auto-follow-ups",
      description: "Polite reminders sent on schedule. You approve each one.",
    },
  ];

  return (
    <section className="border-t py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            How it works
          </h2>
          <p className="mb-16 text-xl text-muted-foreground">
            Four simple steps. Then you&apos;re done.
          </p>

          <div className="relative">
            <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-linear-to-r from-blue-200 via-purple-200 to-pink-200 md:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="relative z-10 rounded-2xl border bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-300 to-blue-700 text-lg font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border bg-linear-to-br from-green-50 to-emerald-50 p-8">
            <p className="text-xl font-semibold">No automation surprises.</p>
            <p className="mt-2 text-muted-foreground">
              You review every reminder before it&apos;s sent. You stay in
              control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
