"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const fmtCr=(n:number)=>new Intl.NumberFormat("en-IN",{maximumFractionDigits:2}).format(n);
const fmtInt=(n:number)=>new Intl.NumberFormat("en-IN",{maximumFractionDigits:0}).format(n);

export default function ImpactLab(){
  const [monthlyValue,setMonthlyValue]=useState(20);
  const [monthlyClaims,setMonthlyClaims]=useState(5000);
  const [currentTat,setCurrentTat]=useState(22);
  const [targetTat,setTargetTat]=useState(2);
  const [capitalCost,setCapitalCost]=useState(14);
  const [minutesSaved,setMinutesSaved]=useState(18);
  const [baselineExceptions,setBaselineExceptions]=useState(18);
  const [targetExceptions,setTargetExceptions]=useState(6);

  const m=useMemo(()=>{
    const daysReleased=Math.max(0,currentTat-targetTat);
    const wcReleased=monthlyValue*(daysReleased/30);
    const annualFinancingBenefit=wcReleased*(capitalCost/100);
    const adminHoursMonthly=(monthlyClaims*minutesSaved)/60;
    const adminHoursAnnual=adminHoursMonthly*12;
    const exceptionsAvoided=Math.max(0,monthlyClaims*((baselineExceptions-targetExceptions)/100));
    return {daysReleased,wcReleased,annualFinancingBenefit,adminHoursMonthly,adminHoursAnnual,exceptionsAvoided};
  },[monthlyValue,monthlyClaims,currentTat,targetTat,capitalCost,minutesSaved,baselineExceptions,targetExceptions]);

  const sliders=[
    {label:"Monthly dealer claim value",value:monthlyValue,set:setMonthlyValue,min:1,max:100,step:1,suffix:" Cr"},
    {label:"Monthly claims",value:monthlyClaims,set:setMonthlyClaims,min:500,max:25000,step:500,suffix:""},
    {label:"Current settlement TAT",value:currentTat,set:setCurrentTat,min:10,max:35,step:1,suffix:" days"},
    {label:"Target departmental TAT",value:targetTat,set:setTargetTat,min:1,max:7,step:1,suffix:" days"},
    {label:"Dealer annual cost of capital",value:capitalCost,set:setCapitalCost,min:8,max:24,step:1,suffix:"%"},
    {label:"Admin minutes saved per clean claim",value:minutesSaved,set:setMinutesSaved,min:5,max:40,step:1,suffix:" min"},
  ] as const;

  return <main className="impactPage">
    <header className="journeyGovHeader"><div><span className="journeyRaj">राज</span><div><b>Government of Rajasthan</b><small>Department of Agriculture · RAJ-AGRIPAY</small></div></div><div className="journeyTruth">EVALUATION SCENARIO · EDITABLE ASSUMPTIONS</div></header>

    <section className="impactHero"><div><span>IMPACT & PAYBACK LAB</span><h1>Translate faster claim processing into dealer cash-flow and administrative value.</h1><p>The official challenge identifies T+15–T+30 settlement delays. This transparent scenario model separates RAJ-AGRIPAY-controlled workflow time from external Treasury/PFMS/bank settlement time and never presents assumptions as Rajasthan actuals.</p></div><Link href="/" className="impactBack">← Operations</Link></section>

    <section className="impactLayout">
      <article className="impactControls">
        <div className="impactSectionHead"><span>ASSUMPTIONS</span><h2>Change the scenario</h2><p>Every result below is recalculated from these visible inputs.</p></div>
        <div className="impactSliders">{sliders.map(s=><label key={s.label}><div><span>{s.label}</span><b>{s.label.includes("value")?`₹${s.value}${s.suffix}`:`${fmtInt(s.value)}${s.suffix}`}</b></div><input type="range" min={s.min} max={s.max} step={s.step} value={s.value} onChange={e=>s.set(Number(e.target.value))}/></label>)}</div>
        <div className="exceptionAssumptions"><div><span>Baseline exception/manual-review rate</span><b>{baselineExceptions}%</b><input type="range" min="8" max="30" value={baselineExceptions} onChange={e=>setBaselineExceptions(Number(e.target.value))}/></div><div><span>Target exception/manual-review rate</span><b>{targetExceptions}%</b><input type="range" min="2" max="15" value={targetExceptions} onChange={e=>setTargetExceptions(Number(e.target.value))}/></div></div>
      </article>

      <article className="impactResults">
        <div className="impactResult primary"><span>Working-capital cycle released</span><strong>{m.daysReleased} days</strong><p>Difference between current and target departmental claim-processing time.</p></div>
        <div className="impactResult"><span>Indicative dealer receivables released</span><strong>₹{fmtCr(m.wcReleased)} Cr</strong><p>Monthly claim value × days released ÷ 30.</p></div>
        <div className="impactResult"><span>Indicative annual financing-cost relief</span><strong>₹{fmtCr(m.annualFinancingBenefit)} Cr</strong><p>Receivables released × editable annual cost of capital.</p></div>
        <div className="impactResult"><span>Administrative effort released</span><strong>{fmtInt(m.adminHoursAnnual)} hrs/yr</strong><p>Claims × minutes saved per clean claim × 12 months.</p></div>
        <div className="impactResult"><span>Manual-review cases potentially avoided</span><strong>{fmtInt(m.exceptionsAvoided)}/month</strong><p>Difference between editable baseline and target exception rates.</p></div>
        <div className="impactResult"><span>90-day pilot ask</span><strong>₹44.8 L</strong><p>Indicative implementation budget from the proposal; subject to confirmed interfaces, hosting, security and taxes.</p></div>
      </article>
    </section>

    <section className="impactProof">
      <div><span>VALUE LOGIC</span><h2>The platform does not need to “speed up RBI.”</h2><p>It removes controllable Agriculture-side waiting: repeated identity checks, invoice re-keying, scheme-rule lookup, cross-system exception chasing and manual reconciliation. External settlement latency remains explicitly outside the SLA we claim to control.</p></div>
      <div className="impactFormula"><b>Dealer value</b><code>monthly claim value × TAT days released ÷ 30 × cost of capital</code><b>Administrative value</b><code>monthly claims × minutes saved × 12</code><small>Scenario formulas are intentionally simple enough for an evaluator, auditor or Finance officer to reproduce independently.</small></div>
    </section>
  </main>;
}
