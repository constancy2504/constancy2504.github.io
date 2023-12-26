import{Q as Je,a as _e}from"./QBtn.815c0d88.js";import{c as H,a as d,h as q,i as J,e as Q,r as _,w,o as we,l as Z,g as W,d as Ze,f as N,n as Ee,j as et,k as Y,p as ue,m as xe,s as se,q as me,t as ce,u as tt,v as Oe,x as Te,y as at,z as De,A as nt,B as ot,C as lt,D as it,E as rt,F as ut,G as de,H as j,I as st,J as ct,_ as dt,K as G,L as he,M as z,N as x,O as ft,P as ge,Q as ye,R as vt,S as mt,T as $e,U as ht,V as gt,W as yt,X as pt}from"./index.3d0595e8.js";import{h as ee,a as bt,b as Le,c as wt}from"./render.398353c6.js";import{Q as pe}from"./QResizeObserver.37c8aab9.js";import{c as Ct,u as St,a as qt,b as kt,d as _t,e as xt,f as K,g as Tt,Q as ze,h as be,i as $t,j as Lt}from"./QList.c5653382.js";import{u as zt,a as Bt}from"./use-dark.9e7ea3c3.js";import{g as Be,s as Me}from"./touch.3df10340.js";import{u as Mt}from"./member.15e4d108.js";var Pt=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:s}){const l=d(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>q("div",{class:l.value},ee(s.default))}}),Qt=H({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:s}){const l=d(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:l.value,role:"toolbar"},ee(s.default))}}),Et=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:s,emit:l}){const{proxy:{$q:i}}=W(),e=J(Z,Q);if(e===Q)return console.error("QHeader needs to be child of QLayout"),Q;const a=_(parseInt(t.heightHint,10)),r=_(!0),g=d(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||i.platform.is.ios&&e.isContainer.value===!0),m=d(()=>{if(t.modelValue!==!0)return 0;if(g.value===!0)return r.value===!0?a.value:0;const c=a.value-e.scroll.value.position;return c>0?c:0}),u=d(()=>t.modelValue!==!0||g.value===!0&&r.value!==!0),o=d(()=>t.modelValue===!0&&u.value===!0&&t.reveal===!0),C=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),p=d(()=>{const c=e.rows.value.top,T={};return c[0]==="l"&&e.left.space===!0&&(T[i.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),c[2]==="r"&&e.right.space===!0&&(T[i.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),T});function f(c,T){e.update("header",c,T)}function v(c,T){c.value!==T&&(c.value=T)}function B({height:c}){v(a,c),f("size",c)}function k(c){o.value===!0&&v(r,!0),l("focusin",c)}w(()=>t.modelValue,c=>{f("space",c),v(r,!0),e.animate()}),w(m,c=>{f("offset",c)}),w(()=>t.reveal,c=>{c===!1&&v(r,t.modelValue)}),w(r,c=>{e.animate(),l("reveal",c)}),w(e.scroll,c=>{t.reveal===!0&&v(r,c.direction==="up"||c.position<=t.revealOffset||c.position-c.inflectionPoint<100)});const b={};return e.instances.header=b,t.modelValue===!0&&f("size",a.value),f("space",t.modelValue),f("offset",m.value),we(()=>{e.instances.header===b&&(e.instances.header=void 0,f("size",0),f("offset",0),f("space",!1))}),()=>{const c=bt(s.default,[]);return t.elevated===!0&&c.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(q(pe,{debounce:0,onResize:B})),q("header",{class:C.value,style:p.value,onFocusin:k},c)}}});function fe(t,s,l){const i=me(t);let e,a=i.left-s.event.x,r=i.top-s.event.y,g=Math.abs(a),m=Math.abs(r);const u=s.direction;u.horizontal===!0&&u.vertical!==!0?e=a<0?"left":"right":u.horizontal!==!0&&u.vertical===!0?e=r<0?"up":"down":u.up===!0&&r<0?(e="up",g>m&&(u.left===!0&&a<0?e="left":u.right===!0&&a>0&&(e="right"))):u.down===!0&&r>0?(e="down",g>m&&(u.left===!0&&a<0?e="left":u.right===!0&&a>0&&(e="right"))):u.left===!0&&a<0?(e="left",g<m&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down"))):u.right===!0&&a>0&&(e="right",g<m&&(u.up===!0&&r<0?e="up":u.down===!0&&r>0&&(e="down")));let o=!1;if(e===void 0&&l===!1){if(s.event.isFirst===!0||s.event.lastDir===void 0)return{};e=s.event.lastDir,o=!0,e==="left"||e==="right"?(i.left-=a,g=0,a=0):(i.top-=r,m=0,r=0)}return{synthetic:o,payload:{evt:t,touch:s.event.mouse!==!0,mouse:s.event.mouse===!0,position:i,direction:e,isFirst:s.event.isFirst,isFinal:l===!0,duration:Date.now()-s.event.time,distance:{x:g,y:m},offset:{x:a,y:r},delta:{x:i.left-s.event.lastX,y:i.top-s.event.lastY}}}}let Ot=0;var ve=Ze({name:"touch-pan",beforeMount(t,{value:s,modifiers:l}){if(l.mouse!==!0&&N.has.touch!==!0)return;function i(a,r){l.mouse===!0&&r===!0?tt(a):(l.stop===!0&&se(a),l.prevent===!0&&xe(a))}const e={uid:"qvtp_"+Ot++,handler:s,modifiers:l,direction:Be(l),noop:Ee,mouseStart(a){Me(a,e)&&et(a)&&(Y(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(Me(a,e)){const r=a.target;Y(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,r){if(N.is.firefox===!0&&ue(t,!0),e.lastEvt=a,r===!0||l.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const u=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&xe(u),a.cancelBubble===!0&&se(u),Object.assign(u,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:u}}se(a)}const{left:g,top:m}=me(a);e.event={x:g,y:m,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:g,lastY:m}},move(a){if(e.event===void 0)return;const r=me(a),g=r.left-e.event.x,m=r.top-e.event.y;if(g===0&&m===0)return;e.lastEvt=a;const u=e.event.mouse===!0,o=()=>{i(a,u);let f;l.preserveCursor!==!0&&l.preservecursor!==!0&&(f=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),u===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ct(),e.styleCleanup=v=>{if(e.styleCleanup=void 0,f!==void 0&&(document.documentElement.style.cursor=f),document.body.classList.remove("non-selectable"),u===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{B(),v()},50):B()}else v!==void 0&&v()}};if(e.event.detected===!0){e.event.isFirst!==!0&&i(a,e.event.mouse);const{payload:f,synthetic:v}=fe(a,e,!1);f!==void 0&&(e.handler(f)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&o(),e.event.lastX=f.position.left,e.event.lastY=f.position.top,e.event.lastDir=v===!0?void 0:f.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||u===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){o(),e.event.detected=!0,e.move(a);return}const C=Math.abs(g),p=Math.abs(m);C!==p&&(e.direction.horizontal===!0&&C>p||e.direction.vertical===!0&&C<p||e.direction.up===!0&&C<p&&m<0||e.direction.down===!0&&C<p&&m>0||e.direction.left===!0&&C>p&&g<0||e.direction.right===!0&&C>p&&g>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,r){if(e.event!==void 0){if(ce(e,"temp"),N.is.firefox===!0&&ue(t,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(fe(a===void 0?e.lastEvt:a,e).payload);const{payload:g}=fe(a===void 0?e.lastEvt:a,e,!0),m=()=>{e.handler(g)};e.styleCleanup!==void 0?e.styleCleanup(m):m()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,l.mouse===!0){const a=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";Y(e,"main",[[t,"mousedown","mouseStart",`passive${a}`]])}N.has.touch===!0&&Y(e,"main",[[t,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,s){const l=t.__qtouchpan;l!==void 0&&(s.oldValue!==s.value&&(typeof value!="function"&&l.end(),l.handler=s.value),l.direction=Be(s.modifiers))},beforeUnmount(t){const s=t.__qtouchpan;s!==void 0&&(s.event!==void 0&&s.end(),ce(s,"main"),ce(s,"temp"),N.is.firefox===!0&&ue(t,!1),s.styleCleanup!==void 0&&s.styleCleanup(),delete t.__qtouchpan)}});const Pe=150;var Dt=H({name:"QDrawer",inheritAttrs:!1,props:{...St,...zt,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...qt,"onLayout","miniState"],setup(t,{slots:s,emit:l,attrs:i}){const e=W(),{proxy:{$q:a}}=e,r=Bt(t,a),{preventBodyScroll:g}=Tt(),{registerTimeout:m,removeTimeout:u}=kt(),o=J(Z,Q);if(o===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let C,p=null,f;const v=_(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),B=d(()=>t.mini===!0&&v.value!==!0),k=d(()=>B.value===!0?t.miniWidth:t.width),b=_(t.showIfAbove===!0&&v.value===!1?!0:t.modelValue===!0),c=d(()=>t.persistent!==!0&&(v.value===!0||Ve.value===!0));function T(n,h){if(D(),n!==!1&&o.animate(),M(0),v.value===!0){const $=o.instances[X.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),E(1),o.isContainer.value!==!0&&g(!0)}else E(0),n!==!1&&le(!1);m(()=>{n!==!1&&le(!0),h!==!0&&l("show",n)},Pe)}function y(n,h){R(),n!==!1&&o.animate(),E(0),M(F.value*k.value),ie(),h!==!0?m(()=>{l("hide",n)},Pe):u()}const{show:S,hide:L}=_t({showing:b,hideOnRouteChange:c,handleShow:T,handleHide:y}),{addToHistory:D,removeFromHistory:R}=xt(b,L,c),V={belowBreakpoint:v,hide:L},P=d(()=>t.side==="right"),F=d(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),Ce=_(0),A=_(!1),te=_(!1),Se=_(k.value*F.value),X=d(()=>P.value===!0?"left":"right"),ae=d(()=>b.value===!0&&v.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:k.value:0),ne=d(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(P.value?"R":"L")>-1||a.platform.is.ios===!0&&o.isContainer.value===!0),I=d(()=>t.overlay===!1&&b.value===!0&&v.value===!1),Ve=d(()=>t.overlay===!0&&b.value===!0&&v.value===!1),He=d(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&A.value===!1?" hidden":"")),Fe=d(()=>({backgroundColor:`rgba(0,0,0,${Ce.value*.4})`})),qe=d(()=>P.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ae=d(()=>P.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),We=d(()=>{const n={};return o.header.space===!0&&qe.value===!1&&(ne.value===!0?n.top=`${o.header.offset}px`:o.header.space===!0&&(n.top=`${o.header.size}px`)),o.footer.space===!0&&Ae.value===!1&&(ne.value===!0?n.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(n.bottom=`${o.footer.size}px`)),n}),Re=d(()=>{const n={width:`${k.value}px`,transform:`translateX(${Se.value}px)`};return v.value===!0?n:Object.assign(n,We.value)}),Ie=d(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ne=d(()=>`q-drawer q-drawer--${t.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(ne.value===!0||I.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(qe.value===!0?" q-drawer--top-padding":""))),Xe=d(()=>{const n=a.lang.rtl===!0?t.side:X.value;return[[ve,Ke,void 0,{[n]:!0,mouse:!0}]]}),Ue=d(()=>{const n=a.lang.rtl===!0?X.value:t.side;return[[ve,ke,void 0,{[n]:!0,mouse:!0}]]}),Ye=d(()=>{const n=a.lang.rtl===!0?X.value:t.side;return[[ve,ke,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function oe(){Ge(v,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}w(v,n=>{n===!0?(C=b.value,b.value===!0&&L(!1)):t.overlay===!1&&t.behavior!=="mobile"&&C!==!1&&(b.value===!0?(M(0),E(0),ie()):S(!1))}),w(()=>t.side,(n,h)=>{o.instances[h]===V&&(o.instances[h]=void 0,o[h].space=!1,o[h].offset=0),o.instances[n]=V,o[n].size=k.value,o[n].space=I.value,o[n].offset=ae.value}),w(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&oe()}),w(()=>t.behavior+t.breakpoint,oe),w(o.isContainer,n=>{b.value===!0&&g(n!==!0),n===!0&&oe()}),w(o.scrollbarWidth,()=>{M(b.value===!0?0:void 0)}),w(ae,n=>{O("offset",n)}),w(I,n=>{l("onLayout",n),O("space",n)}),w(P,()=>{M()}),w(k,n=>{M(),re(t.miniToOverlay,n)}),w(()=>t.miniToOverlay,n=>{re(n,k.value)}),w(()=>a.lang.rtl,()=>{M()}),w(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(je(),o.animate())}),w(B,n=>{l("miniState",n)});function M(n){n===void 0?Te(()=>{n=b.value===!0?0:k.value,M(F.value*n)}):(o.isContainer.value===!0&&P.value===!0&&(v.value===!0||Math.abs(n)===k.value)&&(n+=F.value*o.scrollbarWidth.value),Se.value=n)}function E(n){Ce.value=n}function le(n){const h=n===!0?"remove":o.isContainer.value!==!0?"add":"";h!==""&&document.body.classList[h]("q-body--drawer-toggle")}function je(){p!==null&&clearTimeout(p),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,p=setTimeout(()=>{p=null,te.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ke(n){if(b.value!==!1)return;const h=k.value,$=K(n.distance.x,0,h);if(n.isFinal===!0){$>=Math.min(75,h)===!0?S():(o.animate(),E(0),M(F.value*h)),A.value=!1;return}M((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(h-$,0):Math.min(0,$-h)),E(K($/h,0,1)),n.isFirst===!0&&(A.value=!0)}function ke(n){if(b.value!==!0)return;const h=k.value,$=n.direction===t.side,U=(a.lang.rtl===!0?$!==!0:$)?K(n.distance.x,0,h):0;if(n.isFinal===!0){Math.abs(U)<Math.min(75,h)===!0?(o.animate(),E(1),M(0)):L(),A.value=!1;return}M(F.value*U),E(K(1-U/h,0,1)),n.isFirst===!0&&(A.value=!0)}function ie(){g(!1),le(!0)}function O(n,h){o.update(t.side,n,h)}function Ge(n,h){n.value!==h&&(n.value=h)}function re(n,h){O("size",n===!0?t.miniWidth:h)}return o.instances[t.side]=V,re(t.miniToOverlay,k.value),O("space",I.value),O("offset",ae.value),t.showIfAbove===!0&&t.modelValue!==!0&&b.value===!0&&t["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),Oe(()=>{l("onLayout",I.value),l("miniState",B.value),C=t.showIfAbove===!0;const n=()=>{(b.value===!0?T:y)(!1,!0)};if(o.totalWidth.value!==0){Te(n);return}f=w(o.totalWidth,()=>{f(),f=void 0,b.value===!1&&t.showIfAbove===!0&&v.value===!1?S(!1):n()})}),we(()=>{f!==void 0&&f(),p!==null&&(clearTimeout(p),p=null),b.value===!0&&ie(),o.instances[t.side]===V&&(o.instances[t.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const n=[];v.value===!0&&(t.noSwipeOpen===!1&&n.push(at(q("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Xe.value)),n.push(Le("div",{ref:"backdrop",class:He.value,style:Fe.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",t.noSwipeBackdrop!==!0&&b.value===!0,()=>Ye.value)));const h=B.value===!0&&s.mini!==void 0,$=[q("div",{...i,key:""+h,class:[Ie.value,i.class]},h===!0?s.mini():ee(s.default))];return t.elevated===!0&&b.value===!0&&$.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Le("aside",{ref:"content",class:Ne.value,style:Re.value},$,"contentclose",t.noSwipeClose!==!0&&v.value===!0,()=>Ue.value)),q("div",{class:"q-drawer-container"},n)}}}),Vt=H({name:"QPageContainer",setup(t,{slots:s}){const{proxy:{$q:l}}=W(),i=J(Z,Q);if(i===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;De(nt,!0);const e=d(()=>{const a={};return i.header.space===!0&&(a.paddingTop=`${i.header.size}px`),i.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(a.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),a});return()=>q("div",{class:"q-page-container",style:e.value},ee(s.default))}});const{passive:Qe}=lt,Ht=["both","horizontal","vertical"];var Ft=H({name:"QScrollObserver",props:{axis:{type:String,validator:t=>Ht.includes(t),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(t,{emit:s}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,e,a;w(()=>t.scrollTarget,()=>{m(),g()});function r(){i!==null&&i();const C=Math.max(0,it(e)),p=rt(e),f={top:C-l.position.top,left:p-l.position.left};if(t.axis==="vertical"&&f.top===0||t.axis==="horizontal"&&f.left===0)return;const v=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";l.position={top:C,left:p},l.directionChanged=l.direction!==v,l.delta=f,l.directionChanged===!0&&(l.direction=v,l.inflectionPoint=l.position),s("scroll",{...l})}function g(){e=ot(a,t.scrollTarget),e.addEventListener("scroll",u,Qe),u(!0)}function m(){e!==void 0&&(e.removeEventListener("scroll",u,Qe),e=void 0)}function u(C){if(C===!0||t.debounce===0||t.debounce==="0")r();else if(i===null){const[p,f]=t.debounce?[setTimeout(r,t.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];i=()=>{f(p),i=null}}}const{proxy:o}=W();return w(()=>o.$q.lang.rtl,r),Oe(()=>{a=o.$el.parentNode,g()}),we(()=>{i!==null&&i(),m()}),Object.assign(o,{trigger:u,getPosition:()=>l}),Ee}}),At=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:s,emit:l}){const{proxy:{$q:i}}=W(),e=_(null),a=_(i.screen.height),r=_(t.container===!0?0:i.screen.width),g=_({position:0,direction:"down",inflectionPoint:0}),m=_(0),u=_(ut.value===!0?0:de()),o=d(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),C=d(()=>t.container===!1?{minHeight:i.screen.height+"px"}:null),p=d(()=>u.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),f=d(()=>u.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function v(y){if(t.container===!0||document.qScrollPrevented!==!0){const S={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};g.value=S,t.onScroll!==void 0&&l("scroll",S)}}function B(y){const{height:S,width:L}=y;let D=!1;a.value!==S&&(D=!0,a.value=S,t.onScrollHeight!==void 0&&l("scrollHeight",S),b()),r.value!==L&&(D=!0,r.value=L),D===!0&&t.onResize!==void 0&&l("resize",y)}function k({height:y}){m.value!==y&&(m.value=y,b())}function b(){if(t.container===!0){const y=a.value>m.value?de():0;u.value!==y&&(u.value=y)}}let c=null;const T={instances:{},view:d(()=>t.view),isContainer:d(()=>t.container),rootRef:e,height:a,containerHeight:m,scrollbarWidth:u,totalWidth:d(()=>r.value+u.value),rows:d(()=>{const y=t.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:j({size:0,offset:0,space:!1}),right:j({size:300,offset:0,space:!1}),footer:j({size:0,offset:0,space:!1}),left:j({size:300,offset:0,space:!1}),scroll:g,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,S,L){T[y][S]=L}};if(De(Z,T),de()>0){let L=function(){y=null,S.classList.remove("hide-scrollbar")},D=function(){if(y===null){if(S.scrollHeight>i.screen.height)return;S.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(L,300)},R=function(V){y!==null&&V==="remove"&&(clearTimeout(y),L()),window[`${V}EventListener`]("resize",D)},y=null;const S=document.body;w(()=>t.container!==!0?"add":"remove",R),t.container!==!0&&R("add"),st(()=>{R("remove")})}return()=>{const y=wt(s.default,[q(Ft,{onScroll:v}),q(pe,{onResize:B})]),S=q("div",{class:o.value,style:C.value,ref:t.container===!0?void 0:e,tabindex:-1},y);return t.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:e},[q(pe,{onResize:k}),q("div",{class:"absolute-full",style:p.value},[q("div",{class:"scroll",style:f.value},[S])])]):S}}});const Wt=ct({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Rt(t,s,l,i,e,a){return G(),he($t,{clickable:"",tag:"a",to:t.link},{default:z(()=>[t.icon?(G(),he(ze,{key:0,avatar:""},{default:z(()=>[x(Je,{name:t.icon},null,8,["name"])]),_:1})):ft("",!0),x(ze,null,{default:z(()=>[x(be,null,{default:z(()=>[ge(ye(t.title),1)]),_:1}),x(be,{caption:""},{default:z(()=>[ge(ye(t.caption),1)]),_:1})]),_:1})]),_:1},8,["to"])}var It=dt(Wt,[["render",Rt]]);function Nt(){return J(vt)}const ta={__name:"MainLayout",setup(t){Mt();const{proxy:s}=W(),l=_(s.$welcomMsg),i=Nt(),e=_(!1),a=[{title:"Home",icon:"home",link:"/home"},{title:"\uCEE8\uD150\uCE20",icon:"class",link:"/contents"},{title:"\uAC1C\uAC15\uAD00\uB9AC",icon:"assignment",link:"/course"}],r=()=>e.value=!e.value,g=d(()=>i.dark.isActive?"dark_mode":"light_mode"),m=()=>{i.dark.toggle(),i.localStorage.set("darkMode",i.dark.isActive)};return(u,o)=>{const C=mt("router-view");return G(),he(At,{view:"lHh Lpr lFf"},{default:z(()=>[x(Et,{elevated:""},{default:z(()=>[x(Qt,null,{default:z(()=>[x(_e,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:r}),x(Pt,null,{default:z(()=>[ge(" \uC5C5\uBB34\uD234 ")]),_:1}),$e("div",null,[x(_e,{flat:"",round:"",dense:"",icon:g.value,onClick:m},null,8,["icon"])])]),_:1})]),_:1}),x(Dt,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=p=>e.value=p),"show-if-above":"",bordered:""},{default:z(()=>[x(Lt,null,{default:z(()=>[x(be,{header:""},{default:z(()=>[$e("div",null,ye(l.value),1)]),_:1}),(G(),ht(yt,null,gt(a,p=>x(It,pt({key:p.title,pgCd:p.pgCd},p),null,16,["pgCd"])),64))]),_:1})]),_:1},8,["modelValue"]),x(Vt,null,{default:z(()=>[x(C)]),_:1})]),_:1})}}};export{ta as default};
