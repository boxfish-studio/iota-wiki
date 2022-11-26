"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[43470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,h=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70948:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={toc:[{value:"Stronghold Store",id:"stronghold-store",level:2}]};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"stronghold-store"},"Stronghold Store"),(0,o.kt)("p",null,"This crate contains a key/value cache for the Stronghold Engine. Data is stored in key-value pairs and an expiration timestamp can be set. The data is stored in a structured format and can be quickly retrieved at will. Along with the Vault, this crate is used to store general unencrypted data.  The data is written into the snapshot like with the vault in an encrypted format."))}i.isMDXComponent=!0;const s={description:"Store contains a key-value cache for the Stronghold Engine.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","store","key:value","data"]},c="Structure: Engine::Store",l={unversionedId:"reference/structure/engine/store",id:"reference/structure/engine/store",title:"Structure: Engine::Store",description:"Store contains a key-value cache for the Stronghold Engine.",source:"@site/iota/external/stronghold.rs/develop/documentation/docs/reference/structure/engine/store.md",sourceDirName:"reference/structure/engine",slug:"/reference/structure/engine/store",permalink:"/stronghold.rs/reference/structure/engine/store",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/iota/external/stronghold.rs/develop/documentation/docs/reference/structure/engine/store.md",tags:[],version:"current",frontMatter:{description:"Store contains a key-value cache for the Stronghold Engine.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","store","key:value","data"]},sidebar:"mySidebar",previous:{title:"Structure: Engine::Vault",permalink:"/stronghold.rs/reference/structure/engine/vault"},next:{title:"Structure: Runtime",permalink:"/stronghold.rs/reference/structure/engine/runtime"}},u={},p=[],d={toc:p};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-enginestore"},"Structure: Engine::Store"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/store"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold_engine/engine/latest/store/index.html"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-engine"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null}))),(0,o.kt)(i,{mdxType:"Store"}))}g.isMDXComponent=!0}}]);