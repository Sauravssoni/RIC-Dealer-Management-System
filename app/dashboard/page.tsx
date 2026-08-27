"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { claims as seedClaims, districtOps, integrationStatus, schemeRules, type Claim, type ClaimStatus, type DistrictOps } from "@/lib/data";

type View = "Workbench" | "Claims" | "Districts" | "Dealers" | "Schemes" | "Integrations" | "SUTRA";
type SutraState = "ready" | "capture" | "sealed" | "synced";

type NavItem = {view:View;label:string;caption:string;glyph:string};
const nav:NavItem[]=[
  {view:"Workbench",label:"Settlement Workbench",caption:"queues · evidence · action",glyph:"⌂"},
  {view:"Claims",label:"Claims & Payments",caption:"claim-to-UTR ledger",glyph:"₹"},
  {view:"Districts",label:"District Intelligence",caption:"where money is stuck",glyph:"⌖"},
  {view:"Dealers",label:"Dealer Registry",caption:"passport · renewals",glyph:"ID"},
  {view:"Schemes",label:"Scheme Controls",caption:"versioned rule packs",glyph:"≡"},
  {view:"Integrations",label:"Integration Control",caption:"Rajasthan + sovereign rails",glyph:"⇄"},
  {view:"SUTRA",label:"SUTRA Assisted Desk",caption:"optional edge channel",glyph:"◫"},
];

