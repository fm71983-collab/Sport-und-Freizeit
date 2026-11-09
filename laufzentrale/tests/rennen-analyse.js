// Testet die KI-Rennanalyse (Knopf, Prompt-Inhalt, Speichern). Voraussetzung: race.html = tests/mock-rennen.js + index.html auf http://localhost:8765.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [name,vp] of [["pc",{width:1366,height:768}],["handy",{width:390,height:844}]]){
 const p=await b.newPage({viewport:vp});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto('http://localhost:8765/start.html');
 await p.evaluate(()=>localStorage.setItem("lz-settings",JSON.stringify({splash:false})));
 await p.goto('http://localhost:8765/race.html#rennen');await p.waitForTimeout(2500);
 await p.click('[data-resyes="rt"]');await p.waitForTimeout(500);
 const btn=p.locator('[data-raceana="rt"]');console.log(name,'Knopf:',await btn.innerText());
 const n0=await p.evaluate(()=>window.__prompts.length);
 await btn.click();await p.waitForTimeout(1200);
 const prompt=await p.evaluate(n=>window.__prompts.slice(n).find(x=>x.includes("Analysiere mein Rennen")),n0);
 if(name==="pc") require('fs').writeFileSync('race-prompt.txt',prompt||"");
 console.log(name,'Prompt-Abschnitte:',["RENNEN:","Wunschzielzeit","App-Prognose vor dem Start","Verlauf der App-Prognose","FRÜHERE AUSGABEN","2024-11-03","2023-11-05","km-Paces","RENNVERLAUF","Rollierende Trainingswoche","Trainingsplan:","KOMMENDE RENNEN","ohne dieses Rennen"].map(k=>k+(prompt&&prompt.includes(k)?"✓":"✗")).join(" "));
 console.log(name,'Ausgabe:',await p.locator('[data-raout="rt"]').innerText(),'| Knopf jetzt:',await btn.innerText(),'| gespeichert:',!!(await p.evaluate(()=>window.__store.races.rt.analysis)));
 await p.locator('.race.done').scrollIntoViewIfNeeded();await p.locator('.race.done').screenshot({path:`${name}-ana.png`});
 console.log(name,'scrollWidth',await p.evaluate(()=>document.documentElement.scrollWidth),'errors',errs);
}
await b.close();})();
