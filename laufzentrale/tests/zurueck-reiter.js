const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [name,vp] of [["pc",{width:1366,height:768}],["handy",{width:390,height:844}]]){
 const p=await b.newPage({viewport:vp});const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.goto('http://localhost:8765/start.html');
 await p.evaluate(()=>localStorage.setItem("lz-settings",JSON.stringify({splash:false})));
 await p.goto('http://localhost:8765/page.html#heute');await p.waitForTimeout(1800);
 const st=()=>p.evaluate(()=>({url:location.pathname+location.hash,view:document.querySelector('.tab[aria-selected="true"]')?.dataset.view,
   open:["settingsBg","phBg","edBg","dayPop"].filter(i=>document.getElementById(i)&&!document.getElementById(i).hidden).join(",")}));
 const back=async()=>{await p.goBack({waitUntil:'commit'}).catch(()=>{});await p.waitForTimeout(400);};
 const tab=async v=>{await p.locator(`.tab[data-view="${v}"]:visible`).first().click();await p.waitForTimeout(400);};
 const log=[];const L=async t=>log.push(t+" → "+JSON.stringify(await st()));
 await tab("aktivitaeten");await tab("plan");await L("Heute→Akt→Plan");
 await p.click('#settingsBtn');await p.waitForTimeout(300);await L("Einstellungen auf");
 await back();await L("Zurück");
 await back();await L("Zurück");
 await p.click('#settingsBtn');await p.waitForTimeout(300);await p.click('#settingsClose');await p.waitForTimeout(500);await L("Einst. auf+Schließen-Knopf");
 await p.click('#settingsBtn');await p.waitForTimeout(300);await p.keyboard.press('Escape');await p.waitForTimeout(500);await L("Einst. auf+Esc");
 await back();await L("Zurück");
 await back();await L("Zurück");
 await back();await L("Zurück (verlässt App)");
 console.log(name,"\n "+log.join("\n "),"\n errors",errs);
}
await b.close();})();