const money=(n:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
const compact=(n:number)=>new Intl.NumberFormat("en-IN",{notation:"compact",maximumFractionDigits:1}).format(n);
const cloneClaims=()=>seedClaims.map(c=>({...c,evidence:[...c.evidence]}));
const statusTone=(s:ClaimStatus)=>s==="Ready for approval"?"ready":s==="In finance"?"finance":s==="Exception"?"exception":"paid";

function Status({value}:{value:ClaimStatus}){return <span className={`wbStatus ${statusTone(value)}`}><i/>{value}</span>}
function Truth({value}:{value:string}){const cls=value==="SANDBOX"?"sandbox":value==="PROTOTYPE-PROVEN"?"proven":value==="ADAPTER-READY"?"adapter":"contract";return <span className={`wbTruth ${cls}`}>{value}</span>}

export default function Dashboard(){
  const [view,setView]=useState<View>("Workbench");
  const [claims,setClaims]=useState<Claim[]>(cloneClaims());
  const [selectedId,setSelectedId]=useState(seedClaims[0].id);
  const [filter,setFilter]=useState<"All"|"Action required"|ClaimStatus>("All");
  const [search,setSearch]=useState("");
  const [district,setDistrict]=useState<DistrictOps>(districtOps.find(d=>d.name==="Jaipur")||districtOps[0]);
  const [schemeVersion,setSchemeVersion]=useState("v3.4 · effective 01 Sep 2026");
  const [sutra,setSutra]=useState<SutraState>("ready");
  const [toast,setToast]=useState("");

  const selected=claims.find(c=>c.id===selectedId)||claims[0];
  const totals=useMemo(()=>({
    value:claims.reduce((a,c)=>a+c.amount,0),
    ready:claims.filter(c=>c.status==="Ready for approval").length,
    exceptions:claims.filter(c=>c.status==="Exception").length,
    inFinance:claims.filter(c=>c.status==="In finance").length,
    paid:claims.filter(c=>c.status==="Paid").reduce((a,c)=>a+c.amount,0),
  }),[claims]);

  const visible=useMemo(()=>claims.filter(c=>{
    const q=search.trim().toLowerCase();
    const text=`${c.id} ${c.dealer} ${c.invoice} ${c.scheme} ${c.district}`.toLowerCase();
    const searchOk=!q||text.includes(q);
    const filterOk=filter==="All"?true:filter==="Action required"?c.status==="Exception":c.status===filter;
    return searchOk&&filterOk;
  }),[claims,search,filter]);

  const notify=(m:string)=>{setToast(m);window.setTimeout(()=>setToast(""),3000)};
  const patch=(id:string,p:Partial<Claim>)=>setClaims(cs=>cs.map(c=>c.id===id?{...c,...p}:c));
  const approve=(c:Claim)=>{if(c.status!=="Ready for approval")return;patch(c.id,{status:"In finance",age:"just now"});notify(`${c.id} moved to Finance after authorised departmental approval.`)};
  const resolve=(c:Claim)=>{if(c.exceptionCode!=="RECENT_BANK_PROFILE_CHANGE")return;patch(c.id,{status:"Ready for approval",checks:12,risk:"Low",exception:undefined,exceptionCode:undefined,age:"just now"});notify(`${c.id}: Payment Identity Lock re-verification cleared.`)};
  const acknowledge=(c:Claim)=>{if(c.status!=="In finance")return;const utr=`RBIGOR26X${Math.floor(10000+Math.random()*89999)}`;patch(c.id,{status:"Paid",utr,reconciled:false,age:"just now"});notify(`${c.id}: simulated source acknowledgement recorded · ${utr}`)};
  const reconcile=(c:Claim)=>{if(c.status!=="Paid"||c.reconciled)return;patch(c.id,{reconciled:true,age:"closed"});notify(`${c.id}: claim, payment acknowledgement and UTR reconciled.`)};
  const reset=()=>{setClaims(cloneClaims());setSelectedId(seedClaims[0].id);setView("Workbench");setSearch("");setFilter("All");setSutra("ready");notify("Evaluation dataset reset to baseline.")};
  const openClaim=(id:string)=>{setSelectedId(id);setView("Claims")};

  return <div className="wbApp">
    <aside className="wbRail">
      <div className="wbBrand"><div className="wbStateMark">राज</div><div><b>RAJ-AGRIPAY</b><span>Agriculture Payment Control Plane</span></div></div>
      <div className="wbPrototype"><i/><div><b>FUNCTIONAL PROTOTYPE</b><span>Evaluation sandbox · pilot-ready architecture</span></div></div>
      <nav className="wbNav">{nav.map(n=><button key={n.view} className={view===n.view?"active":""} onClick={()=>setView(n.view)}><span className="wbNavGlyph">{n.glyph}</span><span><b>{n.label}</b><small>{n.caption}</small></span></button>)}</nav>
      <div className="wbJourneys"><span>DEALER JOURNEYS</span><Link href="/onboarding">＋ Onboard / Renew</Link><Link href="/intake">▤ Invoice Intake</Link><Link href="/impact">↗ Impact & Payback</Link><Link href="/vision">◎ Statewide Vision</Link></div>
      <div className="wbRailFoot"><span>CONTROL PRINCIPLE</span><b>Evidence before expenditure.</b><p>IFMS / PFMS / Treasury remain authoritative. AI never approves public expenditure.</p></div>
    </aside>

    <main className="wbMain">
      <header className="wbTopbar">
        <div className="wbGov"><b>Government of Rajasthan</b><span>Department of Agriculture · Finance Operations</span></div>
        <div className="wbTopMeta"><span>FY 2026–27</span><span>Sandbox dataset</span><div className="wbOfficer">AK</div><div><b>Scheme Officer</b><small>Evaluation role · Jaipur</small></div></div>
      </header>

      <section className="wbContext">
        <div><span>DEALER SETTLEMENT CONTROL ROOM</span><h1>{view==="Workbench"?"Settlement Workbench":view==="Districts"?"Rajasthan District Intelligence":view}</h1><p>{view==="Workbench"?"Prioritise exceptions, validate claim truth and move clean evidence packets into sovereign Finance rails.":"Functional evaluator surface · deterministic data · production connectors activated only after Government onboarding."}</p></div>
        <div className="wbContextActions"><button className="wbOutline" onClick={reset}>Reset</button><button className="wbPrimary" onClick={()=>document.querySelector<HTMLButtonElement>(".evalConsoleTrigger")?.click()}>Open Evaluator Demo</button></div>
      </section>

      <section className="wbBoundary"><div><i/><b>PROTOTYPE BOUNDARY</b><span>Functional transaction logic and evaluator data today.</span></div><span>Pilot refines role journeys, localisation, accessibility, real GIS/master data, security controls and authorised connectors.</span></section>

      <div className="wbViewport">
        {view==="Workbench"&&<Workbench claims={claims} totals={totals} selected={selected} setSelectedId={setSelectedId} openClaim={openClaim} approve={approve} resolve={resolve} acknowledge={acknowledge} reconcile={reconcile} district={district} setDistrict={setDistrict} setView={setView}/>} 
        {view==="Claims"&&<ClaimsView claims={visible} selected={selected} selectedId={selectedId} setSelectedId={setSelectedId} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} approve={approve} resolve={resolve} acknowledge={acknowledge} reconcile={reconcile}/>} 
        {view==="Districts"&&<DistrictView selected={district} setSelected={setDistrict}/>} 
        {view==="Dealers"&&<DealersView claims={claims} openClaim={openClaim}/>} 
        {view==="Schemes"&&<SchemesView version={schemeVersion} publish={()=>{setSchemeVersion("v3.5 · sandbox published 27 Aug 2026");notify("Scheme Pack v3.5 published with sandbox maker-checker receipt.")}}/>} 
        {view==="Integrations"&&<IntegrationsView/>} 
        {view==="SUTRA"&&<SutraView state={sutra} setState={setSutra} notify={notify}/>} 
      </div>

      {toast&&<div className="wbToast"><b>Operational event</b><span>{toast}</span></div>}
    </main>
  </div>
}

