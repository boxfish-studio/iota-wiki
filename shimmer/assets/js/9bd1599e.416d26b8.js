"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(f,a(a({ref:t},l),{},{components:r})):o.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const n={title:"Overview",description:"All software projects share the same documentation structure on IOTA Wiki.",image:"/img/logo/iota_logo.svg",keywords:["reference"]},a="Software Documentation Structure",s={unversionedId:"contribute-to-wiki/reference/structure/overview",id:"contribute-to-wiki/reference/structure/overview",title:"Overview",description:"All software projects share the same documentation structure on IOTA Wiki.",source:"@site/common/community/contribute-to-wiki/reference/structure/overview.md",sourceDirName:"contribute-to-wiki/reference/structure",slug:"/contribute-to-wiki/reference/structure/overview",permalink:"/shimmer/community/contribute-to-wiki/reference/structure/overview",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/common/community/contribute-to-wiki/reference/structure/overview.md",tags:[],version:"current",lastUpdatedAt:1669374092,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{title:"Overview",description:"All software projects share the same documentation structure on IOTA Wiki.",image:"/img/logo/iota_logo.svg",keywords:["reference"]},sidebar:"learn",previous:{title:"Formatting",permalink:"/shimmer/community/contribute-to-wiki/reference/style/formatting"},next:{title:"Example Getting Started File",permalink:"/shimmer/community/contribute-to-wiki/reference/structure/getting_started"}},u={},c=[{value:"Welcome",id:"welcome",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"How Tos",id:"how-tos",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"Explanations",id:"explanations",level:2},{value:"Reference",id:"reference",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Contribute",id:"contribute",level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"software-documentation-structure"},"Software Documentation Structure"),(0,i.kt)("p",null,"We encourage software development teams to apply this documentation structure across all projects. This way the reader could learn it from a single software project and then quickly navigate through a familiar structure across the whole wiki. It also gives you a starting point to start writing documentation, and it makes it easier to maintain the wiki in general."),(0,i.kt)("p",null,"This structure is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://diataxis.fr/"},"Diataxis framework")," by Daniele Procida. As the author describes it:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Di\xe1taxis framework aims to solve the problem of structure in technical documentation. It adopts a systematic approach to understanding the needs of documentation users in their cycle of interaction with a product."),(0,i.kt)("p",{parentName:"blockquote"},"Di\xe1taxis identifies four modes of documentation - tutorials, how-to guides, technical reference and explanation. It derives its structure from the relationship between them."),(0,i.kt)("p",{parentName:"blockquote"},"In Di\xe1taxis, each of these modes (or types) answers to a different user need, fulfils a different purpose and requires a different approach to its creation.")),(0,i.kt)("p",null,"The documentation should be split in the following folders: Getting Started, How Tos, Tutorials, Explanations, and Reference and the following files: Welcome, Troubleshooting, and Contribute. You do not have to use all of these sections."),(0,i.kt)("h2",{id:"welcome"},"Welcome"),(0,i.kt)("p",null,"The Welcome article is the first page of your project documentation. Tell the reader what your project is about and provide links to the GitHub repository and additional resources like roadmaps, educational materials, or research specifications."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/getting_started"},"Getting Started folder"),' should be the first section in your documentation. It should give the user a high-level overview of the project, required prior knowledge, prerequisites, and ideally a quick setup guide, or "hello world".'),(0,i.kt)("h2",{id:"how-tos"},"How Tos"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/how_tos"},"How Tos folder")," should only address concrete examples, or ",(0,i.kt)("a",{parentName:"p",href:"https://diataxis.fr/how-to-guides/"},"how-to guides"),", which are ",(0,i.kt)("strong",{parentName:"p"},"goal-oriented"),"."),(0,i.kt)("h2",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/tutorials"},"Tutorials folder")," should contain articles which guide the user step by step through a series of how-tos with the relevant explanations to achieve a project or real world use case. ",(0,i.kt)("a",{parentName:"p",href:"https://diataxis.fr/tutorials/"},"Tutorials")," are ",(0,i.kt)("strong",{parentName:"p"},"learning-oriented"),"."),(0,i.kt)("h2",{id:"explanations"},"Explanations"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/explanations"},"Explanations folder")," revolves around ",(0,i.kt)("a",{parentName:"p",href:"https://diataxis.fr/explanation/"},"explanations"),", and is ",(0,i.kt)("strong",{parentName:"p"},"understanding-oriented"),"."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/community/contribute-to-wiki/reference/structure/reference"},"Reference folder")," should describe the ",(0,i.kt)("a",{parentName:"p",href:"https://diataxis.fr/reference/"},"technical information")," of your project. It is ",(0,i.kt)("strong",{parentName:"p"},"information-oriented"),"."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"The Troubleshooting file should contain instructions or links to where users can post questions, or create issues if necessary."),(0,i.kt)("h2",{id:"contribute"},"Contribute"),(0,i.kt)("p",null,"The Contribute file should encourage users to contribute to the project and contain directions for that."))}p.isMDXComponent=!0}}]);