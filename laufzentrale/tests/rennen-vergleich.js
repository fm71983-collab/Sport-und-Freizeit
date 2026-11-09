// Testet die Vergleiche (Ziel, Prognose, vorige Ausgabe) auf der Kachel und dauerhaft in der Tabelle. Voraussetzung: race.html = tests/mock-rennen.js + index.html auf http://localhost:8765.
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [name,vp] of [["pc",{width:1366,height:768}],["handy",{width:390,height:844}]]){
 const p=await b.newPage({viewport:vp});const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.goto('http://localhost:8765/start.html');await p.evaluate(()=>localStorage.setItem("lz-settings",JSON.stringify({splash:false})));
 await p.goto('http://localhost:8765/race.html#rennen');await p.waitForTimeout(2500);
 await p.click('[data-resyes="rt"]');await p.waitForTimeout(500);
 console.log(name,'Kachel kv:',(await p.locator('.race.done .kv').innerText()).replace(/\n+/g,' | '));
 console.log(name,'Tabelle:',(await p.locator('#pastRaces tbody tr').first().innerText()).replace(/\s+/g,' '));
 // 20 Tage später: Kachel weg, Vergleich bleibt
 await p.evaluate(()=>{const r=window.S?null:null;});
 await p.evaluate(()=>{ for(const id of Object.keys(S.races)) if(id==="rt"){S.races.rt.date=addDays(TODAY,-20);} renderRaces(); });
 console.log(name,'nach 20 Tagen: Kacheln',await p.locator('.race.done').count(),'| Tabelle:',(await p.locator('#pastRaces tbody tr').first().innerText()).replace(/\s+/g,' '));
 await p.locator('#pastRaces').scrollIntoViewIfNeeded();await p.locator('#pastRaces').screenshot({path:`${name}-table.png`});
 console.log(name,'scrollWidth',await p.evaluate(()=>document.documentElement.scrollWidth),'errors',errs);
}
await b.close();})();
