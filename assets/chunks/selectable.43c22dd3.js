import{g as f,r as p,o as b,f as y,u as h,_ as S,w as j,b as K,K as O,t as N,q as g,c as x,a as $,aS as P,F as z}from"../app.80d93473.js";const T=f({__name:"basic",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,r="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),n=u(r,++a);return{id:n,label:n,children:c?s(e,t,c,l+1,n):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=p("el-tree-v2");return b(),y(o,{data:h(d),props:_,height:208},null,8,["data"])}}});var I=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"}));const w=f({__name:"custom-node",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,r="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),n=u(r,++a);return{id:n,label:n,children:c?s(e,t,c,l+1,n):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=p("el-tree-v2");return b(),y(o,{data:h(d),props:_,height:208},{default:j(({node:l})=>[K("span",{class:O(["prefix",{"is-leaf":l.isLeaf}])},"[ElementPlus]",2),K("span",null,N(l.label),1)]),_:1},8,["data"])}}});var A=S(w,[["__scopeId","data-v-612282da"]]),R=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const V=f({__name:"default-state",setup(m){const u=(r,a)=>`${r}-${a}`,s=(r,a,c,n=1,M="node")=>{let k=0;return Array.from({length:c}).fill(n).map(()=>{const v=n===r?0:Math.round(Math.random()*a),i=u(M,++k);return{id:i,label:i,children:v?s(r,a,v,n+1,i):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40),e=[],t=[];for(const r of d){const a=r.children;if(a){t.push(r.id),e.push(a[0].id);break}}const o=g(e),l=g(t);return(r,a)=>{const c=p("el-tree-v2");return b(),y(c,{data:h(d),height:208,props:_,"show-checkbox":"","default-checked-keys":o.value,"default-expanded-keys":l.value},null,8,["data","default-checked-keys","default-expanded-keys"])}}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const B=f({__name:"disabled",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,r="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),n=u(r,++a);return{id:n,label:n,children:c?s(e,t,c,l+1,n):void 0}})},_={value:"id",label:"label",children:"children",disabled:"disabled"},d=s(4,30,40);return(e,t)=>{const o=p("el-tree-v2");return b(),y(o,{data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const E=f({__name:"filter",setup(m){const u=(r,a)=>`${r}-${a}`,s=(r,a,c,n=1,M="node")=>{let k=0;return Array.from({length:c}).fill(n).map(()=>{const v=n===r?0:Math.round(Math.random()*a),i=u(M,++k);return{id:i,label:i,children:v?s(r,a,v,n+1,i):void 0}})},_=g(""),d=g(),e=s(4,30,5),t={value:"id",label:"label",children:"children"},o=r=>{d.value.filter(r)},l=(r,a)=>a.label.includes(r);return(r,a)=>{const c=p("el-input");return b(),x(z,null,[$(c,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=n=>_.value=n),placeholder:"Please enter keyword",onInput:o},null,8,["modelValue"]),$(h(P),{ref_key:"treeRef",ref:d,data:h(e),props:t,"filter-method":l,height:208},null,8,["data"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const q=f({__name:"selectable",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,l=1,r="node")=>{let a=0;return Array.from({length:o}).fill(l).map(()=>{const c=l===e?0:Math.round(Math.random()*t),n=u(r,++a);return{id:n,label:n,children:c?s(e,t,c,l+1,n):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=p("el-tree-v2");return b(),y(o,{data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"}));export{I as _,R as a,D as b,L as c,Q as d,U as e};
