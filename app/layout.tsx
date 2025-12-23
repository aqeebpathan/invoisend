import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://invoisend.com"),
  title: {
    default: "invoisend - Stop Chasing. Start Getting Paid.",
    template: "%s | invoisend",
  },
  description:
    "Simple invoicing + automatic follow-ups for freelancers who hate asking clients for money.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#499aff",
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
