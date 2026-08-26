"use client";

import { useState } from "react";

export default function DashboardAlerts(){
  const [open,setOpen]=useState(false);
  return <>
    <button className="opsAlertButton" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="dealer-notification-drawer">
      <span>Notifications</span><b>3</b>
    </button>
    {open&&<aside id="dealer-notification-drawer" className="opsAlertDrawer" aria-label="Dealer SMS and portal notification examples">
      <header><div><span>DEALER COMMUNICATIONS</span><h2>Notification outbox</h2></div><button onClick={()=>setOpen(false)}>Close</button></header>
      <div className="opsAlertTruth"><i/> EVALUATION MESSAGES · e-Sanchar 3.0 / approved messaging rail is CONTRACT-READY, not claimed live.</div>
      <div className="opsAlertRows">
        <article><i className="ok"/><div><b>AGR-26-10482 · Portal</b><p>Your claim passed departmental evidence checks and is ready for authorised approval.</p><small>Dealer action: none</small></div><time>now</time></article>
        <article><i className="warn"/><div><b>AGR-26-10479 · Push SMS</b><p>Action required: bank-profile re-verification is pending. No payment failure is implied.</p><small>Dealer action: verify bank profile</small></div><time>18m</time></article>
        <article><i className="info"/><div><b>AGR-26-10477 · SMS + Portal</b><p>Payment acknowledgement received. UTR RBIGOR26X98172 is available in your claim timeline.</p><small>Source state: acknowledged + reconciled</small></div><time>1d</time></article>
      </div>
      <footer><b>Production doctrine</b><span>Dealer messages are generated from source-backed state transitions; no premature “payment successful” notification is permitted.</span></footer>
    </aside>}
  </>;
}
