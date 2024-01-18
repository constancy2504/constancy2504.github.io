import{a as L,Q as f}from"./QCard.bf5a2b40.js";import{a as _,Q as w}from"./QBtn.ecad78e4.js";import{Q as x}from"./QInput.f6912c8b.js";import{Q}from"./QPage.69b34137.js";import{_ as V,r as y,d as N,u as v,F as g,y as n,x as u,A as o,H as O,G as B,E as e,ax as k,B as S,aa as D,ab as J}from"./index.c28b83c0.js";import"./render.82d2264c.js";import"./use-dark.23f5edd9.js";const t=c=>(D("data-v-105790a8"),c=c(),J(),c),E=t(()=>e("div",{class:"text-h6"},"Description",-1)),q=t(()=>e("br",null,null,-1)),A=t(()=>e("br",null,null,-1)),K=t(()=>e("br",null,null,-1)),P=t(()=>e("br",null,null,-1)),$=t(()=>e("br",null,null,-1)),F=t(()=>e("br",null,null,-1)),U=t(()=>e("br",null,null,-1)),j=t(()=>e("br",null,null,-1)),G=t(()=>e("br",null,null,-1)),H=t(()=>e("br",null,null,-1)),M=t(()=>e("br",null,null,-1)),T=t(()=>e("br",null,null,-1)),z=t(()=>e("br",null,null,-1)),R=t(()=>e("br",null,null,-1)),W=t(()=>e("strong",null," \uC808\uB300 \uB7EC\uC2DC\uC544\uC9C0\uC5ED \uD2B9\uC804\uB300\uC6D0 \uC678 \uACF5\uC720 \uAE08\uC9C0",-1)),X=t(()=>e("br",null,null,-1)),Y=t(()=>e("div",{class:"row title",style:{"max-width":"1000px"}},[e("div",{class:"col text-center"},"\uB7EC\uC2DC\uC544\uC5B4"),e("div",{class:"col text-center"},"\uD55C\uAD6D\uC5B4(\uD574\uC11D)")],-1)),Z={class:"col text-center"},ee={class:"col text-center"},te=t(()=>e("br",null,null,-1)),le={class:"q-gutter-xl row items-start"},se=t(()=>e("br",null,null,-1)),oe=t(()=>e("br",null,null,-1)),ne={__name:"LanguageDict",setup(c){const p=y([]),a=y({russian:"",korean:""});N(()=>{m()});const m=()=>{const r=localStorage.getItem("lngList");r?p.value=[...JSON.parse(r)]:p.value=[]},h=()=>{if(a.value.russian===""&&a.value.korean==="")return alert("\uB7EC\uC2DC\uC544\uC5B4\uB098 \uD55C\uAD6D\uC5B4 \uB458 \uC911 \uD558\uB098\uB294 \uBB34\uC870\uAC74 \uC785\uB825\uD574\uC8FC\uC154\uC57C \uD569\uB2C8\uB2E4."),!1;{const r=localStorage.getItem("lngList");let l=JSON.parse(r),s=0;l?l.length>0&&(s=l[l.length-1].id+1):l=[];const d={id:s,russian:a.value.russian,korean:a.value.korean};l.push(d),localStorage.setItem("lngList",JSON.stringify(l)),m(),C()}},C=()=>{a.value.russian="",a.value.korean=""},I=r=>{const l=localStorage.getItem("lngList");let s=JSON.parse(l);s.forEach((d,i)=>{d.id===r&&s.splice(i,1)}),localStorage.setItem("lngList",JSON.stringify(s)),m()},b=r=>{console.log("txt : ",r);const l=document.createElement("textarea");l.value=r,document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l),alert("\uBCF5\uC0AC\uC644\uB8CC!")};return(r,l)=>(v(),g("div",null,[n(Q,null,{default:u(()=>[n(L,{class:"my-card q-mb-md"},{default:u(()=>[n(f,null,{default:u(()=>[E]),_:1}),n(f,{class:"q-pt-none"},{default:u(()=>[o("\uC790\uC8FC\uC0AC\uC6A9\uD558\uB294 \uB7EC\uC2DC\uC544\uC5B4 \uB4F1\uB85D\uD558\uACE0 \uAE09\uD560\uB54C \uBCF5\uC0AC\uD574\uC11C \uBC14\uB85C\uC4F0\uAE30"),q,A,o(" - \uC0AC\uC6A9\uBC29\uBC95"),K,o(" \uC544\uB798 \uC785\uB825\uCC3D\uC5D0 \uB7EC\uC2DC\uC544\uC5B4\uC640 \uD55C\uAD6D\uC5B4\uB97C \uAC01\uAC01 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),P,o(" \uC800\uB294 \uB7EC\uC2DC\uC544\uC5B4\uC640 \uADF8 \uBC88\uC5ED\uC744 \uB4F1\uB85D\uD558\uACE0 \uD544\uC694\uD560\uB54C \uBC14\uB85C \uBCF5\uC0AC\uD574\uC11C \uBA54\uC138\uC9C0 \uBCF4\uB0B4\uB294 \uC6A9\uB3C4\uB85C \uC0AC\uC6A9\uC911\uC785\uB2C8\uB2E4. "),$,o(" \uC758\uB3C4\uC640 \uB2E4\uB974\uAC8C \uC0AC\uC6A9\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4."),F,U,o(" - \uC8FC\uC758\uC0AC\uD56D"),j,o(" 1. \uBAA8\uB4E0 \uB370\uC774\uD130\uB294 \uC0AC\uC6A9\uC790\uC758 \uB85C\uCEEC \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4."),G,o(" 2. \uC778\uD130\uB137\uC0AC\uC6A9\uAE30\uB85D \uC0AD\uC81C\uD560 \uC2DC \uB370\uC774\uD130\uB294 \uBAA8\uB450 \uC0AD\uC81C\uB429\uB2C8\uB2E4."),H,o(" 3. \uB2E4\uB978 \uAE30\uAE30\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC2DC \uB370\uC774\uD130\uB294 \uC5F0\uB3D9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),M,T,o(" 4. \uC0AC\uC6A9\uC790\uC758 \uC778\uD130\uB137 \uC790\uCCB4\uAC00 \uD574\uD0B9\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uBCF4\uC548\uAC71\uC815\uC740 \uC5C6\uC2B5\uB2C8\uB2E4."),z,R,o(" 5."),W,X]),_:1})]),_:1}),Y,(v(!0),g(O,null,B(p.value,(s,d)=>(v(),g("div",{class:"row rounded-borders",key:d,style:{"max-width":"1000px"}},[e("div",Z,S(s.russian),1),n(_,{onClick:i=>b(s.russian)},{default:u(()=>[o("copy")]),_:2},1032,["onClick"]),e("div",ee,S(s.korean),1),n(_,{onClick:i=>b(s.korean)},{default:u(()=>[o("copy")]),_:2},1032,["onClick"]),n(_,{onClick:i=>I(s.id)},{default:u(()=>[n(w,{name:"delete"})]),_:2},1032,["onClick"])]))),128)),te,e("div",le,[n(x,{class:"rounded-borders",style:{width:"400px"},placeholder:"\uB7EC\uC2DC\uC544\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694",type:"textarea",modelValue:a.value.russian,"onUpdate:modelValue":l[0]||(l[0]=s=>a.value.russian=s),onKeyup:k(h,["enter"])},null,8,["modelValue"]),n(x,{class:"rounded-borders",style:{width:"400px"},placeholder:"\uD55C\uAD6D\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694",type:"textarea",modelValue:a.value.korean,"onUpdate:modelValue":l[1]||(l[1]=s=>a.value.korean=s),onKeyup:k(h,["enter"])},null,8,["modelValue"]),n(_,{label:"\uC800\uC7A5",onClick:h})]),se,oe]),_:1})]))}};var pe=V(ne,[["__scopeId","data-v-105790a8"]]);export{pe as default};
