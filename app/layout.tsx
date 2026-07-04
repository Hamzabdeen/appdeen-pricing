import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: {
    default: "Appdeen AI — Hire AI Employees. Pay for Real Work Hours.",
    template: "%s · Appdeen AI",
  },
  description:
    "Build your own AI employee or unlock a ready-to-use one, then give your AI workforce the work hours they need to get things done.",
  metadataBase: new URL("https://www.appdeen.ai"),
  openGraph: {
    title: "Appdeen AI — Hire AI Employees. Pay for Real Work Hours.",
    description:
      "Add a slot, pick an employee, and buy shared work hours for your whole AI workforce.",
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
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
