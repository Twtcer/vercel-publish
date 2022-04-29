import{g as h,n as f,r as s,o as c,f as b,w as t,a as o,d as l,k as $,_ as v,c as m,b as r,F as g,i as k,a7 as S}from"../app.01b76562.js";const T=h({setup(i){const _=f(!1);return(n,e)=>{const u=s("el-button"),a=s("el-tooltip");return c(),b(a,{disabled:_.value,content:"click to close tooltip function",placement:"bottom",effect:"light"},{default:t(()=>[o(u,{onClick:e[0]||(e[0]=d=>_.value=!_.value)},{default:t(()=>[l("click to "+$(_.value?"active":"close")+" tooltip function",1)]),_:1})]),_:1},8,["disabled"])}}});var kt=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const O={},j=l("trigger me");function C(i,_){const n=s("el-button"),e=s("el-tooltip");return c(),b(e,{content:"I am an el-tooltip"},{default:t(()=>[o(n,null,{default:t(()=>[j]),_:1})]),_:1})}var M=v(O,[["render",C]]),St=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));const B={},R={class:"tooltip-base-box"},z={class:"row center"},w=l("top-start"),L=l("top"),P=l("top-end"),U={class:"row"},D=l("left-start"),N=l("right-start"),V={class:"row"},E=l("left"),F=l("right"),H={class:"row"},I=l("left-end"),X=l("right-end"),Y={class:"row center"},q=l("bottom-start"),A=l("bottom"),G=l("bottom-end");function J(i,_){const n=s("el-button"),e=s("el-tooltip");return c(),m("div",R,[r("div",z,[o(e,{class:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:t(()=>[o(n,null,{default:t(()=>[w]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:t(()=>[o(n,null,{default:t(()=>[L]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:t(()=>[o(n,null,{default:t(()=>[P]),_:1})]),_:1})]),r("div",U,[o(e,{class:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:t(()=>[o(n,null,{default:t(()=>[D]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:t(()=>[o(n,null,{default:t(()=>[N]),_:1})]),_:1})]),r("div",V,[o(e,{class:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:t(()=>[o(n,{class:"mt-3 mb-3"},{default:t(()=>[E]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:t(()=>[o(n,null,{default:t(()=>[F]),_:1})]),_:1})]),r("div",H,[o(e,{class:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:t(()=>[o(n,null,{default:t(()=>[I]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:t(()=>[o(n,null,{default:t(()=>[X]),_:1})]),_:1})]),r("div",Y,[o(e,{class:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:t(()=>[o(n,null,{default:t(()=>[q]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:t(()=>[o(n,null,{default:t(()=>[A]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:t(()=>[o(n,null,{default:t(()=>[G]),_:1})]),_:1})])])}var K=v(B,[["render",J]]),Tt=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const Q=r("span",null,"Content",-1),W=l(" Hover me "),Z=h({setup(i){const _=f(!1);return(n,e)=>{const u=s("el-button"),a=s("el-tooltip");return c(),b(a,{visible:_.value,"onUpdate:visible":e[2]||(e[2]=d=>_.value=d)},{content:t(()=>[Q]),default:t(()=>[o(u,{onMouseenter:e[0]||(e[0]=d=>_.value=!0),onMouseleave:e[1]||(e[1]=d=>_.value=!1)},{default:t(()=>[W]),_:1})]),_:1},8,["visible"])}}});var Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));const tt={},et=l("hover me");function ot(i,_){const n=s("el-button"),e=s("el-tooltip");return c(),b(e,{content:"<span>The content can be <strong>HTML</strong></span>","raw-content":""},{default:t(()=>[o(n,null,{default:t(()=>[et]),_:1})]),_:1})}var nt=v(tt,[["render",ot]]),jt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"}));const lt={},_t=l(" multiple lines"),st=r("br",null,null,-1),at=l("second line "),ct=l("Top center");function rt(i,_){const n=s("el-button"),e=s("el-tooltip");return c(),b(e,{placement:"top"},{content:t(()=>[_t,st,at]),default:t(()=>[o(n,null,{default:t(()=>[ct]),_:1})]),_:1})}var it=v(lt,[["render",rt]]),Ct=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"}));const ut=l("Click to open tooltip"),dt=r("span",null," Some content ",-1),ft=h({setup(i){const _=f(),n=f(),e=f(!1);return(u,a)=>{const d=s("el-button"),x=s("el-tooltip");return c(),m(g,null,[r("div",null,[(c(),m(g,null,k(3,p=>o(d,{key:p,onMouseover:a[0]||(a[0]=y=>_.value=y.currentTarget),onClick:a[1]||(a[1]=y=>e.value=!e.value)},{default:t(()=>[ut]),_:2},1024)),64))]),o(x,{ref_key:"tooltipRef",ref:n,visible:e.value,"onUpdate:visible":a[2]||(a[2]=p=>e.value=p),"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":_.value,"virtual-triggering":"",trigger:"click","popper-class":"singleton-tooltip"},{content:t(()=>[dt]),_:1},8,["visible","virtual-ref"])],64)}}});var Mt=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"}));const pt={},mt=l("Dark"),bt=l("Light"),vt=l("Customized theme");function gt(i,_){const n=s("el-button"),e=s("el-tooltip");return c(),m(g,null,[o(e,{content:"Top center",placement:"top"},{default:t(()=>[o(n,null,{default:t(()=>[mt]),_:1})]),_:1}),o(e,{content:"Bottom center",placement:"bottom",effect:"light"},{default:t(()=>[o(n,null,{default:t(()=>[bt]),_:1})]),_:1}),o(e,{content:"Bottom center",effect:"customized"},{default:t(()=>[o(n,null,{default:t(()=>[vt]),_:1})]),_:1})],64)}var ht=v(pt,[["render",gt]]),Bt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"}));const xt=l("test"),yt=h({setup(i){const _=f(!1),n=f({getBoundingClientRect(){return e.value}}),e=f({top:0,left:0,bottom:0,right:0});return S(()=>{document.addEventListener("mousemove",u=>{e.value=DOMRect.fromRect({width:0,height:0,x:u.clientX,y:u.clientY})})}),(u,a)=>{const d=s("el-tooltip"),x=s("el-button");return c(),m(g,null,[o(d,{visible:_.value,"onUpdate:visible":a[0]||(a[0]=p=>_.value=p),content:"Bottom center",placement:"bottom",effect:"light",trigger:"click","virtual-triggering":"","virtual-ref":n.value},null,8,["visible","virtual-ref"]),o(x,{onClick:a[1]||(a[1]=p=>_.value=!_.value)},{default:t(()=>[xt]),_:1})],64)}}});var Rt=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));export{kt as _,St as a,Tt as b,Ot as c,jt as d,Ct as e,Mt as f,Bt as g,Rt as h};
