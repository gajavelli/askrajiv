import{w}from"./paths.63a4de51.js";import{ak as S}from"./index.536e9f10.js";const c={};function _(e){return e==="local"?localStorage:sessionStorage}function g(e,m,t){const l=(t==null?void 0:t.serializer)??JSON,f=(t==null?void 0:t.storage)??"local";function u(a,n){_(f).setItem(a,l.stringify(n))}if(!c[e]){const a=w(m,r=>{const s=_(f).getItem(e);s&&r(l.parse(s));{const d=o=>{o.key===e&&r(o.newValue?l.parse(o.newValue):null)};return window.addEventListener("storage",d),()=>window.removeEventListener("storage",d)}}),{subscribe:n,set:i}=a;c[e]={set(r){u(e,r),i(r)},update(r){const s=r(S(a));u(e,s),i(s)},subscribe:n}}return c[e]}g("modeOsPrefers",!1);g("modeUserPrefers",void 0);g("modeCurrent",!1);