function Workbench({claims,totals,selected,setSelectedId,openClaim,approve,resolve,acknowledge,reconcile,district,setDistrict,setView}:{claims:Claim[];totals:{value:number;ready:number;exceptions:number;inFinance:number;paid:number};selected:Claim;setSelectedId:(id:string)=>void;openClaim:(id:string)=>void;approve:(c:Claim)=>void;resolve:(c:Claim)=>void;acknowledge:(c:Claim)=>void;reconcile:(c:Claim)=>void;district:DistrictOps;setDistrict:(d:DistrictOps)=>void;setView:(v:View)=>void}){
  return <>
    <section className="wbMetrics"><Metric label="Claims represented" value={money(totals.value)} sub={`${claims.length} evaluation packets`}/><Metric label="Action required" value={String(totals.exceptions)} sub="owned exceptions" tone="red"/><Metric label="Ready for approval" value={String(totals.ready)} sub="clean Agriculture packets" tone="green"/><Metric label="In Finance" value={String(totals.inFinance)} sub="awaiting source acknowledgement" tone="amber"/><Metric label="Paid / acknowledged" value={money(totals.paid)} sub="source-backed demo state" tone="green"/></section>

    <section className="wbCore">
      <div className="wbSurface wbQueue">
        <div className="wbSurfaceHead"><div><span>PRIORITY WORK QUEUE</span><h2>Claims requiring officer attention</h2></div><button onClick={()=>setView("Claims")}>Open full ledger</button></div>
        <ClaimTable claims={claims.slice(0,7)} selectedId={selected.id} onSelect={c=>setSelectedId(c.id)}/>
      </div>
      <ClaimInspector claim={selected} approve={approve} resolve={resolve} acknowledge={acknowledge} reconcile={reconcile}/>
    </section>

    <section className="wbBottomGrid">
      <div className="wbSurface wbDistrictPanel"><div className="wbSurfaceHead"><div><span>DISTRICT OPERATIONS</span><h2>Where money is getting stuck</h2></div><button onClick={()=>setView("Districts")}>Open district intelligence</button></div><DistrictMap selected={district} setSelected={setDistrict}/></div>
      <div className="wbSurface wbControlPanel"><div className="wbSurfaceHead"><div><span>CONTROL STATUS</span><h2>Rajasthan + sovereign rail readiness</h2></div><button onClick={()=>setView("Integrations")}>View all</button></div><div className="wbControlRows">{integrationStatus.slice(0,6).map(i=><div key={i.name}><span><b>{i.name}</b><small>{i.owner}</small></span><Truth value={i.status}/></div>)}</div><div className="wbControlNote"><b>Selection thesis</b><span>RAJ-AGRIPAY proves Agriculture claim readiness; sovereign Finance systems move and account for public money.</span></div></div>
    </section>
  </>;
}

function Metric({label,value,sub,tone="blue"}:{label:string;value:string;sub:string;tone?:"blue"|"green"|"amber"|"red"}){return <div className={`wbMetric ${tone}`}><span>{label}</span><b>{value}</b><small>{sub}</small></div>}

function ClaimTable({claims,selectedId,onSelect}:{claims:Claim[];selectedId?:string;onSelect:(c:Claim)=>void}){return <div className="wbTableWrap"><table className="wbTable"><thead><tr><th>Claim</th><th>Dealer / District</th><th>Scheme</th><th>Amount</th><th>Checks</th><th>Age</th><th>Status</th></tr></thead><tbody>{claims.map(c=><tr key={c.id} className={selectedId===c.id?"selected":""} onClick={()=>onSelect(c)}><td><b>{c.id}</b><small>{c.invoice}</small></td><td><b>{c.dealer}</b><small>{c.district}</small></td><td><b>{c.scheme}</b><small>{c.route}</small></td><td className="wbMoney">{money(c.amount)}</td><td><b>{c.checks}/{c.totalChecks}</b><small>{c.risk} risk</small></td><td>{c.age}</td><td><Status value={c.status}/></td></tr>)}</tbody></table></div>}

