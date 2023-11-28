import{a as k,V as C,w as W,o as B,g as O,d as q,k as p,l as c,x as D,W as F,X as N}from"./index.f33f12ab.js";import{v as _,c as M,g as I,d as j}from"./QBtn.a58c2380.js";function le(e,o,t){let l;function r(){l!==void 0&&(C.remove(l),l=void 0)}return k(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>t.value===!0,handler:o},C.add(l)}}}const ie={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},re=["beforeShow","show","beforeHide","hide"];function ne({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:r,processOnMount:m}){const n=O(),{props:s,emit:u,proxy:L}=n;let d;function $(i){e.value===!0?g(i):V(i)}function V(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||o!==void 0&&o(i)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),d=i,q(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&S(i)}function S(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),l!==void 0?l(i):u("show",i))}function g(i){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),d=i,q(()=>{d===i&&(d=void 0)})),(s.modelValue===null||f===!1)&&H(i)}function H(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),r!==void 0?r(i):u("hide",i))}function x(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?S:H)(d)}W(()=>s.modelValue,x),t!==void 0&&_(n)===!0&&W(()=>L.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),m===!0&&B(()=>{x(s.modelValue)});const P={show:V,hide:g,toggle:$};return Object.assign(L,P),P}const K=[null,document,document.body,document.scrollingElement,document.documentElement];function se(e,o){let t=I(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return K.includes(t)?window:t}function R(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function ue(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),h=t-l,h}function J(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,E=!1,X,Y,A,a=null;function Q(e){Z(e)&&D(e)}function Z(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=F(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=t||l?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const n=o[m];if(J(n,l))return l?r<0&&n.scrollTop===0?!0:r>0&&n.scrollTop+n.clientHeight===n.scrollHeight:r<0&&n.scrollLeft===0?!0:r>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function U(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=t-o,document.scrollingElement.scrollTop=l),l>v&&(document.scrollingElement.scrollTop-=Math.ceil((l-v)/8))}))}function z(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(o);b=G(window),T=R(window),X=o.style.left,Y=o.style.top,A=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,r!=="hidden"&&(r==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,c.passiveCapture),window.visualViewport.addEventListener("scroll",y,c.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",U,c.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",Q,c.notPassive),e==="remove"&&(p.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",y,c.passiveCapture),window.visualViewport.removeEventListener("scroll",y,c.passiveCapture)):window.removeEventListener("scroll",U,c.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=X,o.style.top=Y,window.location.href===A&&window.scrollTo(b,T),v=void 0)}function ee(e){let o="add";if(e===!0){if(w++,a!==null){clearTimeout(a),a=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){a!==null&&clearTimeout(a),a=setTimeout(()=>{z(o),a=null},100);return}}z(o)}function de(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,ee(o))}}}function ce(){let e=null;const o=O();function t(){e!==null&&(clearTimeout(e),e=null)}return N(t),k(t),{removeTimeout:t,registerTimeout(l,r){t(),j(o)===!1&&(e=setTimeout(l,r))}}}export{re as a,ce as b,ne as c,le as d,de as e,R as f,se as g,G as h,ue as i,ie as u};
