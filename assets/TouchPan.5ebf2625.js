import{c as O,w as S,d as _,o as D,a1 as x,a2 as F,g as A,W as L,a3 as X,a4 as Y,L as z,a5 as m,a6 as B,N as h,a7 as g,V as w,P as y,Q as E,O as b,U as Q}from"./index.e28e6c2f.js";import{g as T,s as M}from"./touch.3df10340.js";import{j as V}from"./QList.7e02a109.js";const{passive:P}=L,$=["both","horizontal","vertical"];var U=O({name:"QScrollObserver",props:{axis:{type:String,validator:s=>$.includes(s),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(s,{emit:r}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let c=null,e,t;S(()=>s.scrollTarget,()=>{a(),l()});function n(){c!==null&&c();const d=Math.max(0,X(e)),f=Y(e),u={top:d-o.position.top,left:f-o.position.left};if(s.axis==="vertical"&&u.top===0||s.axis==="horizontal"&&u.left===0)return;const v=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";o.position={top:d,left:f},o.directionChanged=o.direction!==v,o.delta=u,o.directionChanged===!0&&(o.direction=v,o.inflectionPoint=o.position),r("scroll",{...o})}function l(){e=F(t,s.scrollTarget),e.addEventListener("scroll",i,P),i(!0)}function a(){e!==void 0&&(e.removeEventListener("scroll",i,P),e=void 0)}function i(d){if(d===!0||s.debounce===0||s.debounce==="0")n();else if(c===null){const[f,u]=s.debounce?[setTimeout(n,s.debounce),clearTimeout]:[requestAnimationFrame(n),cancelAnimationFrame];c=()=>{u(f),c=null}}}const{proxy:p}=A();return S(()=>p.$q.lang.rtl,n),_(()=>{t=p.$el.parentNode,l()}),D(()=>{c!==null&&c(),a()}),Object.assign(p,{trigger:i,getPosition:()=>o}),x}});function C(s,r,o){const c=E(s);let e,t=c.left-r.event.x,n=c.top-r.event.y,l=Math.abs(t),a=Math.abs(n);const i=r.direction;i.horizontal===!0&&i.vertical!==!0?e=t<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?e=n<0?"up":"down":i.up===!0&&n<0?(e="up",l>a&&(i.left===!0&&t<0?e="left":i.right===!0&&t>0&&(e="right"))):i.down===!0&&n>0?(e="down",l>a&&(i.left===!0&&t<0?e="left":i.right===!0&&t>0&&(e="right"))):i.left===!0&&t<0?(e="left",l<a&&(i.up===!0&&n<0?e="up":i.down===!0&&n>0&&(e="down"))):i.right===!0&&t>0&&(e="right",l<a&&(i.up===!0&&n<0?e="up":i.down===!0&&n>0&&(e="down")));let p=!1;if(e===void 0&&o===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};e=r.event.lastDir,p=!0,e==="left"||e==="right"?(c.left-=t,l=0,t=0):(c.top-=n,a=0,n=0)}return{synthetic:p,payload:{evt:s,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:c,direction:e,isFirst:r.event.isFirst,isFinal:o===!0,duration:Date.now()-r.event.time,distance:{x:l,y:a},offset:{x:t,y:n},delta:{x:c.left-r.event.lastX,y:c.top-r.event.lastY}}}}let j=0;var K=z({name:"touch-pan",beforeMount(s,{value:r,modifiers:o}){if(o.mouse!==!0&&m.has.touch!==!0)return;function c(t,n){o.mouse===!0&&n===!0?Q(t):(o.stop===!0&&y(t),o.prevent===!0&&w(t))}const e={uid:"qvtp_"+j++,handler:r,modifiers:o,direction:T(o),noop:x,mouseStart(t){M(t,e)&&B(t)&&(h(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(t,!0))},touchStart(t){if(M(t,e)){const n=t.target;h(e,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),e.start(t)}},start(t,n){if(m.is.firefox===!0&&g(s,!0),e.lastEvt=t,n===!0||o.stop===!0){if(e.direction.all!==!0&&(n!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const i=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&w(i),t.cancelBubble===!0&&y(i),Object.assign(i,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[e.uid]:t.qClonedBy.concat(e.uid)}),e.initialEvent={target:t.target,event:i}}y(t)}const{left:l,top:a}=E(t);e.event={x:l,y:a,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:a}},move(t){if(e.event===void 0)return;const n=E(t),l=n.left-e.event.x,a=n.top-e.event.y;if(l===0&&a===0)return;e.lastEvt=t;const i=e.event.mouse===!0,p=()=>{c(t,i);let u;o.preserveCursor!==!0&&o.preservecursor!==!0&&(u=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),V(),e.styleCleanup=v=>{if(e.styleCleanup=void 0,u!==void 0&&(document.documentElement.style.cursor=u),document.body.classList.remove("non-selectable"),i===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};v!==void 0?setTimeout(()=>{q(),v()},50):q()}else v!==void 0&&v()}};if(e.event.detected===!0){e.event.isFirst!==!0&&c(t,e.event.mouse);const{payload:u,synthetic:v}=C(t,e,!1);u!==void 0&&(e.handler(u)===!1?e.end(t):(e.styleCleanup===void 0&&e.event.isFirst===!0&&p(),e.event.lastX=u.position.left,e.event.lastY=u.position.top,e.event.lastDir=v===!0?void 0:u.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||i===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){p(),e.event.detected=!0,e.move(t);return}const d=Math.abs(l),f=Math.abs(a);d!==f&&(e.direction.horizontal===!0&&d>f||e.direction.vertical===!0&&d<f||e.direction.up===!0&&d<f&&a<0||e.direction.down===!0&&d<f&&a>0||e.direction.left===!0&&d>f&&l<0||e.direction.right===!0&&d>f&&l>0?(e.event.detected=!0,e.move(t)):e.end(t,!0))},end(t,n){if(e.event!==void 0){if(b(e,"temp"),m.is.firefox===!0&&g(s,!1),n===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(C(t===void 0?e.lastEvt:t,e).payload);const{payload:l}=C(t===void 0?e.lastEvt:t,e,!0),a=()=>{e.handler(l)};e.styleCleanup!==void 0?e.styleCleanup(a):a()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(s.__qtouchpan=e,o.mouse===!0){const t=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";h(e,"main",[[s,"mousedown","mouseStart",`passive${t}`]])}m.has.touch===!0&&h(e,"main",[[s,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[s,"touchmove","noop","notPassiveCapture"]])},updated(s,r){const o=s.__qtouchpan;o!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&o.end(),o.handler=r.value),o.direction=T(r.modifiers))},beforeUnmount(s){const r=s.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),b(r,"main"),b(r,"temp"),m.is.firefox===!0&&g(s,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete s.__qtouchpan)}});export{U as Q,K as T};
