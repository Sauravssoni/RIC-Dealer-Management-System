"use client";

import { useMemo, useState } from "react";

type Scenario = "clean" | "bank" | "duplicate";
type Tab = "Demo" | "Programme" | "Truth";

type DemoStep = {
  title: string;
  proof: string;
  action: string;
  run: () => boolean;
};

const clickButton = (needle:string) => {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("button"));
  const button = buttons.find(b => (b.textContent || "").replace(/\s+/g," ").trim().includes(needle));
  if (!button || button.disabled) return false;
  button.click();
  return true;
};

const clickClaim = (id:string) => {
  const rows = Array.from(document.querySelectorAll<HTMLTableRowElement>("tbody tr"));
  const row = rows.find(r => (r.textContent || "").includes(id));
  if (!row) return false;
  row.click();
  return true;
};

const openClaim = (id:string) => {
  const nav = clickButton("Claims & Payments");
  window.setTimeout(()=>clickClaim(id),80);
  return nav;
};

const scenarioCopy: Record<Scenario,{label:string;claim:string;tone:string;summary:string}> = {
  clean:{label:"GREEN · CLEAN CLAIM",claim:"AGR-26-10482",tone:"green",summary:"Prove straight-through Agriculture validation, human authority, finance acknowledgement and claim-to-UTR closure."},
  bank:{label:"AMBER · BANK CHANGE",claim:"AGR-26-10479",tone:"amber",summary:"Prove Payment Identity Lock, maker-checker re-verification and controlled recovery without deleting evidence."},
  duplicate:{label:"RED · DUPLICATE",claim:"AGR-26-10481",tone:"red",summary:"Prove exact duplicate detection blocks Finance release with an explainable policy reason instead of an opaque AI score."}
};

