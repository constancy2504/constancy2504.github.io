import{c as d,h as g}from"./render.e62c66a6.js";import{i as c,l as t,j as i,k as h,q as f,H as m,g as y,_ as x,L as _,M as v,N as C,O as $,W as P}from"./index.7084c8d6.js";var Q=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:s}}=y(),e=c(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=i(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:s.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":s.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":s.screen.height-a+"px"}}),u=i(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},g(o.default))}}),q="/assets/quasar-logo-vertical.20d65235.svg";const F=_({name:"IndexPage"}),B=P("img",{alt:"Quasar logo",src:q,style:{width:"200px",height:"200px"}},null,-1);function H(n,o,s,e,l,r){return v(),C(Q,{class:"flex flex-center"},{default:$(()=>[B]),_:1})}var b=x(F,[["render",H]]);export{b as default};
