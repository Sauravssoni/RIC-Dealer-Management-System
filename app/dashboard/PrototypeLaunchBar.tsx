"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function openEvaluator(tab: "Demo" | "Programme" | "Governance" | "Truth") {
  const trigger = document.querySelector<HTMLButtonElement>(".evalConsoleTrigger");
  const panel = document.querySelector<HTMLElement>("#raj-evaluator-console");
  if (!panel) trigger?.click();
  window.setTimeout(() => {
    const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>(".evalTabs button"));
    tabs.find((button) => (button.textContent || "").trim() === tab)?.click();
  }, 90);
}

export default function PrototypeLaunchBar() {
  const [host, setHost] = useState<Element | null>(null);
  useEffect(() => setHost(document.querySelector(".opsToolbar")), []);
  if (!host) return null;

  return createPortal(
    <div className="prototypeLaunchBar" aria-label="Prototype evaluator shortcuts">
      <div className="prototypeState">
        <i />
        <span><small>FUNCTIONAL PROTOTYPE</small><b>Build verified · evaluator sandbox</b></span>
      </div>
      <button className="prototypePrimary" onClick={() => openEvaluator("Demo")}>Demo Centre</button>
      <button onClick={() => openEvaluator("Programme")}>90-Day Programme</button>
      <button onClick={() => openEvaluator("Governance")}>Governance</button>
      <Link href="/vision">Vision &amp; Scale →</Link>
    </div>,
    host
  );
}
