"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const journeys = [
  { href: "/", label: "Operations", sub: "claim → payment → reconciliation" },
  { href: "/onboarding", label: "Dealer onboarding", sub: "e-KYC → licence → IFMS mapping" },
  { href: "/intake", label: "Invoice intake", sub: "IRN/QR or OCR → claim packet" },
];

export default function EvaluatorJourneys() {
  const path = usePathname();
  return (
    <nav className="evaluatorDock" aria-label="Evaluator critical journeys">
      <div className="evaluatorDockTitle">
        <span>OFFICIAL CHALLENGE COVERAGE</span>
        <b>Critical journeys</b>
      </div>
      <div className="evaluatorDockLinks">
        {journeys.map((j) => (
          <Link key={j.href} href={j.href} className={path === j.href ? "active" : ""}>
            <b>{j.label}</b>
            <small>{j.sub}</small>
          </Link>
        ))}
      </div>
    </nav>
  );
}
