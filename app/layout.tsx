import type { Metadata } from "next";
import EvaluatorJourneys from "@/components/EvaluatorJourneys";
import "./globals.css";
import "./map-enhancements.css";
import "./journeys.css";
import "./alerts.css";
import "./impact.css";

export const metadata: Metadata = {
  title: "RAJ-AGRIPAY | Rajasthan Agriculture Dealer Control Plane",
  description: "Integrated dealer lifecycle, invoice intelligence, claim validation, payment orchestration and reconciliation fabric for Rajasthan Agriculture.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <EvaluatorJourneys />
      </body>
    </html>
  );
}
