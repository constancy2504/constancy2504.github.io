import{a as w,Q as p}from"./QCard.bf5a2b40.js";import{Q as N,a as u}from"./QTr.b8468c90.js";import{a as v,Q as k}from"./QBtn.ecad78e4.js";import{a as x}from"./QTable.c22b0230.js";import{Q as c}from"./QInput.f6912c8b.js";import{Q as I}from"./QPage.69b34137.js";import{r as _,d as q,u as C,F as L,y as t,x as r,A as o,B as i,E as l,ax as f}from"./index.c28b83c0.js";import"./render.82d2264c.js";import"./use-dark.23f5edd9.js";import"./QList.7d528efe.js";const O=l("div",{class:"text-h6"},"Description",-1),J=l("br",null,null,-1),P=l("br",null,null,-1),B=l("br",null,null,-1),K=l("br",null,null,-1),M=l("br",null,null,-1),T=l("br",null,null,-1),U=l("br",null,null,-1),A=l("br",null,null,-1),E=l("br",null,null,-1),D=l("br",null,null,-1),j=l("br",null,null,-1),F=l("br",null,null,-1),$=l("br",null,null,-1),z=l("br",null,null,-1),G=l("strong",null," \uC808\uB300 \uB7EC\uC2DC\uC544\uC9C0\uC5ED \uD2B9\uC804\uB300\uC6D0 \uC678 \uACF5\uC720 \uAE08\uC9C0",-1),H=l("br",null,null,-1),R=l("br",null,null,-1),W={class:"q-gutter-y-md column",style:{"max-width":"300px"}},X=l("br",null,null,-1),Y=l("br",null,null,-1),ie={__name:"MsgSendList",setup(Z){const n=_({name:"",sns:"",rst:"",etc:""}),b=_([]);q(()=>{g()});const g=()=>{const a=localStorage.getItem("msgList");a?(console.log(JSON.parse(a)),b.value=[...JSON.parse(a)]):b.value=[]},d=()=>{if(n.value.name==="")return alert("\uC774\uB984\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."),!1;{const a=localStorage.getItem("msgList");let s=JSON.parse(a),e=0;s?s.length>0&&(e=s[s.length-1].id+1):s=[];const m={id:e,name:n.value.name,sns:n.value.sns,rst:n.value.rst,etc:n.value.etc};s.push(m),localStorage.setItem("msgList",JSON.stringify(s)),g(),h()}},h=()=>{n.value.name="",n.value.sns="",n.value.rst="",n.value.etc=""},S=a=>{const s=localStorage.getItem("msgList");let e=JSON.parse(s);e.forEach((m,Q)=>{m.id===a.row.id&&e.splice(Q,1)}),localStorage.setItem("msgList",JSON.stringify(e)),g()},y=_([{name:"name",required:!0,label:"\uC774\uB984",align:"center",field:a=>a.name,sortable:!0},{name:"sns",required:!0,label:"SNS",align:"center",filed:a=>a.sns,sortable:!0},{name:"rst",required:!0,label:"\uBC18\uC751",align:"center",field:a=>a.rst,sortable:!0},{name:"etc",required:!0,label:"\uBE44\uACE0",align:"center",field:a=>a.etc,sortable:!0}]),V=_({rowsPerPage:100});return(a,s)=>(C(),L("div",null,[t(I,null,{default:r(()=>[t(w,{class:"my-card q-mb-md"},{default:r(()=>[t(p,null,{default:r(()=>[O]),_:1}),t(p,{class:"q-pt-none"},{default:r(()=>[o("\uBA54\uC138\uC9C0 \uBCF4\uB0B8 \uB300\uC0C1\uC790 \uAD00\uB9AC\uD398\uC774\uC9C0"),J,P,o(" - \uC0AC\uC6A9\uBC29\uBC95"),B,o(" \uC544\uB798 \uC785\uB825\uCC3D\uC5D0 \uB300\uC0C1\uC790\uC758 \uC774\uB984, SNS\uC885\uB958, \uC804\uC1A1\uD6C4 \uACB0\uACFC, \uBE44\uACE0\uB97C \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),K,o(" \uBA54\uC138\uC9C0 \uBCF4\uB0B8 \uB300\uC0C1\uC790\uB4E4 \uD558\uB098\uD558\uB098 \uAE30\uC5B5\uD558\uAE30 \uBC88\uAC70\uB85C\uC6CC\uC11C \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4."),M,o(" \uC758\uB3C4\uC640 \uB2E4\uB974\uAC8C \uC0AC\uC6A9\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4."),T,U,o(" - \uC8FC\uC758\uC0AC\uD56D"),A,o(" 1. \uBAA8\uB4E0 \uB370\uC774\uD130\uB294 \uC0AC\uC6A9\uC790\uC758 \uB85C\uCEEC \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4."),E,o(" 2. \uC778\uD130\uB137\uC0AC\uC6A9\uAE30\uB85D \uC0AD\uC81C\uD560 \uC2DC \uB370\uC774\uD130\uB294 \uBAA8\uB450 \uC0AD\uC81C\uB429\uB2C8\uB2E4."),D,o(" 3. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC2DC \uB370\uC774\uD130\uB294 \uC5F0\uB3D9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),j,F,o(" 4. \uC0AC\uC6A9\uC790\uC758 \uC778\uD130\uB137 \uC790\uCCB4\uAC00 \uD574\uD0B9\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uBCF4\uC548\uAC71\uC815\uC740 \uC5C6\uC2B5\uB2C8\uB2E4."),$,z,o(" 5."),G,H]),_:1})]),_:1}),t(x,{title:"\uB300\uC0C1\uC790 \uB9AC\uC2A4\uD2B8",rows:b.value,columns:y.value,color:"amber","hide-pagination":"",pagination:V.value},{body:r(e=>[t(N,{class:"no-wrap text-center"},{default:r(()=>[t(u,{key:"name"},{default:r(()=>[o(i(e.row.name),1)]),_:2},1024),t(u,{key:"sns"},{default:r(()=>[o(i(e.row.sns),1)]),_:2},1024),t(u,{key:"rst"},{default:r(()=>[o(i(e.row.rst),1)]),_:2},1024),t(u,{key:"etc"},{default:r(()=>[o(i(e.row.etc),1)]),_:2},1024),t(u,{key:"date"},{default:r(()=>[o(i(e.row.date),1)]),_:2},1024),t(u,{key:"state"},{default:r(()=>[t(v,{onClick:m=>S(e)},{default:r(()=>[t(k,{name:"delete"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:1},8,["rows","columns","pagination"]),R,l("div",W,[t(c,{placeholder:"\uC774\uB984",modelValue:n.value.name,"onUpdate:modelValue":s[0]||(s[0]=e=>n.value.name=e),onKeyup:f(d,["enter"])},null,8,["modelValue"]),t(c,{placeholder:"SNS\uC885\uB958",modelValue:n.value.sns,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value.sns=e),onKeyup:f(d,["enter"])},null,8,["modelValue"]),t(c,{placeholder:"\uACB0\uACFC",modelValue:n.value.rst,"onUpdate:modelValue":s[2]||(s[2]=e=>n.value.rst=e),onKeyup:f(d,["enter"])},null,8,["modelValue"]),t(c,{placeholder:"\uBE44\uACE0",modelValue:n.value.etc,"onUpdate:modelValue":s[3]||(s[3]=e=>n.value.etc=e),onKeyup:f(d,["enter"])},null,8,["modelValue"]),t(v,{label:"\uC800\uC7A5",onClick:d})]),X,Y]),_:1})]))}};export{ie as default};
