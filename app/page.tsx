import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhatItDoes } from "@/components/sections/WhatItDoes";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { Simplicity } from "@/components/sections/Simplicity";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Trust } from "@/components/sections/Trust";
import { Pricing } from "@/components/sections/Pricing";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { Footer } from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoisend - Create invoices. Get paid automatically.",
  description:
    "Clean invoicing platform with built-in payment links and automatic follow-ups. Manage clients, track payments, and export data - all in one place.",
  keywords:
    "invoicing software, stripe invoices, freelance invoicing, payment tracking, client management",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-1">
        <Problem />
        <Philosophy />
        <WhatItDoes />
        <DashboardShowcase />
        <Simplicity />
        <HowItWorks />
        <Trust />
        <Pricing />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}
