"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99817:(e,t,n)=>{n.d(t,{ZP:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Password Storage",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Never store passwords or seeds on a host's environment variables or in the source code in a production\nsetup. Please follow our ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/guides/backup_security"},"backup and security"),"\nrecommendations for production use.")))}o.isMDXComponent=!0},47445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),r=n(99817);const o={description:"Getting started with the official IOTA Client Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},l="Getting Started with Python",s={unversionedId:"getting_started/python",id:"getting_started/python",title:"Getting Started with Python",description:"Getting started with the official IOTA Client Library Python binding.",source:"@site/next/external/iota.rs/documentation/docs/getting_started/python.mdx",sourceDirName:"getting_started",slug:"/getting_started/python",permalink:"/next/iota.rs/getting_started/python",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/getting_started/python.mdx",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Python binding.",image:"/img/logo/iota_mark_light.png",keywords:["Python","install","pip","unpack"]},sidebar:"docs",previous:{title:"Getting Started with Node.js",permalink:"/next/iota.rs/getting_started/nodejs"},next:{title:"Getting Started With Rust",permalink:"/next/iota.rs/getting_started/rust"}},d={},p=[{value:"Security",id:"security",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Install the Library",id:"install-the-library",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Change to the Python Binding Directory",id:"change-to-the-python-binding-directory",level:3},{value:"Install the Required Dependencies and Build the Wheel",id:"install-the-required-dependencies-and-build-the-wheel",level:3},{value:"(optional) Create and Use a Virtual Environment",id:"optional-create-and-use-a-virtual-environment",level:3},{value:"Linux/MacOs",id:"linuxmacos",level:4},{value:"Windows",id:"windows",level:4},{value:"(optional) Deactivate the virtual environment",id:"optional-deactivate-the-virtual-environment",level:3},{value:"Use the Library",id:"use-the-library",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-python"},"Getting Started with Python"),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)(r.ZP,{mdxType:"WarningPasswordStorage"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.python.org"},"Python 3.x"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/pip"},"pip"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo")," to compile the binding."),(0,a.kt)("li",{parentName:"ul"},"(for Linux only) ",(0,a.kt)("inlineCode",{parentName:"li"},"libudev"),". You can install it with ",(0,a.kt)("inlineCode",{parentName:"li"},"apt install libudev-dev"),".")),(0,a.kt)("h2",{id:"install-the-library"},"Install the Library"),(0,a.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,a.kt)("p",null,"You can clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"iota.rs client library")," by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/iota.rs\n")),(0,a.kt)("h3",{id:"change-to-the-python-binding-directory"},"Change to the Python Binding Directory"),(0,a.kt)("p",null,"After you have cloned the repository, you should change directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/python/native"),". You can do so by\nrunning the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd iota.rs/client/bindings/python/native\n")),(0,a.kt)("h3",{id:"install-the-required-dependencies-and-build-the-wheel"},"Install the Required Dependencies and Build the Wheel"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"#clone-the-library"},"cloned the library"),",\nand ",(0,a.kt)("a",{parentName:"p",href:"#change-to-the-python-binding-directory"},"moved to the binding's directory"),", you should install dependencies and build the wheel file."),(0,a.kt)("p",null,"You can do so by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements-dev.txt\npip install .\n")),(0,a.kt)("h3",{id:"optional-create-and-use-a-virtual-environment"},"(optional) Create and Use a Virtual Environment"),(0,a.kt)("p",null,"If you want to isolate the library from the rest of your system, you can create a virtual environment by running the\nfollowing commands:"),(0,a.kt)("h4",{id:"linuxmacos"},"Linux/MacOs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv iota_client_venv\nsource iota_client_venv/bin/activate\n")),(0,a.kt)("h4",{id:"windows"},"Windows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},".\\iota_client_venv\\Scripts\\activate\n")),(0,a.kt)("h3",{id:"optional-deactivate-the-virtual-environment"},"(optional) Deactivate the virtual environment"),(0,a.kt)("p",null,"If you want to deactivate the virtual environment, you should run the following command from the virtual environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,a.kt)("h2",{id:"use-the-library"},"Use the Library"),(0,a.kt)("p",null,"After you installed the library, you can create a ",(0,a.kt)("inlineCode",{parentName:"p"},"IotaClient")," instance and interface with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from iota_client import IotaClient\n\n# Create an IotaClient instance\nclient = IotaClient({'nodes': ['https://api.testnet.shimmer.network']})\n\n# Get the node info\nnode_info = client.get_info()\nprint(f'{node_info}')\n")),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"Now that you are up and running, you can get acquainted with the library using\nits ",(0,a.kt)("a",{parentName:"p",href:"/next/iota.rs/how_tos/run_how_tos"},"how-to guides")," and the\nrepository's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"code examples"),"."))}c.isMDXComponent=!0}}]);