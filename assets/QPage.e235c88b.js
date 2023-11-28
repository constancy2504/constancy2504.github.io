import{u as y,a as m}from"./use-dark.2fd35600.js";import{c as i,h as d}from"./render.bc8e874d.js";import{c as s,h as l,g,e as c,f as t,j as q,A as v}from"./index.f33f12ab.js";var b=i({name:"QCard",props:{...y,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:o}){const{proxy:{$q:r}}=g(),e=m(a,r),u=s(()=>"q-card"+(e.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>l(a.tag,{class:u.value},d(o.default))}}),x=i({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:o}){const{proxy:{$q:r}}=g(),e=c(q,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(v,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const f=s(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:r.screen.height;return a.styleFn(n,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":r.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":r.screen.height-n+"px"}}),h=s(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>l("main",{class:h.value,style:f.value},d(o.default))}});export{x as Q,b as a};
