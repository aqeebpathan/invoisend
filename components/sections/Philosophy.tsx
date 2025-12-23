import { Sparkles } from "lucide-react";

export function Philosophy() {
  return (
    <section className="border-t bg-linear-to-b from-white to-blue-50/30 py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Sparkles className="h-4 w-4" />
            Our Philosophy
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Most invoicing tools are overkill.
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              QuickBooks and FreshBooks are built for accountants managing
              complex businesses.
            </p>

            <p className="text-xl font-medium text-foreground">
              Freelancers just need to:
            </p>

            <div className="mx-auto max-w-md space-y-3">
              {[
                "Save client information",
                "Create and send invoices",
                "Accept payments easily",
                "Know who hasn't paid",
                "Send follow-ups without stress",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg border bg-white p-4 shadow-sm text-left"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                    {index + 1}
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="pt-6">
              So we built a{" "}
              <strong className="text-foreground">
                lightweight invoicing platform
              </strong>{" "}
              that does exactly that.
            </p>

            <div className="grid gap-4 pt-8 text-base font-medium sm:grid-cols-3">
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <p>No complex accounting</p>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <p>No tax calculations</p>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-sm">
                <p>No enterprise bloat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
