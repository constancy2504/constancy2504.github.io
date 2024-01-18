import{i as Re,w as D,d as de,o as re,aw as qe,g as ee,r as j,a as b,an as Fe,ai as ke,ap as Ve,U as Ae,n as Y,Y as _e,af as Ee,k as Be,h as k,V as X,S as Te,T as $e,a5 as Oe,ad as Ie,c as Pe,P as fe}from"./index.e28e6c2f.js";import{Q as ce}from"./QBtn.ba962401.js";import{u as je,a as De}from"./use-dark.8df0815c.js";import{h as te}from"./render.d7098c4d.js";function ze({validate:e,resetValidation:t,requiresQForm:u}){const i=Re(qe,!1);if(i!==!1){const{props:f,proxy:d}=ee();Object.assign(d,{validate:e,resetValidation:t}),D(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),de(()=>{f.disable!==!0&&i.bindComponent(d)}),re(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ve=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,me=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,le=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ne=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ue={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ve.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>me.test(e),rgbColor:e=>le.test(e),rgbaColor:e=>ne.test(e),rgbOrRgbaColor:e=>le.test(e)||ne.test(e),hexOrRgbColor:e=>ve.test(e)||le.test(e),hexaOrRgbaColor:e=>ge.test(e)||ne.test(e),anyColor:e=>me.test(e)||le.test(e)||ne.test(e)},Ne=[!0,!1,"ondemand"],Ue={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ne.includes(e)}};function Le(e,t){const{props:u,proxy:i}=ee(),f=j(!1),d=j(null),c=j(null);ze({validate:$,resetValidation:_});let x=0,B;const R=b(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),w=b(()=>u.disable!==!0&&R.value===!0),p=b(()=>u.error===!0||f.value===!0),H=b(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);D(()=>u.modelValue,()=>{U()}),D(()=>u.reactiveRules,P=>{P===!0?B===void 0&&(B=D(()=>u.rules,()=>{U(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),D(e,P=>{P===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,w.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function _(){x++,t.value=!1,c.value=null,f.value=!1,d.value=null,I.cancel()}function $(P=u.modelValue){if(w.value!==!0)return!0;const F=++x,Q=t.value!==!0?()=>{c.value=!0}:()=>{},N=(S,C)=>{S===!0&&Q(),f.value=S,d.value=C||null,t.value=!1},z=[];for(let S=0;S<u.rules.length;S++){const C=u.rules[S];let E;if(typeof C=="function"?E=C(P,ue):typeof C=="string"&&ue[C]!==void 0&&(E=ue[C](P)),E===!1||typeof E=="string")return N(!0,E),!1;E!==!0&&E!==void 0&&z.push(E)}return z.length===0?(N(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return F===x&&N(!1),!0;const C=S.find(E=>E===!1||typeof E=="string");return F===x&&N(C!==void 0,C),C===void 0},S=>(F===x&&(console.error(S),N(!0)),!1)))}function U(P){w.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&P!==!0)&&I()}const I=Fe($,0);return re(()=>{B!==void 0&&B(),I.cancel()}),Object.assign(i,{resetValidation:_,validate:$}),ke(i,"hasError",()=>p.value),{isDirtyModel:c,hasRules:R,hasError:p,errorMessage:H,validate:$,resetValidation:_}}const he=/^on[A-Z]/;function Ze(e,t){const u={listeners:j({}),attributes:j({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&he.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)he.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Ve(i),i(),u}let ie,ae=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const Ke=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),pe=4096;function xe(){(ie===void 0||ae+16>pe)&&(ae=0,ie=Ke(pe));const e=Array.prototype.slice.call(ie,ae,ae+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}let W=[],G=[];function we(e){G=G.filter(t=>t!==e)}function vt(e){we(e),G.push(e)}function gt(e){we(e),G.length===0&&W.length!==0&&(W[W.length-1](),W=[])}function Ce(e){G.length===0?e():W.push(e)}function He(e){W=W.filter(t=>t!==e)}function Me(e,t){return e===void 0?t===!0?`f_${xe()}`:void 0:e}function se(e){return e!=null&&(""+e).length!==0}const Qe={...je,...Ue,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ye=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function We({requiredForAttr:e=!0,tagProp:t}={}){const{props:u,attrs:i,proxy:f,vnode:d}=ee(),c=De(u,f.$q);return{requiredForAttr:e,tag:t===!0?b(()=>u.tag):{value:"label"},isDark:c,editable:b(()=>u.disable!==!0&&u.readonly!==!0),innerLoading:j(!1),focused:j(!1),hasPopupOpen:!1,splitAttrs:Ze(i,d),targetUid:j(Me(u.for,e)),rootRef:j(null),targetRef:j(null),controlRef:j(null)}}function Je(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=ee(),{$q:c}=d;let x=null;e.hasValue===void 0&&(e.hasValue=b(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:o,onFocusout:a}),Object.assign(e,{clearValue:s,onControlFocusin:o,onControlFocusout:a,focus:C}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:R,hasError:w,errorMessage:p,resetValidation:H}=Le(e.focused,e.innerLoading),_=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=b(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),U=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=b(()=>`q-field row no-wrap items-start q-field--${U.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(_.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(w.value===!0?" q-field--error":"")+(w.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(w.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),F=b(()=>t.labelSlot===!0||t.label!==void 0),Q=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&w.value!==!0?` text-${t.labelColor}`:"")),N=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:_.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=b(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});D(()=>t.for,l=>{e.targetUid.value=Me(l,e.requiredForAttr)});function S(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function C(){Ce(S)}function E(){He(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function o(l){x!==null&&(clearTimeout(x),x=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function a(l,h){x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function s(l){Ae(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{H(),c.platform.is.mobile!==!0&&(B.value=!1)})}function r(){const l=[];return i.prepend!==void 0&&l.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},i.prepend())),l.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),w.value===!0&&t.noErrorIcon===!1&&l.push(M("error",[k(ce,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(M("inner-loading-append",i.loading!==void 0?i.loading():[k(Te,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(M("inner-clearable-append",[k(ce,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},i.append())),e.getInnerAppend!==void 0&&l.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(N.value))),F.value===!0&&l.push(k("div",{class:Q.value},te(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(te(i.default))}function v(){let l,h;w.value===!0?p.value!==null?(l=[k("div",{role:"alert"},p.value)],h=`q--slot-error-${p.value}`):(l=te(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[k("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=te(i.hint),h="q--slot-hint"));const L=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&l===void 0)return;const y=k("div",{key:h,class:"q-field__messages col"},l);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:X},[t.hideBottomSpace===!0?y:k($e,{name:"q-transition--field-message"},()=>y),L===!0?k("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(l,h){return h===null?null:k("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let m=!1;return _e(()=>{m=!0}),Ee(()=>{m===!0&&t.autofocus===!0&&d.focus()}),de(()=>{Be.value===!0&&e.requiredForAttr===!0&&t.for===void 0&&(e.targetUid.value=`f_${xe()}`),t.autofocus===!0&&d.focus()}),re(()=>{x!==null&&clearTimeout(x)}),Object.assign(d,{focus:C,blur:E}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return k(e.tag.value,{ref:e.rootRef,class:[I.value,f.class],style:f.style,...h},[i.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},i.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},r()),$.value===!0?v():null]),i.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},i.after()):null])}}const Xe={name:String};function mt(e={}){return(t,u,i)=>{t[u](k("input",{class:"hidden"+(i||""),...e.value}))}}function Ge(e){return b(()=>e.name||e.for)}const et=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,tt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,lt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,nt=/[a-z0-9_ -]$/i;function at(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Oe.is.firefox===!0?nt.test(u.data)===!1:et.test(u.data)===!0||tt.test(u.data)===!0||lt.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},oe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Se=Object.keys(oe);Se.forEach(e=>{oe[e].regex=new RegExp(oe[e].pattern)});const ot=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Se.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,V=String.fromCharCode(1),rt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ut(e,t,u,i){let f,d,c,x,B,R;const w=j(null),p=j(_());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,U),D(()=>e.mask,o=>{if(o!==void 0)I(p.value,!0);else{const a=C(p.value);U(),e.modelValue!==a&&t("update:modelValue",a)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{w.value===!0&&I(p.value,!0)}),D(()=>e.unmaskedValue,()=>{w.value===!0&&I(p.value)});function _(){if(U(),w.value===!0){const o=z(C(e.modelValue));return e.fillMask!==!1?E(o):o}return e.modelValue}function $(o){if(o<f.length)return f.slice(-o);let a="",s=f;const r=s.indexOf(V);if(r>-1){for(let g=o-s.length;g>0;g--)a+=V;s=s.slice(0,r)+a+s.slice(r)}return s}function U(){if(w.value=e.mask!==void 0&&e.mask.length!==0&&H(),w.value===!1){x=void 0,f="",d="";return}const o=be[e.mask]===void 0?e.mask:be[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=a.replace(ye,"\\$&"),r=[],g=[],v=[];let M=e.reverseFillMask===!0,m="",l="";o.replace(ot,(A,n,q,K,Z)=>{if(K!==void 0){const O=oe[K];v.push(O),l=O.negate,M===!0&&(g.push("(?:"+l+"+)?("+O.pattern+"+)?(?:"+l+"+)?("+O.pattern+"+)?"),M=!1),g.push("(?:"+l+"+)?("+O.pattern+")?")}else if(q!==void 0)m="\\"+(q==="\\"?"":q),v.push(q),r.push("([^"+m+"]+)?"+m+"?");else{const O=n!==void 0?n:Z;m=O==="\\"?"\\\\\\\\":O.replace(ye,"\\\\$&"),v.push(O),r.push("([^"+m+"]+)?"+m+"?")}});const h=new RegExp("^"+r.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),L=g.length-1,y=g.map((A,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+A):n===L?new RegExp("^"+A+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+A));c=v,x=A=>{const n=h.exec(e.reverseFillMask===!0?A:A.slice(0,v.length+1));n!==null&&(A=n.slice(1).join(""));const q=[],K=y.length;for(let Z=0,O=A;Z<K;Z++){const J=y[Z].exec(O);if(J===null)break;O=O.slice(J.shift().length),q.push(...J)}return q.length!==0?q.join(""):A},f=v.map(A=>typeof A=="string"?A:V).join(""),d=f.split(V).join(a)}function I(o,a,s){const r=i.value,g=r.selectionEnd,v=r.value.length-g,M=C(o);a===!0&&U();const m=z(M),l=e.fillMask!==!1?E(m):m,h=p.value!==l;r.value!==l&&(r.value=l),h===!0&&(p.value=l),document.activeElement===r&&Y(()=>{if(l===d){const y=e.reverseFillMask===!0?d.length:0;r.setSelectionRange(y,y,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const y=r.selectionEnd;let A=g-1;for(let n=B;n<=A&&n<y;n++)f[n]!==V&&A++;F.right(r,A);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const y=e.reverseFillMask===!0?g===0?l.length>m.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(m.length,v)+1))+1:g;r.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const y=Math.max(0,l.length-(l===d?0:Math.min(m.length,v+1)));y===1&&g===1?r.setSelectionRange(y,y,"forward"):F.rightReverse(r,y)}else{const y=l.length-v;r.setSelectionRange(y,y,"backward")}else if(h===!0){const y=Math.max(0,f.indexOf(V),Math.min(m.length,g)-1);F.right(r,y)}else{const y=g-1;F.right(r,y)}});const L=e.unmaskedValue===!0?C(l):l;String(e.modelValue)!==L&&(e.modelValue!==null||L!=="")&&u(L,!0)}function P(o,a,s){const r=z(C(o.value));a=Math.max(0,f.indexOf(V),Math.min(r.length,a)),B=a,o.setSelectionRange(a,s,"forward")}const F={left(o,a){const s=f.slice(a-1).indexOf(V)===-1;let r=Math.max(0,a-1);for(;r>=0;r--)if(f[r]===V){a=r,s===!0&&a++;break}if(r<0&&f[a]!==void 0&&f[a]!==V)return F.right(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},right(o,a){const s=o.value.length;let r=Math.min(s,a+1);for(;r<=s;r++)if(f[r]===V){a=r;break}else f[r-1]===V&&(a=r);if(r>s&&f[a-1]!==void 0&&f[a-1]!==V)return F.left(o,s);o.setSelectionRange(a,a,"forward")},leftReverse(o,a){const s=$(o.value.length);let r=Math.max(0,a-1);for(;r>=0;r--)if(s[r-1]===V){a=r;break}else if(s[r]===V&&(a=r,r===0))break;if(r<0&&s[a]!==void 0&&s[a]!==V)return F.rightReverse(o,0);a>=0&&o.setSelectionRange(a,a,"backward")},rightReverse(o,a){const s=o.value.length,r=$(s),g=r.slice(0,a+1).indexOf(V)===-1;let v=Math.min(s,a+1);for(;v<=s;v++)if(r[v-1]===V){a=v,a>0&&g===!0&&a--;break}if(v>s&&r[a-1]!==void 0&&r[a-1]!==V)return F.leftReverse(o,s);o.setSelectionRange(a,a,"forward")}};function Q(o){t("click",o),R=void 0}function N(o){if(t("keydown",o),Ie(o)===!0||o.altKey===!0)return;const a=i.value,s=a.selectionStart,r=a.selectionEnd;if(o.shiftKey||(R=void 0),o.keyCode===37||o.keyCode===39){o.shiftKey&&R===void 0&&(R=a.selectionDirection==="forward"?s:r);const g=F[(o.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(o.preventDefault(),g(a,R===s?r:s),o.shiftKey){const v=a.selectionStart;a.setSelectionRange(Math.min(R,v),Math.max(R,v),"forward")}}else o.keyCode===8&&e.reverseFillMask!==!0&&s===r?(F.left(a,s),a.setSelectionRange(a.selectionStart,r,"backward")):o.keyCode===46&&e.reverseFillMask===!0&&s===r&&(F.rightReverse(a,r),a.setSelectionRange(s,a.selectionEnd,"forward"))}function z(o){if(o==null||o==="")return"";if(e.reverseFillMask===!0)return S(o);const a=c;let s=0,r="";for(let g=0;g<a.length;g++){const v=o[s],M=a[g];if(typeof M=="string")r+=M,v===M&&s++;else if(v!==void 0&&M.regex.test(v))r+=M.transform!==void 0?M.transform(v):v,s++;else return r}return r}function S(o){const a=c,s=f.indexOf(V);let r=o.length-1,g="";for(let v=a.length-1;v>=0&&r>-1;v--){const M=a[v];let m=o[r];if(typeof M=="string")g=M+g,m===M&&r--;else if(m!==void 0&&M.regex.test(m))do g=(M.transform!==void 0?M.transform(m):m)+g,r--,m=o[r];while(s===v&&m!==void 0&&M.regex.test(m));else return g}return g}function C(o){return typeof o!="string"||x===void 0?typeof o=="number"?x(""+o):o:x(o)}function E(o){return d.length-o.length<=0?o:e.reverseFillMask===!0&&o.length!==0?d.slice(0,-o.length)+o:o+d.slice(o.length)}return{innerValue:p,hasMask:w,moveCursorForPaste:P,updateMaskValue:I,onMaskedKeydown:N,onMaskedClick:Q}}function it(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return u()}):b(u)}var ht=Pe({name:"QInput",inheritAttrs:!1,props:{...Qe,...rt,...Xe,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ye,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=ee(),{$q:f}=i,d={};let c=NaN,x,B,R=null,w;const p=j(null),H=Ge(e),{innerValue:_,hasMask:$,moveCursorForPaste:U,updateMaskValue:I,onMaskedKeydown:P,onMaskedClick:F}=ut(e,t,m,p),Q=it(e,!0),N=b(()=>se(_.value)),z=at(v),S=We(),C=b(()=>e.type==="textarea"||e.autogrow===!0),E=b(()=>C.value===!0||["text","search","url","tel","password"].includes(e.type)),o=b(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:h,onBlur:L,onFocus:fe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=z,$.value===!0&&(n.onKeydown=P,n.onClick=F),e.autogrow===!0&&(n.onAnimationend=M),n}),a=b(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return C.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});D(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),D(()=>e.modelValue,n=>{if($.value===!0){if(B===!0&&(B=!1,String(n)===c))return;I(n)}else _.value!==n&&(_.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(x===!0?x=!1:delete d.value));e.autogrow===!0&&Y(l)}),D(()=>e.autogrow,n=>{n===!0?Y(l):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&Y(l)});function s(){Ce(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function r(){p.value!==null&&p.value.select()}function g(n){if($.value===!0&&e.reverseFillMask!==!0){const q=n.target;U(q,q.selectionStart,q.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const q=n.target.value;if(n.target.qComposing===!0){d.value=q;return}if($.value===!0)I(q,!1,n.inputType);else if(m(q),E.value===!0&&n.target===document.activeElement){const{selectionStart:K,selectionEnd:Z}=n.target;K!==void 0&&Z!==void 0&&Y(()=>{n.target===document.activeElement&&q.indexOf(n.target.value)===0&&n.target.setSelectionRange(K,Z)})}e.autogrow===!0&&l()}function M(n){t("animationend",n),l()}function m(n,q){w=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,q===!0&&(B=!0),t("update:modelValue",n),Y(()=>{c===n&&(c=NaN)})),w=void 0},e.type==="number"&&(x=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(w,e.debounce)):w()}function l(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const q=n.parentNode.style,{scrollTop:K}=n,{overflowY:Z,maxHeight:O}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=Z!==void 0&&Z!=="scroll";J===!0&&(n.style.overflowY="hidden"),q.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(O,10)<n.scrollHeight?"auto":"hidden"),q.marginBottom="",n.scrollTop=K}})}function h(n){z(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),t("change",n.target.value)}function L(n){n!==void 0&&fe(n),R!==null&&(clearTimeout(R),R=null),w!==void 0&&w(),x=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=_.value!==void 0?_.value:"")})}function y(){return d.hasOwnProperty("value")===!0?d.value:_.value!==void 0?_.value:""}re(()=>{L()}),de(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:_,fieldClass:b(()=>`q-${C.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:N,floatingLabel:b(()=>N.value===!0&&(e.type!=="number"||isNaN(_.value)===!1)||se(e.displayValue)),getControl:()=>k(C.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...o.value,...e.type!=="file"?{value:y()}:Q.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},y()),k("span",e.shadowText)])});const A=Je(S);return Object.assign(i,{focus:s,select:r,getNativeElement:()=>p.value}),ke(i,"nativeEl",()=>p.value),A}});export{ht as Q,Qe as a,Ye as b,Je as c,We as d,vt as e,Ce as f,Xe as g,Ge as h,se as i,at as j,mt as k,Ze as l,gt as r,xe as u};