function stages(c:Claim){
  const base=["Dealer","Invoice","Claim truth","Approval","Finance","UTR","Reconcile"];
  let current=2;
  if(c.status==="Ready for approval")current=2;
  if(c.status==="Exception")current=c.exceptionCode==="DUPLICATE_INVOICE_REFERENCE"?1:2;
  if(c.status==="In finance")current=4;
  if(c.status==="Paid")current=c.reconciled?6:5;
  return base.map((label,i)=>({label,done:i<=current,current:i===current}));
}

function ClaimInspector({claim,approve,resolve,acknowledge,reconcile}:{claim:Claim;approve:(c:Claim)=>void;resolve:(c:Claim)=>void;acknowledge:(c:Claim)=>void;reconcile:(c:Claim)=>void}){
  return <aside className="wbInspector">
    <div className="wbInspectorHead"><div><span>SELECTED CLAIM</span><h2>{claim.id}</h2><p>{claim.dealer} · {claim.district}</p></div><Status value={claim.status}/></div>
    <div className="wbAmount"><span>Claim amount</span><b>{money(claim.amount)}</b><small>{claim.scheme}</small></div>
    <div className="wbStageRail">{stages(claim).map(s=><div key={s.label} className={`${s.done?"done":""} ${s.current?"current":""}`}><i/><span>{s.label}</span></div>)}</div>
    <div className="wbInspectorSection"><span>CLAIM TRUTH</span><div className="wbTruthSummary"><b>{claim.checks}/{claim.totalChecks}</b><p>deterministic controls passed</p><em>{claim.risk} risk</em></div></div>
    {claim.exception&&<div className="wbException"><b>{claim.exceptionCode}</b><p>{claim.exception}</p></div>}
    <div className="wbEvidence"><span>EVIDENCE / PROVENANCE</span>{claim.evidence.map(e=><div key={e}><i/> {e}</div>)}</div>
    <div className="wbRoute"><span>FINANCE ROUTE</span><b>{claim.route}</b></div>
    <div className="wbActionZone">{claim.exceptionCode==="RECENT_BANK_PROFILE_CHANGE"&&<button onClick={()=>resolve(claim)}>Complete demo re-verification</button>}{claim.status==="Ready for approval"&&<button onClick={()=>approve(claim)}>Approve evidence packet → Finance</button>}{claim.status==="In finance"&&<button onClick={()=>acknowledge(claim)}>Simulate authoritative acknowledgement</button>}{claim.status==="Paid"&&!claim.reconciled&&<button onClick={()=>reconcile(claim)}>Auto-reconcile claim</button>}{claim.status==="Paid"&&claim.reconciled&&<button disabled>✓ Reconciled · {claim.utr}</button>}{claim.exceptionCode==="DUPLICATE_INVOICE_REFERENCE"&&<button disabled>Finance release blocked by policy</button>}<Link href="/intake">Open invoice provenance</Link></div>
  </aside>
}

function ClaimsView({claims,selected,selectedId,setSelectedId,search,setSearch,filter,setFilter,approve,resolve,acknowledge,reconcile}:{claims:Claim[];selected:Claim;selectedId:string;setSelectedId:(id:string)=>void;search:string;setSearch:(s:string)=>void;filter:"All"|"Action required"|ClaimStatus;setFilter:(f:"All"|"Action required"|ClaimStatus)=>void;approve:(c:Claim)=>void;resolve:(c:Claim)=>void;acknowledge:(c:Claim)=>void;reconcile:(c:Claim)=>void}){
  return <section className="wbCore wbCoreFull"><div className="wbSurface wbQueue"><div className="wbLedgerFilters"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search claim, dealer, invoice, district or scheme"/><select value={filter} onChange={e=>setFilter(e.target.value as typeof filter)}><option>All</option><option>Action required</option><option>Ready for approval</option><option>In finance</option><option>Exception</option><option>Paid</option></select></div>{claims.length?<ClaimTable claims={claims} selectedId={selectedId} onSelect={c=>setSelectedId(c.id)}/>:<div className="wbEmpty">No claims match the current filters.</div>}</div><ClaimInspector claim={selected} approve={approve} resolve={resolve} acknowledge={acknowledge} reconcile={reconcile}/></section>
}

