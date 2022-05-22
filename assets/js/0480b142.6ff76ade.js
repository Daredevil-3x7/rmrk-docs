(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(i,".").concat(f)]||u[f]||h[f]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(116)),i=["components"],c={title:"FAQ: Frequently Asked Questions"},s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ: Frequently Asked Questions",description:"The non-technical FAQ is now hosted in the self-help knowledgebase.",source:"@site/docs/faq.md",slug:"/faq",permalink:"/faq",editUrl:"https://github.com/rmrk-team/rmrk-docs/edit/master/docs/faq.md",version:"current",sidebar:"docs",previous:{title:"FRAME implementaton",permalink:"/pallets"}},p=[{value:"How does IPFS hosting work?",id:"how-does-ipfs-hosting-work",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The non-technical FAQ is now hosted in the ",Object(a.b)("a",{parentName:"p",href:"https://coda.io/@rmrk/faq"},"self-help knowledgebase"),"."),Object(a.b)("h2",{id:"how-does-ipfs-hosting-work"},"How does IPFS hosting work?"),Object(a.b)("p",null,'IPFS, or Interplanetary File System, uses "content hashing". This means a piece of content is put through a hashing algorithm, a one-way mathematical function which always produces the same output for the same input. Changing even a single letter in the original content produces a completely different hash.'),Object(a.b)("p",null,"These hashes are then turned into content addresses like so: ",Object(a.b)("inlineCode",{parentName:"p"},"ipfs://ipfs/QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR")," which a browser or ",Object(a.b)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/ipfs-gateway/"},"IPFS gateway")," can access."),Object(a.b)("p",null,"Many machines around the world run the IPFS protocol and advertise which content hashes they host, so that if a certain piece of content needs to be found, a path can be established to it."),Object(a.b)("p",null,"These machines, when they access this piece of content, download it and rehost it, keeping it in their memory, allowing you to consume it and advertising to others that they have a copy, propagating it across the web. But unless the content is ",Object(a.b)("em",{parentName:"p"},"pinned")," it will disappear after a certain period of time of not being accessed, or once the machine reboots via a process known as garbage collection. "),Object(a.b)("p",null,"Pinned content is never garbage collected."),Object(a.b)("p",null,"Several services exist that download and pin IPFS content for you, for a fee. ",Object(a.b)("a",{parentName:"p",href:"https://pinata.cloud"},"Pinata")," and ",Object(a.b)("a",{parentName:"p",href:"https://crust.network"},"Crust")," are very popular ones. Alternatively, you can ",Object(a.b)("a",{parentName:"p",href:"https://medium.com/ethereum-developers/how-to-host-your-ipfs-files-online-forever-f0c56b9b5398"},"run your own node")," and pin the content there, but your node would have to be always online and accessible via the internet for this to work, which is not something most people can run at home."),Object(a.b)("p",null,"When hosting NFT content on IPFS, you are expected to pay for pinning of your own content with one such service, or otherwise make sure the content is persistent and will not disappear."),Object(a.b)("p",null,"When minting via ",Object(a.b)("a",{parentName:"p",href:"https://singular.app"},"Singular.app"),", RMRK covers the pinning fee."))}u.isMDXComponent=!0}}]);