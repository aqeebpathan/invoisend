import {
  Users,
  FileText,
  CreditCard,
  Send,
  BarChart3,
  Download,
} from "lucide-react";

export function WhatItDoes() {
  const features = [
    {
      icon: Users,
      title: "Manage clients",
      description: "Add once. Reuse forever.",
      visual: (
        <div className="space-y-2">
          {["Acme Corp", "StartupXYZ", "Design Co"].map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border bg-white p-3 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-300 to-blue-700 text-xs font-bold text-white">
                {name[0]}
              </div>
              <div className="text-sm font-medium">{name}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: FileText,
      title: "Create invoices",
      description: "Simple form. Professional result.",
      visual: (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 h-3 w-24 rounded bg-gray-200" />
          <div className="space-y-2">
            <div className="h-8 rounded bg-gray-100" />
            <div className="h-8 rounded bg-gray-100" />
            <div className="h-16 rounded bg-linear-to-br from-blue-50 to-blue-100" />
          </div>
        </div>
      ),
    },
    {
      icon: CreditCard,
      title: "Payment links",
      description: "Stripe included. Or use bank transfer.",
      visual: (
        <div className="rounded-lg border bg-linear-to-br from-blue-50 to-purple-50 p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
              <CreditCard className="h-4 w-4 text-white" />
            </div>
            <div className="text-xs font-semibold">Stripe</div>
          </div>
          <div className="rounded bg-white p-2 font-mono text-xs text-muted-foreground">
            pay.stripe.com/...
          </div>
        </div>
      ),
    },
    {
      icon: Send,
      title: "Send & track",
      description: "Automatic status updates.",
      visual: (
        <div className="space-y-2">
          {[
            { label: "Sent", color: "blue" },
            { label: "Viewed", color: "purple" },
            { label: "Paid", color: "green" },
          ].map((status, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg border bg-white p-2 shadow-sm"
            >
              <div className={`h-2 w-2 rounded-full bg-${status.color}-500`} />
              <div className="text-xs font-medium">{status.label}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: BarChart3,
      title: "Dashboard stats",
      description: "See everything at a glance.",
      visual: (
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Paid", color: "green" },
            { label: "Pending", color: "yellow" },
            { label: "Total", color: "blue" },
            { label: "Overdue", color: "red" },
          ].map((stat, i) => (
            <div key={i} className={`rounded-lg bg-${stat.color}-50 p-3`}>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
              <div className="text-lg font-bold">$2.4k</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Download,
      title: "Export data",
      description: "Your data. CSV export anytime.",
      visual: (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-xs font-medium">invoices_2026.csv</div>
            <Download className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            {[60, 85, 45].map((width, i) => (
              <div
                key={i}
                className={`h-2 rounded bg-gray-200`}
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="border-t py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need.
              <br />
              <span className="text-muted-foreground">
                Nothing you don&apos;t.
              </span>
            </h2>
          </div>

          {/* Features grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border bg-linear-to-b from-white to-gray-50/50 p-8 transition-all hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-300 to-blue-700 shadow-lg transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    {feature.description}
                  </p>

                  {/* Visual preview */}
                  <div className="rounded-xl bg-gray-50 p-4">
                    {feature.visual}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
