"use client";

import { useState } from "react";

type Tab = "Pilot" | "Scale" | "Intelligence" | "Decision";

const pilot = [
  ["00-10", "Baseline + brownfield inventory", "AS-IS journeys, open obligations, interface register, KPI baseline, migration crosswalk."],
  ["10-25", "Dealer + invoice foundations", "Dealer Passport, renewal, Payment Identity Lock, GST structured evidence, OCR fallback."],
  ["25-45", "Claim Truth + Scheme Packs", "Effective-dated rules, duplicate/rate/quantity controls, exception ownership, parallel replay."],
  ["45-60", "Finance orchestration", "Raj Sewa Dwaar contracts, Raj eSign, IFMS/PFMS routing, source-backed acknowledgement, e-Sanchar."],
  ["60-82", "Reconciliation + cutover", "Claim-to-UTR closure, district MIS, SUTRA/BHASHINI, migration reconciliation, rollback rehearsal."],
  ["82-90", "Handover + scale decision", "Security/accessibility, SOPs, training, source/configuration handover, statewide wave plan."],
] as const;

export default function DashboardProgramme(){
  const [open,setOpen]=useState(false);
  const [tab,setTab]=useState<Tab>("Pilot");
  return <>
    <button className="programmeButton" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="programme-office">
      <span>Programme Office</span><b>90D</b>
    </button>
    {open&&<aside id="programme-office" className="programmeDrawer" aria-label="Statewide programme and scale plan">
      <header className="programmeHead">
        <div><span>STATEWIDE DELIVERY & SCALE</span><h2>RAJ-AGRIPAY Programme Office</h2><p>Challenge scope first. Scale only after evidence gates pass.</p></div>
        <button onClick={()=>setOpen(false)}>Close</button>
      </header>
      <div className="programmeTruth"><i/> EVALUATOR PROGRAMME MODEL · targets and future integrations are proposals, not claimed realised Government results.</div>
      <nav className="programmeTabs">{(["Pilot","Scale","Intelligence","Decision"] as Tab[]).map(t=><button key={t} className={tab===t?"active":""} onClick={()=>setTab(t)}>{t}</button>)}</nav>

      {tab==="Pilot"&&<div className="programmeBody">
        <section className="programmeKpis"><div><span>Decision ask</span><b>₹44.8L</b><small>Indicative 90-day pilot</small></div><div><span>Clean validation target</span><b>&lt;4h</b><small>Department-controlled stage</small></div><div><span>Approval target</span><b>≤T+2</b><small>Working days · clean claim</small></div><div><span>Eligible reconciliation</span><b>≥90%</b><small>Where authoritative refs exist</small></div></section>
        <div className="pilotRail">{pilot.map(([day,title,copy],i)=><article key={day}><em>{String(i+1).padStart(2,"0")}</em><div><span>DAY {day}</span><b>{title}</b><p>{copy}</p></div></article>)}</div>
        <div className="programmeGate"><b>Pilot acceptance doctrine</b><span>Scale only after functional, security, migration and finance-authority gates pass. External Treasury/PFMS/bank settlement time is measured separately.</span></div>
      </div>}

      {tab==="Scale"&&<div className="programmeBody">
        <section className="scaleStack">
          <article><em>H1</em><div><span>NOW · CHALLENGE DELIVERY</span><b>Dealer Lifecycle + Claim-to-Settlement</b><p>Onboarding/renewal, invoice evidence, deterministic rules, human approval, Finance handoff, notifications, reconciliation and audit.</p></div></article>
          <article><em>H2</em><div><span>STATEWIDE WAVE</span><b>Rajasthan Agriculture Payment Evidence Fabric</b><p>Reuse Dealer Passport, Claim Truth Packet, Scheme Pack, exception taxonomy and claim-to-UTR lineage across authorised Agriculture/Horticulture/Marketing payment journeys.</p></div></article>
          <article><em>H3</em><div><span>INTELLIGENCE WAVE</span><b>FarmGraph AI Interoperability</b><p>Consented payment/input signals can join authorised crop, weather, soil, geospatial, drone and farm evidence for planning intelligence.</p></div></article>
          <article><em>H4</em><div><span>REPLICABLE PLATFORM</span><b>Public Expenditure Evidence Engine</b><p>After Agriculture proof, adapt the bounded evidence/control-plane pattern to other Government vendor reimbursement domains without holding public money.</p></div></article>
        </section>
        <div className="waveGrid"><div><b>Wave 1</b><span>3 pilot journeys · 2-3 districts</span></div><div><b>Wave 2</b><span>scheme-pack expansion + priority districts</span></div><div><b>Wave 3</b><span>statewide dealer/payment operating model</span></div><div><b>Wave 4</b><span>measured intelligence + policy planning</span></div></div>
      </div>}

      {tab==="Intelligence"&&<div className="programmeBody">
        <div className="farmgraphFlow"><div><span>RAJ-AGRIPAY</span><b>Dealer + scheme + claim/payment evidence</b></div><i>→</i><div><span>PAYMENT EVIDENCE FABRIC</span><b>Versioned, consent/authority-aware event layer</b></div><i>→</i><div><span>FARMGRAPH AI</span><b>Future authorised planning intelligence</b></div></div>
        <section className="intelGrid"><article><b>Input-demand forecasting</b><p>Crop-cycle and district demand signals using authorised agronomic/context evidence.</p></article><article><b>Dealer access deserts</b><p>Identify areas where eligible farmers face last-mile input/service coverage gaps.</p></article><article><b>Scheme utilisation vs need</b><p>Compare payment/activity signals with authorised agronomic need rather than raw spend alone.</p></article><article><b>Seasonal procurement planning</b><p>Surface potential demand pressure before peak distribution windows.</p></article><article><b>Extension targeting</b><p>Prioritise camps/field support around observed access, evidence and scheme bottlenecks.</p></article><article><b>Outcome evidence loop</b><p>Connect farmer need → input/service → claim/payment → authorised outcome evidence where policy permits.</p></article></section>
        <div className="programmeGate warning"><b>Future-boundary rule</b><span>No FarmGraph, satellite, IoT, drone or farm-registry connector is represented as live in this evaluator release. Phase 3 begins only after authorised data-sharing, purpose and governance are approved.</span></div>
      </div>}

      {tab==="Decision"&&<div className="programmeBody">
        <section className="decisionGrid"><article><span>THE PROBLEM</span><b>Fragmented Agriculture claim truth</b><p>Payments cross scheme, invoice, dealer and finance systems with manual checks and weak end-to-end lineage.</p></article><article><span>THE INTERVENTION</span><b>Evidence before expenditure</b><p>RAJ-AGRIPAY compiles Agriculture-specific claim truth; sovereign Finance rails continue to move and account for public money.</p></article><article><span>THE ASK</span><b>Approve a 90-day measured pilot</b><p>Indicative ₹44.8 lakh implementation; Government integration access and scope to be confirmed during inception.</p></article><article><span>THE EXIT</span><b>Evidence-based scale / narrow / stop decision</b><p>Government receives source/configuration, schemas, runbooks, migration reconciliation, training and statewide blueprint.</p></article></section>
        <div className="decisionLine"><b>Selection thesis</b><span>IFMS moves public money. RAJ-AGRIPAY proves why an Agriculture dealer claim is ready to move, routes it correctly, and closes the evidence loop after it moves.</span></div>
        <div className="programmeFoot"><span>GitHub</span><b>github.com/Sauravssoni/RIC-Dealer-Management-System</b></div>
      </div>}
    </aside>}
  </>;
}
