import{c as E,h as A}from"./render.5c312543.js";import{c as d,h,g as N,X as $e,a as ie,d as Be,Z,r as _,C as Te,_ as Ee,$ as De,D as Fe,k as se,w as ee,T as te,a0 as Me,o as ze,L as He,E as T,F as O,G as v,H as g,J as I,a1 as Pe,a2 as Le,Y as K,M as Qe,N as Oe,O as Ie,K as Ve}from"./index.4952afbc.js";import{u as Ae,a as Ne}from"./use-dark.47698e9f.js";import{e as Ke,f as Re,d as Ge,h as je,b as ue}from"./QBtn.12b17704.js";import{a as V,Q as We}from"./QPage.0c53464f.js";import{u as Ue,a as Je,b as Xe,c as Ye,d as Ze,e as et}from"./use-timeout.cca37573.js";var re=E({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:n}){const t=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:t.value},A(n.default))}});const tt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},L={xs:2,sm:4,md:8,lg:16,xl:24};var at=E({name:"QSeparator",props:{...Ae,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=N(),t=Ne(e,n.proxy.$q),o=d(()=>e.vertical===!0?"vertical":"horizontal"),l=d(()=>` q-separator--${o.value}`),i=d(()=>e.inset!==!1?`${l.value}-${tt[e.inset]}`:""),s=d(()=>`q-separator${l.value}${i.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),u=d(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${L.md}px`:e.spaced in L?`${L[e.spaced]}px`:e.spaced,m=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${m[0]}`]=r[`margin${m[1]}`]=f}return r});return()=>h("hr",{class:s.value,style:u.value,"aria-orientation":o.value})}}),nt=E({name:"QCardActions",props:{...Ke,vertical:Boolean},setup(e,{slots:n}){const t=Re(e),o=d(()=>`q-card__actions ${t.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>h("div",{class:o.value},A(n.default))}});function ot(){let e;const n=N();function t(){e=void 0}return $e(t),ie(t),{removeTick:t,registerTick(o){e=o,Be(()=>{e===o&&(Ge(n)===!1&&e(),e=void 0)})}}}const lt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function it(e,n=()=>{},t=()=>{}){return{transitionProps:d(()=>{const o=`q-transition--${e.transitionShow||n()}`,l=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:d(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let q=[],C=[];function ce(e){C=C.filter(n=>n!==e)}function st(e){ce(e),C.push(e)}function ae(e){ce(e),C.length===0&&q.length!==0&&(q[q.length-1](),q=[])}function ut(e){C.length===0?e():q.push(e)}let rt=1,ct=document.body;function dt(e,n){const t=document.createElement("div");if(t.id=n!==void 0?`q-portal--${n}--${rt++}`:e,Z.globalNodes!==void 0){const o=Z.globalNodes.class;o!==void 0&&(t.className=o)}return ct.appendChild(t),t}function ft(e){e.remove()}const Q=[];function mt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function vt(e,n,t,o){const l=_(!1),i=_(!1);let s=null;const u={},r=o==="dialog"&&mt(e);function f(p){if(p===!0){ae(u),i.value=!0;return}i.value=!1,l.value===!1&&(r===!1&&s===null&&(s=dt(!1,o)),l.value=!0,Q.push(e.proxy),st(u))}function m(p){if(i.value=!1,p!==!0)return;ae(u),l.value=!1;const k=Q.indexOf(e.proxy);k!==-1&&Q.splice(k,1),s!==null&&(ft(s),s=null)}return Te(()=>{m(!0)}),e.proxy.__qPortal=!0,Ee(e.proxy,"contentEl",()=>n.value),{showPortal:f,hidePortal:m,portalIsActive:l,portalIsAccessible:i,renderPortal:()=>r===!0?t():l.value===!0?[h(De,{to:s},t())]:void 0}}const y=[];let b;function gt(e){b=e.keyCode===27}function ht(){b===!0&&(b=!1)}function _t(e){b===!0&&(b=!1,Fe(e,27)===!0&&y[y.length-1](e))}function de(e){window[e]("keydown",gt),window[e]("blur",ht),window[e]("keyup",_t),b=!1}function pt(e){se.is.desktop===!0&&(y.push(e),y.length===1&&de("addEventListener"))}function ne(e){const n=y.indexOf(e);n>-1&&(y.splice(n,1),y.length===0&&de("removeEventListener"))}const x=[];function fe(e){x[x.length-1](e)}function yt(e){se.is.desktop===!0&&(x.push(e),x.length===1&&document.body.addEventListener("focusin",fe))}function oe(e){const n=x.indexOf(e);n>-1&&(x.splice(n,1),x.length===0&&document.body.removeEventListener("focusin",fe))}let B=0;const xt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},le={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var bt=E({name:"QDialog",inheritAttrs:!1,props:{...Ue,...lt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Je,"shake","click","escapeKey"],setup(e,{slots:n,emit:t,attrs:o}){const l=N(),i=_(null),s=_(!1),u=_(!1);let r=null,f=null,m,p;const k=d(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:R}=et(),{registerTimeout:G}=Xe(),{registerTick:me,removeTick:j}=ot(),{transitionProps:ve,transitionStyle:W}=it(e,()=>le[e.position][0],()=>le[e.position][1]),{showPortal:U,hidePortal:J,portalIsAccessible:ge,renderPortal:he}=vt(l,i,Se,"dialog"),{hide:S}=Ye({showing:s,hideOnRouteChange:k,handleShow:ke,handleHide:we,processOnMount:!0}),{addToHistory:_e,removeFromHistory:pe}=Ze(s,S,k),ye=d(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${xt[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),$=d(()=>s.value===!0&&e.seamless!==!0),xe=d(()=>e.autoClose===!0?{onClick:qe}:{}),be=d(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${$.value===!0?"modal":"seamless"}`,o.class]);ee(()=>e.maximized,a=>{s.value===!0&&M(a)}),ee($,a=>{R(a),a===!0?(yt(z),pt(F)):(oe(z),ne(F))});function ke(a){_e(),f=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,M(e.maximized),U(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),me(w)):j(),G(()=>{if(l.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:c,bottom:H}=document.activeElement.getBoundingClientRect(),{innerHeight:Y}=window,P=window.visualViewport!==void 0?window.visualViewport.height:Y;c>0&&H>P/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-P,H>=Y?1/0:Math.ceil(document.scrollingElement.scrollTop+H-P/2))),document.activeElement.scrollIntoView()}p=!0,i.value.click(),p=!1}U(!0),u.value=!1,t("show",a)},e.transitionDuration)}function we(a){j(),pe(),X(!0),u.value=!0,J(),f!==null&&(((a&&a.type.indexOf("key")===0?f.closest('[tabindex]:not([tabindex^="-"])'):void 0)||f).focus(),f=null),G(()=>{J(!0),u.value=!1,t("hide",a)},e.transitionDuration)}function w(a){ut(()=>{let c=i.value;c===null||c.contains(document.activeElement)===!0||(c=(a!==""?c.querySelector(a):null)||c.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.querySelector("[autofocus], [data-autofocus]")||c,c.focus({preventScroll:!0}))})}function D(a){a&&typeof a.focus=="function"?a.focus({preventScroll:!0}):w(),t("shake");const c=i.value;c!==null&&(c.classList.remove("q-animate--scale"),c.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,i.value!==null&&(c.classList.remove("q-animate--scale"),w())},170))}function F(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&D():(t("escapeKey"),S()))}function X(a){r!==null&&(clearTimeout(r),r=null),(a===!0||s.value===!0)&&(M(!1),e.seamless!==!0&&(R(!1),oe(z),ne(F))),a!==!0&&(f=null)}function M(a){a===!0?m!==!0&&(B<1&&document.body.classList.add("q-body--dialog"),B++,m=!0):m===!0&&(B<2&&document.body.classList.remove("q-body--dialog"),B--,m=!1)}function qe(a){p!==!0&&(S(a),t("click",a))}function Ce(a){e.persistent!==!0&&e.noBackdropDismiss!==!0?S(a):e.noShake!==!0&&D()}function z(a){e.allowFocusOutside!==!0&&ge.value===!0&&je(i.value,a.target)!==!0&&w('[tabindex]:not([tabindex="-1"])')}Object.assign(l.proxy,{focus:w,shake:D,__updateRefocusTarget(a){f=a||null}}),ie(X);function Se(){return h("div",{role:"dialog","aria-modal":$.value===!0?"true":"false",...o,class:be.value},[h(te,{name:"q-transition--fade",appear:!0},()=>$.value===!0?h("div",{class:"q-dialog__backdrop fixed-full",style:W.value,"aria-hidden":"true",tabindex:-1,onClick:Ce}):null),h(te,ve.value,()=>s.value===!0?h("div",{ref:i,class:ye.value,style:W.value,tabindex:-1,...xe.value},A(n.default)):null)])}return he}});const kt=e=>(Pe("data-v-462af891"),e=e(),Le(),e),wt=kt(()=>K("iframe",{id:"modalFrame",src:"https://player.vimeo.com/video/882455373?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",style:{width:"500px",height:"500px"},title:"IMG_0927"},null,-1)),qt={__name:"Vimeo",setup(e,{expose:n}){const t=_(!1);return ze(()=>{}),n({modalOpen:()=>{t.value=!t.value}}),(l,i)=>{const s=He("q-card-title");return T(),O(bt,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=u=>t.value=u)},{default:v(()=>[g(V,{class:"vimeo-card"},{default:v(()=>[g(re,{class:"row items-center"},{default:v(()=>[g(s,{class:"text-h6"},{default:v(()=>[I(" \uC900\uBE44 \uC911 (11.26 \uC624\uD508)")]),_:1}),g(ue,{dense:"",flat:"",round:"",icon:"close",onClick:i[0]||(i[0]=u=>t.value=!t.value),class:"q-ml-md"})]),_:1}),g(V,{class:"text-center"},{default:v(()=>[I(" \uC11D\uCD0C\uD638\uC218\uC5D0\uC11C \uCC0D\uC740 \uC624\uB9AC\uC5D0\uC694 \uC624\uB9AC\uC880 \uAD6C\uACBD\uD558\uACE0 \uAC00\uC138\uC694 "),wt]),_:1})]),_:1})]),_:1},8,["modelValue"])}}};var Ct=Me(qt,[["__scopeId","data-v-462af891"]]);const St=K("div",{class:"text-h6"},"# HTML",-1),$t=K("div",{class:"text-subtitle2"},"by Duck-dog",-1),zt={__name:"Html",setup(e){const n=_(),t=_([{title:"HTML #1",content:"\uAC1C\uBC1C\uD658\uACBD \uAD6C\uC131, HTML\uC774\uB780?",url:""},{title:"HTML #2",content:"Emmet",url:""}]),o=l=>{console.log("vimeo modal open...",l),n.value.modalOpen()};return(l,i)=>(T(),O(We,{class:"flex-center q-pa-xl"},{default:v(()=>[g(V,{class:"my-card"},{default:v(()=>[g(re,null,{default:v(()=>[St,$t]),_:1}),g(at),g(nt,{vertical:""},{default:v(()=>[(T(!0),Qe(Ie,null,Oe(t.value,(s,u)=>(T(),O(ue,{flat:"",key:u,onClick:r=>o(s)},{default:v(()=>[I(Ve(s.content),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1}),g(Ct,{ref_key:"vimeoModal",ref:n},null,512)]),_:1}))}};export{zt as default};
