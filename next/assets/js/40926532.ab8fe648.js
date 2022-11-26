"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90056],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,c(c({ref:e},p),{},{components:n})):a.createElement(h,c({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95174:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={description:"Each smart contract instance has a program with a collection of entry points and a state.",image:"/img/tutorial/SC-structure.png",keywords:["smart contracts","structure","state","entry points","Wasm","explanation"]},c="Anatomy of a Smart Contract",i={unversionedId:"guide/core_concepts/smart-contract-anatomy",id:"guide/core_concepts/smart-contract-anatomy",title:"Anatomy of a Smart Contract",description:"Each smart contract instance has a program with a collection of entry points and a state.",source:"@site/next/external/wasp/documentation/docs/guide/core_concepts/smart-contract-anatomy.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contract-anatomy",permalink:"/next/smart-contracts/guide/core_concepts/smart-contract-anatomy",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/core_concepts/smart-contract-anatomy.md",tags:[],version:"current",frontMatter:{description:"Each smart contract instance has a program with a collection of entry points and a state.",image:"/img/tutorial/SC-structure.png",keywords:["smart contracts","structure","state","entry points","Wasm","explanation"]},sidebar:"tutorialSidebar",previous:{title:"State, Transitions, and State Anchoring",permalink:"/next/smart-contracts/guide/core_concepts/states"},next:{title:"Calling a Smart Contract",permalink:"/next/smart-contracts/guide/core_concepts/invocation"}},s={},l=[{value:"Identifying a Smart Contract",id:"identifying-a-smart-contract",level:2},{value:"State",id:"state",level:2},{value:"Entry Points",id:"entry-points",level:2},{value:"Execution Results",id:"execution-results",level:2},{value:"Error Handling",id:"error-handling",level:2}],p={toc:l};function m(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anatomy-of-a-smart-contract"},"Anatomy of a Smart Contract"),(0,r.kt)("p",null,"Smart contracts are programs that are immutably stored in the chain."),(0,r.kt)("p",null,"Through ",(0,r.kt)("em",{parentName:"p"},"VM abstraction"),", the ISC virtual machine is agnostic about the interpreter used to execute each smart contract.\nIt can support different ",(0,r.kt)("em",{parentName:"p"},"VM types")," (i.e., interpreters) simultaneously on the same chain.\nFor example, it is possible to have Wasm and EVM/Solidity smart contracts coexisting on the same chain."),(0,r.kt)("p",null,"The logical structure of IOTA Smart Contracts is independent of the VM type:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Smart Contract Structure",src:n(89091).Z,width:"862",height:"514"})),(0,r.kt)("h2",{id:"identifying-a-smart-contract"},"Identifying a Smart Contract"),(0,r.kt)("p",null,"Each smart contract on the chain is identified by a ",(0,r.kt)("em",{parentName:"p"},"hname"),' (pronounced "aitch-name"), which is a ',(0,r.kt)("inlineCode",{parentName:"p"},"uint32")," value\ncalculated as a hash of the smart contract's instance name (a string).\nFor example, the hname of the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/root"},(0,r.kt)("inlineCode",{parentName:"a"},"root"))," core contract is ",(0,r.kt)("inlineCode",{parentName:"p"},"0xcebf5908"),". This\nvalue uniquely identifies this contract in every chain."),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("p",null,"The smart contract state is the data owned by the smart contract and stored on the chain.\nThe state is a collection of key/value pairs.\nEach key and value are byte arrays of arbitrary size (there are practical limits set by the underlying database, of\ncourse).\nYou can think of the smart contract state as a _partition of the chain's data state, which can only be written by the\nsmart contract program itself."),(0,r.kt)("p",null,"The smart contract also owns an ",(0,r.kt)("em",{parentName:"p"},"account")," on the chain, stored as part of the chain state.\nThe smart contract account represents the balances of base tokens, native tokens, and NFTs controlled by the smart\ncontract."),(0,r.kt)("p",null,"The smart contract program can access its state and account through an interface layer called the ",(0,r.kt)("em",{parentName:"p"},"Sandbox"),".\nOnly the smart contract program can change its data state and spend from its\naccount. Tokens can be sent to the smart contract account by any other agent on\nthe ledger, be it a wallet with an address or another smart contract."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/accounts/how-accounts-work"},"Accounts")," for more information on sending and receiving tokens."),(0,r.kt)("h2",{id:"entry-points"},"Entry Points"),(0,r.kt)("p",null,"Each smart contract has a program with a collection of ",(0,r.kt)("em",{parentName:"p"},"entry points"),".\nAn entry point is a function through which you can invoke the program."),(0,r.kt)("p",null,"There are two types of entry points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Full entry points"),"(or simply ",(0,r.kt)("em",{parentName:"li"},"entry points"),"): These functions can modify\n(mutate) the smart contract's state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"View entry points"),"(or ",(0,r.kt)("em",{parentName:"li"},"views"),"): These are read-only functions. They are only used\nto retrieve the information from the smart contract state. They cannot\nmodify the state, i.e., they are read-only calls.")),(0,r.kt)("h2",{id:"execution-results"},"Execution Results"),(0,r.kt)("p",null,"After a request to a Smart Contract is executed (a call to a full entry point), a ",(0,r.kt)("em",{parentName:"p"},"receipt")," will be added to\nthe ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/core_contracts/blocklog"},(0,r.kt)("inlineCode",{parentName:"a"},"blocklog"))," core contract. The receipt details the execution results\nof said request: whether it was successful, the block it was included in, and other information.\nAny events dispatched by the smart contract in context of this execution will also be added to the receipt."),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"Smart contract calls can fail: for example, if they are interrupted for any reason (e.g., an exception) or if it\nproduces an error (missing parameter or other inconsistency).\nAny gas spent will be charged to the sender, and the error message or value is stored in the receipt."))}m.isMDXComponent=!0},89091:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/SC-structure-f91faed38e14c4123eb756f793b6a959.png"}}]);