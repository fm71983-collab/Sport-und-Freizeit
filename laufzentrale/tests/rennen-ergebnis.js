// Testet Rennergebnis-Erkennung. Voraussetzung: race.html = tests/mock-rennen.js + index.html, per http://localhost:8765 ausgeliefert.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [name,vp] of [["pc",{width:1366,height:768}],["handy",{width:390,height:844}]]){
 const p=await b.newPage({viewport:vp});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.goto('http://localhost:8765/start.html');
 await p.evaluate(()=>localStorage.setItem("lz-settings",JSON.stringify({splash:false})));
 await p.goto('http://localhost:8765/race.html#rennen');await p.waitForTimeout(2500);
 await p.screenshot({path:`${name}-race.png`});
 const card=p.locator('.race.done').first();
 console.log(name,'card:',await card.count(), (await card.innerText()).replace(/\n+/g,' | '));
 console.log(name,'upcoming names:',await p.$$eval('#raceCards .race:not(.done) h2',e=>e.map(x=>x.textContent)));
 console.log(name,'past row:',(await p.locator('#pastRaces tbody tr').first().innerText()).replace(/\s+/g,' '));
 const st=await p.evaluate(()=>window.__store.races.rt);console.log(name,'db:',JSON.stringify(st));
 await p.locator('.tab[data-view="heute"]:visible').first().click();await p.waitForTimeout(600);
 console.log(name,'heute chips:',await p.$$eval('.hx-chip',e=>e.map(x=>x.textContent.trim())));
 const pr=await p.evaluate(()=>window.__prompts.join('\n---\n'));console.log(name,'prompt has results:',/Letzte Rennergebnisse: [^\n]*Rursee-Test[^\n]*/.exec(pr)?.[0]);
 await p.locator('.tab[data-view="plan"]:visible').first().click();await p.waitForTimeout(600);
 console.log(name,'form kpis:',await p.$$eval('.kpi',e=>e.filter(x=>/Form/.test(x.textContent)).map(x=>x.textContent.replace(/\s+/g,' ').trim().slice(0,40))));
 // Aktionen
 await p.locator('.tab[data-view="rennen"]:visible').first().click();await p.waitForTimeout(500);
 await p.click('[data-resfix="rt"]');await p.fill('[data-resin="rt"]','1:29:50');await p.click('[data-ressave="rt"]');await p.waitForTimeout(400);
 console.log(name,'nach Korrektur:',await p.locator('.race.done .res-time').innerText(), JSON.stringify(await p.evaluate(()=>({r:window.__store.races.rt.result,a:window.__store.races.rt.resultAuto}))));
 await p.screenshot({path:`${name}-race2.png`});
 console.log(name,'errors',errs);
}
await b.close();})();
