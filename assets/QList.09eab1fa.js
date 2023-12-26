import{a3 as M,c as B,r as w,a as c,h as b,$ as Q,u as R,g as _,w as T,v as H,x as L,a4 as A,o as C,a5 as V,a6 as P}from"./index.a3a81802.js";import{u as I,a as E}from"./use-dark.38057a6f.js";import{u as $,b as D,v as U,c as j}from"./QBtn.c300c124.js";import{a as K,h as S}from"./render.528d0d8d.js";function W(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),M.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var G=B({name:"QItem",props:{...I,...$,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:u}}=_(),o=E(e,u),{hasLink:q,linkAttrs:y,linkClass:i,linkTag:s,navigateOnClick:g}=D(),r=w(null),f=w(null),v=c(()=>e.clickable===!0||q.value===!0||e.tag==="label"),d=c(()=>e.disable!==!0&&v.value===!0),m=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(q.value===!0&&e.active===null?i.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=c(()=>{if(e.insetLevel===void 0)return null;const n=u.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function h(n){d.value===!0&&(f.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===r.value?f.value.focus():document.activeElement===f.value&&r.value.focus()),g(n))}function p(n){if(d.value===!0&&Q(n,[13,32])===!0){R(n),n.qKeyEvent=!0;const x=new MouseEvent("click",n);x.qKeyEvent=!0,r.value.dispatchEvent(x)}l("keyup",n)}function a(){const n=K(t.default,[]);return d.value===!0&&n.unshift(b("div",{class:"q-focus-helper",tabindex:-1,ref:f})),n}return()=>{const n={ref:r,class:m.value,style:k.value,role:"listitem",onClick:h,onKeyup:p};return d.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,y.value)):v.value===!0&&(n["aria-disabled"]="true"),b(s.value,n,a())}}}),J=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>b("div",{class:l.value},S(t.default))}}),X=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=c(()=>parseInt(e.lines,10)),u=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),o=c(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>b("div",{style:o.value,class:u.value},S(t.default))}});const Y={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Z=["beforeShow","show","beforeHide","hide"];function ee({showing:e,canShow:t,hideOnRouteChange:l,handleShow:u,handleHide:o,processOnMount:q}){const y=_(),{props:i,emit:s,proxy:g}=y;let r;function f(a){e.value===!0?m(a):v(a)}function v(a){if(i.disable===!0||a!==void 0&&a.qAnchorHandled===!0||t!==void 0&&t(a)!==!0)return;const n=i["onUpdate:modelValue"]!==void 0;n===!0&&(s("update:modelValue",!0),r=a,L(()=>{r===a&&(r=void 0)})),(i.modelValue===null||n===!1)&&d(a)}function d(a){e.value!==!0&&(e.value=!0,s("beforeShow",a),u!==void 0?u(a):s("show",a))}function m(a){if(i.disable===!0)return;const n=i["onUpdate:modelValue"]!==void 0;n===!0&&(s("update:modelValue",!1),r=a,L(()=>{r===a&&(r=void 0)})),(i.modelValue===null||n===!1)&&k(a)}function k(a){e.value!==!1&&(e.value=!1,s("beforeHide",a),o!==void 0?o(a):s("hide",a))}function h(a){i.disable===!0&&a===!0?i["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):a===!0!==e.value&&(a===!0?d:k)(r)}T(()=>i.modelValue,h),l!==void 0&&U(y)===!0&&T(()=>g.$route.fullPath,()=>{l.value===!0&&e.value===!0&&m()}),q===!0&&H(()=>{h(i.modelValue)});const p={show:v,hide:m,toggle:f};return Object.assign(g,p),p}function te(){let e=null;const t=_();function l(){e!==null&&(clearTimeout(e),e=null)}return A(l),C(l),{removeTimeout:l,registerTimeout(u,o){l(),j(t)===!1&&(e=setTimeout(u,o))}}}function ae(e,t,l){let u;function o(){u!==void 0&&(V.remove(u),u=void 0)}return C(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){u={condition:()=>l.value===!0,handler:t},V.add(u)}}}function le(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,P(t))}}}function ne(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function ue(e,t,l){if(l<=t)return t;const u=l-t+1;let o=t+(e-t)%u;return o<t&&(o=u+o),o===0?0:o}var oe=B({name:"QList",props:{...I,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=_(),u=E(e,l.proxy.$q),o=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>b(e.tag,{class:o.value},S(t.default))}});export{J as Q,Z as a,te as b,W as c,ee as d,ae as e,ne as f,le as g,X as h,G as i,oe as j,ue as n,Y as u};
