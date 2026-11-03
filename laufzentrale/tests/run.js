const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [name,vp] of [["pc",{width:1280,height:900}],["handy",{width:390,height:844}]]){
 const p=await b.newPage({viewport:vp,deviceScaleFactor:name==="handy"?2:1});
 const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
 await p.addInitScript(()=>localStorage.setItem("lz-settings",JSON.stringify({splash:false})));
 await p.goto('file://'+process.cwd()+'/page.html');await p.waitForTimeout(1500);
 await p.click('#anaBtn');await p.waitForTimeout(400);
 await p.locator('#anaPanel').screenshot({path:`${name}-single.png`});
 await p.click('[data-am="ctx"]');await p.click('[data-ac="m3"]');await p.waitForTimeout(200);
 await p.click('#anaBtn');await p.waitForTimeout(400);
 await p.locator('#anaPanel').screenshot({path:`${name}-ctx.png`});
 const pr=await p.evaluate(()=>window.__prompts.filter(x=>x.includes("letzte Trainingseinheit")||x.includes("einzelne Trainingseinheit")));
 const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
 console.log(name,"errors:",errs,"scrollWidth",sw,"prompts",pr.length);
 if(name==="pc"){require('fs').writeFileSync('prompt-single.txt',pr[0]);require('fs').writeFileSync('prompt-ctx.txt',pr[1]);}
 const saved=await p.evaluate(()=>Object.keys(window.__store.analyses));console.log("saved",saved);
 await p.screenshot({path:`${name}-full.png`,fullPage:false});
}
await b.close();})();
