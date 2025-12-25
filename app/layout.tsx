import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoisend | Automated Invoicing & Payment Reminders for Freelancers",
  description:
    "The simple freelancer invoicing tool that helps you get paid faster. Create professional invoices, automate polite follow-ups, and accept Stripe payments instantly.",
  keywords: [
    "freelancer invoicing",
    "invoice generator",
    "payment reminders",
    "stripe invoicing",
    "freelance billing software",
  ],
  openGraph: {
    title: "Stop Chasing Payments. Automated Invoicing for Freelancers.",
    description:
      "Create professional invoices and automate polite follow-ups. Get paid 2x faster.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
