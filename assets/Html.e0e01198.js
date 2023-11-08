import{c as S,h as D}from"./render.bcb5873c.js";import{c as d,h as v,g as F,X as Te,a as le,d as Ee,Z as Y,r as _,C as De,$ as Fe,a0 as Me,D as ze,k as ie,w as Z,T as ee,_ as He,L as Pe,E,F as V,G as g,H as h,J as se,a1 as Le,a2 as Qe,Y as N,M as Oe,N as Ie,O as Ve,K as Ae}from"./index.992903ab.js";import{u as re,a as ue,b as Ne,c as Ke,d as Re,e as Ge,f as je,g as We}from"./use-timeout.20e899d5.js";import{e as Ue,f as Je,d as Xe,h as Ye,b as ce}from"./QBtn.f745c7ac.js";import{Q as Ze}from"./QPage.7391b61e.js";var de=S({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const t=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>v(e.tag,{class:t.value},D(a.default))}});const et={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},O={xs:2,sm:4,md:8,lg:16,xl:24};var tt=S({name:"QSeparator",props:{...re,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=F(),t=ue(e,a.proxy.$q),o=d(()=>e.vertical===!0?"vertical":"horizontal"),l=d(()=>` q-separator--${o.value}`),i=d(()=>e.inset!==!1?`${l.value}-${et[e.inset]}`:""),s=d(()=>`q-separator${l.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),r=d(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${O.md}px`:e.spaced in O?`${O[e.spaced]}px`:e.spaced,m=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${m[0]}`]=c[`margin${m[1]}`]=f}return c});return()=>v("hr",{class:s.value,style:r.value,"aria-orientation":o.value})}}),at=S({name:"QCardActions",props:{...Ue,vertical:Boolean},setup(e,{slots:a}){const t=Je(e),o=d(()=>`q-card__actions ${t.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>v("div",{class:o.value},D(a.default))}}),A=S({name:"QCard",props:{...re,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:t}}=F(),o=ue(e,t),l=d(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>v(e.tag,{class:l.value},D(a.default))}});function nt(){let e;const a=F();function t(){e=void 0}return Te(t),le(t),{removeTick:t,registerTick(o){e=o,Ee(()=>{e===o&&(Xe(a)===!1&&e(),e=void 0)})}}}const ot={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function lt(e,a=()=>{},t=()=>{}){return{transitionProps:d(()=>{const o=`q-transition--${e.transitionShow||a()}`,l=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:d(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let w=[],C=[];function fe(e){C=C.filter(a=>a!==e)}function it(e){fe(e),C.push(e)}function te(e){fe(e),C.length===0&&w.length!==0&&(w[w.length-1](),w=[])}function st(e){C.length===0?e():w.push(e)}let rt=1,ut=document.body;function ct(e,a){const t=document.createElement("div");if(t.id=a!==void 0?`q-portal--${a}--${rt++}`:e,Y.globalNodes!==void 0){const o=Y.globalNodes.class;o!==void 0&&(t.className=o)}return ut.appendChild(t),t}function dt(e){e.remove()}const I=[];function ft(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function mt(e,a,t,o){const l=_(!1),i=_(!1);let s=null;const r={},c=o==="dialog"&&ft(e);function f(p){if(p===!0){te(r),i.value=!0;return}i.value=!1,l.value===!1&&(c===!1&&s===null&&(s=ct(!1,o)),l.value=!0,I.push(e.proxy),it(r))}function m(p){if(i.value=!1,p!==!0)return;te(r),l.value=!1;const q=I.indexOf(e.proxy);q!==-1&&I.splice(q,1),s!==null&&(dt(s),s=null)}return De(()=>{m(!0)}),e.proxy.__qPortal=!0,Fe(e.proxy,"contentEl",()=>a.value),{showPortal:f,hidePortal:m,portalIsActive:l,portalIsAccessible:i,renderPortal:()=>c===!0?t():l.value===!0?[v(Me,{to:s},t())]:void 0}}const y=[];let b;function vt(e){b=e.keyCode===27}function gt(){b===!0&&(b=!1)}function ht(e){b===!0&&(b=!1,ze(e,27)===!0&&y[y.length-1](e))}function me(e){window[e]("keydown",vt),window[e]("blur",gt),window[e]("keyup",ht),b=!1}function _t(e){ie.is.desktop===!0&&(y.push(e),y.length===1&&me("addEventListener"))}function ae(e){const a=y.indexOf(e);a>-1&&(y.splice(a,1),y.length===0&&me("removeEventListener"))}const x=[];function ve(e){x[x.length-1](e)}function pt(e){ie.is.desktop===!0&&(x.push(e),x.length===1&&document.body.addEventListener("focusin",ve))}function ne(e){const a=x.indexOf(e);a>-1&&(x.splice(a,1),x.length===0&&document.body.removeEventListener("focusin",ve))}let T=0;const yt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},oe={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var xt=S({name:"QDialog",inheritAttrs:!1,props:{...Ne,...ot,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Ke,"shake","click","escapeKey"],setup(e,{slots:a,emit:t,attrs:o}){const l=F(),i=_(null),s=_(!1),r=_(!1);let c=null,f=null,m,p;const q=d(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:K}=We(),{registerTimeout:R}=Re(),{registerTick:ge,removeTick:G}=nt(),{transitionProps:he,transitionStyle:j}=lt(e,()=>oe[e.position][0],()=>oe[e.position][1]),{showPortal:W,hidePortal:U,portalIsAccessible:_e,renderPortal:pe}=mt(l,i,$e,"dialog"),{hide:B}=Ge({showing:s,hideOnRouteChange:q,handleShow:we,handleHide:Ce,processOnMount:!0}),{addToHistory:ye,removeFromHistory:xe}=je(s,B,q),be=d(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${yt[e.position]}`+(r.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),$=d(()=>s.value===!0&&e.seamless!==!0),qe=d(()=>e.autoClose===!0?{onClick:Se}:{}),ke=d(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${$.value===!0?"modal":"seamless"}`,o.class]);Z(()=>e.maximized,n=>{s.value===!0&&H(n)}),Z($,n=>{K(n),n===!0?(pt(P),_t(z)):(ne(P),ae(z))});function we(n){ye(),f=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,H(e.maximized),W(),r.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),ge(k)):G(),R(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:u,bottom:L}=document.activeElement.getBoundingClientRect(),{innerHeight:X}=window,Q=window.visualViewport!==void 0?window.visualViewport.height:X;u>0&&L>Q/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-Q,L>=X?1/0:Math.ceil(document.scrollingElement.scrollTop+L-Q/2))),document.activeElement.scrollIntoView()}p=!0,i.value.click(),p=!1}W(!0),r.value=!1,t("show",n)},e.transitionDuration)}function Ce(n){G(),xe(),J(!0),r.value=!0,U(),f!==null&&(((n&&n.type.indexOf("key")===0?f.closest('[tabindex]:not([tabindex^="-"])'):void 0)||f).focus(),f=null),R(()=>{U(!0),r.value=!1,t("hide",n)},e.transitionDuration)}function k(n){st(()=>{let u=i.value;u===null||u.contains(document.activeElement)===!0||(u=(n!==""?u.querySelector(n):null)||u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function M(n){n&&typeof n.focus=="function"?n.focus({preventScroll:!0}):k(),t("shake");const u=i.value;u!==null&&(u.classList.remove("q-animate--scale"),u.classList.add("q-animate--scale"),c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,i.value!==null&&(u.classList.remove("q-animate--scale"),k())},170))}function z(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&M():(t("escapeKey"),B()))}function J(n){c!==null&&(clearTimeout(c),c=null),(n===!0||s.value===!0)&&(H(!1),e.seamless!==!0&&(K(!1),ne(P),ae(z))),n!==!0&&(f=null)}function H(n){n===!0?m!==!0&&(T<1&&document.body.classList.add("q-body--dialog"),T++,m=!0):m===!0&&(T<2&&document.body.classList.remove("q-body--dialog"),T--,m=!1)}function Se(n){p!==!0&&(B(n),t("click",n))}function Be(n){e.persistent!==!0&&e.noBackdropDismiss!==!0?B(n):e.noShake!==!0&&M()}function P(n){e.allowFocusOutside!==!0&&_e.value===!0&&Ye(i.value,n.target)!==!0&&k('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:k,shake:M,__updateRefocusTarget(n){f=n||null}}),le(J);function $e(){return v("div",{role:"dialog","aria-modal":$.value===!0?"true":"false",...o,class:ke.value},[v(ee,{name:"q-transition--fade",appear:!0},()=>$.value===!0?v("div",{class:"q-dialog__backdrop fixed-full",style:j.value,"aria-hidden":"true",tabindex:-1,onClick:Be}):null),v(ee,he.value,()=>s.value===!0?v("div",{ref:i,class:be.value,style:j.value,tabindex:-1,...qe.value},D(a.default)):null)])}return pe}});const bt=e=>(Le("data-v-06650398"),e=e(),Qe(),e),qt=bt(()=>N("iframe",{src:"https://player.vimeo.com/video/882455373?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",style:{position:"absolute",top:"0",left:"0",width:"500px",height:"500px"},title:"IMG_0927"},null,-1)),kt={__name:"Vimeo",setup(e,{expose:a}){const t=_(!1);return a({modalOpen:()=>{t.value=!t.value}}),(l,i)=>{const s=Pe("q-card-title");return E(),V(xt,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=r=>t.value=r)},{default:g(()=>[h(A,{class:"vimeo-card"},{default:g(()=>[h(de,{class:"row items-center"},{default:g(()=>[h(s,{class:"text-h6"},{default:g(()=>[se(" HTML VIMEO TEST \uC911 ")]),_:1}),h(ce,{dense:"",flat:"",round:"",icon:"close",onClick:i[0]||(i[0]=r=>t.value=!t.value),class:"q-ml-md"})]),_:1}),h(A,{style:{padding:"177.59% 0 0 0",position:"relative"}},{default:g(()=>[qt]),_:1})]),_:1})]),_:1},8,["modelValue"])}}};var wt=He(kt,[["__scopeId","data-v-06650398"]]);const Ct=N("div",{class:"text-h6"},"# HTML",-1),St=N("div",{class:"text-subtitle2"},"by Duck-dog",-1),Ft={__name:"Html",setup(e){const a=_(),t=_([{title:"",content:"HTML #1 : HTML \uAE30\uBCF8, h, div, p, span \uD0DC\uADF8",url:""},{title:"",content:"Vimeo \uD14C\uC2A4\uD2B8",url:""}]),o=()=>{a.value.modalOpen()};return(l,i)=>(E(),V(Ze,{class:"flex-center q-pa-xl"},{default:g(()=>[h(A,{class:"my-card"},{default:g(()=>[h(de,null,{default:g(()=>[Ct,St]),_:1}),h(tt),h(at,{vertical:""},{default:g(()=>[(E(!0),Oe(Ve,null,Ie(t.value,(s,r)=>(E(),V(ce,{onClick:o,flat:"",key:r},{default:g(()=>[se(Ae(s.content),1)]),_:2},1024))),128))]),_:1})]),_:1}),h(wt,{ref_key:"vimeoModal",ref:a},null,512)]),_:1}))}};export{Ft as default};
