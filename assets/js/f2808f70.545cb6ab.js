"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8017],{79351:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(34259),a(18679),a(69319);const s={title:"DID Messages",sidebar_label:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from its origin to the current version using Integration and Differentiation Chains.",image:"/img/Identity_icon.png",keywords:["Diff Chain","Differentiation Chain","Integration Chain","smart contracts","Chronicle","state","stateless"]},r=void 0,o={unversionedId:"concepts/advanced/did_messages",id:"concepts/advanced/did_messages",title:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from its origin to the current version using Integration and Differentiation Chains.",source:"@site/iota/external/identity.rs/v0.5.0/documentation/docs/concepts/advanced/did_messages.mdx",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/did_messages",permalink:"/identity.rs/0.5/concepts/advanced/did_messages",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/iota/external/identity.rs/v0.5.0/documentation/docs/concepts/advanced/did_messages.mdx",tags:[],version:"current",frontMatter:{title:"DID Messages",sidebar_label:"DID Messages",description:"Learn how IOTA Identity recreates and validates the state from its origin to the current version using Integration and Differentiation Chains.",image:"/img/Identity_icon.png",keywords:["Diff Chain","Differentiation Chain","Integration Chain","smart contracts","Chronicle","state","stateless"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/0.5/concepts/advanced/overview"},next:{title:"Storage Interface",permalink:"/identity.rs/0.5/concepts/advanced/storage_interface"}},l={},d=[{value:"Valid DID Documents",id:"valid-did-documents",level:3},{value:"DID Messages",id:"did-messages",level:3}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TODO: Explain the concept of DID Messages and how they can be used to optimize DID updates."),(0,i.kt)("h3",{id:"valid-did-documents"},"Valid DID Documents"),(0,i.kt)("p",null,"Most DID methods are implemented on a Distributed Ledger Technology (DLT), such as Bitcoin, Ethereum or IOTA. Most common DID implementation on DLTs are based on fit-for-purpose Blockchains that store the state of a DID Document in the ledger, or a general purpose Blockchain that utilize smart contracts to store the state. Updating a DID Document where the state is understood by the network is straightforward. The network can determine if an action is legal and if a cryptographic signature is provided correctly, as it understands the underlying data structure, and can update the state accordingly. The individual state updates, or transactions, can be forgotten."),(0,i.kt)("p",null,"The IOTA Tangle is unable to track, state, or understand the data structure. Storing the state is neither possible in the ledger, nor via a Smart contract (yet). Therefore, IOTA Identity has to recreate and validate the state from the origin of the Identity to the current version. The process involves querying all the relevant transactions from the Tangle, ordering them, filtering out the transactions that perform illegal actions or have an incorrect signature and then recreate state. As this requires the full history of the Identity, we recommend utilizing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/chronicle.rs"},"Chronicle"),", an IOTA permanode, which stores the entire history of the Tangle. Further research will be performed to reduce storage requirements for IOTA Identity based applications."),(0,i.kt)("h3",{id:"did-messages"},"DID Messages"),(0,i.kt)("p",null,"Due to this constant need for state recreating, unique performance improvements have been design and implemented for IOTA Identity. Most DID Documents will need few to no updates, however identities that sign a lot of Verifiable Credentials might update more frequently, as will be explained in the Verifiable Credentials section. To support higher frequency identity updates, we have introduced a unique solution called the \u201cIntegration Chain\u201d and the \u201cDifferentiation Chain\u201d (Diff Chain)."),(0,i.kt)("p",null,"The Integration Chain is a chain of transactions that contain full DID Documents. They are unrestricted in what they can add or remove from the DID Document. Every Integration Chain transaction points to a separate new Diff Chain. These Diff Chain transactions only list the changes to a DID Document and are therefore more compact. It is, however, restricted in rotating the signing key, making it fast and easy to validate the transaction."),(0,i.kt)("p",null,"Once a new Integration chain transaction is created, it will take all Diff Chain updates and compress them into a new DID Document, essentially combining them all into a single transaction. This reduces the amount of updates that need to be queried and validated tremendously. For example, lets assume every Diff chain contains 100 updates. Then validating a DID that has done 1050 updates, only requires the validation of 10 Integration Chain updates and 40 Diff Chain updates (The latest Diff Chain). We skipped out on 10 Diff Chains each containing 100 updates, and only validated the 10 Integration Chain updates and the last Diff Chain containing 40 updates. If we estimate every update to be on average 1 Kb, we only have to download 50 kb of information and validate it, which is significantly less than the otherwise 1.025 Mb of information."),(0,i.kt)("p",null,"The improved performance and ability to handle frequently updated DID Documents is especially beneficial for Verifiable Credential Revocation."),(0,i.kt)("p",null,"TODO: mention future revocation scheme replacement for MerkleKeyCollection."))}u.isMDXComponent=!0},18679:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),i=a(86010);const s="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(s,r),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),i=a(67294),s=a(86010),r=a(51048),o=a(33609),l=a(1943),d=a(72957);const c="tabList__CuJ",u="tabItem_LNqP";function h(e){var t;const{lazy:a,block:r,defaultValue:h,values:m,groupId:p,className:f}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),D=(0,o.l)(v,((e,t)=>e.value===t.value));if(D.length>0)throw new Error(`Docusaurus error: Duplicate values "${D.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===h?h:h??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:I}=(0,l.U)(),[w,k]=(0,i.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=p){const e=y[p];null!=e&&e!==w&&v.some((t=>t.value===e))&&k(e)}const _=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==w&&(C(t),k(n),null!=p&&I(p,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,s.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},f)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:O,onFocus:_,onClick:_},r,{className:(0,s.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,i.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,r.Z)();return i.createElement(h,(0,n.Z)({key:String(t)},e))}}}]);