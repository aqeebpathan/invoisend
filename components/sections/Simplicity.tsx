import { X, Check } from "lucide-react";

export function Simplicity() {
  const traditional = [
    "Accounting setup",
    "Dozens of settings",
    "Features you'll never use",
    "Feels heavy and stressful",
  ];

  const thisTool = [
    "Start in minutes",
    "Only what you need",
    "Clear, focused, lightweight",
    "Feels out of the way",
  ];

  return (
    <section className="border-t bg-gray-50 py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Built for freelancers who want
            <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              less software — not more
            </span>
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {/* Traditional */}
            <div className="rounded-2xl border-2 border-red-200 bg-white p-8 text-left shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <X className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold">Traditional tools</h3>
              </div>
              <ul className="space-y-3">
                {traditional.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1 text-red-500">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* This tool */}
            <div className="rounded-2xl border-2 border-green-200 bg-linear-to-br from-white to-green-50 p-8 text-left shadow-lg">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">This tool</h3>
              </div>
              <ul className="space-y-3">
                {thisTool.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">✓</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
