"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[51581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",image:"/img/logo/preview.png",keywords:["Node","Hornet","Bee","Golang","Rust","explanation"]},a="Node Software",s={unversionedId:"explanations/node_software",id:"explanations/node_software",title:"Node Software",description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",source:"@site/shimmer/external/introduction-docs/docs/explanations/node_software.md",sourceDirName:"explanations",slug:"/explanations/node_software",permalink:"/shimmer/introduction/explanations/node_software",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/shimmer/external/introduction-docs/docs/explanations/node_software.md",tags:[],version:"current",frontMatter:{description:"Hornet is an EDF-supported community node written in Go. Bee is an IOTA Node implemented by the Foundation and written in Rust. We recommend using Hornet since it has several optional features that are not implemented in Bee.",image:"/img/logo/preview.png",keywords:["Node","Hornet","Bee","Golang","Rust","explanation"]},sidebar:"mySidebar",previous:{title:"Non-fungible Tokens",permalink:"/shimmer/introduction/explanations/ledger/nft"},next:{title:"Libraries",permalink:"/shimmer/introduction/explanations/libraries/overview"}},l={},p=[{value:"Hornet",id:"hornet",level:2},{value:"Bee",id:"bee",level:2},{value:"Node API Specification",id:"node-api-specification",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-software"},"Node Software"),(0,r.kt)("p",null,"The node software is the backbone of the IOTA and Shimmer networks. Individual nodes run the software to help maintain the state of the ledger through peer-to-peer communication. Nodes are also entry points to the network for users. The node software implements the core protocol that defines the network rules."),(0,r.kt)("h2",{id:"hornet"},"Hornet"),(0,r.kt)("p",null,"Hornet started out as an EDF-supported community node written in go and matured into the official node software\nimplementation maintained and developed by the IOTA Foundation. It has already proven itself to be a stable and\nperformant implementation, furthermore its ",(0,r.kt)("a",{parentName:"p",href:"https://TODO_link_to_INX_page"},"IOTA Node Extension (INX)")," framework introduced\nfor Stardust eases the development of application specific node extensions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/hornet"},"Official GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/hornet/develop/welcome"},"Documentation"))),(0,r.kt)("h2",{id:"bee"},"Bee"),(0,r.kt)("p",null,"Bee is an IOTA Node implemented by the Foundation and written in Rust."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/bee/tree/shimmer-develop"},"Official GitHub Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.iota.org/bee/develop/welcome"},"Documentation"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At this stage, we recommend using Hornet since it has several optional features that are not implemented in Bee so far.")),(0,r.kt)("h2",{id:"node-api-specification"},"Node API Specification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-api/tips/TIP-0025/core-rest-api.yaml"},"Core rest-api specification"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0026/tip-0026.md"},"UTXO Indexer rest-api specification"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studio.asyncapi.com/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-event-api/tips/TIP-0028/event-api.yml"},"Event API (MQTT) specification"),".")))}c.isMDXComponent=!0}}]);