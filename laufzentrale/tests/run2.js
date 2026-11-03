const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [name,vp] of [["pc",{width:1280,height:900}],["handy",{width:390,height:844}]]){
 const ctx=await b.newContext({viewport:vp,deviceScaleFactor:2});const p=await ctx.newPage();
 const errs=[];p.on('pageerror',e=>errs.push(e.message));
 await p.addInitScript(()=>{if(!localStorage.getItem("lz-settings"))localStorage.setItem("lz-settings",JSON.stringify({splash:false}))});
 await p.goto('http://localhost:8765/page.html');await p.waitForTimeout(1500);
 await p.click('[data-am="ctx"]');await p.waitForTimeout(200);
 await p.locator('#anaPanel').screenshot({path:`${name}-ana2.png`});
 await p.click('.tab[data-view="runpotential"]');await p.waitForTimeout(2500);
 await p.screenshot({path:`${name}-rp.png`});
 const st=await p.evaluate(()=>({info:document.getElementById("rpInfo").textContent,sw:document.documentElement.scrollWidth,sh:document.documentElement.scrollHeight,ih:innerHeight,prof:localStorage.getItem("runPotentialProfile")}));
 console.log(name,errs,st);
 // simulate own edit in app
 await p.evaluate(()=>{const w=document.getElementById("rpFrame").contentWindow;const pr=JSON.parse(w.localStorage.getItem("runPotentialProfile"));pr.weight=99;w.localStorage.setItem("runPotentialProfile",JSON.stringify(pr));});
 await p.waitForTimeout(300);
 console.log("after own edit:",await p.evaluate(()=>[document.getElementById("rpInfo").textContent,document.getElementById("rpSync").hidden]));
 await p.click('#rpSync');await p.waitForTimeout(300);
 console.log("after sync:",await p.evaluate(()=>[document.getElementById("rpInfo").textContent,JSON.parse(localStorage.getItem("runPotentialProfile")).weight]));
 await ctx.close();
}
await b.close();})();
