"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function DashboardBoot({children}:{children:ReactNode}){
  const [booting,setBooting]=useState(true);
  useEffect(()=>{const t=window.setTimeout(()=>setBooting(false),780);return()=>window.clearTimeout(t)},[]);
  return <>{booting&&<div className="dashboardBoot" role="status" aria-live="polite"><div className="bootCard"><div className="bootIdentity"><span>राज</span><div><b>RAJ-AGRIPAY</b><small>Department of Agriculture · Finance Operations</small></div></div><div className="bootStatus"><div><i className="done"/> Loading evaluation claim ledger</div><div><i className="done"/> Initialising scheme control packs</div><div><i/> Preparing district operations view</div></div><div className="bootProgress"><i/></div><p>EVALUATION SANDBOX · no live Government credentials</p></div></div>}{children}</>;
}
