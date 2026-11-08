// Testet die Rückfrage "War dieser Lauf das Rennen?" (Ja/Nein). Voraussetzung: race.html = tests/mock-rennen.js + index.html auf http://localhost:8765.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [name,vp] of [["pc",{width:1366,height:768}],["handy",{width:390,height:844}]]){
 for(const answer of ["ja","nein"]){
 const p=await b.newPage({viewport:vp});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto('http://localhost:8765/start.html');
 await p.evaluate(()=>localStorage.setItem("lz-settings",JSON.stringify({splash:false})));
 await p.goto('http://localhost:8765/race.html#heute');await p.waitForTimeout(2500);
 const chips=await p.$$eval('.hx-chip',e=>e.map(x=>x.textContent.trim()));
 const db0=await p.evaluate(()=>window.__store.races.rt);
 await p.locator('.hx-chip',{hasText:'bestätigen'}).click();await p.waitForTimeout(500);
 if(answer==="ja") await p.screenshot({path:`${name}-ask.png`});
 const ask=(await p.locator('.race.ask').innerText()).replace(/\n+/g,' | ');
 const ups=await p.$$eval('#raceCards .race:not(.done):not(.ask) h2',e=>e.map(x=>x.textContent));
 await p.click(answer==="ja"?'[data-resyes="rt"]':'[data-resno="rt"]');await p.waitForTimeout(600);
 const db1=await p.evaluate(()=>window.__store.races.rt);
 const after={ask:await p.locator('.race.ask').count(),done:await p.locator('.race.done').count(),ups:await p.$$eval('#raceCards .race:not(.done):not(.ask) h2',e=>e.map(x=>x.textContent))};
 // Neu laden mit gleichem Speicher simulieren: Erkennung erneut auslösen
 await p.evaluate(()=>detectRaceResults());await p.waitForTimeout(400);
 const again=await p.locator('.race.ask').count();
 console.log(`${name}/${answer}\n vorher: result=${db0.result} cand=${JSON.stringify(db0.resultCand)}\n chips=${JSON.stringify(chips)}\n ask=${ask}\n upcoming vorher=${JSON.stringify(ups)}\n nachher db=${JSON.stringify({result:db1.result,useInModel:db1.useInModel,cand:db1.resultCand,dec:db1.declinedLabels})}\n nachher karten=${JSON.stringify(after)} erneut gefragt=${again}\n errors=${JSON.stringify(errs)}`);
 await p.close();
}}
await b.close();})();
