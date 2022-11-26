"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98907],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(a),g=r,h=s["".concat(u,".").concat(g)]||s[g]||d[g]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},51170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"reference/java_api/AccountManagerBuilder",id:"reference/java_api/AccountManagerBuilder",title:"AccountManagerBuilder",description:"Account manager builder.",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/AccountManagerBuilder.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/AccountManagerBuilder",permalink:"/wallet.rs/reference/java_api/AccountManagerBuilder",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/AccountManagerBuilder.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[{value:"AccountManagerBuilder(): AccountManagerBuilder",id:"accountmanagerbuilder-accountmanagerbuilder",level:3},{value:"withStorage(storage_path, password): AccountManagerBuilder",id:"withstoragestorage_path-password-accountmanagerbuilder",level:3},{value:"withPollingInterval(polling_interval): AccountManagerBuilder",id:"withpollingintervalpolling_interval-accountmanagerbuilder",level:3},{value:"withSkipPolling(): AccountManagerBuilder",id:"withskippolling-accountmanagerbuilder",level:3},{value:"withOutputConsolidationThreshold(threshold): AccountManagerBuilder",id:"withoutputconsolidationthresholdthreshold-accountmanagerbuilder",level:3},{value:"withAutomaticOutputConsolidationDisabled(): AccountManagerBuilder",id:"withautomaticoutputconsolidationdisabled-accountmanagerbuilder",level:3},{value:"withSyncSpentOutputs(): AccountManagerBuilder",id:"withsyncspentoutputs-accountmanagerbuilder",level:3},{value:"withEventPersistence(): AccountManagerBuilder",id:"witheventpersistence-accountmanagerbuilder",level:3},{value:"withMultipleEmptyAccounts(): AccountManagerBuilder",id:"withmultipleemptyaccounts-accountmanagerbuilder",level:3},{value:"finish(): AccountManager",id:"finish-accountmanager",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Account manager builder."),(0,r.kt)("h3",{id:"accountmanagerbuilder-accountmanagerbuilder"},"AccountManagerBuilder(): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Initialises a new instance of the account manager builder with the default storage adapter."),(0,r.kt)("h3",{id:"withstoragestorage_path-password-accountmanagerbuilder"},"withStorage(storage_path, password): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Sets the storage config to be used."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage_path"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The path where the database file will be saved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The storage password")))),(0,r.kt)("h3",{id:"withpollingintervalpolling_interval-accountmanagerbuilder"},"withPollingInterval(polling_interval): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Sets the polling interval."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"polling_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"the polling interval in seconds")))),(0,r.kt)("h3",{id:"withskippolling-accountmanagerbuilder"},"withSkipPolling(): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Skip polling"),(0,r.kt)("h3",{id:"withoutputconsolidationthresholdthreshold-accountmanagerbuilder"},"withOutputConsolidationThreshold(threshold): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Sets the number of outputs an address must have to trigger the automatic consolidation process."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of outputs an address must have to trigger the automatic consolidation process")))),(0,r.kt)("h3",{id:"withautomaticoutputconsolidationdisabled-accountmanagerbuilder"},"withAutomaticOutputConsolidationDisabled(): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Disables the automatic output consolidation process."),(0,r.kt)("h3",{id:"withsyncspentoutputs-accountmanagerbuilder"},"withSyncSpentOutputs(): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Enables fetching spent output history on sync."),(0,r.kt)("h3",{id:"witheventpersistence-accountmanagerbuilder"},"withEventPersistence(): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Enables event persistence."),(0,r.kt)("h3",{id:"withmultipleemptyaccounts-accountmanagerbuilder"},"withMultipleEmptyAccounts(): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,r.kt)("p",null,"Enables creating multiple accounts without history.\nThe wallet disables it by default to simplify account discovery."),(0,r.kt)("h3",{id:"finish-accountmanager"},"finish(): ",(0,r.kt)("a",{parentName:"h3",href:"#accountmanager"},"AccountManager")),(0,r.kt)("p",null,"Builds the manager."))}d.isMDXComponent=!0}}]);