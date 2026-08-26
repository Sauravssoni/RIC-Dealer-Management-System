"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Mode = "renewal" | "new";
type StepState = "idle" | "working" | "done";

const steps = ["Identity", "Agriculture licence", "GST & firm", "IFMS & bank", "Scheme access", "Submit"];

export default function DealerOnboardingPage() {
  const [mode, setMode] = useState<Mode>("renewal");
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<StepState>("idle");
  const [receipt, setReceipt] = useState(false);
  const [events, setEvents] = useState<string[]>(["Journey opened in Evaluation Sandbox"]);
  const progress = useMemo(() => Math.round(((step + (receipt ? 1 : 0)) / steps.length) * 100), [step, receipt]);

  const act = (message: string, next = true) => {
    setStatus("working");
    window.setTimeout(() => {
      setStatus("done");
      setEvents((e) => [`${new Date().toLocaleTimeString("en-IN", {hour:"2-digit",minute:"2-digit"})} · ${message}`, ...e].slice(0, 7));
      if (next) window.setTimeout(() => { setStep((s) => Math.min(steps.length - 1, s + 1)); setStatus("idle"); }, 420);
    }, 650);
  };

  const submit = () => {
    setStatus("working");
    window.setTimeout(() => {
      setReceipt(true);
      setStatus("done");
      setEvents((e) => ["Dealer Passport receipt DP-RJ-JAI-002814-v8 sealed", ...e]);
    }, 750);
  };

  return (
    <main className="journeyPage">
      <header className="journeyGovHeader">
        <div><span className="journeyRaj">राज</span><div><b>Government of Rajasthan</b><small>Department of Agriculture · RAJ-AGRIPAY</small></div></div>
        <div className="journeyTruth">EVALUATION SANDBOX · NO LIVE GOVERNMENT CREDENTIALS</div>
      </header>

      <section className="journeyHero">
        <div>
          <span className="journeyEyebrow">DEALER LIFECYCLE · OFFICIAL CHALLENGE JOURNEY</span>
          <h1>{mode === "renewal" ? "Renew a dealer once — reuse verified truth everywhere." : "Onboard a dealer without creating another vendor silo."}</h1>
          <p>Federate Rajasthan SSO/e-KYC, RajKisan licence context, GST evidence and IFMS payee references into one governed Dealer Passport. Every verification is source-labelled and versioned.</p>
        </div>
        <div className="journeyMode">
          <button className={mode === "renewal" ? "active" : ""} onClick={() => {setMode("renewal");setStep(0);setReceipt(false);}}>Renew existing dealer</button>
          <button className={mode === "new" ? "active" : ""} onClick={() => {setMode("new");setStep(0);setReceipt(false);}}>New onboarding</button>
        </div>
      </section>

      <section className="journeyProgressPanel">
        <div className="journeyProgressHead"><b>{receipt ? "Dealer Passport issued" : steps[step]}</b><span>{progress}% journey complete</span></div>
        <div className="journeyProgress"><i style={{width:`${progress}%`}} /></div>
        <div className="journeySteps">{steps.map((s,i)=><button key={s} className={`${i===step?"current":""} ${i<step||receipt?"done":""}`} onClick={()=>!receipt&&setStep(i)}><span>{i<step||receipt?"✓":i+1}</span><b>{s}</b></button>)}</div>
      </section>

      <section className="journeyGrid">
        <article className="journeyCard journeyMainCard">
          {!receipt && step===0 && <>
            <div className="journeyCardHead"><div><span>STEP 1 · IDENTITY</span><h2>Verify the authorised dealer representative</h2></div><span className="truthPill">CONTRACT-READY</span></div>
            <div className="journeyInfoGrid"><div><span>Representative</span><b>Sunil Sharma</b></div><div><span>Dealer</span><b>Shree Balaji Agro Centre</b></div><div><span>SSO reference</span><b>{mode==="renewal"?"Mapped · SSO-DEALER-2814":"Not yet mapped"}</b></div><div><span>Verification policy</span><b>SSO / authorised e-KYC</b></div></div>
            <div className="journeyCallout"><b>Privacy boundary</b><p>Use the approved Government authentication path. The orchestration layer retains only the minimum verification reference required for audit; it does not invent an Aadhaar authentication capability.</p></div>
            <button className="journeyPrimary" onClick={()=>act("Identity verification reference accepted in sandbox")}>{status==="working"?"Verifying…":"Run authorised-identity demo"}</button>
          </>}

          {!receipt && step===1 && <>
            <div className="journeyCardHead"><div><span>STEP 2 · AGRICULTURE LICENCE</span><h2>Resolve RajKisan licence lifecycle context</h2></div><span className="truthPill">CONTRACT-READY</span></div>
            <div className="journeyLicence"><div className="licenceSeal">AG</div><div><small>RAJKISAN LICENCE REFERENCE</small><h3>Fertilizer Retail Licence</h3><p>Licence FR-JAI-88421 · Jaipur · valid through 28 Sep 2028</p></div><span className="verifiedChip">VERIFIED DEMO STATE</span></div>
            {mode==="renewal" && <div className="journeyChecklist"><div>✓ Existing licence mapped</div><div>✓ Jurisdiction unchanged</div><div>✓ No critical compliance hold</div><div>● Seed licence renewal window opens in 63 days</div></div>}
            {mode==="new" && <div className="journeyChecklist"><div>✓ Dealer class selected</div><div>✓ Licence reference format validated</div><div>● Production lookup requires Agriculture credentials</div><div>✓ No duplicate RAJ-AGRIPAY passport found</div></div>}
            <button className="journeyPrimary" onClick={()=>act("RajKisan licence/lifecycle contract resolved")}>{status==="working"?"Resolving…":"Resolve Agriculture licence"}</button>
          </>}

          {!receipt && step===2 && <>
            <div className="journeyCardHead"><div><span>STEP 3 · GST & FIRM</span><h2>Match legal business identity before claims begin</h2></div><span className="truthPill sandbox">SANDBOX</span></div>
            <div className="journeyInfoGrid"><div><span>GSTIN</span><b>08AACFS4821K1ZQ</b></div><div><span>Legal name</span><b>Shree Balaji Agro Centre</b></div><div><span>State code</span><b>08 · Rajasthan</b></div><div><span>Match result</span><b className="goodText">Exact legal-name match</b></div></div>
            <div className="journeyCallout"><b>Structured evidence first</b><p>GST/e-invoice data is consumed only through authorised interfaces. OCR is not used to re-read a structured Government record when a trusted machine-readable path exists.</p></div>
            <button className="journeyPrimary" onClick={()=>act("GST firm match completed against sandbox evidence")}>{status==="working"?"Checking…":"Validate GST firm identity"}</button>
          </>}

          {!receipt && step===3 && <>
            <div className="journeyCardHead"><div><span>STEP 4 · IFMS & BANK</span><h2>Map the payee — then lock sensitive payment identity</h2></div><span className="truthPill">CONTRACT-READY</span></div>
            <div className="journeyInfoGrid"><div><span>IFMS vendor ref</span><b>VND-RJ-0082814</b></div><div><span>Payee status</span><b className="goodText">Active</b></div><div><span>Bank profile</span><b>Version 7 · verified</b></div><div><span>Last bank change</span><b>214 days ago</b></div></div>
            <div className="identityLock"><span>PAYMENT IDENTITY LOCK</span><div><b>Any new bank-account change triggers re-verification + maker-checker.</b><p>Historical claims retain the exact bank-profile version frozen at approval.</p></div></div>
            <button className="journeyPrimary" onClick={()=>act("IFMS payee reference mapped; Payment Identity Lock enabled")}>{status==="working"?"Mapping…":"Map IFMS payee & lock bank profile"}</button>
          </>}

          {!receipt && step===4 && <>
            <div className="journeyCardHead"><div><span>STEP 5 · SCHEME ACCESS</span><h2>Activate governed scheme memberships</h2></div><span className="truthPill">RULE-DRIVEN</span></div>
            <div className="schemeAccessRows"><div><span>Certified Seed Support</span><b>Eligible · Rule Pack v3.4</b><i>ACTIVE</i></div><div><span>Micronutrient Support</span><b>Eligible · Rule Pack v1.8</b><i>ACTIVE</i></div><div><span>Fertilizer Demonstration Support</span><b>Additional declaration required</b><i className="watch">ACTION</i></div></div>
            <div className="journeyCallout"><b>No scheme-wise dealer duplication</b><p>The Dealer Passport is reused. Each scheme adds only its own eligibility/evidence requirements and finance-route metadata.</p></div>
            <button className="journeyPrimary" onClick={()=>act("Scheme memberships evaluated against current rule packs")}>{status==="working"?"Evaluating…":"Evaluate scheme access"}</button>
          </>}

          {!receipt && step===5 && <>
            <div className="journeyCardHead"><div><span>STEP 6 · REVIEW</span><h2>Issue a versioned Dealer Passport receipt</h2></div><span className="truthPill">HUMAN CONFIRM</span></div>
            <div className="reviewPacket"><div><b>Identity</b><span>Verified reference</span></div><div><b>Licence</b><span>RajKisan mapped</span></div><div><b>GST</b><span>Legal-name match</span></div><div><b>IFMS</b><span>Payee mapped</span></div><div><b>Bank</b><span>Profile v7 locked</span></div><div><b>Schemes</b><span>2 active · 1 action</span></div></div>
            <button className="journeyPrimary" onClick={submit}>{status==="working"?"Sealing receipt…":mode==="renewal"?"Complete renewal demo":"Create Dealer Passport"}</button>
          </>}

          {receipt && <div className="successReceipt">
            <div className="receiptCheck">✓</div><span>DEALER PASSPORT RECEIPT</span><h2>{mode==="renewal"?"Renewal package accepted":"Dealer Passport created"}</h2><p>Identity, licence, GST, IFMS payee and bank-profile versions are now linked by reference for downstream claim processing.</p>
            <div className="receiptId">DP-RJ-JAI-002814-v8</div>
            <div className="receiptMeta"><span>Audit event<b>EVT-DP-260826-018</b></span><span>Authority<b>Human-confirmed sandbox</b></span><span>Data posture<b>References, not duplicate masters</b></span></div>
            <Link className="journeyPrimary linkButton" href="/intake">Continue → capture dealer invoice</Link>
          </div>}
        </article>

        <aside className="journeyCard journeyAudit">
          <div className="journeyCardHead"><div><span>LIVE AUDIT REPLAY</span><h2>What changed?</h2></div></div>
          <div className="auditList">{events.map((e,i)=><div key={`${e}-${i}`}><i/><span>{e}</span></div>)}</div>
          <div className="authorityBox"><b>Authority boundary</b><p>This journey can verify, federate and prepare a Dealer Passport. It cannot create a real Government vendor/payee record without authorised RajKisan/IFMS interfaces and officer authority.</p></div>
        </aside>
      </section>
    </main>
  );
}
