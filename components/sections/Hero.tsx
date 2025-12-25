"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  const scrollToEarlyAccess = () => {
    document
      .getElementById("early-access")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-125 w-125 rounded-full bg-blue-100 opacity-40 blur-3xl" />
        <div className="absolute top-40 -left-40 h-100 w-100 rounded-full bg-purple-100 opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-muted-foreground">Launching Q1 2026</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Get paid without <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
              chasing clients
            </span>
          </h1>

          <p className="mb-12 text-xl text-muted-foreground sm:text-2xl lg:px-20">
            A simple invoicing tool with built-in payment links and automatic
            follow-ups; everything freelancers need to get paid, without the
            awkwardness.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={scrollToEarlyAccess}
              className="h-12 px-8 text-base font-medium cursor-pointer shadow-lg"
            >
              Join Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No accounting clutter. No spreadsheets. Just clean invoicing.
          </p>
        </div>

        {/* Updated Hero Dashboard */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="relative rounded-xl border bg-white p-2 shadow-2xl">
            <div className="mb-3 flex items-center gap-2 px-3 pt-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-4 h-6 flex-1 rounded-md bg-gray-100 px-3 text-xs flex items-center text-muted-foreground">
                app.invoisend.com/dashboard
              </div>
            </div>

            <div className="rounded-lg border bg-linear-to-br from-gray-50 to-gray-100/50 p-8">
              <div className="space-y-6">
                {/* Header with tabs */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex gap-6">
                    <div className="border-b-2 border-blue-600 pb-2 text-sm font-medium">
                      Dashboard
                    </div>
                    <div className="pb-2 text-sm text-muted-foreground">
                      Invoices
                    </div>
                    <div className="pb-2 text-sm text-muted-foreground">
                      Clients
                    </div>
                  </div>
                  <div className="h-10 w-40 rounded-lg bg-linear-to-r from-blue-400 to-blue-500 shadow-md" />
                </div>

                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-4">
                  <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="mb-2 text-xs text-muted-foreground">
                      Total Outstanding
                    </div>
                    <div className="mb-1 text-2xl font-bold">$12,450</div>
                    <div className="h-1.5 w-full rounded-full bg-gray-100">
                      <div className="h-1.5 w-3/4 rounded-full bg-linear-to-r from-blue-300 to-blue-400" />
                    </div>
                  </div>
                  <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="mb-2 text-xs text-muted-foreground">
                      Paid This Month
                    </div>
                    <div className="mb-1 text-2xl font-bold text-green-600">
                      $8,200
                    </div>
                    <div className="text-xs text-green-600">↑ 23%</div>
                  </div>
                  <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="mb-2 text-xs text-muted-foreground">
                      Pending
                    </div>
                    <div className="mb-1 text-2xl font-bold text-yellow-600">
                      $4,250
                    </div>
                    <div className="text-xs text-muted-foreground">
                      3 invoices
                    </div>
                  </div>
                  <div className="rounded-xl border bg-white p-5 shadow-sm">
                    <div className="mb-2 text-xs text-muted-foreground">
                      Overdue
                    </div>
                    <div className="mb-1 text-2xl font-bold text-red-600">
                      $2,100
                    </div>
                    <div className="text-xs text-muted-foreground">
                      1 invoice
                    </div>
                  </div>
                </div>

                {/* Recent Invoices */}
                <div>
                  <div className="mb-3 text-sm font-medium">
                    Recent Invoices
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        client: "Acme Corp",
                        amount: "$2,500",
                        status: "paid",
                        color: "green",
                      },
                      {
                        client: "StartupXYZ",
                        amount: "$1,800",
                        status: "pending",
                        color: "yellow",
                      },
                      {
                        client: "Design Co",
                        amount: "$3,200",
                        status: "overdue",
                        color: "red",
                      },
                    ].map((invoice, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm"
                      >
                        <div
                          className={`h-10 w-10 rounded-full bg-linear-to-br from-${invoice.color}-500 to-${invoice.color}-400`}
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium">
                            {invoice.client}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Invoice #INV-00{i + 1}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">
                            {invoice.amount}
                          </div>
                          <div
                            className={`text-xs capitalize text-${invoice.color}-600`}
                          >
                            {invoice.status}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="h-8 w-8 rounded-lg bg-gray-100" />
                          <div className="h-8 w-8 rounded-lg bg-blue-50" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
