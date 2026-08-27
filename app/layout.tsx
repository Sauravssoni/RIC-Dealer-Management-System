import type { Metadata } from "next";
import "./globals.css";
import "./journeys.css";
import "./impact.css";
import "./journey-readability.css";

export const metadata: Metadata = {
  title: "RAJ-AGRIPAY | Rajasthan Agriculture Dealer Control Plane",
  description: "Functional evaluator prototype for integrated dealer lifecycle, invoice intelligence, Agriculture claim validation, finance orchestration and reconciliation in Rajasthan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
