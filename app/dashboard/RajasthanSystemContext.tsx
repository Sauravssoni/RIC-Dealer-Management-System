"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const rails = [
  {name:"RajKisan",role:"Dealer / licence source",state:"SOURCE"},
  {name:"IFMS 3.0",role:"Vendor + finance authority",state:"FINANCE"},
  {name:"Raj Sewa Dwaar",role:"State API gateway",state:"GATEWAY"},
  {name:"e-Sanchar 3.0",role:"Dealer messaging",state:"MESSAGING"},
  {name:"RajDharaa / RajMaster",role:"GIS + administrative master",state:"MASTER DATA"},
] as const;

export default function RajasthanSystemContext(){
  const [truthHost,setTruthHost]=useState<Element|null>(null);
  const [topHost,setTopHost]=useState<Element|null>(null);
  useEffect(()=>{
    setTruthHost(document.querySelector(".truthStrip"));
    setTopHost(document.querySelector(".opsTopRight"));
  },[]);

  return <>
    {topHost&&createPortal(<div className="rajContextIdentity"><span>Rajasthan SSO pattern</span><b>Departmental officer workspace</b></div>,topHost)}
    {truthHost&&createPortal(<div className="rajSystemRail" aria-label="Rajasthan existing systems context">
      <div className="rajSystemIntro"><span>BUILT AROUND EXISTING RAJASTHAN SYSTEMS</span><b>Premium orchestration layer · not a replacement portal</b></div>
      <div className="rajRailChips">{rails.map(r=><div className="rajRailChip" key={r.name}><span>{r.state}</span><b>{r.name}</b><small>{r.role}</small></div>)}</div>
      <div className="rajAdds"><span>RAJ-AGRIPAY ADDS</span><b>Dealer Passport · Claim Truth · Scheme Packs · owned exceptions · district intelligence · claim→UTR reconciliation</b></div>
    </div>,truthHost)}
  </>;
}
