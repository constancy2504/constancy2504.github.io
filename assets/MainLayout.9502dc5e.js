import{Q as We,a as ye}from"./QBtn.94c9af9b.js";import{c as F,a as n,h as y,i as X,e as O,r as k,w as v,o as Se,l as J,g as N,d as Re,n as be,f as Fe,p as _e,j as Ie,k as Ae,m as ie,q as j,s as Ne,t as Ee,_ as Ue,u as G,v as ue,x as $,y as S,z as je,A as se,B as ce,C as Ke,D as Ge,E as we,F as Xe,G as Je,H as Ye,I as Ze}from"./index.826ec881.js";import{h as Y,a as et,b as ke,c as tt}from"./render.0e5719aa.js";import{Q as de}from"./QResizeObserver.3fe7c5fd.js";import{u as at,a as lt,b as nt,c as ot,d as it,e as K,f as rt,Q as pe,g as fe,h as ut,i as st}from"./QList.30b32eb6.js";import{u as ct,a as dt}from"./use-dark.a9ed26ce.js";import{T as re,Q as ft}from"./TouchPan.27548aec.js";import{u as vt}from"./member.70e97855.js";import"./touch.3df10340.js";var mt=F({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:b}){const d=n(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>y("div",{class:d.value},Y(b.default))}}),ht=F({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:b}){const d=n(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:d.value,role:"toolbar"},Y(b.default))}}),gt=F({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:b,emit:d}){const{proxy:{$q:u}}=N(),o=X(J,O);if(o===O)return console.error("QHeader needs to be child of QLayout"),O;const s=k(parseInt(e.heightHint,10)),p=k(!0),B=n(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||u.platform.is.ios&&o.isContainer.value===!0),L=n(()=>{if(e.modelValue!==!0)return 0;if(B.value===!0)return p.value===!0?s.value:0;const l=s.value-o.scroll.value.position;return l>0?l:0}),q=n(()=>e.modelValue!==!0||B.value===!0&&p.value!==!0),a=n(()=>e.modelValue===!0&&q.value===!0&&e.reveal===!0),z=n(()=>"q-header q-layout__section--marginal "+(B.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(q.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),h=n(()=>{const l=o.rows.value.top,_={};return l[0]==="l"&&o.left.space===!0&&(_[u.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(_[u.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),_});function g(l,_){o.update("header",l,_)}function f(l,_){l.value!==_&&(l.value=_)}function Q({height:l}){f(s,l),g("size",l)}function w(l){a.value===!0&&f(p,!0),d("focusin",l)}v(()=>e.modelValue,l=>{g("space",l),f(p,!0),o.animate()}),v(L,l=>{g("offset",l)}),v(()=>e.reveal,l=>{l===!1&&f(p,e.modelValue)}),v(p,l=>{o.animate(),d("reveal",l)}),v(o.scroll,l=>{e.reveal===!0&&f(p,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const c={};return o.instances.header=c,e.modelValue===!0&&g("size",s.value),g("space",e.modelValue),g("offset",L.value),Se(()=>{o.instances.header===c&&(o.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const l=et(b.default,[]);return e.elevated===!0&&l.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(y(de,{debounce:0,onResize:Q})),y("header",{class:z.value,style:h.value,onFocusin:w},l)}}});const qe=150;var yt=F({name:"QDrawer",inheritAttrs:!1,props:{...at,...ct,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...lt,"onLayout","miniState"],setup(e,{slots:b,emit:d,attrs:u}){const o=N(),{proxy:{$q:s}}=o,p=dt(e,s),{preventBodyScroll:B}=rt(),{registerTimeout:L,removeTimeout:q}=nt(),a=X(J,O);if(a===O)return console.error("QDrawer needs to be child of QLayout"),O;let z,h=null,g;const f=k(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),Q=n(()=>e.mini===!0&&f.value!==!0),w=n(()=>Q.value===!0?e.miniWidth:e.width),c=k(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),l=n(()=>e.persistent!==!0&&(f.value===!0||xe.value===!0));function _(t,i){if(V(),t!==!1&&a.animate(),T(0),f.value===!0){const x=a.instances[E.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),P(1),a.isContainer.value!==!0&&B(!0)}else P(0),t!==!1&&le(!1);L(()=>{t!==!1&&le(!0),i!==!0&&d("show",t)},qe)}function r(t,i){I(),t!==!1&&a.animate(),P(0),T(W.value*w.value),ne(),i!==!0?L(()=>{d("hide",t)},qe):q()}const{show:m,hide:C}=ot({showing:c,hideOnRouteChange:l,handleShow:_,handleHide:r}),{addToHistory:V,removeFromHistory:I}=it(c,C,l),D={belowBreakpoint:f,hide:C},M=n(()=>e.side==="right"),W=n(()=>(s.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),ve=k(0),R=k(!1),Z=k(!1),me=k(w.value*W.value),E=n(()=>M.value===!0?"left":"right"),ee=n(()=>c.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:w.value:0),te=n(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")>-1||s.platform.is.ios===!0&&a.isContainer.value===!0),A=n(()=>e.overlay===!1&&c.value===!0&&f.value===!1),xe=n(()=>e.overlay===!0&&c.value===!0&&f.value===!1),Ce=n(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&R.value===!1?" hidden":"")),$e=n(()=>({backgroundColor:`rgba(0,0,0,${ve.value*.4})`})),he=n(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),Be=n(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Le=n(()=>{const t={};return a.header.space===!0&&he.value===!1&&(te.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&Be.value===!1&&(te.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Te=n(()=>{const t={width:`${w.value}px`,transform:`translateX(${me.value}px)`};return f.value===!0?t:Object.assign(t,Le.value)}),ze=n(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Qe=n(()=>`q-drawer q-drawer--${e.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(p.value===!0?" q-drawer--dark q-dark":"")+(R.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(te.value===!0||A.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(he.value===!0?" q-drawer--top-padding":""))),Me=n(()=>{const t=s.lang.rtl===!0?e.side:E.value;return[[re,Ve,void 0,{[t]:!0,mouse:!0}]]}),Oe=n(()=>{const t=s.lang.rtl===!0?E.value:e.side;return[[re,ge,void 0,{[t]:!0,mouse:!0}]]}),Pe=n(()=>{const t=s.lang.rtl===!0?E.value:e.side;return[[re,ge,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){De(f,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}v(f,t=>{t===!0?(z=c.value,c.value===!0&&C(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(c.value===!0?(T(0),P(0),ne()):m(!1))}),v(()=>e.side,(t,i)=>{a.instances[i]===D&&(a.instances[i]=void 0,a[i].space=!1,a[i].offset=0),a.instances[t]=D,a[t].size=w.value,a[t].space=A.value,a[t].offset=ee.value}),v(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),v(()=>e.behavior+e.breakpoint,ae),v(a.isContainer,t=>{c.value===!0&&B(t!==!0),t===!0&&ae()}),v(a.scrollbarWidth,()=>{T(c.value===!0?0:void 0)}),v(ee,t=>{H("offset",t)}),v(A,t=>{d("onLayout",t),H("space",t)}),v(M,()=>{T()}),v(w,t=>{T(),oe(e.miniToOverlay,t)}),v(()=>e.miniToOverlay,t=>{oe(t,w.value)}),v(()=>s.lang.rtl,()=>{T()}),v(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(He(),a.animate())}),v(Q,t=>{d("miniState",t)});function T(t){t===void 0?be(()=>{t=c.value===!0?0:w.value,T(W.value*t)}):(a.isContainer.value===!0&&M.value===!0&&(f.value===!0||Math.abs(t)===w.value)&&(t+=W.value*a.scrollbarWidth.value),me.value=t)}function P(t){ve.value=t}function le(t){const i=t===!0?"remove":a.isContainer.value!==!0?"add":"";i!==""&&document.body.classList[i]("q-body--drawer-toggle")}function He(){h!==null&&clearTimeout(h),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,h=setTimeout(()=>{h=null,Z.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ve(t){if(c.value!==!1)return;const i=w.value,x=K(t.distance.x,0,i);if(t.isFinal===!0){x>=Math.min(75,i)===!0?m():(a.animate(),P(0),T(W.value*i)),R.value=!1;return}T((s.lang.rtl===!0?M.value!==!0:M.value)?Math.max(i-x,0):Math.min(0,x-i)),P(K(x/i,0,1)),t.isFirst===!0&&(R.value=!0)}function ge(t){if(c.value!==!0)return;const i=w.value,x=t.direction===e.side,U=(s.lang.rtl===!0?x!==!0:x)?K(t.distance.x,0,i):0;if(t.isFinal===!0){Math.abs(U)<Math.min(75,i)===!0?(a.animate(),P(1),T(0)):C(),R.value=!1;return}T(W.value*U),P(K(1-U/i,0,1)),t.isFirst===!0&&(R.value=!0)}function ne(){B(!1),le(!0)}function H(t,i){a.update(e.side,t,i)}function De(t,i){t.value!==i&&(t.value=i)}function oe(t,i){H("size",t===!0?e.miniWidth:i)}return a.instances[e.side]=D,oe(e.miniToOverlay,w.value),H("space",A.value),H("offset",ee.value),e.showIfAbove===!0&&e.modelValue!==!0&&c.value===!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!0),Re(()=>{d("onLayout",A.value),d("miniState",Q.value),z=e.showIfAbove===!0;const t=()=>{(c.value===!0?_:r)(!1,!0)};if(a.totalWidth.value!==0){be(t);return}g=v(a.totalWidth,()=>{g(),g=void 0,c.value===!1&&e.showIfAbove===!0&&f.value===!1?m(!1):t()})}),Se(()=>{g!==void 0&&g(),h!==null&&(clearTimeout(h),h=null),c.value===!0&&ne(),a.instances[e.side]===D&&(a.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const t=[];f.value===!0&&(e.noSwipeOpen===!1&&t.push(Fe(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Me.value)),t.push(ke("div",{ref:"backdrop",class:Ce.value,style:$e.value,"aria-hidden":"true",onClick:C},void 0,"backdrop",e.noSwipeBackdrop!==!0&&c.value===!0,()=>Pe.value)));const i=Q.value===!0&&b.mini!==void 0,x=[y("div",{...u,key:""+i,class:[ze.value,u.class]},i===!0?b.mini():Y(b.default))];return e.elevated===!0&&c.value===!0&&x.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ke("aside",{ref:"content",class:Qe.value,style:Te.value},x,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>Oe.value)),y("div",{class:"q-drawer-container"},t)}}}),bt=F({name:"QPageContainer",setup(e,{slots:b}){const{proxy:{$q:d}}=N(),u=X(J,O);if(u===O)return console.error("QPageContainer needs to be child of QLayout"),O;_e(Ie,!0);const o=n(()=>{const s={};return u.header.space===!0&&(s.paddingTop=`${u.header.size}px`),u.right.space===!0&&(s[`padding${d.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(s.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(s[`padding${d.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),s});return()=>y("div",{class:"q-page-container",style:o.value},Y(b.default))}}),wt=F({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:b,emit:d}){const{proxy:{$q:u}}=N(),o=k(null),s=k(u.screen.height),p=k(e.container===!0?0:u.screen.width),B=k({position:0,direction:"down",inflectionPoint:0}),L=k(0),q=k(Ae.value===!0?0:ie()),a=n(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=n(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),h=n(()=>q.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${q.value}px`}:null),g=n(()=>q.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${q.value}px`,width:`calc(100% + ${q.value}px)`}:null);function f(r){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};B.value=m,e.onScroll!==void 0&&d("scroll",m)}}function Q(r){const{height:m,width:C}=r;let V=!1;s.value!==m&&(V=!0,s.value=m,e.onScrollHeight!==void 0&&d("scrollHeight",m),c()),p.value!==C&&(V=!0,p.value=C),V===!0&&e.onResize!==void 0&&d("resize",r)}function w({height:r}){L.value!==r&&(L.value=r,c())}function c(){if(e.container===!0){const r=s.value>L.value?ie():0;q.value!==r&&(q.value=r)}}let l=null;const _={instances:{},view:n(()=>e.view),isContainer:n(()=>e.container),rootRef:o,height:s,containerHeight:L,scrollbarWidth:q,totalWidth:n(()=>p.value+q.value),rows:n(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:j({size:0,offset:0,space:!1}),right:j({size:300,offset:0,space:!1}),footer:j({size:0,offset:0,space:!1}),left:j({size:300,offset:0,space:!1}),scroll:B,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,m,C){_[r][m]=C}};if(_e(J,_),ie()>0){let C=function(){r=null,m.classList.remove("hide-scrollbar")},V=function(){if(r===null){if(m.scrollHeight>u.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(C,300)},I=function(D){r!==null&&D==="remove"&&(clearTimeout(r),C()),window[`${D}EventListener`]("resize",V)},r=null;const m=document.body;v(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),Ne(()=>{I("remove")})}return()=>{const r=tt(b.default,[y(ft,{onScroll:f}),y(de,{onResize:Q})]),m=y("div",{class:a.value,style:z.value,ref:e.container===!0?void 0:o,tabindex:-1},r);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:o},[y(de,{onResize:w}),y("div",{class:"absolute-full",style:h.value},[y("div",{class:"scroll",style:g.value},[m])])]):m}}});const kt=Ee({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function pt(e,b,d,u,o,s){return G(),ue(ut,{clickable:"",tag:"a",to:e.link},{default:$(()=>[e.icon?(G(),ue(pe,{key:0,avatar:""},{default:$(()=>[S(We,{name:e.icon},null,8,["name"])]),_:1})):je("",!0),S(pe,null,{default:$(()=>[S(fe,null,{default:$(()=>[se(ce(e.title),1)]),_:1}),S(fe,{caption:""},{default:$(()=>[se(ce(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var qt=Ue(kt,[["render",pt]]);function St(){return X(Ke)}const Ot={__name:"MainLayout",setup(e){vt();const{proxy:b}=N(),d=k(b.$welcomMsg),u=St(),o=k(!1),s=[{title:"Home",icon:"home",link:"/home"},{title:"\uCEE8\uD150\uCE20",icon:"class",link:"/contents"},{title:"\uAC1C\uAC15\uAD00\uB9AC",icon:"assignment",link:"/course"},{title:"\uBB38\uC81C\uAD00\uB9AC",icon:"assignment",link:"/qtn"},{title:"\uCD1D\uD68C\uC7A5\uB2D8 \uB9D0\uC500",icon:"assignment",link:"/words"}],p=()=>o.value=!o.value,B=n(()=>u.dark.isActive?"dark_mode":"light_mode"),L=()=>{u.dark.toggle(),u.localStorage.set("darkMode",u.dark.isActive)};return(q,a)=>{const z=Ge("router-view");return G(),ue(wt,{view:"lHh Lpr lFf"},{default:$(()=>[S(gt,{elevated:""},{default:$(()=>[S(ht,null,{default:$(()=>[S(ye,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:p}),S(mt,null,{default:$(()=>[se(" \uC5C5\uBB34\uD234 ")]),_:1}),we("div",null,[S(ye,{flat:"",round:"",dense:"",icon:B.value,onClick:L},null,8,["icon"])])]),_:1})]),_:1}),S(yt,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=h=>o.value=h),"show-if-above":"",bordered:""},{default:$(()=>[S(st,null,{default:$(()=>[S(fe,{header:""},{default:$(()=>[we("div",null,ce(d.value),1)]),_:1}),(G(),Xe(Ye,null,Je(s,h=>S(qt,Ze({key:h.title,pgCd:h.pgCd},h),null,16,["pgCd"])),64))]),_:1})]),_:1},8,["modelValue"]),S(bt,null,{default:$(()=>[S(z)]),_:1})]),_:1})}}};export{Ot as default};