export default function EvaluatorConsole(){
  const [open,setOpen]=useState(false);
  const [tab,setTab]=useState<Tab>("Demo");
  const [scenario,setScenario]=useState<Scenario>("clean");
  const [step,setStep]=useState(0);
  const [note,setNote]=useState("Choose a scenario. Every step controls the functional dashboard beneath this console.");

  const steps = useMemo<Record<Scenario,DemoStep[]>>(()=>({
    clean:[
      {title:"Open clean evidence packet",proof:"12/12 deterministic checks · low risk · authorised approval required",action:"Open AGR-26-10482",run:()=>openClaim("AGR-26-10482")},
      {title:"Exercise human authority",proof:"AI may recommend; an authorised officer releases the evidence packet to Finance",action:"Approve → Finance",run:()=>clickButton("Approve evidence packet")},
      {title:"Record source acknowledgement",proof:"The prototype never declares payment success before an authoritative response",action:"Simulate acknowledgement",run:()=>clickButton("Simulate authoritative acknowledgement")},
      {title:"Close the evidence loop",proof:"Claim, finance reference and UTR become one auditable reconciliation lineage",action:"Auto-reconcile",run:()=>clickButton("Auto-reconcile claim")},
      {title:"Inspect statewide workload",proof:"District MIS answers where money is stuck, why and who owns the exception",action:"Open District MIS",run:()=>clickButton("District MIS")},
      {title:"Inspect integration truth",proof:"Every external rail is truth-labelled; no protected Government connector is falsely shown LIVE",action:"Open Integrations",run:()=>clickButton("Integrations")},
      {title:"Inspect assisted last mile",proof:"SUTRA/BHASHINI can capture and guide offline; expenditure approval remains online-only",action:"Open SUTRA Edge",run:()=>clickButton("SUTRA Edge")},
    ],
    bank:[
      {title:"Open bank-change exception",proof:"A recent payment-profile change is treated as a high-consequence identity event",action:"Open AGR-26-10479",run:()=>openClaim("AGR-26-10479")},
      {title:"Re-verify Payment Identity Lock",proof:"Maker-checker re-verification clears the hold while preserving the prior profile version",action:"Complete re-verification",run:()=>clickButton("Complete demo re-verification")},
      {title:"Return claim to clean lane",proof:"Only after re-verification does the packet become eligible for authorised approval",action:"Approve → Finance",run:()=>clickButton("Approve evidence packet")},
      {title:"Record finance acknowledgement",proof:"Payment state changes only after the source-backed acknowledgement boundary",action:"Simulate acknowledgement",run:()=>clickButton("Simulate authoritative acknowledgement")},
      {title:"Reconcile and close",proof:"The corrected payment identity remains linked to the exact claim/payment lineage",action:"Auto-reconcile",run:()=>clickButton("Auto-reconcile claim")},
    ],
    duplicate:[
      {title:"Open duplicate exception",proof:"Exact invoice-reference policy catches a cross-claim duplicate before Finance release",action:"Open AGR-26-10481",run:()=>openClaim("AGR-26-10481")},
      {title:"Inspect the reason-coded block",proof:"DUPLICATE_INVOICE_REFERENCE is deterministic, explainable and owned — not an AI suspicion score",action:"Verify blocked state",run:()=>true},
      {title:"Open intake provenance",proof:"Structured IRN/QR evidence is preferred; OCR is fallback for legacy/unstructured evidence",action:"Open invoice intake",run:()=>{window.location.href="/intake";return true}},
    ]
  }),[]);

  const activeSteps=steps[scenario];
  const current=activeSteps[Math.min(step,activeSteps.length-1)];
  const pct=Math.round(((Math.min(step,activeSteps.length-1)+1)/activeSteps.length)*100);

  const resetDemo=()=>{
    clickButton("Reset");
    setStep(0);
    setNote("Evaluation dataset reset. Start the selected scenario from step 1.");
  };

  const execute=()=>{
    const ok=current.run();
    if(!ok){setNote("The expected control is not currently available. Reset the evaluator dataset, then retry this step.");return;}
    setNote(`Proof executed: ${current.title}. ${current.proof}`);
    if(step<activeSteps.length-1) window.setTimeout(()=>setStep(s=>s+1),160);
  };

  const choose=(s:Scenario)=>{setScenario(s);setStep(0);setNote(`${scenarioCopy[s].label} selected. ${scenarioCopy[s].summary}`)};

  return <>
    <button className="evalConsoleTrigger" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="raj-evaluator-console">
      <span className="evalPulse"/><span><small>FUNCTIONAL PROTOTYPE</small><b>Evaluator Console</b></span><em>{open?"×":"DEMO"}</em>
    </button>

    {open&&<aside id="raj-evaluator-console" className="evalConsole" aria-label="RAJ-AGRIPAY evaluator console">
      <header className="evalHead">
        <div><span>RAJASTHAN INNOVATION CHALLENGE · EVALUATOR TOOL</span><h2>RAJ-AGRIPAY Prototype Console</h2><p>Functional evidence today. Production UX, credentials and workflow configuration are co-designed with the Department during pilot inception.</p></div>
        <button onClick={()=>setOpen(false)} aria-label="Close evaluator console">×</button>
      </header>
      <div className="evalBoundary"><i/> EVALUATION SANDBOX · deterministic fixtures · no live RajKisan / IFMS / PFMS credentials claimed</div>
      <nav className="evalTabs">{(["Demo","Programme","Truth"] as Tab[]).map(t=><button key={t} className={tab===t?"active":""} onClick={()=>setTab(t)}>{t}</button>)}</nav>

      {tab==="Demo"&&<div className="evalBody">
        <section className="scenarioGrid">
          {(Object.keys(scenarioCopy) as Scenario[]).map(s=><button key={s} className={`scenarioCard ${scenario===s?"active":""} ${scenarioCopy[s].tone}`} onClick={()=>choose(s)}><span>{scenarioCopy[s].label}</span><b>{scenarioCopy[s].claim}</b><small>{scenarioCopy[s].summary}</small></button>)}
        </section>
        <section className="demoStepCard">
          <div className="demoStepMeta"><span>STEP {step+1} OF {activeSteps.length}</span><em>{pct}%</em></div>
          <div className="demoProgress"><i style={{width:`${pct}%`}}/></div>
          <h3>{current.title}</h3>
          <p>{current.proof}</p>
          <div className="demoActionRow"><button className="evalPrimary" onClick={execute}>{current.action} →</button><button className="evalSecondary" onClick={resetDemo}>Reset dataset</button></div>
          <div className="demoNote"><b>Evaluator receipt</b><span>{note}</span></div>
        </section>
        <section className="judgeCue"><span>THE 20-SECOND EXPLANATION</span><p><b>RAJ-AGRIPAY does not replace IFMS.</b> It compiles Agriculture-specific claim truth, owns exceptions, routes a finance-ready packet to sovereign rails and closes the evidence loop after payment.</p></section>
      </div>}

      {tab==="Programme"&&<div className="evalBody">
        <section className="evalKpis"><div><span>Decision ask</span><b>₹44.8L</b><small>Indicative 90-day pilot</small></div><div><span>Clean validation target</span><b>&lt;4h</b><small>Department-controlled stage</small></div><div><span>Clean approval target</span><b>≤T+2</b><small>Working days</small></div></section>
        <section className="programmeRail">
          <article><em>01</em><div><span>DAY 0–25</span><b>Baseline + dealer/invoice foundation</b><p>AS-IS inventory, Dealer Passport, renewal, Payment Identity Lock, structured GST evidence and OCR fallback.</p></div></article>
          <article><em>02</em><div><span>DAY 25–60</span><b>Claim Truth + Finance orchestration</b><p>Scheme Packs, duplicate/rate/quantity controls, exception workbench, Raj eSign, Raj Sewa Dwaar and IFMS/PFMS contract adapters.</p></div></article>
          <article><em>03</em><div><span>DAY 60–90</span><b>Reconciliation + cutover + handover</b><p>District MIS, e-Sanchar, optional SUTRA/BHASHINI, brownfield reconciliation, UAT, training, rollback and statewide blueprint.</p></div></article>
        </section>
        <section className="scalePath"><div><span>NOW</span><b>Dealer claim-to-settlement</b></div><i>→</i><div><span>SCALE</span><b>Agriculture Payment Evidence Fabric</b></div><i>→</i><div><span>FUTURE</span><b>FarmGraph AI interoperability</b></div></section>
        <div className="futureRule"><b>Vision without scope inflation</b><span>FarmGraph, satellite, IoT, drone and farm-registry signals are future authorised interoperability — not claimed live in this evaluator build.</span></div>
      </div>}

      {tab==="Truth"&&<div className="evalBody">
        <section className="truthRows">
          <article><span>PROTOTYPE</span><b>Functional officer workflows</b><p>Dealer onboarding/renewal, invoice intake, Claim Truth, scheme controls, exceptions, finance handoff simulation, reconciliation, district MIS and SUTRA demo.</p></article>
          <article><span>CONTRACT-READY</span><b>Rajasthan / sovereign rails</b><p>RajKisan, Rajasthan SSO, Raj Sewa Dwaar, IFMS 3.0, PFMS/SNA-SPARSH, Raj eSign and e-Sanchar require Government onboarding/credentials.</p></article>
          <article><span>SANDBOX / ADAPTER</span><b>GST + BHASHINI</b><p>Structured invoice and multilingual adapters are designed to integrate through authorised environments; no production access is implied.</p></article>
          <article><span>HARD BOUNDARY</span><b>No autonomous expenditure</b><p>AI may extract, explain and prioritise. Human Government authority approves. Payment success is shown only after a source acknowledgement.</p></article>
        </section>
        <div className="productionNext"><span>WHAT GETS MORE REFINED IN PILOT</span><b>Department co-designed role journeys · final accessibility/localisation · authorised GIS/master data · real connectors · measured SLAs · security hardening · production observability.</b></div>
      </div>}
    </aside>}
  </>;
}
