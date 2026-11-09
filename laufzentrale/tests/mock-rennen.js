(function(){
const pad=n=>String(n).padStart(2,"0");const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const day=n=>{const d=new Date();d.setDate(d.getDate()-n);return iso(d);};
let recs="";let i=1;
for(let n=0;n<85;n+=2){const km=n%14===0?20:8+(n%5);const pace=n%6===0?270:320;const dur=km*pace;
 const ts=Math.floor(new Date(day(n)+"T07:00:00").getTime()/1000);
 recs+=`${i++}. Run — ${day(n)}\nLocation: Testlauf ${n}\nSportType: 100\nDistance: ${km} km\nDuration: ${Math.floor(dur/3600)}:${pad(Math.floor(dur%3600/60))}:${pad(dur%60)}\nAverage Pace: ${Math.floor(pace/60)}:${pad(pace%60)}\nAvg HR: ${140+n%10}\nLabelId: 9000${n}\nstartTimestamp=${ts} endTimestamp=${ts+dur}\n\n`;}
let hrv="",rhr="",sleep="",load="";
for(let n=0;n<30;n++){hrv+=`${day(n)}:\n  HRV Avg: ${50+n%7} ms — Normal\n  Normal Range: 45 - 60 ms\n  Baseline: 52\n`;rhr+=`${day(n)}: ${48+n%4} bpm\n`;load+=`${day(n)}\nComment: Optimized\nShort-Term Load: ${60+n%9}\nLong-Term Load: 58\nLoad Ratio: 1.05\n`;}
for(let n=0;n<7;n++)sleep+=`${day(n)}\nSleep Score: 78\nMain Sleep (asleep): 7h 20min\nDeep Sleep Ratio: 18%\nREM Ratio: 22%\n`;
const laps={lapGroups:[{lapDistance:100000,laps:Array.from({length:8},(_,k)=>({distance:100000,time:300+k*2,avgPace:300+k*2,adjustedPace:298,avgHr:140+k,maxHr:150+k,elevGain:5,totalDescent:4,avgCadence:172}))},{type:-1,laps:[{distance:800000,time:2460,avgPace:307,avgHr:144,maxHr:158,elevGain:40,totalDescent:32,avgCadence:172}]}]};
const T={querySportRecords:recs,querySleepHrv:hrv,queryRestingHeartRate:rhr,querySleepOverview:sleep,queryRecoveryStatus:"Recovery: 92%\nLevel: Good",queryTrainingLoadAssessment:load,
 queryFitnessAssessmentOverview:"VO2max: 55\nRunning Level: 80\nThreshold Pace: 4:15\n5 km Prediction: 19:30\n10 km Prediction: 40:30\nHalf Marathon Prediction: 1:30:00\nMarathon Prediction: 3:10:00",queryUserInfo:"Nickname: Tester\nAge: 45\nWeight: 72\nGender: Male",queryActivityLapData:JSON.stringify(laps)};
const store={plan:{},races:{"rt":{name:"Rursee-Test",date:day(0),dist:20,goal:5500,goalTentative:true,course:1.1,courseNote:"223 hm",priority:"B",intent:"test",history:[{date:"2024-11-03",dist:20.1,dur:5750,hr:158,kp:[300,290,288,295,300,310,280,285,290,292,288,286,300,305,290,280,275,270,268,265],kg:[290,285,286,290,292,295,285,288,289,290,287,286,292,296,289,284,280,276,272,268],up:[14,10,19,8,5,30,2,4,6,8,1,0,22,25,3,1,0,0,2,1]}]},"rt23":{name:"Rursee-Lauf 2023",date:"2023-11-05",dist:20,result:5820,useInModel:true},"kandel-2027":{name:"Bienwald Marathon Kandel",date:"2027-03-07",dist:42.195,goal:11400,intent:"goal",priority:"A"},"hm-2026":{name:"HM Test",date:"2026-09-13",dist:21.0975,result:5520,useInModel:true},"zehn-2026":{name:"10k Test",date:"2026-06-01",dist:10,result:2460,useInModel:true}},analyses:{},forecasts:{"rt_a":{race:"rt",date:day(2),pred:5650,prob:0.3},"rt_b":{race:"rt",date:day(1),pred:5600,prob:0.4}}};
store.plan[day(0)]={type:"easy",title:"Locker",km:9,date:day(0)};store.plan[day(-1)]={type:"quality",title:"5 × 1000 m",km:12,date:day(-1)};
const coll=name=>({get:async()=>({docs:Object.entries(store[name]||{}).map(([id,v])=>({id,data:()=>v}))}),doc:id=>({get:async()=>({exists:!!(store[name]||{})[id],data:()=>(store[name]||{})[id]}),set:async v=>{(store[name]=store[name]||{})[id]=v;},update:async v=>{store[name][id]={...store[name][id],...v};},delete:async()=>{delete store[name][id];}})});
window.__prompts=[];
const sample=async(p,o)=>{const t=typeof p==="string"?p:p[0].content;window.__prompts.push(t);const txt="Fazit: Test-Antwort.\nGut: alles.";if(o&&o.onText)o.onText({text:"Fazit: Test"});await new Promise(r=>setTimeout(r,50));return{text:txt};};
sample.limits=async()=>({tools:false});
window.claude={use:async k=>k==="mcp"?{callTool:async(s,t)=>({payload:T[t]||""}),describeTool:async()=>({})}:k==="db"?{collection:coll}:k==="sample"?sample:k==="user"?{id:async()=>"u1"}:null};
window.__store=store;
})();
