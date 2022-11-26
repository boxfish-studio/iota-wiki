"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const s={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},a="Interface: IGossipHeartbeat",o={unversionedId:"references/client/interfaces/IGossipHeartbeat",id:"references/client/interfaces/IGossipHeartbeat",title:"Interface: IGossipHeartbeat",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IGossipHeartbeat.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IGossipHeartbeat",permalink:"/shimmer/iotajs/references/client/interfaces/IGossipHeartbeat",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/client/interfaces/IGossipHeartbeat.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IFoundryOutput",permalink:"/shimmer/iotajs/references/client/interfaces/IFoundryOutput"},next:{title:"Interface: IGossipMetrics",permalink:"/shimmer/iotajs/references/client/interfaces/IGossipMetrics"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"solidMilestoneIndex",id:"solidmilestoneindex",level:3},{value:"prunedMilestoneIndex",id:"prunedmilestoneindex",level:3},{value:"latestMilestoneIndex",id:"latestmilestoneindex",level:3},{value:"connectedPeers",id:"connectedpeers",level:3},{value:"syncedPeers",id:"syncedpeers",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-igossipheartbeat"},"Interface: IGossipHeartbeat"),(0,i.kt)("p",null,"Gossip heartbeat."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipHeartbeat#solidmilestoneindex"},"solidMilestoneIndex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipHeartbeat#prunedmilestoneindex"},"prunedMilestoneIndex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipHeartbeat#latestmilestoneindex"},"latestMilestoneIndex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipHeartbeat#connectedpeers"},"connectedPeers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/client/interfaces/IGossipHeartbeat#syncedpeers"},"syncedPeers"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"solidmilestoneindex"},"solidMilestoneIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"solidMilestoneIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Solid milestone index."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"prunedmilestoneindex"},"prunedMilestoneIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"prunedMilestoneIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Pruned milestone index."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"latestmilestoneindex"},"latestMilestoneIndex"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"latestMilestoneIndex"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Latest milestone index."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connectedpeers"},"connectedPeers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"connectedPeers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Connected peers."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"syncedpeers"},"syncedPeers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"syncedPeers"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Synced peers."))}d.isMDXComponent=!0}}]);