function DistrictMap({selected,setSelected}:{selected:DistrictOps;setSelected:(d:DistrictOps)=>void}){const minLon=69.3,maxLon=78.4,minLat=23,maxLat=30.4;return <div className="rajOps"><div className="rajMapSurface">{districtOps.map(d=>{const left=12+((d.lon-minLon)/(maxLon-minLon))*76;const top=10+(1-(d.lat-minLat)/(maxLat-minLat))*78;const tone=d.exceptions>=10?"hot":d.exceptions>=6?"watch":"";return <button key={d.name} title={`${d.name} · ${d.exceptions} exceptions`} className={`rajNode ${tone} ${selected.name===d.name?"active":""}`} style={{left:`${left}%`,top:`${top}%`}} onClick={()=>setSelected(d)}><i/><span>{d.name}</span></button>})}<div className="rajLegend">Operational orientation · evaluator telemetry · not cadastral GIS</div></div><aside className="rajDistrict"><span>SELECTED DISTRICT</span><h3>{selected.name}</h3><div><small>Dealer profiles</small><b>{selected.dealers}</b></div><div><small>Claims</small><b>{selected.claims}</b></div><div><small>Open exceptions</small><b>{selected.exceptions}</b></div><div><small>Median validation</small><b>{selected.medianHours.toFixed(1)}h</b></div><p><b>{selected.exceptions>=10?"Priority: clear owned exceptions":selected.exceptions>=6?"Priority: ageing review":"Priority: maintain fast lane"}</b><br/>Production drill-down links district → scheme → claim → officer owner.</p></aside></div>}

function DistrictView({selected,setSelected}:{selected:DistrictOps;setSelected:(d:DistrictOps)=>void}){const dealers=districtOps.reduce((a,d)=>a+d.dealers,0),claims=districtOps.reduce((a,d)=>a+d.claims,0),exceptions=districtOps.reduce((a,d)=>a+d.exceptions,0);return <><section className="wbMetrics"><Metric label="Dealer profiles" value={compact(dealers)} sub="evaluation district network"/><Metric label="Claims represented" value={compact(claims)} sub="deterministic MIS fixture"/><Metric label="Open exceptions" value={String(exceptions)} sub="owned workload signal" tone="red"/><Metric label="Selected median" value={`${selected.medianHours.toFixed(1)}h`} sub={`${selected.name} clean validation`} tone="green"/><Metric label="GIS state" value="Prototype" sub="approved State GIS in pilot"/></section><div className="wbSurface wbMapFull"><div className="wbSurfaceHead"><div><span>RAJASTHAN OPERATIONS</span><h2>District workload and exception intelligence</h2></div><Truth value="SANDBOX"/></div><DistrictMap selected={selected} setSelected={setSelected}/></div></>}

function DealersView({claims,openClaim}:{claims:Claim[];openClaim:(id:string)=>void}){const dealers=Array.from(new Map(claims.map(c=>[c.dealerId,c])).values());return <div className="wbSurface"><div className="wbSurfaceHead"><div><span>FEDERATED DEALER PASSPORTS</span><h2>Dealer lifecycle and payment identity</h2></div><Link href="/onboarding">Onboard / Renew</Link></div><div className="wbDealerTable"><table><thead><tr><th>Dealer</th><th>District</th><th>Agriculture licence</th><th>GSTIN</th><th>Payment profile</th><th>Latest claim</th><th></th></tr></thead><tbody>{dealers.map(c=><tr key={c.dealerId}><td><b>{c.dealer}</b><small>{c.dealerId}</small></td><td>{c.district}</td><td><span className="wbMiniOk">Valid</span></td><td>{c.gstin}</td><td>{c.exceptionCode==="RECENT_BANK_PROFILE_CHANGE"?<span className="wbMiniWarn">Re-verify</span>:<span className="wbMiniOk">Verified</span>}</td><td>{c.id}</td><td><button onClick={()=>openClaim(c.id)}>Open</button></td></tr>)}</tbody></table></div></div>}

