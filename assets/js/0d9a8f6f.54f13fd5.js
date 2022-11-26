"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91289],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?n.createElement(g,a(a({ref:r},l),{},{components:t})):n.createElement(g,a({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},51742:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(87462),o=(t(67294),t(3905));const i={toc:[{value:"Derive",id:"derive",level:2},{value:"GuardDebug",id:"guarddebug",level:4},{value:"Example:",id:"example",level:5},{value:"RequestPermissions",id:"requestpermissions",level:4}]};function a(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"derive"},"Derive"),(0,o.kt)("p",null,"This crate contains procedural macros for Stronghold.  "),(0,o.kt)("h4",{id:"guarddebug"},"GuardDebug"),(0,o.kt)("p",null,"The GuardDebug macro is used to block inspection of a data structure.  It implements the Debug trait and explicitly blocks the reading of the internal data on the structure its derived on. Instead, the data will be returned out as a ",(0,o.kt)("inlineCode",{parentName:"p"},"(guarded)")," string."),(0,o.kt)("h5",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(GuardDebug)]\nstruct Foo {\n    some_data: String\n}\n...\n\nlet foo = Foo { some_data: "Some data"};\n\nprintln!("{:?}", foo);\n...\n\n> Foo(guarded)\n')),(0,o.kt)("h4",{id:"requestpermissions"},"RequestPermissions"),(0,o.kt)("p",null,"Implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"VariantPermission")," for struct/unions with PermissionValue(1). For enums, it implements ",(0,o.kt)("inlineCode",{parentName:"p"},"ToPermissionVariants"),", which creates an according new enum ",(0,o.kt)("inlineCode",{parentName:"p"},"<Ident>Permission")," with Unit variants, and implements ",(0,o.kt)("inlineCode",{parentName:"p"},"VariantPermission")," by assigning different ",(0,o.kt)("inlineCode",{parentName:"p"},"PermissionValue"),' for each variant. The permission value is the "index" in the enum as exponent for the power of 2, thus from top to bottom 1, 2, 4, 8...'))}a.isMDXComponent=!0;const s={description:"The Derive crate contains procedural macros for Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","GuardDebug","VariantPermission"]},u="Structure: Derive",c={unversionedId:"reference/structure/derive",id:"reference/structure/derive",title:"Structure: Derive",description:"The Derive crate contains procedural macros for Stronghold.",source:"@site/iota/external/stronghold.rs/develop/documentation/docs/reference/structure/derive.md",sourceDirName:"reference/structure",slug:"/reference/structure/derive",permalink:"/stronghold.rs/reference/structure/derive",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/iota/external/stronghold.rs/develop/documentation/docs/reference/structure/derive.md",tags:[],version:"current",frontMatter:{description:"The Derive crate contains procedural macros for Stronghold.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","GuardDebug","VariantPermission"]},sidebar:"mySidebar",previous:{title:"Structure: Runtime",permalink:"/stronghold.rs/reference/structure/engine/runtime"},next:{title:"Structure: Utils",permalink:"/stronghold.rs/reference/structure/utils"}},l={},d=[],p={toc:d};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"structure-derive"},"Structure: Derive"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/derive"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-derive"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-derive.svg",alt:null}))),(0,o.kt)(a,{mdxType:"Derive"}))}m.isMDXComponent=!0}}]);