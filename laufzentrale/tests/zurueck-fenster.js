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
 await tab("plan");
 await p.locator('#weekGrid [data-day]').first().click();await p.waitForTimeout(300);await L("Plan, Tag-Editor auf");
 await back();await L("Zurück");
 await p.click('#phEdit');await p.waitForTimeout(300);await L("Phasen auf");
 await back();await L("Zurück");
 await tab("aktivitaeten");
 await p.locator('#heatmap [data-hday]').last().click({force:true});await p.waitForTimeout(300);await L("Akt, Tages-Pop-up auf");
 await tab("rennen");await p.waitForTimeout(300);await L("Reiter Rennen geklickt (Pop-up zu)");
 await back();await L("Zurück");
 await back();await L("Zurück");
 await back();await L("Zurück");
 console.log(name,"\n "+log.join("\n "),"\n errors",errs);
}
await b.close();})();
