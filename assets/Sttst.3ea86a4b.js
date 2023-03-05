import{u as z,h as G,l as U,f as R,b as F,g as p}from"./QCard.71e20d48.js";import{p as X,Q as P,n as V,o as I}from"./QItem.fb123ddb.js";import{q as N,Q as J,a as S,r as K}from"./QBtn.ea678cb8.js";import{c as E,h as T}from"./render.6891f3b0.js";import{j as B,k as m,r,w as L,E as W,g as Y,A as Z,M as C,X as ee,W as e,P as s,O as u,V as g,R as l,F as M,N as $,S as H}from"./index.2fc2016b.js";import{Q as ne,_ as le}from"./BarChart.945b79f9.js";import{u as te,C as O}from"./collect.d5289fbf.js";import"./pinia.36c8a321.js";var oe=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(n,{slots:d}){const a=B(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(c=>n[c]===!0).map(c=>`q-btn-group--${c}`).join(" ");return`q-btn-group row no-wrap${i.length>0?" "+i:""}`+(n.spread===!0?" q-btn-group--spread":" inline")});return()=>m("div",{class:a.value},T(d.default))}});const ae=Object.keys(N),se=n=>ae.reduce((d,a)=>{const i=n[a];return i!==void 0&&(d[a]=i),d},{});var ue=E({name:"QBtnDropdown",props:{...N,...z,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(n,{slots:d,emit:a}){const{proxy:i}=Y(),c=r(n.modelValue),_=r(null),v=G(),f=B(()=>{const t={"aria-expanded":c.value===!0?"true":"false","aria-haspopup":"true","aria-controls":v,"aria-label":n.toggleAriaLabel||i.$q.lang.label[c.value===!0?"collapse":"expand"](n.label)};return(n.disable===!0||n.split===!1&&n.disableMainBtn===!0||n.disableDropdown===!0)&&(t["aria-disabled"]="true"),t}),x=B(()=>"q-btn-dropdown__arrow"+(c.value===!0&&n.noIconAnimation===!1?" rotate-180":"")+(n.split===!1?" q-btn-dropdown__arrow-container":"")),q=B(()=>K(n)),w=B(()=>se(n));L(()=>n.modelValue,t=>{_.value!==null&&_.value[t?"show":"hide"]()}),L(()=>n.split,A);function k(t){c.value=!0,a("beforeShow",t)}function y(t){a("show",t),a("update:modelValue",!0)}function D(t){c.value=!1,a("beforeHide",t)}function Q(t){a("hide",t),a("update:modelValue",!1)}function o(t){a("click",t)}function b(t){Z(t),A(),a("click",t)}function h(t){_.value!==null&&_.value.toggle(t)}function j(t){_.value!==null&&_.value.show(t)}function A(t){_.value!==null&&_.value.hide(t)}return Object.assign(i,{show:j,hide:A,toggle:h}),W(()=>{n.modelValue===!0&&j()}),()=>{const t=[m(J,{class:x.value,name:n.dropdownIcon||i.$q.iconSet.arrow.dropdown})];return n.disableDropdown!==!0&&t.push(m(U,{ref:_,id:v,class:n.contentClass,style:n.contentStyle,cover:n.cover,fit:!0,persistent:n.persistent,noRouteDismiss:n.noRouteDismiss,autoClose:n.autoClose,anchor:n.menuAnchor,self:n.menuSelf,offset:n.menuOffset,separateClosePopup:!0,transitionShow:n.transitionShow,transitionHide:n.transitionHide,transitionDuration:n.transitionDuration,onBeforeShow:k,onShow:y,onBeforeHide:D,onHide:Q},d.default)),n.split===!1?m(S,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:n.disable===!0||n.disableMainBtn===!0,noWrap:!0,round:!1,onClick:o},{default:()=>T(d.label,[]).concat(t),loading:d.loading}):m(oe,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:n.rounded,square:n.square,...q.value,glossy:n.glossy,stretch:n.stretch},()=>[m(S,{class:"q-btn-dropdown--current",...w.value,disable:n.disable===!0||n.disableMainBtn===!0,noWrap:!0,round:!1,onClick:b},{default:d.label,loading:d.loading}),m(S,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...q.value,disable:n.disable===!0||n.disableDropdown===!0,rounded:n.rounded,color:n.color,textColor:n.textColor,dense:n.dense,size:n.size,padding:n.padding,ripple:n.ripple},()=>t)])}}});const re={class:"q-ma-md"},ie=e("div",{class:"text-h6"},"Description",-1),de=e("br",null,null,-1),ce=e("br",null,null,-1),_e=e("br",null,null,-1),be=e("strong",null,"\uBD80\uC11C\uC7A5,\uCD1D\uBB34",-1),me=e("br",null,null,-1),fe=e("strong",null,"\uD589\uC815\uBD80\uC7A5",-1),he=e("br",null,null,-1),ge=e("br",null,null,-1),ve=e("strong",null,"\uC9C0\uC5ED\uC7A5,\uBD80\uC9C0\uC5ED\uC7A5",-1),we=e("br",null,null,-1),Be=e("strong",null,"\uC9C0\uC5ED \uD589\uC815\uD300\uC7A5",-1),qe=e("br",null,null,-1),pe=e("br",null,null,-1),Ce=e("strong",null,"\uD300\uC7A5",-1),Se=e("br",null,null,-1),xe=e("strong",null,"\uAD6C\uC5ED\uC7A5",-1),ke=e("br",null,null,-1),ye={class:"q-ma-md"},De={class:"q-ma-md"},Qe=e("div",{class:"text-h6"},"\uD604\uD669 \uC694\uC57D : \uAD50\uC721",-1),Ae=e("strong",null,"\uC804\uCCB4 : ",-1),Pe=e("br",null,null,-1),Ve=e("br",null,null,-1),Ie=e("strong",null,"\uCD1D\uD68C\uAD50\uC721",-1),Me=e("br",null,null,-1),$e=e("span",null,"\uC5F0\uC218\uC6D0(\uBCF8\uBC29) : 150\uBA85",-1),He=e("br",null,null,-1),Oe=e("span",null,"\uC778\uC2DC\uC13C(\uBCF8\uBC29) : 99\uBA85",-1),je=e("br",null,null,-1),Re=e("span",null,"\uC5F0\uC218\uC6D0(\uC7AC\uBC29) : 81\uBA85",-1),Le=e("br",null,null,-1),Ne=e("span",null,"\uC778\uC2DC\uC13C(\uC7AC\uBC29) : 24\uBA85",-1),Ee=e("br",null,null,-1),Te=e("span",null,"\uC778\uC2DC\uC13C(\uC7AC\uBC29) : 15\uBA85",-1),We=e("br",null,null,-1),ze=e("span",null,"\uBD88\uCC38 : 20\uBA85",-1),Ge=e("br",null,null,-1),Ue=e("strong",null,"\uD558\uB298\uB3C5\uB9BD\uAD70\uAD50\uC721",-1),Fe=e("br",null,null,-1),Xe=e("span",null,"\uBCF8\uBC29 : 150\uBA85",-1),Je=e("br",null,null,-1),Ke=e("span",null,"\uC7AC\uBC29 : 81\uBA85",-1),Ye=e("br",null,null,-1),Ze=e("span",null,"\uBD88\uCC38 : 20\uBA85",-1),en=e("br",null,null,-1),nn=e("strong",null,"\uD3C9\uC804\uB2E8\uAD50\uC721",-1),ln=e("br",null,null,-1),tn=e("span",null,"\uBCF8\uBC29 : 150\uBA85",-1),on=e("br",null,null,-1),an=e("span",null,"\uC7AC\uBC29 : 81\uBA85",-1),sn=e("br",null,null,-1),un=e("span",null,"\uBD88\uCC38 : 20\uBA85",-1),rn={class:"q-ma-md"},dn={class:"q-ma-md"},cn={class:"q-pa-lg flex flex-center"},Bn={__name:"Sttst",setup(n){const d=te();let a=r("\uAD50\uC721");const i=o=>{console.log("onItemClick"),f.value=o,a.value=o},c=r("\uAD50\uC721"),_=r("\uC608\uBC30"),v=r("\uD5CC\uAE08");let f=r("\uAD50\uC721");const x=r(!1);r("member");const q=d.rows.edu;r([]);const w=r(1),k=r(10),y=r(7);W(()=>{});const D=r([{name:"squad",required:!0,label:"\uAD6C\uC5ED",align:"center",filed:o=>o.name,sortable:!0},{name:"name",required:!0,label:"\uC774\uB984",align:"center",field:o=>o.name,sortable:!0},{name:"pstn",required:!0,label:"\uC9C1\uCC45",align:"center",field:o=>o.pstn,sortable:!0},{name:"id",required:!0,label:"\uD604\uD669",align:"center",field:o=>o.id,sortable:!0},{name:"state",label:"\uC0C1\uD0DC",align:"center",field:o=>o.state,sortable:!0}]);r([{name:"pstn",label:"\uC9C1\uCC45",align:"center",field:o=>o.pstn,sortable:!0},{name:"name",label:"\uC774\uB984",align:"center",field:o=>o.name,sortable:!0},{name:"team",label:"\uD300",align:"center",field:o=>o.team,sortable:!0},{name:"squad",label:"\uAD6C\uC5ED",align:"center",field:o=>o.squad,sortable:!0}]);const Q=r({rowsPerPage:20});return r({rowsPerPage:20}),(o,b)=>(C(),ee("div",null,[e("div",re,[s(R,{class:"my-card q-mb-md"},{default:u(()=>[s(p,null,{default:u(()=>[ie]),_:1}),s(p,{class:"q-pt-none"},{default:u(()=>[l(" \uAD50\uC721,\uC608\uBC30,\uD5CC\uAE08\uC758 \uD1B5\uACC4 \uD604\uD669\uC744 \uBCFC \uC218 \uC788\uB294 \uCC3D\uC785\uB2C8\uB2E4."),de,l(" \uC544\uB798 \uD654\uBA74\uC740 \uC0D8\uD50C\uC774\uBA70 DB\uC5F0\uB3D9\uC774 \uC644\uB8CC\uB418\uBA74 \uC9C1\uCC45\uB9C8\uB2E4 \uB2E4\uB974\uAC8C \uBCF4\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4."),ce,_e,l(" - "),be,l(" : \uBD80\uC11C\uC6D0\uB4E4\uC758 \uC804\uCCB4 \uD1B5\uACC4"),me,l(" - "),fe,l(" : \uAC01 \uD589\uC815\uD56D\uBAA9\uBCC4 \uC804\uCCB4 \uD1B5\uACC4"),he,l(" \xA0 ex) \uBD80\uC11C\uD68C\uACC4 : \uBD80\uC11C\uC6D0\uB4E4\uC758 \uC804\uCCB4 \uD68C\uACC4\uD1B5\uACC4"),ge,l(" - "),ve,l(" : \uC9C0\uC5ED\uC6D0\uB4E4\uC758 \uC804\uCCB4 \uD1B5\uACC4"),we,l(" - "),Be,l(" : \uAC01 \uD589\uC815\uD56D\uBAA9\uBCC4 \uC804\uCCB4 \uD1B5\uACC4"),qe,l(" \xA0 ex) \uC9C0\uC5ED\uD68C\uACC4 : \uC9C0\uC5ED\uC6D0\uB4E4\uC758 \uC804\uCCB4 \uD68C\uACC4\uD1B5\uACC4"),pe,l(" - "),Ce,l(" : \uD300\uC6D0\uB4E4\uC758 \uC804\uCCB4 \uD1B5\uACC4"),Se,l(" - "),xe,l(" : \uAD6C\uC5ED\uC6D0\uB4E4\uC758 \uC804\uCCB4 \uD1B5\uACC4"),ke]),_:1})]),_:1})]),e("div",ye,[s(ue,{color:"primary",label:g(f)},{default:u(()=>[s(X,null,{default:u(()=>[M((C(),$(I,{disable:g(a)=="\uAD50\uC721",clickable:"",onClick:b[0]||(b[0]=h=>i(c.value))},{default:u(()=>[s(P,null,{default:u(()=>[s(V,null,{default:u(()=>[l(H(c.value),1)]),_:1})]),_:1})]),_:1},8,["disable"])),[[O]]),M((C(),$(I,{disable:g(a)=="\uC608\uBC30",clickable:"",onClick:b[1]||(b[1]=h=>i(_.value))},{default:u(()=>[s(P,null,{default:u(()=>[s(V,null,{default:u(()=>[l(H(_.value),1)]),_:1})]),_:1})]),_:1},8,["disable"])),[[O]]),M((C(),$(I,{disable:g(a)=="\uD5CC\uAE08",clickable:"",onClick:b[2]||(b[2]=h=>i(v.value))},{default:u(()=>[s(P,null,{default:u(()=>[s(V,null,{default:u(()=>[l(H(v.value),1)]),_:1})]),_:1})]),_:1},8,["disable"])),[[O]])]),_:1})]),_:1},8,["label"])]),e("div",De,[s(R,{class:"my-card q-mb-md"},{default:u(()=>[s(p,null,{default:u(()=>[Qe]),_:1}),s(p,{class:"q-pt-none"},{default:u(()=>[Ae,l(" 400\uBA85 "),Pe,Ve,l(" - "),Ie,Me,$e,l(),He,Oe,l(),je,Re,l(),Le,Ne,l(),Ee,Te,l(),We,ze,Ge,l(" - "),Ue,Fe,Xe,l(),Je,Ke,l(),Ye,Ze,en,l(" - "),nn,ln,tn,l(),on,an,l(),sn,un]),_:1})]),_:1})]),e("div",rn,[s(F,{title:g(f)+" \uD1B5\uACC4",rows:g(q),columns:D.value,color:"amber","hide-pagination":"",loading:x.value,pagination:Q.value},null,8,["title","rows","columns","loading","pagination"])]),e("div",dn,[s(S,{color:"green",label:"Excel \uCD94\uCD9C\uD558\uAE30"})]),e("div",cn,[s(ne,{modelValue:w.value,"onUpdate:modelValue":b[3]||(b[3]=h=>w.value=h),color:"primary",max:k.value,"max-pages":y.value,"boundary-numbers":""},null,8,["modelValue","max","max-pages"])]),s(le)]))}};export{Bn as default};
