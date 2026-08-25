import type { Metadata } from "next";
import "./globals.css";
import "./map-enhancements.css";

export const metadata: Metadata = {
  title: "RAJ-AGRIPAY | Rajasthan Agriculture Dealer Control Plane",
  description: "Integrated dealer lifecycle, claim validation, payment orchestration and reconciliation fabric for Rajasthan Agriculture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
