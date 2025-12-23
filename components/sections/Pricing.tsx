import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Pricing() {
  return (
    <section className="border-t py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple pricing
          </h2>
          <p className="mb-16 text-xl text-muted-foreground">
            No hidden fees. Cancel anytime.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Free */}
            <Card className="border-2 shadow-lg">
              <CardHeader className="pb-8 pt-8">
                <CardTitle className="text-3xl">Free</CardTitle>
                <CardDescription className="text-lg pt-2">
                  Perfect for trying it out
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 pt-6 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>1–2 active invoices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Core features included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <span>Try before committing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="relative border-2 border-blue-200 bg-linear-to-br from-white to-blue-50 shadow-2xl">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="rounded-full bg-linear-to-r from-blue-400 to-blue-700 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </span>
              </div>
              <CardHeader className="pb-8 pt-12">
                <CardTitle className="text-3xl">Pro</CardTitle>
                <CardDescription className="text-lg pt-2">
                  For working freelancers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$7</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 pt-6 text-left">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="font-medium">Unlimited invoices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="font-medium">Automated reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="font-medium">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    <span className="font-medium">
                      Early access to features
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            Cancel anytime. No contracts. No nonsense.
          </p>
        </div>
      </div>
    </section>
  );
}
