import{a as w,Q as f}from"./QCard.62f5401f.js";import{Q as k,a as d}from"./QTr.1e06807d.js";import{a as v,Q as I}from"./QBtn.04a4b730.js";import{a as K}from"./QTable.bfc9ca77.js";import{Q as c}from"./QInput.5290139e.js";import{Q as N}from"./QPage.f5e2ee1c.js";import{r as g,E as q,M as x,X as L,P as t,O as r,R as s,S as _,V as n,aq as p}from"./index.f34dba1c.js";import"./render.cf4e12ca.js";import"./use-dark.4678419e.js";import"./QItem.d076f801.js";const O=n("div",{class:"text-h6"},"Description",-1),C=n("br",null,null,-1),P=n("br",null,null,-1),J=n("br",null,null,-1),T=n("br",null,null,-1),B=n("br",null,null,-1),M=n("br",null,null,-1),U=n("br",null,null,-1),E=n("br",null,null,-1),A=n("br",null,null,-1),D=n("strong",null," \uC808\uB300 \uB7EC\uC2DC\uC544\uC9C0\uC5ED \uD2B9\uC804\uB300\uC6D0 \uC678 \uACF5\uC720 \uAE08\uC9C0",-1),j=n("br",null,null,-1),R=n("br",null,null,-1),X={class:"q-gutter-y-md column",style:{"max-width":"300px"}},$=n("br",null,null,-1),z=n("br",null,null,-1),ne={__name:"TargetList",setup(F){const a=g({name:"",age:"",addr:"",state:""}),i=g([]);q(()=>{console.log("russia target mangement..."),b()});const b=()=>{const o=localStorage.getItem("mbrList");o?(console.log(JSON.parse(o)),i.value=[...JSON.parse(o)]):i.value=[],console.log("targetList : ",i.value)},u=()=>{if(a.value.name==="")return alert("\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."),!1;{const o=localStorage.getItem("mbrList");let l=JSON.parse(o),e=0;l?l.length>0&&(e=l[l.length-1].id+1):l=[];const m={id:e,name:a.value.name,age:a.value.age,addr:a.value.addr,state:a.value.state};l.push(m),localStorage.setItem("mbrList",JSON.stringify(l)),b(),h()}},h=()=>{a.value.name="",a.value.age="",a.value.addr="",a.value.state=""},y=o=>{console.log("pval : ",o);const l=localStorage.getItem("mbrList");let e=JSON.parse(l);console.log("storarr : ",e),e.forEach((m,Q)=>{m.id===o.row.id&&e.splice(Q,1)}),localStorage.setItem("mbrList",JSON.stringify(e)),b()},S=g([{name:"name",required:!0,label:"\uC774\uB984",align:"center",field:o=>o.name,sortable:!0},{name:"age",required:!0,label:"\uB098\uC774",align:"center",filed:o=>o.age,sortable:!0},{name:"addr",required:!0,label:"\uAC70\uC8FC\uC9C0",align:"center",field:o=>o.addr,sortable:!0},{name:"state",required:!0,label:"\uB2E8\uACC4",align:"center",field:o=>o.state,sortable:!0}]),V=g({rowsPerPage:100});return(o,l)=>(x(),L("div",null,[t(N,null,{default:r(()=>[t(w,{class:"my-card q-mb-md"},{default:r(()=>[t(f,null,{default:r(()=>[O]),_:1}),t(f,{class:"q-pt-none"},{default:r(()=>[s("\uD655\uC815 \uB300\uC0C1\uC790 \uAD00\uB9AC\uD398\uC774\uC9C0"),C,P,s(" - \uC8FC\uC758\uC0AC\uD56D"),J,s(" 1. \uBAA8\uB4E0 \uB370\uC774\uD130\uB294 \uC0AC\uC6A9\uC790\uC758 \uB85C\uCEEC \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4."),T,s(" 2. \uC778\uD130\uB137\uC0AC\uC6A9\uAE30\uB85D \uC0AD\uC81C\uD560 \uC2DC \uB370\uC774\uD130\uB294 \uBAA8\uB450 \uC0AD\uC81C\uB429\uB2C8\uB2E4."),B,s(" 3. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC2DC \uB370\uC774\uD130\uB294 \uC5F0\uB3D9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),M,U,s(" 4. \uC0AC\uC6A9\uC790\uC758 \uC778\uD130\uB137 \uC790\uCCB4\uAC00 \uD574\uD0B9\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uBCF4\uC548\uAC71\uC815\uC740 \uC5C6\uC2B5\uB2C8\uB2E4."),E,A,s(" 5."),D,j]),_:1})]),_:1}),t(K,{title:"\uB300\uC0C1\uC790 \uB9AC\uC2A4\uD2B8",rows:i.value,columns:S.value,color:"amber","hide-pagination":"",pagination:V.value},{body:r(e=>[t(k,{class:"no-wrap text-center"},{default:r(()=>[t(d,{key:"name"},{default:r(()=>[s(_(e.row.name),1)]),_:2},1024),t(d,{key:"age"},{default:r(()=>[s(_(e.row.age),1)]),_:2},1024),t(d,{key:"addr"},{default:r(()=>[s(_(e.row.addr),1)]),_:2},1024),t(d,{key:"state"},{default:r(()=>[s(_(e.row.state),1)]),_:2},1024),t(d,{key:"state"},{default:r(()=>[t(v,{onClick:m=>y(e)},{default:r(()=>[t(I,{name:"delete"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1},8,["rows","columns","pagination"]),R,n("div",X,[t(c,{placeholder:"\uC774\uB984",modelValue:a.value.name,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value.name=e),onKeyup:p(u,["enter"])},null,8,["modelValue","onKeyup"]),t(c,{placeholder:"\uB098\uC774",modelValue:a.value.age,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.age=e),onKeyup:p(u,["enter"])},null,8,["modelValue","onKeyup"]),t(c,{placeholder:"\uC0AC\uB294\uACF3",modelValue:a.value.addr,"onUpdate:modelValue":l[2]||(l[2]=e=>a.value.addr=e),onKeyup:p(u,["enter"])},null,8,["modelValue","onKeyup"]),t(c,{placeholder:"\uB2E8\uACC4",modelValue:a.value.state,"onUpdate:modelValue":l[3]||(l[3]=e=>a.value.state=e),onKeyup:p(u,["enter"])},null,8,["modelValue","onKeyup"]),t(v,{label:"\uC800\uC7A5",onClick:u})]),$,z]),_:1})]))}};export{ne as default};