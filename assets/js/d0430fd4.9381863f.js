"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={},a="Document Immutability",s={unversionedId:"doc-immutability/overview",id:"doc-immutability/overview",title:"Document Immutability",description:"Documents are an important means of transporting information and contracts. Being able to reliably prove that a document has not been tampered from an established state helps ensure trust between the parties envolved. This blueprint describes a solution that enables users to verify data integrity of a document using the IOTA Tangle, while remaining in complete control of the data.",source:"@site/iota/external/blueprints/production/doc-immutability/overview.md",sourceDirName:"doc-immutability",slug:"/doc-immutability/overview",permalink:"/blueprints/doc-immutability/overview",draft:!1,editUrl:"https://github.com/iotaledger/blueprints/edit/main/iota/external/blueprints/production/doc-immutability/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Deploy and test the Data Marketplace demo",permalink:"/blueprints/data-marketplace/deployment-and-testing"},next:{title:"Application Architecture",permalink:"/blueprints/doc-immutability/architecture"}},l={},c=[{value:"Business Case",id:"business-case",level:2},{value:"Challenges",id:"challenges",level:2},{value:"Solution",id:"solution",level:2},{value:"Demo",id:"demo",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"GitHub Repository",id:"github-repository",level:3},{value:"Proof of Existence Library",id:"proof-of-existence-library",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"document-immutability"},"Document Immutability"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Documents are an important means of transporting information and contracts. Being able to reliably prove that a document has not been tampered from an established state helps ensure trust between the parties envolved. This blueprint describes a solution that enables users to verify data integrity of a document using the IOTA Tangle, while remaining in complete control of the data.")),(0,r.kt)("h2",{id:"business-case"},"Business Case"),(0,r.kt)("p",null,"In digitized settings, contracts and documents can be easily altered. In a world of digital trade and service, a decentralized trust anchor for contractual agreements or other important documents can be highly useful in order to enhance trust between multiple parties."),(0,r.kt)("h2",{id:"challenges"},"Challenges"),(0,r.kt)("p",null,"Ensuring the integrity of digital documents is currently mostly done by storing them in some trusted database or by physically printing the documents. However, in a trustless and efficient environment, this is far from optimal.\nA step in the right direction is e.g. displaying data fingerprints, so called hashes, on a website from which a file is being downloaded, which can then manually be compared to the local copy's fingerprint by a technically versed user.\nHowever, this procedure is too technically challenging and time consuming for most users. Additionaly, displaying a hash on some website is far from fully secure, as the centralized database of that website is also subject to change. For example, in 2016, hackers ",(0,r.kt)("a",{parentName:"p",href:"https://blog.linuxmint.com/?p=2994"},"successfully put a backdoor")," into an ISO file of a Linux distribution called Mint. As they also managed to get access to the website, they were able to adjust the hashes being displayed on the website too, thereby completely bypassing this security mechanism."),(0,r.kt)("p",null,"Also, in a scenario not containing some centralized server, but two parties agreeing on a contract, a simple tool should exist that anchors the integrity of a document in a distributed storage. "),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,'In this blueprint, we leverage the distributed ledger of the IOTA Tangle to immutably store data fingerprints of files, thereby providing a way to verify the integrity of a document by not relying on a centralized instance.\nThis enables users to prove that a document has not been tampered with since the data fingerprint ("Proof of Existence") has been stored on the Tangle.\nTo verify a document in our web application, users can provide a file and a message-id, used to locate the data fingerprint embedded in a message of the Tangle. The provided file is locally hashed and compared with the fetched fingerprint stored on the Tangle.\nUsers can also publish new data fingerprints of a file and receive a message-id that references the Proof of Existence in the Tangle.\nAdditionally, as the Tangle never exposes the document to the public, the users remain in complete control of the document. An application can use the hash stored on the Tangle to verify the document\'s integrity, but the underlying document can not be derived from it. '),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"See this website for a ",(0,r.kt)("a",{parentName:"p",href:"https://iota-poex.dag.sh/"},"demonstration of a Proof of Existence application"),"."),(0,r.kt)("p",null,"You can find instructions on how to set up a local version of this blueprint in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/poc-document-immutable-blueprint"},"official GitHub repository"),"."),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"github-repository"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/iotaledger/poc-document-immutable-blueprint"},"GitHub Repository")),(0,r.kt)("p",null,"Access the code base and quickstart instructions to test this blueprint."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"proof-of-existence-library"},(0,r.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/@iota/poex-tool"},"Proof of Existence Library")),(0,r.kt)("p",null,"A library you can use for Proof of Existence scenarios that is also used in this blueprint."),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);