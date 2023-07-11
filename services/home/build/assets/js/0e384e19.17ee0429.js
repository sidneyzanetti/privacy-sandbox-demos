"use strict";(self.webpackChunkprivacy_sandbox_demos=self.webpackChunkprivacy_sandbox_demos||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,b=m["".concat(p,".").concat(u)]||m[u]||l[u]||o;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Privacy Sandbox Demos",c={unversionedId:"intro",id:"intro",title:"Privacy Sandbox Demos",description:"Looking for running these demos on your local environment ?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Index",permalink:"/docs/demos/"}},p={},s=[],d={toc:s},m="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"privacy-sandbox-demos"},"Privacy Sandbox Demos"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Looking for running these demos on your local environment ?\nCheck the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/privacysandbox/privacy-sandbox-demos/blob/main/README.md"},"deployment guide")," on the GitHub.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Category")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Use Case")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Privacy Sandbox APIs")),(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Relevant for")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Show Relevant Content and Ads"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"demos/retargeting-remarketing"},"Retargeting / Remarketing")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Protected Audience API"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Publisher, SSP, Advertiser, DSP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Measure Digital Ads"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"demos/single-touch-conversion-attribution"},"Single-touch conversion Attribution")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Attribution Reporting API, Aggregation Service"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Publisher, SSP, Advertiser, DSP")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Looking for a use case not listed here ?\nHelp us growing this repository by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/privacysandbox/privacy-sandbox-demos/tree/main/docs/contribute"},"contributing")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/privacysandbox/privacy-sandbox-demos/issues"},"sharing feedback"),".")))}l.isMDXComponent=!0}}]);