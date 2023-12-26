import{c as te,Y as ne,Z as ae,a as d,h as g,g as V,d as de,$ as z,k as fe,t as ve,s as re,q as ge,a0 as me,r as Q,o as be,a1 as he,a2 as ye,y as pe,u as P,m as ke,C as xe}from"./index.a3a81802.js";import{h as qe,c as K}from"./render.528d0d8d.js";const F="0 0 24 24",U=e=>e,D=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(ue).join("|")+")"),Ee=new RegExp("^("+Object.keys(le).join("|")+")"),H=new RegExp("^("+Object.keys(ie).join("|")+")"),we=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,Ce=/^svguse:/,Le=/^ion-/,Be=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=te({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=V(),n=ae(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let o,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(we.test(r)===!0){const[s,y=F]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(l=>{const[p,b,k]=l.split("@@");return g("path",{style:b,d:p,transform:k})})}}if(Re.test(r)===!0)return{img:!0,src:r.substring(4)};if(Ce.test(r)===!0){const[s,y=F]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match($e);if(h!==null)o=ue[h[1]](r);else if(Be.test(r)===!0)o=r;else if(Le.test(r)===!0)o=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(H.test(r)===!0){o="notranslate material-symbols";const s=r.match(H);s!==null&&(r=r.substring(6),o+=ie[s[1]]),q=r}else{o="notranslate material-icons";const s=r.match(Ee);s!==null&&(r=r.substring(2),o+=le[s[1]]),q=r}return{cls:o,content:q}});return()=>{const o={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?g(e.tag,o,qe(t.default)):f.value.img===!0?g("span",o,K(t.default,[g("img",{src:f.value.src})])):f.value.svg===!0?g("span",o,K(t.default,[g("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?g("span",o,K(t.default,[g("svg",{viewBox:f.value.viewBox},[g("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(o.class+=" "+f.value.cls),g(e.tag,o,K(t.default,[f.value.content])))}}});function _e(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function X(e,t,a,n){a.modifiers.stop===!0&&re(e);const i=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const o=document.createElement("span"),r=document.createElement("span"),q=ge(e),{left:h,top:s,width:y,height:l}=t.getBoundingClientRect(),p=Math.sqrt(y*y+l*l),b=p/2,k=`${(y-p)/2}px`,c=f?k:`${q.left-h-b}px`,x=`${(l-p)/2}px`,S=f?x:`${q.top-s-b}px`;r.className="q-ripple__inner",me(r,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${c},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(r),t.appendChild(o);const B=()=>{o.remove(),clearTimeout(_)};a.abort.push(B);let _=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${k},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,_=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,_=setTimeout(()=>{o.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function Y(e,{modifiers:t,value:a,arg:n}){const i=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Se=de({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&X(i,e,n,i.qKeyEvent===!0)},keystart:_e(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&z(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&X(i,e,n,!0)},300)};Y(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Y(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ve(t,"main"),delete e._qripple)}});function Xe(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function se(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{se(e,a)}):e.add(t)}function Ye(e){const t=new Set;return e.forEach(a=>{se(t,a)}),Array.from(t)}function Pe(e){return e.appContext.config.globalProperties.$router!==void 0}function Ze(e){return e.isUnmounted===!0||e.isDeactivated===!0}const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(oe),Oe={align:{type:String,validator:e=>Ae.includes(e)}};function Te(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function je(e,t){for(const a in t){const n=t[a],i=e[a];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,o)=>f!==i[o]))return!1}return!0}function J(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Me(e,t){return Array.isArray(e)===!0?J(e,t):Array.isArray(t)===!0?J(t,e):e===t}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Me(e[a],t[a])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ne({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=V(),{props:n,proxy:i,emit:f}=a,o=Pe(a),r=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>o===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>o===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=d(()=>q.value===!0?S(n.to):null),s=d(()=>h.value!==null),y=d(()=>r.value===!0||s.value===!0),l=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),p=d(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=d(()=>{if(s.value===!1)return-1;const{matched:v}=h.value,{length:$}=v,w=v[$-1];if(w===void 0)return-1;const C=i.$route.matched;if(C.length===0)return-1;const L=C.findIndex(G.bind(null,w));if(L>-1)return L;const I=Z(v[$-2]);return $>1&&Z(w)===I&&C[C.length-1].path!==I?C.findIndex(G.bind(null,v[$-2])):L}),k=d(()=>s.value===!0&&b.value!==-1&&je(i.$route.params,h.value.params)),c=d(()=>k.value===!0&&b.value===i.$route.matched.length-1&&Ke(i.$route.params,h.value.params)),x=d(()=>s.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function S(v){try{return i.$router.resolve(v)}catch{}return null}function B(v,{returnRouterError:$,to:w=n.to,replace:C=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const L=i.$router[C===!0?"replace":"push"](w);return $===!0?L:L.then(()=>{}).catch(()=>{})}function _(v){if(s.value===!0){const $=w=>B(v,w);f("click",v,$),v.defaultPrevented!==!0&&$()}else f("click",v)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:k,linkIsExactActive:c,linkClass:x,linkAttrs:p,getLink:S,navigateToRouterLink:B,navigateOnClick:_}}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},ze=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Qe=["flat","outline","push","unelevated"],ce=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ge=e=>{const t=ce(e);return t!==void 0?{[t]:!0}:{}},Fe={...ne,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Qe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ue(e){const t=ae(e,De),a=Te(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:o,navigateOnClick:r}=Ne({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),h=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>s.value===!0?e.tabindex||0:-1),l=d(()=>ce(e,"standard")),p=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,o.value):ze.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),b=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=d(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:k,attributes:p,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:E}=xe;let A=null,O=null,T=null;var Je=te({name:"QBtn",props:{...Fe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=V(),{classes:i,style:f,innerClasses:o,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Ue(e),l=Q(null),p=Q(null);let b=null,k,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),S=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=d(()=>({center:e.round})),_=d(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:M,onTouchstart:M,onClick:M,onKeydown:M,onKeyup:M};if(y.value===!0){const u={onClick:w,onKeydown:C,onMousedown:I};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";u[`onTouchstart${m}`]=L}return u}return{onClick:P}}),$=d(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...v.value}));function w(u){if(l.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&l.value.contains(m)===!1&&m.contains(l.value)===!1){l.value.focus();const N=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",N,E),l.value!==null&&l.value.removeEventListener("blur",N,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",N,E),l.value.addEventListener("blur",N,E)}}s(u)}}function C(u){l.value!==null&&(a("keydown",u),z(u,[13,32])===!0&&O!==l.value&&(O!==null&&j(),u.defaultPrevented!==!0&&(l.value.focus(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),l.value.addEventListener("blur",R,E)),P(u)))}function L(u){l.value!==null&&(a("touchstart",u),u.defaultPrevented!==!0&&(A!==l.value&&(A!==null&&j(),A=l.value,b=u.target,b.addEventListener("touchcancel",R,E),b.addEventListener("touchend",R,E)),k=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,k=!1},200)))}function I(u){l.value!==null&&(u.qSkipRipple=k===!0,a("mousedown",u),u.defaultPrevented!==!0&&T!==l.value&&(T!==null&&j(),T=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,E)))}function R(u){if(l.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===l.value)){if(u!==void 0&&u.type==="keyup"){if(O===l.value&&z(u,[13,32])===!0){const m=new MouseEvent("click",u);m.qKeyEvent=!0,u.defaultPrevented===!0&&ke(m),u.cancelBubble===!0&&re(m),l.value.dispatchEvent(m),P(u),u.qKeyEvent=!0}a("keyup",u)}j()}}function j(u){const m=p.value;u!==!0&&(A===l.value||T===l.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),A===l.value&&(b!==null&&(b.removeEventListener("touchcancel",R,E),b.removeEventListener("touchend",R,E)),A=b=null),T===l.value&&(document.removeEventListener("mouseup",R,E),T=null),O===l.value&&(document.removeEventListener("keyup",R,!0),l.value!==null&&l.value.removeEventListener("blur",R,E),O=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function M(u){P(u),u.qSkipRipple=!0}return be(()=>{j(!0)}),Object.assign(n,{click:w}),()=>{let u=[];e.icon!==void 0&&u.push(g(W,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&u.push(g("span",{class:"block"},[e.label])),u=K(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(g(W,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[g("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},u)),e.loading!==null&&m.push(g(ye,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(he)])]:null)),pe(g(h.value,$.value,m),[[Se,S.value,void 0,B.value]])}}});export{W as Q,Se as R,Je as a,Ne as b,Ze as c,Oe as d,Te as e,Ye as f,Xe as g,Qe as h,ee as i,ce as j,Fe as k,Ge as l,Ie as u,Pe as v};
