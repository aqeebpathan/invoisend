export function Problem() {
  const painPoints = [
    "You send the invoice… and wait",
    "The due date passes",
    "You rewrite the same awkward reminder email",
    "You wonder if you sound rude or desperate",
    "You delay following up — again",
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Freelancers don&apos;t hate invoicing.
            <br />
            <span className="text-muted-foreground">
              They hate chasing payments.
            </span>
          </h2>

          <div className="mx-auto mt-16 max-w-xl space-y-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border bg-card p-5 text-left shadow-sm transition-all hover:shadow-md"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-semibold text-red-600">
                  {index + 1}
                </div>
                <p className="text-lg text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border bg-linear-to-br from-red-50 to-orange-50 p-8 shadow-sm">
            <p className="text-2xl font-semibold">
              Late payments aren&apos;t the problem.
              <br />
              <span className="text-muted-foreground">Chasing them is.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
