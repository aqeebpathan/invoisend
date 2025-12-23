import { Shield, Eye, Lock, UserCheck } from "lucide-react";

export function Trust() {
  const trustPoints = [
    {
      icon: UserCheck,
      title: "Emails from your address",
      description: "Sent from you, not us",
    },
    {
      icon: Eye,
      title: "Review before sending",
      description: "Nothing goes out without approval",
    },
    {
      icon: Lock,
      title: "Data stays private",
      description: "Your invoices, your business",
    },
    {
      icon: Shield,
      title: 'No "automation" visible',
      description: "Clients see personal messages",
    },
  ];

  return (
    <section className="border-t bg-linear-to-b from-white to-green-50/30 py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            <Shield className="h-4 w-4" />
            Trust & Control
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            You stay in control
          </h2>
          <p className="mb-16 text-xl text-muted-foreground">
            Thoughtful assistance first. Set-it-and-forget-it automation later.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border-2 bg-white p-8 text-left shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
