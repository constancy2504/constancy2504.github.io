import{e as H,r as B,m as k,i as Y,w as Z,a as $,c as L,d as D,t as G,g as A,f as T,o as tt,n as et,h as st,j as nt}from"./index.7084c8d6.js";var ot=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let J;const R=t=>J=t,N=Symbol();function C(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function it(){const t=H(!0),n=t.run(()=>B({}));let s=[],e=[];const c=k({install(u){R(c),c._a=u,u.provide(N,c),u.config.globalProperties.$pinia=c,e.forEach(a=>s.push(a)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const W=()=>{};function V(t,n,s,e=W){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(c),c}function j(t,...n){t.slice().forEach(s=>{s(...n)})}function O(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];C(c)&&C(e)&&t.hasOwnProperty(s)&&!L(e)&&!D(e)?t[s]=O(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!C(t)||!t.hasOwnProperty(ct)}const{assign:d}=Object;function ut(t){return!!(L(t)&&t.effect)}function ft(t,n,s,e){const{state:c,actions:u,getters:a}=n,f=s.state.value[t];let m;function h(){f||(s.state.value[t]=c?c():{});const b=st(s.state.value[t]);return d(b,u,Object.keys(a||{}).reduce((v,y)=>(v[y]=k(nt(()=>{R(s);const p=s._s.get(t);return a[y].call(p,p)})),v),{}))}return m=q(t,h,n,s,e,!0),m.$reset=function(){const v=c?c():{};this.$patch(y=>{d(y,v)})},m}function q(t,n,s={},e,c,u){let a;const f=d({actions:{}},s),m={deep:!0};let h,b,v=k([]),y=k([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),B({});let x;function F(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:I.patchFunction,storeId:t,events:p}):(O(e.state.value[t],r),o={type:I.patchObject,payload:r,storeId:t,events:p});const S=x=Symbol();et().then(()=>{x===S&&(h=!0)}),b=!0,j(v,o,e.state.value[t])}const z=W;function K(){a.stop(),v=[],y=[],e._s.delete(t)}function M(r,o){return function(){R(e);const S=Array.from(arguments),P=[],w=[];function U(i){P.push(i)}function X(i){w.push(i)}j(y,{args:S,name:r,store:l,after:U,onError:X});let E;try{E=o.apply(this&&this.$id===t?this:l,S)}catch(i){throw j(w,i),i}return E instanceof Promise?E.then(i=>(j(P,i),i)).catch(i=>(j(w,i),Promise.reject(i))):(j(P,E),E)}}const Q={_p:e,$id:t,$onAction:V.bind(null,y),$patch:F,$reset:z,$subscribe(r,o={}){const S=V(v,r,o.detached,()=>P()),P=a.run(()=>Z(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:I.direct,events:p},w)},d({},m,o)));return S},$dispose:K},l=$(Q);e._s.set(t,l);const g=e._e.run(()=>(a=H(),a.run(()=>n())));for(const r in g){const o=g[r];if(L(o)&&!ut(o)||D(o))u||(_&&rt(o)&&(L(o)?o.value=_[r]:O(o,_[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const S=M(r,o);g[r]=S,f.actions[r]=o}}return d(l,g),d(G(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{F(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,a.run(()=>r({store:l,app:e._a,pinia:e,options:f})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),h=!0,b=!0,l}function lt(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function a(f,m){const h=A();return f=f||h&&Y(N,null),f&&R(f),f=J,f._s.has(e)||(u?q(e,n,c,f):ft(e,c,f)),f._s.get(e)}return a.$id=e,a}export{it as c,lt as d};
