"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { claims as seedClaims, districtOps, integrationStatus, schemeRules, type Claim, type ClaimStatus, type DistrictOps } from "@/lib/data";

type View = "Overview" | "Claims" | "Districts" | "Dealers" | "Schemes" | "Integrations" | "SUTRA";
type SutraState = "ready" | "capture" | "sealed" | "synced";

const money=(n:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
const compact=(n:number)=>new Intl.NumberFormat("en-IN",{notation:"compact",maximumFractionDigits:1}).format(n);
const cloneClaims=()=>seedClaims.map(c=>({...c,evidence:[...c.evidence]}));
const nav: {view:View; glyph:string; label:string}[]=[
  {view:"Overview",glyph:"▦",label:"Operations"},{view:"Claims",glyph:"₹",label:"Claims & Payments"},{view:"Districts",glyph:"⌖",label:"District MIS"},{view:"Dealers",glyph:"ID",label:"Dealer Registry"},{view:"Schemes",glyph:"≡",label:"Scheme Controls"},{view:"Integrations",glyph:"⇄",label:"Integrations"},{view:"SUTRA",glyph:"◫",label:"SUTRA Edge"}
];

function statusClass(s:ClaimStatus){return s==="Ready for approval"?"s-ready":s==="In finance"?"s-finance":s==="Exception"?"s-exception":"s-paid"}
function Status({value}:{value:ClaimStatus}){return <span className={`statusChip ${statusClass(value)}`}>{value}</span>}
function Truth({status}:{status:string}){const cls=status==="SANDBOX"?"sandbox":status==="PROTOTYPE-PROVEN"?"proven":"";return <span className={`truthBadge ${cls}`}>{status}</span>}

export default function OperationsDashboard(){
  const [view,setView]=useState<View>("Overview");
  const [claims,setClaims]=useState<Claim[]>(cloneClaims());
  const [selectedId,setSelectedId]=useState(seedClaims[0].id);
  const [district,setDistrict]=useState<DistrictOps>(districtOps.find(d=>d.name==="Jaipur")||districtOps[0]);
  const [claimFilter,setClaimFilter]=useState<"All"|ClaimStatus>("All");
  const [search,setSearch]=useState("");
  const [toast,setToast]=useState("");
  const [demo,setDemo]=useState(false);
  const [schemeVersion,setSchemeVersion]=useState("v3.4 · effective 01 Sep 2026");
  const [sutra,setSutra]=useState<SutraState>("ready");
  const selected=claims.find(c=>c.id===selectedId)||claims[0];

  const totals=useMemo(()=>({
    value:claims.reduce((a,c)=>a+c.amount,0),
    ready:claims.filter(c=>c.status==="Ready for approval").length,
    exceptions:claims.filter(c=>c.status==="Exception").length,
    exceptionValue:claims.filter(c=>c.status==="Exception").reduce((a,c)=>a+c.amount,0),
    paid:claims.filter(c=>c.status==="Paid").reduce((a,c)=>a+c.amount,0),
    unreconciled:claims.filter(c=>c.status==="Paid"&&!c.reconciled).length
  }),[claims]);

  const visibleClaims=useMemo(()=>claims.filter(c=>{
    const statusOk=claimFilter==="All"||c.status===claimFilter;
    const q=search.toLowerCase().trim();
    const searchOk=!q||`${c.id} ${c.dealer} ${c.invoice} ${c.district} ${c.scheme}`.toLowerCase().includes(q);
    return statusOk&&searchOk;
  }),[claims,claimFilter,search]);

  const notify=(title:string)=>{setToast(title);window.setTimeout(()=>setToast(""),3200)};
  const patch=(id:string,p:Partial<Claim>)=>setClaims(cs=>cs.map(c=>c.id===id?{...c,...p}:c));
  const approve=(c:Claim)=>{if(c.status!=="Ready for approval")return;patch(c.id,{status:"In finance",age:"just now"});notify(`${c.id}: evidence packet approved and finance handoff created.`)};
  const resolve=(c:Claim)=>{if(c.exceptionCode!=="RECENT_BANK_PROFILE_CHANGE")return;patch(c.id,{status:"Ready for approval",checks:12,risk:"Low",exception:undefined,exceptionCode:undefined,age:"just now"});notify(`${c.id}: Payment Identity Lock re-verification cleared.`)};
  const acknowledge=(c:Claim)=>{if(c.status!=="In finance")return;const utr=`RBIGOR26X${Math.floor(10000+Math.random()*89999)}`;patch(c.id,{status:"Paid",utr,reconciled:false,age:"just now"});notify(`${c.id}: simulated authoritative acknowledgement recorded · ${utr}`)};
  const reconcile=(c:Claim)=>{if(c.status!=="Paid"||c.reconciled)return;patch(c.id,{reconciled:true,age:"closed"});notify(`${c.id}: claim, payment reference and UTR reconciled.`)};
  const reset=()=>{setClaims(cloneClaims());setSelectedId(seedClaims[0].id);setView("Overview");setDemo(false);setSutra("ready");notify("Evaluation dataset reset to release baseline.")};

  const runDemo=()=>{
    if(demo){setDemo(false);return}
    setDemo(true);setView("Claims");setSelectedId("AGR-26-10482");notify("Guided demo started · clean claim selected.");
    window.setTimeout(()=>patch("AGR-26-10482",{status:"In finance",age:"just now"}),1500);
    window.setTimeout(()=>{patch("AGR-26-10482",{status:"Paid",utr:"RBIGOR26XDEMO1",reconciled:false,age:"just now"});notify("Demo: sovereign acknowledgement received; UTR created.")},3000);
    window.setTimeout(()=>{patch("AGR-26-10482",{reconciled:true,age:"closed"});setView("Districts");setDistrict(districtOps.find(d=>d.name==="Jodhpur")||districtOps[0]);notify("Demo: claim reconciled; opening statewide exception intelligence.")},4500);
    window.setTimeout(()=>{setView("Integrations");notify("Demo: integration truth matrix · no fake live connectors.")},6000);
    window.setTimeout(()=>{setView("SUTRA");setSutra("sealed");notify("Demo: SUTRA packet captured offline; Government approval remains online-only.")},7500);
    window.setTimeout(()=>setDemo(false),9000);
  };

  return <div className="opsApp">
    <aside className="opsSide">
      <div className="opsBrand"><div className="opsSeal">राज</div><div><b>RAJ-AGRIPAY</b><small>Department of Agriculture</small></div></div>
      <div className="opsEnv"><i/> EVALUATION SANDBOX</div>
      <div className="opsNavLabel">OPERATIONS</div>
      <nav className="opsNav">{nav.map(n=><button key={n.view} className={view===n.view?"active":""} onClick={()=>setView(n.view)}><span className="navGlyph">{n.glyph}</span><span>{n.label}</span></button>)}</nav>
      <div className="opsNavLabel">DEALER WORKFLOWS</div>
      <div className="opsQuick">
        <Link href="/onboarding"><span className="navGlyph">＋</span><span>Onboard / Renew<small>Dealer Passport workflow</small></span></Link>
        <Link href="/intake"><span className="navGlyph">▤</span><span>Capture Invoice<small>IRN/QR or OCR fallback</small></span></Link>
        <Link href="/impact"><span className="navGlyph">↗</span><span>Impact & Payback<small>Editable scenario model</small></span></Link>
      </div>
      <div className="opsDoctrine"><span>CONTROL DOCTRINE</span><b>Evidence before expenditure.</b><p>RajKisan and IFMS remain authoritative. RAJ-AGRIPAY validates Agriculture claim truth, owns exceptions and preserves claim-to-UTR lineage.</p></div>
    </aside>

    <main className="opsMain">
      <header className="opsTop"><div className="opsGov"><b>Government of Rajasthan</b><span>Agriculture Finance Operations</span></div><div className="opsTopRight"><div className="topPill">FY <strong>2026–27</strong></div><div className="topPill">Environment <strong>Sandbox</strong></div><div className="officer"><span>AK</span><div><b>Scheme Officer</b><small>Evaluation role · Jaipur</small></div></div></div></header>
      <section className="opsToolbar"><div className="opsTitle"><span>DEALER PAYMENT CONTROL PLANE</span><h1>{view==="Overview"?"Dealer Payment Operations":view==="Districts"?"Rajasthan District Operations":view}</h1></div><div className="filterBox"><label>District</label><select defaultValue="All Rajasthan"><option>All Rajasthan</option><option>Jaipur</option><option>Jodhpur</option><option>Udaipur</option></select></div><div className="filterBox"><label>Scheme</label><select defaultValue="All schemes"><option>All schemes</option><option>Certified Seed Support</option><option>Micronutrient Support</option><option>Fertilizer Demonstration Support</option></select></div><button className={`demoBtn ${demo?"running":""}`} onClick={runDemo}>{demo?"Stop guided demo":"Run guided demo"}</button><button className="secondaryAction" onClick={reset}>Reset</button></section>
      <div className="truthStrip"><i/><b>Integration truth:</b> no live RajKisan / IFMS / PFMS credentials are claimed. External settlement is shown only after a source acknowledgement. <span>· Data: deterministic evaluator fixtures</span></div>

      <div className="opsContent">
        {demo&&<div className="demoBanner"><b>GUIDED DEMO RUNNING</b><span>Clean claim → Finance → acknowledgement → UTR → reconciliation → district MIS → integration truth → SUTRA boundary.</span><em>~9 sec walkthrough</em></div>}
        {view==="Overview"&&<Overview claims={claims} totals={totals} setView={setView} setSelectedId={setSelectedId} district={district} setDistrict={setDistrict}/>} 
        {view==="Claims"&&<ClaimsPanel claims={visibleClaims} selected={selected} selectedId={selectedId} setSelectedId={setSelectedId} search={search} setSearch={setSearch} filter={claimFilter} setFilter={setClaimFilter} approve={approve} resolve={resolve} acknowledge={acknowledge} reconcile={reconcile}/>} 
        {view==="Districts"&&<DistrictPanel selected={district} setSelected={setDistrict}/>} 
        {view==="Dealers"&&<DealerPanel claims={claims} setView={setView} setSelectedId={setSelectedId}/>} 
        {view==="Schemes"&&<SchemePanel version={schemeVersion} publish={()=>{setSchemeVersion("v3.5 · sandbox published 26 Aug 2026");notify("Scheme Pack v3.5 published with maker-checker sandbox receipt.")}}/>} 
        {view==="Integrations"&&<IntegrationPanel/>} 
        {view==="SUTRA"&&<SutraPanel state={sutra} setState={setSutra} notify={notify}/>} 
        <div className="pageFooter"><span>RAJ-AGRIPAY v0.3 · Evaluation release · Rajasthan Innovation Challenge</span><span>Authority boundary: Agriculture validates · authorised Finance rails settle · audit lineage closes.</span></div>
      </div>
      {toast&&<div className="toastOps"><b>Operational event</b>{toast}</div>}
    </main>
  </div>
}

function Overview({claims,totals,setView,setSelectedId,district,setDistrict}:{claims:Claim[];totals:{value:number;ready:number;exceptions:number;exceptionValue:number;paid:number;unreconciled:number};setView:(v:View)=>void;setSelectedId:(id:string)=>void;district:DistrictOps;setDistrict:(d:DistrictOps)=>void}){
  return <>
    <section className="kpis">
      <div className="kpi"><span>Claims represented</span><b>{money(totals.value)}</b><small>{claims.length} evidence packets in evaluation view</small></div>
      <div className="kpi green"><span>Ready for authorised approval</span><b>{totals.ready}</b><small>12/12 deterministic checks completed</small></div>
      <div className="kpi amber"><span>Owned exceptions</span><b>{totals.exceptions}</b><small>{money(totals.exceptionValue)} protected from premature release</small></div>
      <div className="kpi green"><span>Paid value</span><b>{money(totals.paid)}</b><small>Source acknowledgement required before this state</small></div>
      <div className="kpi"><span>Median clean validation</span><b>2h 14m</b><small>Pilot simulation · controllable Agriculture stage</small></div>
    </section>
    <section className="grid12">
      <div className="panelOps span8"><div className="panelHead"><div><span>WORK QUEUE</span><h2>Dealer claims requiring departmental action</h2></div><button onClick={()=>setView("Claims")}>Open full ledger →</button></div><ClaimsTable claims={claims.slice(0,6)} onSelect={c=>{setSelectedId(c.id);setView("Claims")}}/></div>
      <div className="panelOps span4"><div className="panelHead"><div><span>SLA CONTROL</span><h2>Departmental processing health</h2></div></div><div className="slaList"><Sla label="Identity & dealer context" value="96% within SLA" pct={96}/><Sla label="Invoice / evidence validation" value="92% within SLA" pct={92}/><Sla label="Exception ownership" value="78% within SLA" pct={78} warn/><Sla label="Finance packet handoff" value="94% within SLA" pct={94}/><Sla label="Eligible reconciliation" value="91% auto-closed" pct={91}/></div></div>
      <div className="panelOps span7"><div className="panelHead"><div><span>STATE OPERATIONS</span><h2>District exception intelligence</h2></div><button onClick={()=>setView("Districts")}>Open map →</button></div><MiniMap selected={district} setSelected={setDistrict}/></div>
      <div className="panelOps span5"><div className="panelHead"><div><span>EXCEPTION CONTROL</span><h2>Highest-priority blockers</h2></div></div><div className="exceptionList"><div className="exceptionItem"><i/><div><b>Duplicate structured invoice reference</b><small>AGR-26-10481 · Jodhpur · finance block</small></div><em>₹3.11L</em></div><div className="exceptionItem"><i style={{background:"#d6901a"}}/><div><b>Recent bank-profile change</b><small>AGR-26-10479 · Udaipur · maker-checker</small></div><em>₹2.39L</em></div><div className="exceptionItem"><i style={{background:"#2380c6"}}/><div><b>Clean claims ready</b><small>{totals.ready} packets can enter authorised approval</small></div><em>{totals.ready}</em></div></div></div>
      <div className="panelOps span6"><div className="panelHead"><div><span>FINANCE RAIL STATUS</span><h2>Authoritative-system readiness</h2></div><button onClick={()=>setView("Integrations")}>Integration matrix →</button></div><div className="railHealth"><Rail name="RajKisan" desc="licence / Agriculture truth" status="CONTRACT-READY"/><Rail name="Raj Sewa Dwaar" desc="approved integration gateway" status="CONTRACT-READY"/><Rail name="IFMS 3.0" desc="State vendor / payment rail" status="CONTRACT-READY"/><Rail name="GST e-Invoice" desc="structured invoice validation" status="SANDBOX"/></div></div>
      <div className="panelOps span6"><div className="panelHead"><div><span>CONTROL LOOP</span><h2>Claim → UTR operational chain</h2></div></div><div className="railHealth"><Rail name="1 · Dealer Passport" desc="source-owned identity references" status="READY"/><Rail name="2 · Claim Truth" desc="scheme + invoice + delivery controls" status="12 CHECKS"/><Rail name="3 · Finance handoff" desc="State or CSS route resolved" status="HUMAN"/><Rail name="4 · Reconciliation" desc="acknowledgement + UTR lineage" status="TRACEABLE"/></div></div>
    </section>
  </>
}

function Sla({label,value,pct,warn=false}:{label:string;value:string;pct:number;warn?:boolean}){return <div className="slaRow"><div><span>{label}</span><b>{value}</b></div><div className={`slaTrack ${warn?"warn":""}`}><i style={{width:`${pct}%`}}/></div></div>}
function Rail({name,desc,status}:{name:string;desc:string;status:string}){return <div><b>{name}</b><span>{desc}</span><Truth status={status}/></div>}
function ClaimsTable({claims,onSelect,selectedId}:{claims:Claim[];onSelect:(c:Claim)=>void;selectedId?:string}){return <div className="tableWrap"><table className="opsTable"><thead><tr><th>Claim / Invoice</th><th>Dealer</th><th>Scheme</th><th>Amount</th><th>Checks</th><th>Status</th></tr></thead><tbody>{claims.map(c=><tr key={c.id} className={selectedId===c.id?"selected":""} onClick={()=>onSelect(c)}><td className="cellMain"><b>{c.id}</b><small>{c.invoice}</small></td><td className="cellMain"><b>{c.dealer}</b><small>{c.district} · {c.gstin}</small></td><td className="cellMain"><b>{c.scheme}</b><small>{c.route}</small></td><td className="money">{money(c.amount)}</td><td className="cellMain"><b>{c.checks}/{c.totalChecks}</b><small>{c.risk} risk</small></td><td><Status value={c.status}/></td></tr>)}</tbody></table></div>}

function ClaimsPanel({claims,selected,selectedId,setSelectedId,search,setSearch,filter,setFilter,approve,resolve,acknowledge,reconcile}:{claims:Claim[];selected:Claim;selectedId:string;setSelectedId:(id:string)=>void;search:string;setSearch:(s:string)=>void;filter:"All"|ClaimStatus;setFilter:(f:"All"|ClaimStatus)=>void;approve:(c:Claim)=>void;resolve:(c:Claim)=>void;acknowledge:(c:Claim)=>void;reconcile:(c:Claim)=>void}){
  return <div className="claimLayout"><section className="panelOps"><div className="panelHead"><div><span>UNIFIED CLAIM LEDGER</span><h2>Claims, exceptions and payment state</h2></div><span className="truthBadge">{claims.length} records</span></div><div className="searchRow"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search claim, dealer, invoice, district or scheme"/><select value={filter} onChange={e=>setFilter(e.target.value as "All"|ClaimStatus)}><option>All</option><option>Ready for approval</option><option>In finance</option><option>Exception</option><option>Paid</option></select></div>{claims.length?<ClaimsTable claims={claims} selectedId={selectedId} onSelect={c=>setSelectedId(c.id)}/>:<div className="emptyState">No claims match the selected filters.</div>}</section><aside className="panelOps inspector"><div className="inspectorTop"><div><span>EVIDENCE PACKET</span><h3>{selected.id}</h3><small>{selected.dealer} · {selected.district}</small></div><Status value={selected.status}/></div><div className="claimAmount">{money(selected.amount)}</div><div className="checkSummary"><span>{selected.checks}/{selected.totalChecks} deterministic checks</span><span>{selected.risk} risk</span><span>{selected.age}</span></div><div className="evidenceList">{selected.evidence.map(e=><div key={e}>{e}</div>)}</div>{selected.exception&&<div className="exceptionBox"><b>{selected.exceptionCode}</b><br/>{selected.exception}</div>}<div className="routeBox"><span>FINANCE ROUTE</span><b>{selected.route}</b></div><div className="actions">{selected.exceptionCode==="RECENT_BANK_PROFILE_CHANGE"&&<button className="actionPrimary" onClick={()=>resolve(selected)}>Complete demo re-verification</button>}{selected.status==="Ready for approval"&&<button className="actionPrimary" onClick={()=>approve(selected)}>Approve evidence packet → Finance</button>}{selected.status==="In finance"&&<button className="actionPrimary" onClick={()=>acknowledge(selected)}>Simulate authoritative acknowledgement</button>}{selected.status==="Paid"&&!selected.reconciled&&<button className="actionPrimary" onClick={()=>reconcile(selected)}>Auto-reconcile claim</button>}{selected.status==="Paid"&&selected.reconciled&&<button className="actionPrimary" disabled>✓ Reconciled · {selected.utr}</button>}{selected.exceptionCode==="DUPLICATE_INVOICE_REFERENCE"&&<button className="actionPrimary" disabled>Finance release blocked by policy</button>}<Link className="actionSecondary" href="/intake" style={{textDecoration:"none",textAlign:"center"}}>Open invoice-intake workflow</Link></div></aside></div>
}

function MiniMap({selected,setSelected}:{selected:DistrictOps;setSelected:(d:DistrictOps)=>void}){const minLon=69.3,maxLon=78.4,minLat=23,maxLat=30.4;return <div className="opsMap"><div className="mapCanvas"><svg viewBox="0 0 420 500" aria-hidden="true"><path className="rajasthanShape" d="M115 28 L189 42 L242 25 L302 63 L328 116 L374 145 L343 203 L368 255 L330 294 L340 350 L292 382 L269 442 L210 468 L165 435 L118 448 L89 407 L53 377 L70 330 L42 291 L70 244 L54 191 L85 159 L73 105 Z"/></svg>{districtOps.map(d=>{const left=11+((d.lon-minLon)/(maxLon-minLon))*76;const top=8+(1-(d.lat-minLat)/(maxLat-minLat))*78;const sev=d.exceptions>=10?"hot":d.exceptions>=6?"watch":"";return <button key={d.name} title={`${d.name}: ${d.exceptions} exceptions`} className={`mapPoint ${sev} ${selected.name===d.name?"selected":""}`} style={{left:`${left}%`,top:`${top}%`}} onClick={()=>setSelected(d)}><i/><span>{d.name}</span></button>})}<div className="mapKey">Operational orientation · district-centroid evaluation overlays · not cadastral boundaries</div></div><div className="mapInspector"><span>SELECTED DISTRICT</span><h3>{selected.name}</h3><div className="districtMetrics"><div><span>Dealer profiles</span><b>{selected.dealers}</b></div><div><span>Claims</span><b>{selected.claims}</b></div><div><span>Open exceptions</span><b>{selected.exceptions}</b></div><div><span>Median validation</span><b>{selected.medianHours.toFixed(1)}h</b></div></div><div className="districtAction"><b>{selected.exceptions>=10?"Priority: exception clearance":selected.exceptions>=6?"Priority: ageing review":"Priority: maintain fast lane"}</b><p>Production drill-down links district workload to claim, scheme and officer ownership.</p></div></div></div>}
function DistrictPanel({selected,setSelected}:{selected:DistrictOps;setSelected:(d:DistrictOps)=>void}){const dealers=districtOps.reduce((a,d)=>a+d.dealers,0),claims=districtOps.reduce((a,d)=>a+d.claims,0),exceptions=districtOps.reduce((a,d)=>a+d.exceptions,0);return <><section className="kpis"><div className="kpi"><span>Dealer profiles represented</span><b>{compact(dealers)}</b><small>{districtOps.length} evaluation district nodes</small></div><div className="kpi"><span>Claims represented</span><b>{compact(claims)}</b><small>Deterministic MIS fixture</small></div><div className="kpi amber"><span>Open exceptions</span><b>{exceptions}</b><small>Workload signal across demo districts</small></div><div className="kpi green"><span>Selected district median</span><b>{selected.medianHours.toFixed(1)}h</b><small>{selected.name} · clean validation stage</small></div><div className="kpi"><span>Map provenance</span><b>Truth-labelled</b><small>Centroids for operational orientation</small></div></section><div className="panelOps" style={{marginTop:10}}><div className="panelHead"><div><span>STATE MIS</span><h2>Rajasthan dealer payment operations</h2></div><span className="truthBadge">EVALUATION DATA</span></div><MiniMap selected={selected} setSelected={setSelected}/></div></>}

function DealerPanel({claims,setView,setSelectedId}:{claims:Claim[];setView:(v:View)=>void;setSelectedId:(id:string)=>void}){const dealers=Array.from(new Map(claims.map(c=>[c.dealerId,c])).values());return <><section className="kpis"><div className="kpi"><span>Dealer Passport profiles</span><b>{dealers.length}</b><small>Federated evaluation references</small></div><div className="kpi green"><span>Licence context available</span><b>100%</b><small>Fixture coverage · RajKisan contract-ready</small></div><div className="kpi"><span>IFMS payee mapping</span><b>8/8</b><small>Evaluation mapping · not live Finance data</small></div><div className="kpi amber"><span>Bank-profile holds</span><b>1</b><small>Payment Identity Lock active</small></div><div className="kpi"><span>Renewal workflow</span><b>Functional</b><small>Use Onboard / Renew in sidebar</small></div></section><section className="dealerGrid" style={{marginTop:10}}>{dealers.map((c,i)=><article className="dealerCard" key={c.dealerId}><div className="dealerHead"><div className="dealerAvatar">{c.dealer.split(" ").slice(0,2).map(x=>x[0]).join("")}</div><div><b>{c.dealer}</b><small>{c.dealerId} · {c.district}</small></div></div><div className="dealerMeta"><div><span>GSTIN</span><b>{c.gstin}</b></div><div><span>Agriculture licence</span><b>Valid</b></div><div><span>Latest claim</span><b>{c.id}</b></div><div><span>Payment profile</span><b>{c.exceptionCode==="RECENT_BANK_PROFILE_CHANGE"?"Re-verify":"Verified"}</b></div></div><button className="actionSecondary" style={{width:"100%",marginTop:9}} onClick={()=>{setSelectedId(c.id);setView("Claims")}}>Open claim record</button></article>)}</section></>}

function SchemePanel({version,publish}:{version:string;publish:()=>void}){return <div className="ruleGrid"><section className="panelOps"><div className="panelHead"><div><span>ACTIVE SCHEME PACKS</span><h2>Configuration catalogue</h2></div></div><div className="schemeList"><button className="selected"><span><b>Certified Seed Support</b><small>State scheme · 7 controls</small></span><em>ACTIVE</em></button><button><span><b>Micronutrient Support</b><small>State scheme · 8 controls</small></span><em>ACTIVE</em></button><button><span><b>Fertilizer Demonstration Support</b><small>CSS route · SNA-SPARSH</small></span><em>ACTIVE</em></button><button><span><b>Input Assistance Pilot</b><small>State scheme · duplicate controls</small></span><em>ACTIVE</em></button></div></section><section className="panelOps"><div className="panelHead"><div><span>SCHEME CONTROL PACK</span><h2>Certified Seed Support · {version}</h2></div><button onClick={publish}>Publish sandbox v3.5</button></div><div className="ruleTable">{schemeRules.map(r=><div key={r.key}><span>{r.group} · {r.label}</span><b>{r.value}</b><Truth status="VERSIONED"/></div>)}</div><div className="districtAction" style={{margin:12}}><b>Historical reproducibility</b><p>A claim replays against the effective-dated rule version that applied at transaction time. New policy never silently rewrites an old decision.</p></div></section></div>}

function IntegrationPanel(){return <><section className="kpis"><div className="kpi green"><span>Finance design</span><b>No parallel wallet</b><small>IFMS / PFMS remain authoritative</small></div><div className="kpi"><span>State integration path</span><b>Raj Sewa Dwaar</b><small>Contract-ready gateway pattern</small></div><div className="kpi"><span>Officer signing</span><b>Raj eSign</b><small>Contract-ready Rajasthan-native adapter</small></div><div className="kpi"><span>Dealer alerts</span><b>e-Sanchar 3.0</b><small>Contract-ready SMS / messaging rail</small></div><div className="kpi green"><span>Edge channel</span><b>SUTRA</b><small>Prototype-proven assisted capture</small></div></section><section className="integrationGrid" style={{marginTop:10}}>{integrationStatus.map(i=><article className="integrationCard" key={i.name}><div><h3>{i.name}</h3><small>{i.owner}</small></div><Truth status={i.status}/><p>{i.note}</p></article>)}</section></>}

function SutraPanel({state,setState,notify}:{state:SutraState;setState:(s:SutraState)=>void;notify:(s:string)=>void}){const act=()=>{if(state==="ready"){setState("capture");window.setTimeout(()=>{setState("sealed");notify("SUTRA: offline evidence packet sealed with local receipt.")},1100)}else if(state==="sealed"){setState("synced");notify("SUTRA: approved connectivity restored; packet synchronised.")}else{setState("ready")}};return <div className="sutraConsole"><section className="panelOps devicePanel"><div className="panelHead"><div><span>ASSISTED CHANNEL</span><h2>SUTRA Dealer Edge · field / office evidence capture</h2></div><Truth status="PROTOTYPE-PROVEN"/></div><div className="deviceShell"><div className="deviceScreen"><div className="deviceStatus"><b>RAJ-AGRIPAY</b><span>{state==="synced"?"SYNCED":"OFFLINE CAPTURE"}</span></div><div className="voicePrompt"><span>{state==="capture"?"◌":"🎙"}</span><b>{state==="ready"?"“मेरा भुगतान कहाँ अटका है?”":state==="capture"?"Checking evidence quality…":state==="sealed"?"Offline packet sealed":"Approved sync complete"}</b><small>{state==="ready"?"Hindi/BHASHINI-ready assistance grounded in claim state.":state==="capture"?"Invoice · licence · dealer confirmation":state==="sealed"?"Packet SUT-AGP-260826-041 · awaiting authorised sync":"Receipt SYNC-041-OK · linked to dealer case"}</small></div><button className="deviceAction" disabled={state==="capture"} onClick={act}>{state==="ready"?"Scan demo evidence":state==="capture"?"Processing locally…":state==="sealed"?"Simulate connectivity + sync":"Reset assisted workflow"}</button></div></div></section><aside className="panelOps"><div className="panelHead"><div><span>AUTHORITY BOUNDARY</span><h2>What SUTRA may and may not do</h2></div></div><div className="boundaryList"><Boundary yes title="Capture evidence offline" text="Camera, guided fields, evidence-quality checks and dealer confirmation."/><Boundary yes title="Guide in Hindi / regional language" text="BHASHINI-ready ASR/TTS adapter; grounded transaction status only."/><Boundary yes title="Queue signed local packets" text="Encrypted, idempotent and synchronisation-aware evidence receipts."/><Boundary title="Never approve expenditure offline" text="Government financial authority remains with authorised online officers and finance rails."/><Boundary title="Never invent payment success" text="Settlement status appears only after authoritative acknowledgement."/></div></aside></div>}
function Boundary({yes=false,title,text}:{yes?:boolean;title:string;text:string}){return <div><span className={yes?"yesDot":"noDot"}>{yes?"✓":"!"}</span><span><b>{title}</b><small>{text}</small></span></div>}
