"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84207],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=o.createContext({}),p=function(t){var e=o.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(r.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,r=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(n),h=a,k=d["".concat(r,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(k,l(l({ref:e},u),{},{components:n})):o.createElement(k,l({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99078:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},l="Account API Reference",s={unversionedId:"references/java/account",id:"references/java/account",title:"Account API Reference",description:"Official IOTA Wallet Library Software Rust API reference.",source:"@site/next/external/wallet.rs/documentation/docs/references/java/account.md",sourceDirName:"references/java",slug:"/references/java/account",permalink:"/next/wallet.rs/references/java/account",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/references/java/account.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/next/wallet.rs/references/rust_api_reference"},next:{title:"Wallet API Reference",permalink:"/next/wallet.rs/references/java/wallet"}},r={},p=[{value:"<code>public int getIndex() throws WalletException</code>",id:"public-int-getindex-throws-walletexception",level:2},{value:"<code>public int getCoinType() throws WalletException</code>",id:"public-int-getcointype-throws-walletexception",level:2},{value:"<code>public String getAlias() throws WalletException</code>",id:"public-string-getalias-throws-walletexception",level:2},{value:"<code>public AccountAddress[] getPublicAddresses() throws WalletException</code>",id:"public-accountaddress-getpublicaddresses-throws-walletexception",level:2},{value:"<code>public AccountAddress[] getInternalAddresses() throws WalletException</code>",id:"public-accountaddress-getinternaladdresses-throws-walletexception",level:2},{value:"<code>public Set&lt;OutputId&gt; getLockedOutputs() throws WalletException</code>",id:"public-setoutputid-getlockedoutputs-throws-walletexception",level:2},{value:"<code>public Map&lt;TransactionId, Map.Entry&lt;TransactionPayload, OutputResponse[]&gt;&gt; getIncomingTransactions() throws WalletException</code>",id:"public-maptransactionid-mapentrytransactionpayload-outputresponse-getincomingtransactions-throws-walletexception",level:2},{value:"<code>public Account getAccountCopy() throws WalletException</code>",id:"public-account-getaccountcopy-throws-walletexception",level:2},{value:"<code>public Output buildAliasOutput(BuildAliasOutput options) throws WalletException</code>",id:"public-output-buildaliasoutputbuildaliasoutput-options-throws-walletexception",level:2},{value:"<code>public Output buildBasicOutput(BuildBasicOutput options) throws WalletException</code>",id:"public-output-buildbasicoutputbuildbasicoutput-options-throws-walletexception",level:2},{value:"<code>public Output buildFoundryOutput(BuildFoundryOutput options) throws WalletException</code>",id:"public-output-buildfoundryoutputbuildfoundryoutput-options-throws-walletexception",level:2},{value:"<code>public Output buildNftOutput(BuildNftOutput options) throws WalletException</code>",id:"public-output-buildnftoutputbuildnftoutput-options-throws-walletexception",level:2},{value:"<code>public Transaction burnNativeToken(BurnNativeToken options) throws WalletException</code>",id:"public-transaction-burnnativetokenburnnativetoken-options-throws-walletexception",level:2},{value:"<code>public Transaction burnNft(BurnNft options) throws WalletException</code>",id:"public-transaction-burnnftburnnft-options-throws-walletexception",level:2},{value:"<code>public Transaction consolidateOutputs(ConsolidateOutputs options) throws WalletException</code>",id:"public-transaction-consolidateoutputsconsolidateoutputs-options-throws-walletexception",level:2},{value:"<code>public Transaction destroyAlias(DestroyAlias options) throws WalletException</code>",id:"public-transaction-destroyaliasdestroyalias-options-throws-walletexception",level:2},{value:"<code>public Transaction destroyFoundry(DestroyFoundry options) throws WalletException</code>",id:"public-transaction-destroyfoundrydestroyfoundry-options-throws-walletexception",level:2},{value:"<code>public AccountAddress[] generateAddresses(GenerateAddresses options) throws WalletException</code>",id:"public-accountaddress-generateaddressesgenerateaddresses-options-throws-walletexception",level:2},{value:"<code>public OutputData getOutput(GetOutput options) throws WalletException</code>",id:"public-outputdata-getoutputgetoutput-options-throws-walletexception",level:2},{value:"<code>public Output getFoundryOutput(GetFoundryOutput options) throws WalletException</code>",id:"public-output-getfoundryoutputgetfoundryoutput-options-throws-walletexception",level:2},{value:"<code>public Output[] getOutputsWithAdditionalUnlockConditions(GetOutputsWithAdditionalUnlockConditions options) throws WalletException</code>",id:"public-output-getoutputswithadditionalunlockconditionsgetoutputswithadditionalunlockconditions-options-throws-walletexception",level:2},{value:"<code>public Transaction getTransaction(GetTransaction options) throws WalletException</code>",id:"public-transaction-gettransactiongettransaction-options-throws-walletexception",level:2},{value:"<code>public JsonElement getIncomingTransactionData(GetIncomingTransactionData options) throws WalletException</code>",id:"public-jsonelement-getincomingtransactiondatagetincomingtransactiondata-options-throws-walletexception",level:2},{value:"<code>public AccountAddress[] getAddresses() throws WalletException</code>",id:"public-accountaddress-getaddresses-throws-walletexception",level:2},{value:"<code>public AccountAddress[] getAddressesWithUnspentOutputs() throws WalletException</code>",id:"public-accountaddress-getaddresseswithunspentoutputs-throws-walletexception",level:2},{value:"<code>public OutputData[] getOutputs(Outputs options) throws WalletException</code>",id:"public-outputdata-getoutputsoutputs-options-throws-walletexception",level:2},{value:"<code>public Transaction[] getPendingTransactions() throws WalletException</code>",id:"public-transaction-getpendingtransactions-throws-walletexception",level:2},{value:"<code>public Transaction[] getTransactions() throws WalletException</code>",id:"public-transaction-gettransactions-throws-walletexception",level:2},{value:"<code>public OutputData[] getUnspentOutputs(UnspentOutputs options) throws WalletException</code>",id:"public-outputdata-getunspentoutputsunspentoutputs-options-throws-walletexception",level:2},{value:"<code>public TaggedDataPayload meltNativeToken(DecreaseNativeTokenSupply options) throws WalletException</code>",id:"public-taggeddatapayload-meltnativetokendecreasenativetokensupply-options-throws-walletexception",level:2},{value:"<code>public String minimumRequiredStorageDeposit(MinimumRequiredStorageDeposit options) throws WalletException</code>",id:"public-string-minimumrequiredstoragedepositminimumrequiredstoragedeposit-options-throws-walletexception",level:2},{value:"<code>public MintTokenTransaction mintNativeToken(MintNativeToken options) throws WalletException</code>",id:"public-minttokentransaction-mintnativetokenmintnativetoken-options-throws-walletexception",level:2},{value:"<code>public Transaction mintNfts(MintNfts options) throws WalletException</code>",id:"public-transaction-mintnftsmintnfts-options-throws-walletexception",level:2},{value:"<code>public AccountBalance getBalance() throws WalletException</code>",id:"public-accountbalance-getbalance-throws-walletexception",level:2},{value:"<code>public Output prepareOutput(PrepareOutput options) throws WalletException</code>",id:"public-output-prepareoutputprepareoutput-options-throws-walletexception",level:2},{value:"<code>public PreparedTransactionData prepareTransaction(PrepareTransaction options) throws WalletException</code>",id:"public-preparedtransactiondata-preparetransactionpreparetransaction-options-throws-walletexception",level:2},{value:"<code>public PreparedTransactionData prepareSendAmount(PrepareSendAmount options) throws WalletException</code>",id:"public-preparedtransactiondata-preparesendamountpreparesendamount-options-throws-walletexception",level:2},{value:"<code>public AccountBalance syncAccount(SyncAccount options) throws WalletException</code>",id:"public-accountbalance-syncaccountsyncaccount-options-throws-walletexception",level:2},{value:"<code>public Transaction sendAmount(SendAmount options) throws WalletException</code>",id:"public-transaction-sendamountsendamount-options-throws-walletexception",level:2},{value:"<code>public Transaction sendMicroTransaction(SendMicroTransaction options) throws WalletException</code>",id:"public-transaction-sendmicrotransactionsendmicrotransaction-options-throws-walletexception",level:2},{value:"<code>public Transaction sendNativeTokens(SendNativeTokens options) throws WalletException</code>",id:"public-transaction-sendnativetokenssendnativetokens-options-throws-walletexception",level:2},{value:"<code>public Transaction sendNft(SendNft options) throws WalletException</code>",id:"public-transaction-sendnftsendnft-options-throws-walletexception",level:2},{value:"<code>public void setAlias(SetAlias options) throws WalletException</code>",id:"public-void-setaliassetalias-options-throws-walletexception",level:2},{value:"<code>public Transaction sendOutputs(SendOutputs options) throws WalletException</code>",id:"public-transaction-sendoutputssendoutputs-options-throws-walletexception",level:2},{value:"<code>public Transaction signTransactionEssence(SignTransactionEssence options) throws WalletException</code>",id:"public-transaction-signtransactionessencesigntransactionessence-options-throws-walletexception",level:2},{value:"<code>public Transaction submitAndStoreTransaction(SubmitAndStoreTransaction options) throws WalletException</code>",id:"public-transaction-submitandstoretransactionsubmitandstoretransaction-options-throws-walletexception",level:2},{value:"<code>public Transaction claimOutputs(ClaimOutputs options) throws WalletException</code>",id:"public-transaction-claimoutputsclaimoutputs-options-throws-walletexception",level:2},{value:"<code>public Transaction createAliasOutput(CreateAliasOutput options) throws WalletException</code>",id:"public-transaction-createaliasoutputcreatealiasoutput-options-throws-walletexception",level:2}],u={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"account-api-reference"},"Account API Reference"),(0,a.kt)("h1",{id:"documentation"},"Documentation"),(0,a.kt)("h2",{id:"public-int-getindex-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public int getIndex() throws WalletException")),(0,a.kt)("p",null,"Returns the index of the account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The index of the account.")),(0,a.kt)("h2",{id:"public-int-getcointype-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public int getCoinType() throws WalletException")),(0,a.kt)("p",null,"Returns the coin type that is configured with the account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The coin type of the account.")),(0,a.kt)("h2",{id:"public-string-getalias-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public String getAlias() throws WalletException")),(0,a.kt)("p",null,"Returns the alias of the account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The alias of the account.")),(0,a.kt)("h2",{id:"public-accountaddress-getpublicaddresses-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public AccountAddress[] getPublicAddresses() throws WalletException")),(0,a.kt)("p",null,"Returns an array of all public addresses of the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," An array of AccountAddress objects.")),(0,a.kt)("h2",{id:"public-accountaddress-getinternaladdresses-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public AccountAddress[] getInternalAddresses() throws WalletException")),(0,a.kt)("p",null,"Returns an array of all internal addresses of the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," An array of AccountAddress objects.")),(0,a.kt)("h2",{id:"public-setoutputid-getlockedoutputs-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Set<OutputId> getLockedOutputs() throws WalletException")),(0,a.kt)("p",null,"Returns all locked outputs of the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," A set of OutputIds")),(0,a.kt)("h2",{id:"public-maptransactionid-mapentrytransactionpayload-outputresponse-getincomingtransactions-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Map<TransactionId, Map.Entry<TransactionPayload, OutputResponse[]>> getIncomingTransactions() throws WalletException")),(0,a.kt)("p",null,"Returns all incoming transactions for the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," All incoming transactions for the account.")),(0,a.kt)("h2",{id:"public-account-getaccountcopy-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Account getAccountCopy() throws WalletException")),(0,a.kt)("p",null,"Get a snapshot of the current account state."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," A copy of the account.")),(0,a.kt)("h2",{id:"public-output-buildaliasoutputbuildaliasoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Output buildAliasOutput(BuildAliasOutput options) throws WalletException")),(0,a.kt)("p",null,"Builds an alias output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options to call."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The built output.")),(0,a.kt)("h2",{id:"public-output-buildbasicoutputbuildbasicoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Output buildBasicOutput(BuildBasicOutput options) throws WalletException")),(0,a.kt)("p",null,"Builds a basic output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options to call."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The built output.")),(0,a.kt)("h2",{id:"public-output-buildfoundryoutputbuildfoundryoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Output buildFoundryOutput(BuildFoundryOutput options) throws WalletException")),(0,a.kt)("p",null,"Builds a foundry output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options to call."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The built output.")),(0,a.kt)("h2",{id:"public-output-buildnftoutputbuildnftoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Output buildNftOutput(BuildNftOutput options) throws WalletException")),(0,a.kt)("p",null,"Builds a NFT output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options to call."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The built output.")),(0,a.kt)("h2",{id:"public-transaction-burnnativetokenburnnativetoken-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction burnNativeToken(BurnNativeToken options) throws WalletException")),(0,a.kt)("p",null,"Burns native tokens for the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options to be called."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," A transaction object.")),(0,a.kt)("h2",{id:"public-transaction-burnnftburnnft-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction burnNft(BurnNft options) throws WalletException")),(0,a.kt)("p",null,"Burns a NFT."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The transaction that destroyed the alias.")),(0,a.kt)("h2",{id:"public-transaction-consolidateoutputsconsolidateoutputs-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction consolidateOutputs(ConsolidateOutputs options) throws WalletException")),(0,a.kt)("p",null,"Destroy an alias."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The transaction that destroyed the alias.")),(0,a.kt)("h2",{id:"public-transaction-destroyaliasdestroyalias-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction destroyAlias(DestroyAlias options) throws WalletException")),(0,a.kt)("p",null,"Destroy an alias."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The transaction that destroyed the alias.")),(0,a.kt)("h2",{id:"public-transaction-destroyfoundrydestroyfoundry-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction destroyFoundry(DestroyFoundry options) throws WalletException")),(0,a.kt)("p",null,"Destroy a foundry."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The transaction that destroyed the foundry.")),(0,a.kt)("h2",{id:"public-accountaddress-generateaddressesgenerateaddresses-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public AccountAddress[] generateAddresses(GenerateAddresses options) throws WalletException")),(0,a.kt)("p",null,"Generate addresses."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The generated addresses.")),(0,a.kt)("h2",{id:"public-outputdata-getoutputgetoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public OutputData getOutput(GetOutput options) throws WalletException")),(0,a.kt)("p",null,"Get a specific output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The given output.")),(0,a.kt)("h2",{id:"public-output-getfoundryoutputgetfoundryoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Output getFoundryOutput(GetFoundryOutput options) throws WalletException")),(0,a.kt)("p",null,"Get a specific foundry output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The given output.")),(0,a.kt)("h2",{id:"public-output-getoutputswithadditionalunlockconditionsgetoutputswithadditionalunlockconditions-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Output[] getOutputsWithAdditionalUnlockConditions(GetOutputsWithAdditionalUnlockConditions options) throws WalletException")),(0,a.kt)("p",null,"Get all outputs with additional unlock conditions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The given transaction.")),(0,a.kt)("h2",{id:"public-transaction-gettransactiongettransaction-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction getTransaction(GetTransaction options) throws WalletException")),(0,a.kt)("p",null,"Get a specific transaction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The given transaction.")),(0,a.kt)("h2",{id:"public-jsonelement-getincomingtransactiondatagetincomingtransactiondata-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public JsonElement getIncomingTransactionData(GetIncomingTransactionData options) throws WalletException")),(0,a.kt)("p",null,"Get the transaction with inputs of an incoming transaction stored in the account. List might not be complete, if the node pruned the data already."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," A JsonElement object.")),(0,a.kt)("h2",{id:"public-accountaddress-getaddresses-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public AccountAddress[] getAddresses() throws WalletException")),(0,a.kt)("p",null,"Returns all the addresses of the account."),(0,a.kt)("h2",{id:"public-accountaddress-getaddresseswithunspentoutputs-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public AccountAddress[] getAddressesWithUnspentOutputs() throws WalletException")),(0,a.kt)("p",null,"Returns all the unspent outputs of the account."),(0,a.kt)("h2",{id:"public-outputdata-getoutputsoutputs-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public OutputData[] getOutputs(Outputs options) throws WalletException")),(0,a.kt)("p",null,"Returns all the outputs of the account."),(0,a.kt)("h2",{id:"public-transaction-getpendingtransactions-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction[] getPendingTransactions() throws WalletException")),(0,a.kt)("p",null,"Returns all the pending transactions created by account."),(0,a.kt)("h2",{id:"public-transaction-gettransactions-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction[] getTransactions() throws WalletException")),(0,a.kt)("p",null,"Returns all the transactions created by the account."),(0,a.kt)("h2",{id:"public-outputdata-getunspentoutputsunspentoutputs-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public OutputData[] getUnspentOutputs(UnspentOutputs options) throws WalletException")),(0,a.kt)("p",null,"Returns all unspent outputs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-taggeddatapayload-meltnativetokendecreasenativetokensupply-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public TaggedDataPayload meltNativeToken(DecreaseNativeTokenSupply options) throws WalletException")),(0,a.kt)("p",null,"Melts a Native Token."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-string-minimumrequiredstoragedepositminimumrequiredstoragedeposit-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public String minimumRequiredStorageDeposit(MinimumRequiredStorageDeposit options) throws WalletException")),(0,a.kt)("p",null,"Calculates the minimum required storage deposit for an output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-minttokentransaction-mintnativetokenmintnativetoken-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public MintTokenTransaction mintNativeToken(MintNativeToken options) throws WalletException")),(0,a.kt)("p",null,"Mints Native Tokens."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-transaction-mintnftsmintnfts-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction mintNfts(MintNfts options) throws WalletException")),(0,a.kt)("p",null,"Mints NFTs."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-accountbalance-getbalance-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public AccountBalance getBalance() throws WalletException")),(0,a.kt)("p",null,"Gets the balance of the account."),(0,a.kt)("h2",{id:"public-output-prepareoutputprepareoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Output prepareOutput(PrepareOutput options) throws WalletException")),(0,a.kt)("p",null,"Prepares an output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-preparedtransactiondata-preparetransactionpreparetransaction-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public PreparedTransactionData prepareTransaction(PrepareTransaction options) throws WalletException")),(0,a.kt)("p",null,"Prepares a transaction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-preparedtransactiondata-preparesendamountpreparesendamount-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public PreparedTransactionData prepareSendAmount(PrepareSendAmount options) throws WalletException")),(0,a.kt)("p",null,"Prepares a transaction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-accountbalance-syncaccountsyncaccount-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public AccountBalance syncAccount(SyncAccount options) throws WalletException")),(0,a.kt)("p",null,"Sync the account by fetching new information from the nodes. Will also retry pending transactions if necessary."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-transaction-sendamountsendamount-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction sendAmount(SendAmount options) throws WalletException")),(0,a.kt)("p",null,"Sends an amount."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-transaction-sendmicrotransactionsendmicrotransaction-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction sendMicroTransaction(SendMicroTransaction options) throws WalletException")),(0,a.kt)("p",null,"Sends a micro transaction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-transaction-sendnativetokenssendnativetokens-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction sendNativeTokens(SendNativeTokens options) throws WalletException")),(0,a.kt)("p",null,"Sends Native Tokens."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-transaction-sendnftsendnft-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction sendNft(SendNft options) throws WalletException")),(0,a.kt)("p",null,"Sends a NFT."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-void-setaliassetalias-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public void setAlias(SetAlias options) throws WalletException")),(0,a.kt)("p",null,"Set the alias of the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options.")),(0,a.kt)("h2",{id:"public-transaction-sendoutputssendoutputs-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction sendOutputs(SendOutputs options) throws WalletException")),(0,a.kt)("p",null,"Send outputs in a transaction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The transaction.")),(0,a.kt)("h2",{id:"public-transaction-signtransactionessencesigntransactionessence-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction signTransactionEssence(SignTransactionEssence options) throws WalletException")),(0,a.kt)("p",null,"Signs a transaction essence."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The signed transaction.")),(0,a.kt)("h2",{id:"public-transaction-submitandstoretransactionsubmitandstoretransaction-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction submitAndStoreTransaction(SubmitAndStoreTransaction options) throws WalletException")),(0,a.kt)("p",null,"Submits and stores a transaction."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," The submitted and stored transaction.")),(0,a.kt)("h2",{id:"public-transaction-claimoutputsclaimoutputs-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction claimOutputs(ClaimOutputs options) throws WalletException")),(0,a.kt)("p",null,"This function claims all unclaimed outputs for the account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," A transaction object.")),(0,a.kt)("h2",{id:"public-transaction-createaliasoutputcreatealiasoutput-options-throws-walletexception"},(0,a.kt)("inlineCode",{parentName:"h2"},"public Transaction createAliasOutput(CreateAliasOutput options) throws WalletException")),(0,a.kt)("p",null,"Creates an alias output."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Parameters:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u2014 The options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Returns:")," A transaction object.")))}c.isMDXComponent=!0}}]);