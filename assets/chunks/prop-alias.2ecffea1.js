import{g as h,n as c,r as p,o as b,c as y,b as u,a as r,w as l,k as m,F as x,d as f,f as V}from"../app.01b76562.js";const C=u("p",{style:{"text-align":"center",margin:"0 0 20px"}}," Customize data items using render-content ",-1),O={style:{"text-align":"center"}},T=f("Operation"),$=f("Operation"),z=u("p",{style:{"text-align":"center",margin:"50px 0 20px"}}," Customize data items using scoped slot ",-1),S={style:{"text-align":"center"}},D=f("Operation"),j=f("Operation"),B=h({setup(v){const i=c((()=>{const a=[];for(let e=1;e<=15;e++)a.push({key:e,label:`Option ${e}`,disabled:e%4===0});return a})()),d=c([1]),o=c([1]),t=(a,e)=>a("span",null,e.label),_=(a,e,n)=>{console.log(a,e,n)};return(a,e)=>{const n=p("el-button"),g=p("el-transfer");return b(),y(x,null,[C,u("div",O,[r(g,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],"render-content":t,titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:i.value,onChange:_},{"left-footer":l(()=>[r(n,{class:"transfer-footer",size:"small"},{default:l(()=>[T]),_:1})]),"right-footer":l(()=>[r(n,{class:"transfer-footer",size:"small"},{default:l(()=>[$]),_:1})]),_:1},8,["modelValue","data"]),z,u("div",S,[r(g,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=s=>d.value=s),style:{"text-align":"left",display:"inline-block"},filterable:"","left-default-checked":[2,3],"right-default-checked":[1],titles:["Source","Target"],"button-texts":["To left","To right"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:i.value,onChange:_},{default:l(({option:s})=>[u("span",null,m(s.key)+" - "+m(s.label),1)]),"left-footer":l(()=>[r(n,{class:"transfer-footer",size:"small"},{default:l(()=>[D]),_:1})]),"right-footer":l(()=>[r(n,{class:"transfer-footer",size:"small"},{default:l(()=>[j]),_:1})]),_:1},8,["modelValue","data"])])])],64)}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const F=h({setup(v){const i=c((()=>{const o=[];for(let t=1;t<=15;t++)o.push({value:t,desc:`Option ${t}`,disabled:t%4===0});return o})()),d=c([]);return(o,t)=>{const _=p("el-transfer");return b(),V(_,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a),props:{key:"value",label:"desc"},data:i.value},null,8,["modelValue","data"])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{U as _,w as a};
