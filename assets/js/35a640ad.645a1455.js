"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[7663],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),g=n,u=m["".concat(p,".").concat(g)]||m[g]||d[g]||o;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={description:"We are developing Bee as a modular collection of extendable crates, which expose foreign function interfaces (FFIs) for the next iteration of client libraries to allow machines of all performance levels to contribute to the IOTA network.",image:"/img/logo/bee_logo.png",keywords:["Rust","Discord","Node","IOTA","explanation"]},i="Welcome",l={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"We are developing Bee as a modular collection of extendable crates, which expose foreign function interfaces (FFIs) for the next iteration of client libraries to allow machines of all performance levels to contribute to the IOTA network.",source:"@site/iota/external/bee/production/documentation/docs/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/bee/welcome",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/production/documentation/iota/external/bee/production/documentation/docs/welcome.md",tags:[],version:"current",frontMatter:{description:"We are developing Bee as a modular collection of extendable crates, which expose foreign function interfaces (FFIs) for the next iteration of client libraries to allow machines of all performance levels to contribute to the IOTA network.",image:"/img/logo/bee_logo.png",keywords:["Rust","Discord","Node","IOTA","explanation"]},sidebar:"mySidebar",next:{title:"Getting Started",permalink:"/bee/getting_started/"}},p={},s=[],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome"},"Welcome"),(0,n.kt)("p",null,(0,n.kt)("h1",{parentName:"p"},"A Framework For Building IOTA Nodes, Clients, and Applications in Rust"),(0,n.kt)("p",{parentName:"p"},(0,n.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/blob/dev/.github/Bee.png?raw=true",alt:"Badge",title:"Badge"})),(0,n.kt)("p",{parentName:"p"},(0,n.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Discord-9cf.svg?logo=discord",alt:"Discord",title:"Discord"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://iota.stackexchange.com/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/StackExchange-9cf.svg?logo=stackexchange",alt:"StackExchange",title:"StackExchange"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee/blob/master/LICENSE"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/license/iotaledger/bee.svg",alt:"Apache 2.0 license",title:"Apache 2.0 license"}))),(0,n.kt)("p",{parentName:"p"},(0,n.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Format/badge.svg",alt:"Format Badge",title:"Format Badge"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Audit/badge.svg",alt:"Audit Badge",title:"Audit Badge"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Clippy/badge.svg",alt:"Clippy Badge",title:"Clippy Badge"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Build/badge.svg",alt:"BuildBadge",title:"Build Badge"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://github.com/iotaledger/bee/workflows/Test/badge.svg",alt:"Test Badge",title:"Test Badge"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://coveralls.io/repos/github/iotaledger/bee/badge.svg?branch=dev",alt:"Coverage Badge",title:"Coverage Badge"})),(0,n.kt)("h1",{parentName:"p"},"About"),(0,n.kt)("p",{parentName:"p"},"The IOTA Foundation aims to allow machines of all performance levels to contribute to the IOTA network, from microcontrollers to phones, web browsers, and servers."),(0,n.kt)("p",{parentName:"p"},"Therefore, we are developing Bee as a modular collection of extendable crates, which expose foreign function interfaces (FFIs) for the next iteration of client libraries."),(0,n.kt)("admonition",{parentName:"p",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can find details about future development plans in our ",(0,n.kt)("a",{parentName:"p",href:"https://roadmap.iota.org"},"roadmap"),".")),(0,n.kt)("h2",{parentName:"p"},"Design"),(0,n.kt)("p",{parentName:"p"},"Bee will be a central reference implementation for the most important\ndata structures and algorithms. This implementation will be verified during the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/"},"Tangle Improvement Proposal")," (TIP) process, and eventually certified."),(0,n.kt)("p",{parentName:"p"},"By using this approach, we hope that improvements to core components will quickly propagate to all other client libraries, rather than\nhaving to fix each one individually."),(0,n.kt)("admonition",{parentName:"p",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We have chosen the Rust programming language for Bee because of its C/C++ like performance, and its strong memory safety guarantees. ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Learn more about Rust"),".")),(0,n.kt)("h2",{parentName:"p"},"Development"),(0,n.kt)("p",{parentName:"p"},"The Bee repository has different branches:"),(0,n.kt)("table",{parentName:"p"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Branch"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"production")),(0,n.kt)("td",{parentName:"tr",align:null},"The latest release for the IOTA networks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"develop")),(0,n.kt)("td",{parentName:"tr",align:null},"The ongoing development for future releases of these networks. With every release, the ",(0,n.kt)("inlineCode",{parentName:"td"},"develop")," branch will be merged into ",(0,n.kt)("inlineCode",{parentName:"td"},"production"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"staging")),(0,n.kt)("td",{parentName:"tr",align:null},"The latest release for the Shimmer networks.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"other"),(0,n.kt)("td",{parentName:"tr",align:null},"Branches with codenames like ",(0,n.kt)("inlineCode",{parentName:"td"},"stardust")," reflect current projects. Similar to ",(0,n.kt)("inlineCode",{parentName:"td"},"develop"),", they will find their way into ",(0,n.kt)("inlineCode",{parentName:"td"},"staging")," once they are ready.")))),(0,n.kt)("h2",{parentName:"p"},"Supporting the Project"),(0,n.kt)("p",{parentName:"p"},"If you want to discuss Bee, or have some questions about it, join us on the\n",(0,n.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"IOTA Discord server")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"#bee-dev")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"#bee-discussion")," channels."),(0,n.kt)("p",{parentName:"p"},"If you want to be a part of development, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://bee.docs.iota.org/contribute/contribute"},"contributing guidelines")," for information on how to contribute."),(0,n.kt)("h2",{parentName:"p"},"Joining the Discussion"),(0,n.kt)("p",{parentName:"p"},"If you want to get involved in the community, need help getting started, have any issues related to the repository, or just want to discuss blockchain, distributed ledgers, and IoT with other people, feel free to join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.iota.org/"},"Discord"),".")))}d.isMDXComponent=!0}}]);