"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CaptureMode = "structured" | "ocr";
type IntakeState = "capture" | "extracting" | "review" | "checks" | "created";

const truthChecks = [
  "Dealer licence valid",
  "GSTIN matches Dealer Passport",
  "Invoice reference unique",
  "Scheme item eligible",
  "Rate within ceiling",
  "Quantity within sanction",
  "Claim period valid",
  "Bank profile verified",
  "Delivery evidence present",
  "Deduction rules applied",
  "Fund route resolved",
  "Audit packet complete",
];

export default function ClaimIntakePage() {
  const [mode, setMode] = useState<CaptureMode>("structured");
  const [state, setState] = useState<IntakeState>("capture");
  const [duplicate, setDuplicate] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [fileName, setFileName] = useState("INV-SB-8821.pdf");
  const [events, setEvents] = useState<string[]>(["Claim intake opened in Evaluation Sandbox"]);
  const passing = duplicate ? 7 : 12;
  const decision = duplicate ? "BLOCK" : "PASS";
  const claimId = duplicate ? "AGR-26-10481" : "AGR-26-10482";
  const amount = duplicate ? "₹3,11,400" : "₹1,84,260";

  const stepLabel = useMemo(() => ({capture:"Capture",extracting:"Extracting",review:"Review",checks:"Claim Truth",created:"Claim created"}[state]), [state]);
  const audit = (text:string) => setEvents((e)=>[`${new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})} · ${text}`,...e].slice(0,8));

  const extract = () => {
    setState("extracting");
    audit(mode==="structured"?"Structured invoice path started":"Legacy scan OCR path started");
    window.setTimeout(()=>{
      setState("review");
      setConfirmed(mode==="structured");
      audit(mode==="structured"?"IRN/QR fields parsed; OCR bypassed":"OCR extraction completed; one field requires human confirmation");
    },850);
  };

  const runChecks = () => {
    if(mode==="ocr"&&!confirmed) return;
    setState("checks");
    audit("Scheme Pack v3.4 and 12 deterministic Claim Truth controls executed");
  };

  const createClaim = () => {
    setState("created");
    audit(duplicate?"Duplicate reference blocked before finance":"Finance-ready claim packet AGR-26-10482 created");
  };

  return <main className="journeyPage">
    <header className="journeyGovHeader">
      <div><span className="journeyRaj">राज</span><div><b>Government of Rajasthan</b><small>Department of Agriculture · RAJ-AGRIPAY</small></div></div>
      <div className="journeyTruth">EVALUATION SANDBOX · STRUCTURED EVIDENCE FIRST</div>
    </header>

    <section className="journeyHero intakeHero">
      <div><span className="journeyEyebrow">BILLING · OCR · CLAIM CREATION · OFFICIAL CHALLENGE JOURNEY</span><h1>Do not OCR what Government already made machine-readable.</h1><p>RAJ-AGRIPAY prefers authorised GST e-invoice/IRN/QR evidence, falls back to OCR for legacy scans, requires human review below confidence thresholds, then compiles a reproducible Agriculture Claim Truth Packet.</p></div>
      <div className="journeyMode"><button className={mode==="structured"?"active":""} onClick={()=>{setMode("structured");setState("capture");setConfirmed(false);setDuplicate(false);setFileName("INV-SB-8821.pdf")}}>Structured e-Invoice</button><button className={mode==="ocr"?"active":""} onClick={()=>{setMode("ocr");setState("capture");setConfirmed(false);setDuplicate(false);setFileName("legacy-invoice-scan.jpg")}}>Legacy scan / OCR</button></div>
    </section>

    <section className="intakeStatusBar"><div><span>Dealer</span><b>Shree Balaji Agro Centre</b><small>RAD-JAI-002814 · Passport verified</small></div><i>→</i><div><span>Scheme</span><b>Certified Seed Support</b><small>Rule Pack v3.4</small></div><i>→</i><div><span>Current stage</span><b>{stepLabel}</b><small>{mode==="structured"?"IRN / QR path":"OCR + human review"}</small></div><i>→</i><div><span>Finance route</span><b>IFMS 3.0</b><small>State Scheme</small></div></section>

    <section className="journeyGrid intakeGrid">
      <article className="journeyCard journeyMainCard">
        {state==="capture"&&<>
          <div className="journeyCardHead"><div><span>1 · CAPTURE INVOICE</span><h2>{mode==="structured"?"Use the structured invoice path first":"Capture a legacy document safely"}</h2></div><span className={`truthPill ${mode==="structured"?"sandbox":""}`}>{mode==="structured"?"GST SANDBOX":"OCR FALLBACK"}</span></div>
          <label className="uploadZone"><input type="file" accept="image/*,.pdf" onChange={(e)=>setFileName(e.target.files?.[0]?.name||fileName)}/><span className="uploadIcon">⇧</span><b>{fileName}</b><small>{mode==="structured"?"Demo assumes authorised IRN/QR evidence is available; upload is local-only and not transmitted.":"Demo OCR is deterministic; uploaded file contents are not sent anywhere."}</small><em>Choose another file</em></label>
          <div className="journeyCallout"><b>{mode==="structured"?"Why this beats OCR-only portals":"Why OCR is still necessary"}</b><p>{mode==="structured"?"A structured GST invoice already carries machine-readable identity and invoice references. Parsing that path reduces compute cost, transcription errors and fraud surface; OCR remains the fallback, not the default.":"Older invoices, vouchers and supporting evidence may be scanned or photographed. RAJ-AGRIPAY extracts fields, exposes confidence, and requires human confirmation instead of silently trusting a model."}</p></div>
          <button className="journeyPrimary" onClick={extract}>{mode==="structured"?"Parse IRN / QR evidence":"Run OCR evidence extraction"}</button>
          <button className="journeyDangerLink" onClick={()=>{setDuplicate(true);setFileName("MFI-44902-duplicate.pdf")}}>Load duplicate-invoice red-team scenario</button>
        </>}

        {state==="extracting"&&<div className="processingState"><div className="processingOrb"><i/><i/><i/></div><span>{mode==="structured"?"Resolving structured invoice evidence…":"Running local OCR + field confidence checks…"}</span><small>No payment or approval action occurs during extraction.</small></div>}

        {state==="review"&&<>
          <div className="journeyCardHead"><div><span>2 · EXTRACTION REVIEW</span><h2>Normalize invoice fields with provenance</h2></div><span className={`truthPill ${mode==="structured"?"sandbox":""}`}>{mode==="structured"?"STRUCTURED":"HUMAN REVIEW"}</span></div>
          <div className="extractionTable"><div className="extractHead"><span>Field</span><span>Value</span><span>Source</span><span>Confidence</span></div>
            <div><span>Invoice</span><b>{duplicate?"MFI-44902":"INV-SB-8821"}</b><small>{mode==="structured"?"IRN / QR":"OCR"}</small><em className="confidence high">99%</em></div>
            <div><span>GSTIN</span><b>{duplicate?"08AAHFM4438D1Z8":"08AACFS4821K1ZQ"}</b><small>{mode==="structured"?"IRN / QR":"OCR + passport match"}</small><em className="confidence high">99%</em></div>
            <div><span>Invoice amount</span><b>{amount}</b><small>{mode==="structured"?"signed structured field":"OCR"}</small><em className={`confidence ${mode==="ocr"?"medium":"high"}`}>{mode==="ocr"?"78%":"100%"}</em></div>
            <div><span>Item</span><b>Certified seed · eligible line item</b><small>{mode==="structured"?"invoice line":"OCR + scheme catalogue"}</small><em className="confidence high">98%</em></div>
          </div>
          {mode==="ocr"&&!confirmed&&<div className="reviewRequired"><b>Human confirmation required</b><p>The amount field is below the 85% demo confidence threshold. The system will not progress silently.</p><button className="journeySecondary" onClick={()=>{setConfirmed(true);audit("Officer confirmed low-confidence OCR amount")}}>Confirm ₹1,84,260</button></div>}
          {confirmed&&<div className="confirmedStrip">✓ Extraction reviewed · provenance attached to each field</div>}
          <button className="journeyPrimary" disabled={mode==="ocr"&&!confirmed} onClick={runChecks}>Run Claim Truth Graph</button>
        </>}

        {state==="checks"&&<>
          <div className="journeyCardHead"><div><span>3 · CLAIM TRUTH GRAPH</span><h2>{duplicate?"Block the duplicate before it becomes a finance problem":"Prove why this claim is payable"}</h2></div><span className={`decisionPill ${duplicate?"block":"pass"}`}>{decision}</span></div>
          <div className="truthCheckGrid">{truthChecks.map((c,i)=>{const ok=i<passing;return <div key={c} className={ok?"ok":"bad"}><span>{ok?"✓":"!"}</span><div><b>{c}</b><small>{ok?"Evidence + rule satisfied":i===7?"Already linked to settled claim":"Blocked by policy"}</small></div></div>})}</div>
          {duplicate&&<div className="journeyCallout danger"><b>DUPLICATE_INVOICE_REFERENCE</b><p>The structured invoice reference is already linked to a settled claim. RAJ-AGRIPAY preserves both packets for audit and blocks finance release; no AI score is needed.</p></div>}
          {!duplicate&&<div className="journeyCallout"><b>Finance-ready</b><p>12/12 deterministic controls pass. The packet freezes Dealer Passport version, invoice provenance, Scheme Pack v3.4, delivery evidence and finance-route metadata for human approval.</p></div>}
          <button className="journeyPrimary" onClick={createClaim}>{duplicate?"Seal blocked exception packet":"Create finance-ready claim packet"}</button>
        </>}

        {state==="created"&&<div className="successReceipt">
          <div className={`receiptCheck ${duplicate?"blockedReceipt":""}`}>{duplicate?"!":"✓"}</div><span>{duplicate?"POLICY EXCEPTION SEALED":"CLAIM TRUTH PACKET CREATED"}</span><h2>{claimId}</h2><p>{duplicate?"Finance release is blocked and an owned exception is ready for audit review.":"The capture-to-claim journey is complete. This exact seeded claim can now be opened in the downstream Operations workbench for human approval, finance handoff and reconciliation."}</p>
          <div className="receiptId">{duplicate?"EXC-DUP-IRN-MFI-44902":"CTP-AGR-26-10482-v1"}</div>
          <div className="receiptMeta"><span>Decision<b>{decision}</b></span><span>Evidence<b>{passing}/12 controls</b></span><span>Route<b>{duplicate?"BLOCKED":"IFMS 3.0"}</b></span></div>
          <Link className="journeyPrimary linkButton" href="/">Continue → Operations workbench</Link>
        </div>}
      </article>

      <aside className="journeyCard journeyAudit">
        <div className="journeyCardHead"><div><span>LIVE PROVENANCE</span><h2>Evidence replay</h2></div></div>
        <div className="provenanceStack"><div><span>Dealer Passport</span><b>DP-RJ-JAI-002814-v8</b><small>licence · GSTIN · bank profile v7</small></div><div><span>Invoice evidence</span><b>{mode==="structured"?"GST IRN/QR · sandbox":"OCR result · reviewed"}</b><small>{fileName}</small></div><div><span>Scheme rules</span><b>Certified Seed Support v3.4</b><small>effective-dated · maker-checker</small></div><div><span>Decision</span><b className={duplicate?"badText":"goodText"}>{decision}</b><small>{duplicate?"reason-coded policy block":"12 deterministic checks"}</small></div></div>
        <div className="auditList">{events.map((e,i)=><div key={`${e}-${i}`}><i/><span>{e}</span></div>)}</div>
        <div className="authorityBox"><b>Authority boundary</b><p>Claim creation prepares evidence for Government review. It does not itself sanction expenditure or claim an IFMS/PFMS payment acknowledgement.</p></div>
      </aside>
    </section>
  </main>;
}
