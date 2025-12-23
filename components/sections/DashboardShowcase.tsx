export function DashboardShowcase() {
  return (
    <section className="border-t bg-linear-to-b from-gray-50 to-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              One dashboard.
              <br />
              <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Everything centralized.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Clients, invoices, payments, and stats in one clean place
            </p>
          </div>

          <div className="space-y-12">
            {/* Stats Overview */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <h3 className="text-lg font-semibold">Real-time Dashboard</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                See your cash flow status instantly. No digging through
                spreadsheets.
              </p>
              <div className="grid gap-4 sm:grid-cols-4">
                <div className="rounded-lg bg-linear-to-br from-blue-50 to-blue-100 p-4">
                  <div className="text-xs text-blue-700">Outstanding</div>
                  <div className="mt-1 text-2xl font-bold">$12.4k</div>
                </div>
                <div className="rounded-lg bg-linear-to-br from-green-50 to-green-100 p-4">
                  <div className="text-xs text-green-700">Paid</div>
                  <div className="mt-1 text-2xl font-bold">$8.2k</div>
                </div>
                <div className="rounded-lg bg-linear-to-br from-yellow-50 to-yellow-100 p-4">
                  <div className="text-xs text-yellow-700">Pending</div>
                  <div className="mt-1 text-2xl font-bold">$4.2k</div>
                </div>
                <div className="rounded-lg bg-linear-to-br from-red-50 to-red-100 p-4">
                  <div className="text-xs text-red-700">Overdue</div>
                  <div className="mt-1 text-2xl font-bold">$2.1k</div>
                </div>
              </div>
            </div>

            {/* Client Management */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <h3 className="text-lg font-semibold">Client Management</h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                Add clients once. Reuse for every invoice. See their payment
                history instantly.
              </p>
              <div className="space-y-2">
                {["Acme Corp", "StartupXYZ", "Design Co"].map((client, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border bg-gray-50 p-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
                      {client[0]}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{client}</div>
                      <div className="text-xs text-muted-foreground">
                        {3 - i} invoices
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Last: {["2 days ago", "1 week ago", "3 weeks ago"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Integration */}
            <div className="rounded-2xl border-2 bg-linear-to-br from-blue-50 to-purple-50 p-8 shadow-xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <h3 className="text-lg font-semibold">
                  Integrated Payment Links
                </h3>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                Every invoice includes a Stripe payment link by default. Clients
                pay with one click.
              </p>
              <div className="rounded-lg border-2 border-blue-200 bg-white p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 10h18M3 14h18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="text-blue-600"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Stripe Checkout</div>
                    <div className="text-xs text-muted-foreground">
                      One-click payment
                    </div>
                  </div>
                </div>
                <div className="rounded bg-gray-100 p-3 font-mono text-xs text-muted-foreground">
                  https://pay.invoisend.com/inv_xyz123
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Prefer bank transfer? Add your bank details instead. You stay
                  in control.
                </p>
              </div>
            </div>

            {/* Export */}
            <div className="rounded-2xl border-2 bg-white p-8 shadow-xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gray-500" />
                <h3 className="text-lg font-semibold">
                  Your Data, Your Control
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Export everything as CSV anytime. No lock-in. No data hostage
                situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
