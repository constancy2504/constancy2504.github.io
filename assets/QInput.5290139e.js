import{w as D,E as ie,p as ne,i as we,g as X,ap as Ce,r as j,j as p,ah as Me,af as be,aj as Se,D as qe,n as K,a4 as Re,ad as Fe,J as Ae,k as b,z as W,a1 as Ve,s as _e,ab as Be,A as se}from"./index.f34dba1c.js";import{Q as de,i as Ee}from"./QBtn.04a4b730.js";import{u as $e,a as Oe}from"./use-dark.4678419e.js";import{h as Y,c as Te}from"./render.cf4e12ca.js";let oe,G=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const Ie=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),fe=4096;function Pe(){(oe===void 0||G+16>fe)&&(G=0,oe=Ie(fe));const e=Array.prototype.slice.call(oe,G,G+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}function je({validate:e,resetValidation:t,requiresQForm:u}){const i=we(Ce,!1);if(i!==!1){const{props:g,proxy:v}=X();Object.assign(v,{validate:e,resetValidation:t}),D(()=>g.disable,h=>{h===!0?(typeof t=="function"&&t(),i.unbindComponent(v)):i.bindComponent(v)}),ie(()=>{g.disable!==!0&&i.bindComponent(v)}),ne(()=>{g.disable!==!0&&i.unbindComponent(v)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ce=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ve=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ge=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ce.test(e),hexaColor:e=>ve.test(e),hexOrHexaColor:e=>ge.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>ce.test(e)||ee.test(e),hexaOrRgbaColor:e=>ve.test(e)||te.test(e),anyColor:e=>ge.test(e)||ee.test(e)||te.test(e)},De=[!0,!1,"ondemand"],ze={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>De.includes(e)}};function Le(e,t){const{props:u,proxy:i}=X(),g=j(!1),v=j(null),h=j(null);je({validate:_,resetValidation:R});let y=0,M;const C=p(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length>0),S=p(()=>u.disable!==!0&&C.value===!0),k=p(()=>u.error===!0||g.value===!0),U=p(()=>typeof u.errorMessage=="string"&&u.errorMessage.length>0?u.errorMessage:v.value);D(()=>u.modelValue,()=>{Z()}),D(()=>u.reactiveRules,O=>{O===!0?M===void 0&&(M=D(()=>u.rules,()=>{Z(!0)})):M!==void 0&&(M(),M=void 0)},{immediate:!0}),D(e,O=>{O===!0?h.value===null&&(h.value=!1):h.value===!1&&(h.value=!0,S.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&q())});function R(){y++,t.value=!1,h.value=null,g.value=!1,v.value=null,q.cancel()}function _(O=u.modelValue){if(S.value!==!0)return!0;const L=++y,N=t.value!==!0?()=>{h.value=!0}:()=>{},E=(l,a)=>{l===!0&&N(),g.value=l,v.value=a||null,t.value=!1},$=[];for(let l=0;l<u.rules.length;l++){const a=u.rules[l];let r;if(typeof a=="function"?r=a(O,ae):typeof a=="string"&&ae[a]!==void 0&&(r=ae[a](O)),r===!1||typeof r=="string")return E(!0,r),!1;r!==!0&&r!==void 0&&$.push(r)}return $.length===0?(E(!1),!0):(t.value=!0,Promise.all($).then(l=>{if(l===void 0||Array.isArray(l)===!1||l.length===0)return L===y&&E(!1),!0;const a=l.find(r=>r===!1||typeof r=="string");return L===y&&E(a!==void 0,a),a===void 0},l=>(L===y&&(console.error(l),E(!0)),!1)))}function Z(O){S.value===!0&&u.lazyRules!=="ondemand"&&(h.value===!0||u.lazyRules!==!0&&O!==!0)&&q()}const q=Me(_,0);return ne(()=>{M!==void 0&&M(),q.cancel()}),Object.assign(i,{resetValidation:R,validate:_}),be(i,"hasError",()=>k.value),{isDirtyModel:h,hasRules:C,hasError:k,errorMessage:U,validate:_,resetValidation:R}}const me=/^on[A-Z]/;function Ue(e,t){const u={listeners:j({}),attributes:j({})};function i(){const g={},v={};for(const h in e)h!=="class"&&h!=="style"&&me.test(h)===!1&&(g[h]=e[h]);for(const h in t.props)me.test(h)===!0&&(v[h]=t.props[h]);u.attributes.value=g,u.listeners.value=v}return Se(i),i(),u}let H=[],J=[];function ye(e){J=J.filter(t=>t!==e)}function dt(e){ye(e),J.push(e)}function ft(e){ye(e),J.length===0&&H.length>0&&(H[H.length-1](),H=[])}function ke(e){J.length===0?e():H.push(e)}function Ze(e){H=H.filter(t=>t!==e)}function re(e){return e===void 0?`f_${Pe()}`:e}function ue(e){return e!=null&&(""+e).length>0}const Ne={...$e,...ze,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ke=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function He(){const{props:e,attrs:t,proxy:u,vnode:i}=X();return{isDark:Oe(e,u.$q),editable:p(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:j(!1),focused:j(!1),hasPopupOpen:!1,splitAttrs:Ue(t,i),targetUid:j(re(e.for)),rootRef:j(null),targetRef:j(null),controlRef:j(null)}}function Qe(e){const{props:t,emit:u,slots:i,attrs:g,proxy:v}=X(),{$q:h}=v;let y=null;e.hasValue===void 0&&(e.hasValue=p(()=>ue(t.modelValue))),e.emitValue===void 0&&(e.emitValue=n=>{u("update:modelValue",n)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:d,onFocusout:f}),Object.assign(e,{clearValue:s,onControlFocusin:d,onControlFocusout:f,focus:a}),e.computedCounter===void 0&&(e.computedCounter=p(()=>{if(t.counter!==!1){const n=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,c=t.maxlength!==void 0?t.maxlength:t.maxValues;return n+(c!==void 0?" / "+c:"")}}));const{isDirtyModel:M,hasRules:C,hasError:S,errorMessage:k,resetValidation:U}=Le(e.focused,e.innerLoading),R=e.floatingLabel!==void 0?p(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):p(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=p(()=>t.bottomSlots===!0||t.hint!==void 0||C.value===!0||t.counter===!0||t.error!==null),Z=p(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),q=p(()=>`q-field row no-wrap items-start q-field--${Z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(R.value===!0?" q-field--float":"")+(L.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(S.value===!0?" q-field--error":"")+(S.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),O=p(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(S.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),L=p(()=>t.labelSlot===!0||t.label!==void 0),N=p(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&S.value!==!0?` text-${t.labelColor}`:"")),E=p(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:R.value,modelValue:t.modelValue,emitValue:e.emitValue})),$=p(()=>{const n={for:e.targetUid.value};return t.disable===!0?n["aria-disabled"]="true":t.readonly===!0&&(n["aria-readonly"]="true"),n});D(()=>t.for,n=>{e.targetUid.value=re(n)});function l(){const n=document.activeElement;let c=e.targetRef!==void 0&&e.targetRef.value;c&&(n===null||n.id!==e.targetUid.value)&&(c.hasAttribute("tabindex")===!0||(c=c.querySelector("[tabindex]")),c&&c!==n&&c.focus({preventScroll:!0}))}function a(){ke(l)}function r(){Ze(l);const n=document.activeElement;n!==null&&e.rootRef.value.contains(n)&&n.blur()}function d(n){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",n))}function f(n,c){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",n)),c!==void 0&&c())})}function s(n){qe(n),h.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),K(()=>{U(),h.platform.is.mobile!==!0&&(M.value=!1)})}function x(){const n=[];return i.prepend!==void 0&&n.push(b("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:W},i.prepend())),n.push(b("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),S.value===!0&&t.noErrorIcon===!1&&n.push(T("error",[b(de,{name:h.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?n.push(T("inner-loading-append",i.loading!==void 0?i.loading():[b(Ee,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&n.push(T("inner-clearable-append",[b(de,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&n.push(b("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:W},i.append())),e.getInnerAppend!==void 0&&n.push(T("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&n.push(e.getControlChild()),n}function m(){const n=[];return t.prefix!==void 0&&t.prefix!==null&&n.push(b("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&n.push(e.getShadowControl()),e.getControl!==void 0?n.push(e.getControl()):i.rawControl!==void 0?n.push(i.rawControl()):i.control!==void 0&&n.push(b("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(E.value))),L.value===!0&&n.push(b("div",{class:N.value},Y(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&n.push(b("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat(Y(i.default))}function w(){let n,c;S.value===!0?k.value!==null?(n=[b("div",{role:"alert"},k.value)],c=`q--slot-error-${k.value}`):(n=Y(i.error),c="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(n=[b("div",t.hint)],c=`q--slot-hint-${t.hint}`):(n=Y(i.hint),c="q--slot-hint"));const P=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&P===!1&&n===void 0)return;const z=b("div",{key:c,class:"q-field__messages col"},n);return b("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:W},[t.hideBottomSpace===!0?z:b(Ve,{name:"q-transition--field-message"},()=>z),P===!0?b("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function T(n,c){return c===null?null:b("div",{key:n,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},c)}let I=!1;return Re(()=>{I=!0}),Fe(()=>{I===!0&&t.autofocus===!0&&v.focus()}),ie(()=>{Ae.value===!0&&t.for===void 0&&(e.targetUid.value=re()),t.autofocus===!0&&v.focus()}),ne(()=>{y!==null&&clearTimeout(y)}),Object.assign(v,{focus:a,blur:r}),function(){const c=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...$.value}:$.value;return b("label",{ref:e.rootRef,class:[q.value,g.class],style:g.style,...c},[i.before!==void 0?b("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:W},i.before()):null,b("div",{class:"q-field__inner relative-position col self-stretch"},[b("div",{ref:e.controlRef,class:O.value,tabindex:-1,...e.controlEvents},x()),_.value===!0?w():null]),i.after!==void 0?b("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:W},i.after()):null])}}const We={name:String};function ct(e={}){return(t,u,i)=>{t[u](b("input",{class:"hidden"+(i||""),...e.value}))}}function Je(e){return p(()=>e.name||e.for)}const Xe=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ye=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ge=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,et=/[a-z0-9_ -]$/i;function tt(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(_e.is.firefox===!0?et.test(u.data)===!1:Xe.test(u.data)===!0||Ye.test(u.data)===!0||Ge.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const he={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},le={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},xe=Object.keys(le);xe.forEach(e=>{le[e].regex=new RegExp(le[e].pattern)});const lt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+xe.join("")+"])|(.)","g"),pe=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),nt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ot(e,t,u,i){let g,v,h,y;const M=j(null),C=j(k());function S(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}D(()=>e.type+e.autogrow,R),D(()=>e.mask,l=>{if(l!==void 0)_(C.value,!0);else{const a=E(C.value);R(),e.modelValue!==a&&t("update:modelValue",a)}}),D(()=>e.fillMask+e.reverseFillMask,()=>{M.value===!0&&_(C.value,!0)}),D(()=>e.unmaskedValue,()=>{M.value===!0&&_(C.value)});function k(){if(R(),M.value===!0){const l=L(E(e.modelValue));return e.fillMask!==!1?$(l):l}return e.modelValue}function U(l){if(l<g.length)return g.slice(-l);let a="",r=g;const d=r.indexOf(A);if(d>-1){for(let f=l-r.length;f>0;f--)a+=A;r=r.slice(0,d)+a+r.slice(d)}return r}function R(){if(M.value=e.mask!==void 0&&e.mask.length>0&&S(),M.value===!1){y=void 0,g="",v="";return}const l=he[e.mask]===void 0?e.mask:he[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=a.replace(pe,"\\$&"),d=[],f=[],s=[];let x=e.reverseFillMask===!0,m="",w="";l.replace(lt,(c,P,z,o,F)=>{if(o!==void 0){const V=le[o];s.push(V),w=V.negate,x===!0&&(f.push("(?:"+w+"+)?("+V.pattern+"+)?(?:"+w+"+)?("+V.pattern+"+)?"),x=!1),f.push("(?:"+w+"+)?("+V.pattern+")?")}else if(z!==void 0)m="\\"+(z==="\\"?"":z),s.push(z),d.push("([^"+m+"]+)?"+m+"?");else{const V=P!==void 0?P:F;m=V==="\\"?"\\\\\\\\":V.replace(pe,"\\\\$&"),s.push(V),d.push("([^"+m+"]+)?"+m+"?")}});const T=new RegExp("^"+d.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),I=f.length-1,n=f.map((c,P)=>P===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+c):P===I?new RegExp("^"+c+"("+(w===""?".":w)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+c));h=s,y=c=>{const P=T.exec(e.reverseFillMask===!0?c:c.slice(0,s.length+1));P!==null&&(c=P.slice(1).join(""));const z=[],o=n.length;for(let F=0,V=c;F<o;F++){const Q=n[F].exec(V);if(Q===null)break;V=V.slice(Q.shift().length),z.push(...Q)}return z.length>0?z.join(""):c},g=s.map(c=>typeof c=="string"?c:A).join(""),v=g.split(A).join(a)}function _(l,a,r){const d=i.value,f=d.selectionEnd,s=d.value.length-f,x=E(l);a===!0&&R();const m=L(x),w=e.fillMask!==!1?$(m):m,T=C.value!==w;d.value!==w&&(d.value=w),T===!0&&(C.value=w),document.activeElement===d&&K(()=>{if(w===v){const n=e.reverseFillMask===!0?v.length:0;d.setSelectionRange(n,n,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const n=f-1;q.right(d,n,n);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const n=e.reverseFillMask===!0?f===0?w.length>m.length?1:0:Math.max(0,w.length-(w===v?0:Math.min(m.length,s)+1))+1:f;d.setSelectionRange(n,n,"forward");return}if(e.reverseFillMask===!0)if(T===!0){const n=Math.max(0,w.length-(w===v?0:Math.min(m.length,s+1)));n===1&&f===1?d.setSelectionRange(n,n,"forward"):q.rightReverse(d,n,n)}else{const n=w.length-s;d.setSelectionRange(n,n,"backward")}else if(T===!0){const n=Math.max(0,g.indexOf(A),Math.min(m.length,f)-1);q.right(d,n,n)}else{const n=f-1;q.right(d,n,n)}});const I=e.unmaskedValue===!0?E(w):w;String(e.modelValue)!==I&&u(I,!0)}function Z(l,a,r){const d=L(E(l.value));a=Math.max(0,g.indexOf(A),Math.min(d.length,a)),l.setSelectionRange(a,r,"forward")}const q={left(l,a,r,d){const f=g.slice(a-1).indexOf(A)===-1;let s=Math.max(0,a-1);for(;s>=0;s--)if(g[s]===A){a=s,f===!0&&a++;break}if(s<0&&g[a]!==void 0&&g[a]!==A)return q.right(l,0,0);a>=0&&l.setSelectionRange(a,d===!0?r:a,"backward")},right(l,a,r,d){const f=l.value.length;let s=Math.min(f,r+1);for(;s<=f;s++)if(g[s]===A){r=s;break}else g[s-1]===A&&(r=s);if(s>f&&g[r-1]!==void 0&&g[r-1]!==A)return q.left(l,f,f);l.setSelectionRange(d?a:r,r,"forward")},leftReverse(l,a,r,d){const f=U(l.value.length);let s=Math.max(0,a-1);for(;s>=0;s--)if(f[s-1]===A){a=s;break}else if(f[s]===A&&(a=s,s===0))break;if(s<0&&f[a]!==void 0&&f[a]!==A)return q.rightReverse(l,0,0);a>=0&&l.setSelectionRange(a,d===!0?r:a,"backward")},rightReverse(l,a,r,d){const f=l.value.length,s=U(f),x=s.slice(0,r+1).indexOf(A)===-1;let m=Math.min(f,r+1);for(;m<=f;m++)if(s[m-1]===A){r=m,r>0&&x===!0&&r--;break}if(m>f&&s[r-1]!==void 0&&s[r-1]!==A)return q.leftReverse(l,f,f);l.setSelectionRange(d===!0?a:r,r,"forward")}};function O(l){if(t("keydown",l),Be(l)===!0)return;const a=i.value,r=a.selectionStart,d=a.selectionEnd;if(l.keyCode===37||l.keyCode===39){const f=q[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];l.preventDefault(),f(a,r,d,l.shiftKey)}else l.keyCode===8&&e.reverseFillMask!==!0&&r===d?q.left(a,r,d,!0):l.keyCode===46&&e.reverseFillMask===!0&&r===d&&q.rightReverse(a,r,d,!0)}function L(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return N(l);const a=h;let r=0,d="";for(let f=0;f<a.length;f++){const s=l[r],x=a[f];if(typeof x=="string")d+=x,s===x&&r++;else if(s!==void 0&&x.regex.test(s))d+=x.transform!==void 0?x.transform(s):s,r++;else return d}return d}function N(l){const a=h,r=g.indexOf(A);let d=l.length-1,f="";for(let s=a.length-1;s>=0&&d>-1;s--){const x=a[s];let m=l[d];if(typeof x=="string")f=x+f,m===x&&d--;else if(m!==void 0&&x.regex.test(m))do f=(x.transform!==void 0?x.transform(m):m)+f,d--,m=l[d];while(r===s&&m!==void 0&&x.regex.test(m));else return f}return f}function E(l){return typeof l!="string"||y===void 0?typeof l=="number"?y(""+l):l:y(l)}function $(l){return v.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?v.slice(0,-l.length)+l:l+v.slice(l.length)}return{innerValue:C,hasMask:M,moveCursorForPaste:Z,updateMaskValue:_,onMaskedKeydown:O}}function at(e,t){function u(){const i=e.modelValue;try{const g="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(v=>{g.items.add(v)}),{files:g.files}}catch{return{files:void 0}}}return t===!0?p(()=>{if(e.type==="file")return u()}):p(u)}var vt=Te({name:"QInput",inheritAttrs:!1,props:{...Ne,...nt,...We,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ke,"paste","change","keydown","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=X(),{$q:g}=i,v={};let h=NaN,y,M,C=null,S;const k=j(null),U=Je(e),{innerValue:R,hasMask:_,moveCursorForPaste:Z,updateMaskValue:q,onMaskedKeydown:O}=ot(e,t,T,k),L=at(e,!0),N=p(()=>ue(R.value)),E=tt(m),$=He(),l=p(()=>e.type==="textarea"||e.autogrow===!0),a=p(()=>l.value===!0||["text","search","url","tel","password"].includes(e.type)),r=p(()=>{const o={...$.splitAttrs.listeners.value,onInput:m,onPaste:x,onChange:n,onBlur:c,onFocus:se};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=E,_.value===!0&&(o.onKeydown=O),e.autogrow===!0&&(o.onAnimationend=w),o}),d=p(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...$.splitAttrs.attributes.value,id:$.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return l.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});D(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),D(()=>e.modelValue,o=>{if(_.value===!0){if(M===!0&&(M=!1,String(o)===h))return;q(o)}else R.value!==o&&(R.value=o,e.type==="number"&&v.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete v.value));e.autogrow===!0&&K(I)}),D(()=>e.autogrow,o=>{o===!0?K(I):k.value!==null&&u.rows>0&&(k.value.style.height="auto")}),D(()=>e.dense,()=>{e.autogrow===!0&&K(I)});function f(){ke(()=>{const o=document.activeElement;k.value!==null&&k.value!==o&&(o===null||o.id!==$.targetUid.value)&&k.value.focus({preventScroll:!0})})}function s(){k.value!==null&&k.value.select()}function x(o){if(_.value===!0&&e.reverseFillMask!==!0){const F=o.target;Z(F,F.selectionStart,F.selectionEnd)}t("paste",o)}function m(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const F=o.target.value;if(o.target.qComposing===!0){v.value=F;return}if(_.value===!0)q(F,!1,o.inputType);else if(T(F),a.value===!0&&o.target===document.activeElement){const{selectionStart:V,selectionEnd:Q}=o.target;V!==void 0&&Q!==void 0&&K(()=>{o.target===document.activeElement&&F.indexOf(o.target.value)===0&&o.target.setSelectionRange(V,Q)})}e.autogrow===!0&&I()}function w(o){t("animationend",o),I()}function T(o,F){S=()=>{C=null,e.type!=="number"&&v.hasOwnProperty("value")===!0&&delete v.value,e.modelValue!==o&&h!==o&&(h=o,F===!0&&(M=!0),t("update:modelValue",o),K(()=>{h===o&&(h=NaN)})),S=void 0},e.type==="number"&&(y=!0,v.value=o),e.debounce!==void 0?(C!==null&&clearTimeout(C),v.value=o,C=setTimeout(S,e.debounce)):S()}function I(){requestAnimationFrame(()=>{const o=k.value;if(o!==null){const F=o.parentNode.style,{overflow:V}=o.style;g.platform.is.firefox!==!0&&(o.style.overflow="hidden"),F.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",o.style.overflow=V,F.marginBottom=""}})}function n(o){E(o),C!==null&&(clearTimeout(C),C=null),S!==void 0&&S(),t("change",o.target.value)}function c(o){o!==void 0&&se(o),C!==null&&(clearTimeout(C),C=null),S!==void 0&&S(),y=!1,M=!1,delete v.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=R.value!==void 0?R.value:"")})}function P(){return v.hasOwnProperty("value")===!0?v.value:R.value!==void 0?R.value:""}ne(()=>{c()}),ie(()=>{e.autogrow===!0&&I()}),Object.assign($,{innerValue:R,fieldClass:p(()=>`q-${l.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:p(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:T,hasValue:N,floatingLabel:p(()=>N.value===!0||ue(e.displayValue)),getControl:()=>b(l.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...d.value,...r.value,...e.type!=="file"?{value:P()}:L.value}),getShadowControl:()=>b("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(l.value===!0?"":" text-no-wrap")},[b("span",{class:"invisible"},P()),b("span",e.shadowText)])});const z=Qe($);return Object.assign(i,{focus:f,select:s,getNativeElement:()=>k.value}),be(i,"nativeEl",()=>k.value),z}});export{vt as Q,Ne as a,Ke as b,Qe as c,He as d,dt as e,ke as f,We as g,Je as h,ue as i,tt as j,ct as k,ft as r,Pe as u};
