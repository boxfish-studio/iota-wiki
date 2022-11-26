"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=i(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(f,u(u({ref:t},s),{},{components:r})):a.createElement(f,u({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var i=2;i<o;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},21157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},u=void 0,l={unversionedId:"reference/java_api/SignatureLockedDustAllowanceOutput",id:"reference/java_api/SignatureLockedDustAllowanceOutput",title:"SignatureLockedDustAllowanceOutput",description:"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/SignatureLockedDustAllowanceOutput.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/SignatureLockedDustAllowanceOutput",permalink:"/wallet.rs/reference/java_api/SignatureLockedDustAllowanceOutput",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/SignatureLockedDustAllowanceOutput.mdx",tags:[],version:"current",frontMatter:{}},p={},i=[{value:"from(address, amount): SignatureLockedDustAllowanceOutput",id:"fromaddress-amount-signaturelockeddustallowanceoutput",level:3},{value:"amount(): long",id:"amount-long",level:3},{value:"address(): AddressWrapper",id:"address-addresswrapper",level:3}],s={toc:i};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Output type for deposits that enables an address to receive dust outputs. It can be consumed as an input like a\nregular SigLockedSingleOutput."),(0,n.kt)("h3",{id:"fromaddress-amount-signaturelockeddustallowanceoutput"},"from(address, amount): ",(0,n.kt)("a",{parentName:"h3",href:"#signaturelockeddustallowanceoutput"},"SignatureLockedDustAllowanceOutput")),(0,n.kt)("p",null,"Creates a new ",(0,n.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"address"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,n.kt)("td",{parentName:"tr",align:null},"The address to set")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"amount"),(0,n.kt)("td",{parentName:"tr",align:null},"long"),(0,n.kt)("td",{parentName:"tr",align:null},"The amount to set")))),(0,n.kt)("h3",{id:"amount-long"},"amount(): long"),(0,n.kt)("p",null,"Returns the amount of a ",(0,n.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."),(0,n.kt)("h3",{id:"address-addresswrapper"},"address(): ",(0,n.kt)("a",{parentName:"h3",href:"#addresswrapper"},"AddressWrapper")),(0,n.kt)("p",null,"Returns the address of a ",(0,n.kt)("inlineCode",{parentName:"p"},"SignatureLockedDustAllowanceOutput"),"."))}d.isMDXComponent=!0}}]);