function SchemesView({version,publish}:{version:string;publish:()=>void}){return <div className="wbSchemeLayout"><aside className="wbSurface wbSchemeList"><div className="wbSurfaceHead"><div><span>SCHEME CATALOGUE</span><h2>Reusable payment controls</h2></div></div>{["Certified Seed Support","Micronutrient Support","Fertilizer Demonstration Support","Input Assistance Pilot"].map((s,i)=><button className={i===0?"active":""} key={s}><span><b>{s}</b><small>{i===2?"CSS · SNA-SPARSH route":"State scheme"}</small></span><em>ACTIVE</em></button>)}</aside><section className="wbSurface"><div className="wbSurfaceHead"><div><span>EFFECTIVE-DATED RULE PACK</span><h2>Certified Seed Support · {version}</h2></div><button onClick={publish}>Publish sandbox v3.5</button></div><div className="wbRules">{schemeRules.map(r=><div key={r.key}><span><small>{r.group}</small><b>{r.label}</b></span><p>{r.value}</p><Truth value="CONTRACT-READY"/></div>)}</div><div className="wbPolicyNote"><b>Historical reproducibility</b><span>Old claims replay against the exact Scheme Pack version effective when the transaction occurred. A new rule never silently rewrites an old decision.</span></div></section></div>}

function IntegrationsView(){return <div className="wbSurface"><div className="wbSurfaceHead"><div><span>INTEGRATION CONTROL PLANE</span><h2>Rajasthan-native and sovereign system boundaries</h2></div><span className="wbBuildTag">No fake LIVE connectors</span></div><div className="wbIntegrationTable"><table><thead><tr><th>System / Rail</th><th>Authority / Owner</th><th>Role in RAJ-AGRIPAY</th><th>Evaluator state</th></tr></thead><tbody>{integrationStatus.map(i=><tr key={i.name}><td><b>{i.name}</b></td><td>{i.owner}</td><td>{i.note}</td><td><Truth value={i.status}/></td></tr>)}</tbody></table></div><div className="wbIntegrationFoot"><b>Production activation pattern</b><span>Department approval → application registration → credentials / whitelisting → contract tests → monitored production adapter. Until then, the UI stays truth-labelled.</span></div></div>}

function SutraView({state,setState,notify}:{state:SutraState;setState:(s:SutraState)=>void;notify:(m:string)=>void}){const act=()=>{if(state==="ready"){setState("capture");window.setTimeout(()=>{setState("sealed");notify("SUTRA offline evidence packet sealed with local receipt.")},900)}else if(state==="sealed"){setState("synced");notify("Approved connectivity restored; evidence packet synchronised.")}else if(state==="synced")setState("ready")};return <div className="wbSutra"><section className="wbSurface"><div className="wbSurfaceHead"><div><span>OPTIONAL ASSISTED CHANNEL</span><h2>SUTRA Dealer Edge</h2></div><Truth value="PROTOTYPE-PROVEN"/></div><div className="wbDevice"><div className="wbDeviceTop"><b>RAJ-AGRIPAY</b><span>{state==="synced"?"SYNCED":"ASSISTED CAPTURE"}</span></div><div className="wbDeviceBody"><span>{state==="capture"?"◌":"🎙"}</span><b>{state==="ready"?"“मेरा भुगतान कहाँ अटका है?”":state==="capture"?"Checking evidence quality…":state==="sealed"?"Offline packet sealed":"Authorised sync complete"}</b><small>{state==="ready"?"Hindi/BHASHINI-ready, grounded in claim state":state==="sealed"?"SUT-AGP-260827-041 · awaiting connectivity":"Camera evidence · local quality checks · signed receipt"}</small></div><button disabled={state==="capture"} onClick={act}>{state==="ready"?"Scan demo evidence":state==="capture"?"Processing locally…":state==="sealed"?"Simulate connectivity + sync":"Reset assisted workflow"}</button></div></section><aside className="wbSurface wbBoundaryList"><div className="wbSurfaceHead"><div><span>AUTHORITY BOUNDARY</span><h2>Allowed / prohibited actions</h2></div></div><Boundary yes title="Capture evidence offline" text="Camera, guided fields, evidence-quality checks and dealer confirmation."/><Boundary yes title="Guide in Hindi / regional language" text="BHASHINI-ready ASR/TTS adapter, grounded in transaction state."/><Boundary yes title="Queue signed local packets" text="Encrypted, idempotent and synchronisation-aware receipts."/><Boundary title="Never approve expenditure offline" text="Government authority remains with authorised online officers and Finance rails."/><Boundary title="Never invent payment success" text="Settlement appears only after an authoritative source acknowledgement."/></aside></div>}
function Boundary({yes=false,title,text}:{yes?:boolean;title:string;text:string}){return <div className="wbBoundaryRow"><i className={yes?"yes":"no"}>{yes?"✓":"!"}</i><span><b>{title}</b><small>{text}</small></span></div>}
