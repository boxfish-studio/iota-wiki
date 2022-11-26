"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(d,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={description:"INX-Indexer is a ledger indexing tool to provide structured and queryable data to wallets and other applications.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Indexer","IOTA","Shimmer","Node Software","Welcome","explanation"]},a="Welcome to INX-Indexer",l={unversionedId:"welcome",id:"welcome",title:"Welcome to INX-Indexer",description:"INX-Indexer is a ledger indexing tool to provide structured and queryable data to wallets and other applications.",source:"@site/shimmer/external/inx-indexer/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/shimmer/inx-indexer/welcome",draft:!1,editUrl:"https://github.com/iotaledger/inx-indexer/edit/develop/documentation/shimmer/external/inx-indexer/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"INX-Indexer is a ledger indexing tool to provide structured and queryable data to wallets and other applications.",image:"/img/Banner/banner_hornet.png",keywords:["IOTA Node","Hornet Node","INX","Indexer","IOTA","Shimmer","Node Software","Welcome","explanation"]},sidebar:"mySidebar",next:{title:"Query the Indexer for Outputs",permalink:"/shimmer/inx-indexer/how_to/query_outputs"}},d={},c=[{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API",id:"api",level:2},{value:"Source Code",id:"source-code",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-inx-indexer"},"Welcome to INX-Indexer"),(0,o.kt)("p",null,"INX-Indexer is a ledger indexing tool to provide structured and queryable data to wallets and other applications.\nThe indexer maintains its own database separate from that of the node."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"The recommended setup is to use the provided ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/iotaledger/inx-indexer"},"Docker images"),".\nThese images are also used in our ",(0,o.kt)("a",{parentName:"p",href:"http://wiki.iota.org/hornet/develop/how_tos/using_docker"},"HORNET recommended setup using Docker"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The indexer is configured by default to connect to your HORNET instance."),(0,o.kt)("p",null,"You can find all the configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/inx-indexer/configuration"},"configuration section"),"."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"The indexer exposes a custom set of REST APIs that can be used by wallets and applications to find UTXO in the ledger with a given query."),(0,o.kt)("p",null,"You can find more information about the API in the ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/inx-indexer/api_reference"},"API reference section"),"."),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("p",null,"The source code of the project is available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-indexer"},"GitHub"),"."))}p.isMDXComponent=!0}}]);