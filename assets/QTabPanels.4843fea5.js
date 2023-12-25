import{R as $e,Q as H}from"./QBtn.1fa12379.js";import{c as Be,h as de,b as xe}from"./render.7ec66d40.js";import{i as Me,e as p,r as w,a as v,o as be,v as De,ac as he,y as Qe,h as b,u as ve,$ as Ee,ad as We,g as te,ae as Fe,c as N,w as O,z as je,a4 as Ke,af as Ve}from"./index.b3094090.js";import{u as ze}from"./QInput.a42bbdca.js";import{Q as Oe}from"./QResizeObserver.d61f610d.js";import{u as ee,r as He}from"./QTable.fe2d06a7.js";import{b as fe}from"./QList.3ac08e97.js";import{u as Ne,a as Ue,b as Ge,c as Xe}from"./use-panel.297e3d8b.js";import{u as Je,a as Ye}from"./use-dark.d7d20c5e.js";let Ze=0;const pe=["click","keydown"],et={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ze++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function tt(e,q,m,c){const o=Me(he,p);if(o===p)return console.error("QTab/QRouteTab component needs to be child of QTabs"),p;const{proxy:Q}=te(),L=w(null),$=w(null),W=w(null),U=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),B=v(()=>o.currentModel.value===e.name),G=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(B.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),I=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=v(()=>e.disable===!0||o.hasFocus.value===!0||B.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function y(l,h){if(h!==!0&&L.value!==null&&L.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&ve(l);return}if(c===void 0){o.updateModel({name:e.name}),m("click",l);return}if(c.hasRouterLink.value===!0){const T=(f={})=>{let C;const P=f.to===void 0||Fe(f.to,e.to)===!0?o.avoidRouteWatcher=ze():null;return c.navigateToRouterLink(l,{...f,returnRouterError:!0}).catch(A=>{C=A}).then(A=>{if(P===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,C===void 0&&(A===void 0||A.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),f.returnRouterError===!0)return C!==void 0?Promise.reject(C):A})};m("click",l,T),l.defaultPrevented!==!0&&T();return}m("click",l)}function k(l){Ee(l,[13,32])?y(l,!0):We(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&o.onKbdNavigate(l.keyCode,Q.$el)===!0&&ve(l),m("keydown",l)}function E(){const l=o.tabProps.value.narrowIndicator,h=[],T=b("div",{ref:W,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&h.push(b(H,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&h.push(b("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&h.push(e.alertIcon!==void 0?b(H,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):b("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&h.push(T);const f=[b("div",{class:"q-focus-helper",tabindex:-1,ref:L}),b("div",{class:I.value},Be(q.default,h))];return l===!1&&f.push(T),f}const x={name:v(()=>e.name),rootRef:$,tabIndicatorRef:W,routeData:c};be(()=>{o.unregisterTab(x)}),De(()=>{o.registerTab(x)});function F(l,h){const T={ref:$,class:G.value,tabindex:g.value,role:"tab","aria-selected":B.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:k,...h};return Qe(b(l,T,E()),[[$e,U.value]])}return{renderTab:F,$tabs:o}}var dt=N({name:"QTab",props:et,emits:pe,setup(e,{slots:q,emit:m}){const{renderTab:c}=tt(e,q,m);return()=>c("div")}});function at(e,q,m){const c=m===!0?["left","right"]:["top","bottom"];return`absolute-${q===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const nt=["left","center","right","justify"];var bt=N({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:q,emit:m}){const{proxy:c}=te(),{$q:o}=c,{registerTick:Q}=ee(),{registerTick:L}=ee(),{registerTick:$}=ee(),{registerTimeout:W,removeTimeout:U}=fe(),{registerTimeout:B,removeTimeout:G}=fe(),I=w(null),g=w(null),y=w(e.modelValue),k=w(!1),E=w(!0),x=w(!1),F=w(!1),l=[],h=w(0),T=w(!1);let f=null,C=null,P;const A=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:at(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),me=v(()=>{const t=h.value,a=y.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),ge=v(()=>`q-tabs__content--align-${k.value===!0?"left":F.value===!0?"justify":e.align}`),Te=v(()=>`q-tabs row no-wrap items-center q-tabs--${k.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),we=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),j=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),K=v(()=>e.vertical!==!0&&o.lang.rtl===!0),X=v(()=>He===!1&&K.value===!0);O(K,D),O(()=>e.modelValue,t=>{J({name:t,setCurrent:!0,skipEmit:!0})}),O(()=>e.outsideArrows,V);function J({name:t,setCurrent:a,skipEmit:n}){y.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&m("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(qe(y.value,t),y.value=t))}function V(){Q(()=>{ae({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function ae(t){if(j.value===void 0||g.value===null)return;const a=t[j.value.container],n=Math.min(g.value[j.value.scroll],Array.prototype.reduce.call(g.value.children,(u,i)=>u+(i[j.value.content]||0),0)),s=a>0&&n>a;k.value=s,s===!0&&L(D),F.value=a<parseInt(e.breakpoint,10)}function qe(t,a){const n=t!=null&&t!==""?l.find(u=>u.name.value===t):null,s=a!=null&&a!==""?l.find(u=>u.name.value===a):null;if(n&&s){const u=n.tabIndicatorRef.value,i=s.tabIndicatorRef.value;f!==null&&(clearTimeout(f),f=null),u.style.transition="none",u.style.transform="none",i.style.transition="none",i.style.transform="none";const r=u.getBoundingClientRect(),d=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${r.top-d.top}px,0) scale3d(1,${d.height?r.height/d.height:1},1)`:`translate3d(${r.left-d.left}px,0,0) scale3d(${d.width?r.width/d.width:1},1,1)`,$(()=>{f=setTimeout(()=>{f=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}s&&k.value===!0&&M(s.rootRef.value)}function M(t){const{left:a,width:n,top:s,height:u}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let r=e.vertical===!0?i.top-s:i.left-a;if(r<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(r),D();return}r+=e.vertical===!0?i.height-u:i.width-n,r>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(r),D())}function D(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);K.value===!0?(E.value=Math.ceil(n+a.width)<t.scrollWidth-1,x.value=n>0):(E.value=n>0,x.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function ne(t){C!==null&&clearInterval(C),C=setInterval(()=>{Pe(t)===!0&&R()},5)}function le(){ne(X.value===!0?Number.MAX_SAFE_INTEGER:0)}function re(){ne(X.value===!0?0:Number.MAX_SAFE_INTEGER)}function R(){C!==null&&(clearInterval(C),C=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,d=>d===a||d.matches&&d.matches(".q-tab.q-focusable")===!0),s=n.length;if(s===0)return;if(t===36)return M(n[0]),n[0].focus(),!0;if(t===35)return M(n[s-1]),n[s-1].focus(),!0;const u=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),r=u===!0?-1:i===!0?1:void 0;if(r!==void 0){const d=K.value===!0?-1:1,_=n.indexOf(a)+r*d;return _>=0&&_<s&&(M(n[_]),n[_].focus({preventScroll:!0})),!0}}const ye=v(()=>X.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Pe(t){const a=g.value,{get:n,set:s}=ye.value;let u=!1,i=n(a);const r=t<i?-1:1;return i+=r*5,i<0?(u=!0,i=0):(r===-1&&i<=t||r===1&&i>=t)&&(u=!0,i=t),s(a,i),D(),u}function oe(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function _e(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(r=>r.routeData!==void 0&&r.routeData.hasRouterLink.value===!0),{hash:s,query:u}=c.$route,i=Object.keys(u).length;for(const r of n){const d=r.routeData.exact.value===!0;if(r.routeData[d===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:_,query:Y,matched:Ie,href:Ae}=r.routeData.resolvedLink.value,Z=Object.keys(Y).length;if(d===!0){if(_!==s||Z!==i||oe(u,Y)===!1)continue;t=r.name.value;break}if(_!==""&&_!==s||Z!==0&&oe(Y,u)===!1)continue;const S={matchedLen:Ie.length,queryDiff:i-Z,hrefLen:Ae.length-_.length};if(S.matchedLen>a.matchedLen){t=r.name.value,a=S;continue}else if(S.matchedLen!==a.matchedLen)continue;if(S.queryDiff<a.queryDiff)t=r.name.value,a=S;else if(S.queryDiff!==a.queryDiff)continue;S.hrefLen>a.hrefLen&&(t=r.name.value,a=S)}t===null&&l.some(r=>r.routeData===void 0&&r.name.value===y.value)===!0||J({name:t,setCurrent:!0})}function ke(t){if(U(),T.value!==!0&&I.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&I.value.contains(a)===!0&&(T.value=!0,k.value===!0&&M(a))}}function Re(){W(()=>{T.value=!1},30)}function z(){se.avoidRouteWatcher===!1?B(_e):G()}function ie(){if(P===void 0){const t=O(()=>c.$route.fullPath,z);P=()=>{t(),P=void 0}}}function Se(t){l.push(t),h.value++,V(),t.routeData===void 0||c.$route===void 0?B(()=>{if(k.value===!0){const a=y.value,n=a!=null&&a!==""?l.find(s=>s.name.value===a):null;n&&M(n.rootRef.value)}}):(ie(),t.routeData.hasRouterLink.value===!0&&z())}function Le(t){l.splice(l.indexOf(t),1),h.value--,V(),P!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&P(),z())}const se={currentModel:y,tabProps:A,hasFocus:T,hasActiveTab:me,registerTab:Se,unregisterTab:Le,verifyRouteModel:z,updateModel:J,onKbdNavigate:Ce,avoidRouteWatcher:!1};je(he,se);function ue(){f!==null&&clearTimeout(f),R(),P!==void 0&&P()}let ce;return be(ue),Ke(()=>{ce=P!==void 0,ue()}),Ve(()=>{ce===!0&&ie(),V()}),()=>b("div",{ref:I,class:Te.value,role:"tablist",onFocusin:ke,onFocusout:Re},[b(Oe,{onResize:ae}),b("div",{ref:g,class:we.value,onScroll:D},de(q.default)),b(H,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:le,onTouchstartPassive:le,onMouseupPassive:R,onMouseleavePassive:R,onTouchendPassive:R}),b(H,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(x.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:re,onTouchstartPassive:re,onMouseupPassive:R,onMouseleavePassive:R,onTouchendPassive:R})])}}),ht=N({name:"QTabPanel",props:Ne,setup(e,{slots:q}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},de(q.default))}}),mt=N({name:"QTabPanels",props:{...Ue,...Je},emits:Ge,setup(e,{slots:q}){const m=te(),c=Ye(e,m.proxy.$q),{updatePanelsList:o,getPanelContent:Q,panelDirectives:L}=Xe(),$=v(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(q),xe("div",{class:$.value},Q(),"pan",e.swipeable,()=>L.value))}});export{bt as Q,mt as a,dt as b,ht as c};
