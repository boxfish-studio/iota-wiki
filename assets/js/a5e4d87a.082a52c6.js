"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(34259),s=a(18679);const o={image:"/img/integration-services/logo/integration_services.png",description:"The example-4 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates and verifies identities and credentials.",keywords:["how to","create identity","create credential","validate credential","add trusted authority","example"]},l="Trusted Authorities",c={unversionedId:"how_tos/integration-services-sdk/trusted-authorities",id:"how_tos/integration-services-sdk/trusted-authorities",title:"Trusted Authorities",description:"The example-4 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates and verifies identities and credentials.",source:"@site/iota/external/integration-services/production/documentation/docs/how_tos/integration-services-sdk/trusted-authorities.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/trusted-authorities",permalink:"/integration-services/how_tos/integration-services-sdk/trusted-authorities",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/iota/external/integration-services/production/documentation/docs/how_tos/integration-services-sdk/trusted-authorities.mdx",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-4 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates and verifies identities and credentials.",keywords:["how to","create identity","create credential","validate credential","add trusted authority","example"]},sidebar:"docs",previous:{title:"Delete Users",permalink:"/integration-services/how_tos/integration-services-sdk/delete-users"},next:{title:"Create a Channel",permalink:"/integration-services/how_tos/integration-services-sdk/create-channel"}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"trusted-authorities"},"Trusted Authorities"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"example-4")," script authenticates an Integration Service client to manage Identities using the Admin identity\ncreated in ",(0,r.kt)("a",{parentName:"p",href:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},"example-0")," and then performs the following tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creates an identity with username: ",(0,r.kt)("inlineCode",{parentName:"li"},"Driver"),"."),(0,r.kt)("li",{parentName:"ol"},"Creates a credential for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Driver")," identity (the root identity is a trusted authority)."),(0,r.kt)("li",{parentName:"ol"},"Verifies a credential issued by this trusted authority."),(0,r.kt)("li",{parentName:"ol"},"Checks a credential (in the Tangle) that is issued by an unknown authority (it will be not valid)."),(0,r.kt)("li",{parentName:"ol"},"Adds the external issuer as trusted authority."),(0,r.kt)("li",{parentName:"ol"},"Checks same credential, now the issuer is trusted and the credential is valid.")),(0,r.kt)("p",null,"You can run the example with the following command:"),(0,r.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.TrustedAuthorities\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/TrustedAuthorities.java"},"Example-7"))),(0,r.kt)(s.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-4\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/4-TrustedAuthorities.ts"},"Example-7")))),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"}),(0,r.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"})))}m.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),s=a(51048),o=a(33609),l=a(1943),c=a(72957);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:p,values:m,groupId:h,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[x,T]=(0,r.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==x&&b.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=N.indexOf(t),n=b[a].value;n!==x&&(O(t),T(n),null!=h&&w(h,String(n)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},v)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:j,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);