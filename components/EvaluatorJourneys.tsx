"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const journeys = [
  { href: "/", label: "Operations", sub: "claim → payment → reconciliation" },
  { href: "/onboarding", label: "Dealer onboarding", sub: "e-KYC → licence → IFMS mapping" },
  { href: "/intake", label: "Invoice intake", sub: "IRN/QR or OCR → claim packet" },
  { href: "/impact", label: "Impact lab", sub: "TAT → cash-flow → admin value" },
];

export default function EvaluatorJourneys() {
  const path = usePathname();
  const [alertsOpen, setAlertsOpen] = useState(false);
  return (
    <>
      {alertsOpen && <aside className="dealerAlertDrawer" aria-label="Dealer notification examples">
        <div className="dealerAlertHead"><div><span>SMS / PORTAL ALERTS</span><b>Dealer communications</b></div><button onClick={()=>setAlertsOpen(false)}>Close</button></div>
        <p className="alertTruth">Evaluation messages only · gateway integration is CONTRACT-READY, not claimed live.</p>
        <div className="dealerAlertList">
          <div><i className="alertOk"/><span><b>AGR-26-10482 · Portal</b><small>Your claim passed departmental evidence checks and is ready for authorised approval.</small></span><em>now</em></div>
          <div><i className="alertWarn"/><span><b>AGR-26-10479 · SMS</b><small>Action required: bank-profile re-verification is pending. No payment failure is implied.</small></span><em>18m</em></div>
          <div><i className="alertInfo"/><span><b>AGR-26-10477 · SMS + Portal</b><small>Payment acknowledgement received. UTR RBIGOR26X98172 is available in your claim timeline.</small></span><em>1d</em></div>
        </div>
      </aside>}
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
          <button className={alertsOpen?"active":""} onClick={()=>setAlertsOpen(v=>!v)}><b>Dealer alerts</b><small>SMS + portal status</small></button>
        </div>
      </nav>
    </>
  );
}
