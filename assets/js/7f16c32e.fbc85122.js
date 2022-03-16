"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[4011],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,l(l({ref:e},s),{},{components:n})):r.createElement(k,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},985:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"structure",title:"Project Structure",description:"An overview of the various files / folders of note in the CIPP UI project.",slug:"/cipp/structure"},p=void 0,d={unversionedId:"CIPP/structure",id:"CIPP/structure",title:"Project Structure",description:"An overview of the various files / folders of note in the CIPP UI project.",source:"@site/docs/dev/CIPP/structure.md",sourceDirName:"CIPP",slug:"/cipp/structure",permalink:"/docs/dev/cipp/structure",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/dev/CIPP/structure.md",tags:[],version:"current",lastUpdatedBy:"Kelvin Tegelaar",lastUpdatedAt:1647438407,formattedLastUpdatedAt:"16/03/2022",frontMatter:{id:"structure",title:"Project Structure",description:"An overview of the various files / folders of note in the CIPP UI project.",slug:"/cipp/structure"},sidebar:"devSidebar",previous:{title:"CIPP React UI",permalink:"/docs/dev/cipp"},next:{title:"CIPP API",permalink:"/docs/dev/cipp-api"}},s={},u=[{value:"The Root",id:"the-root",level:2},{value:"The Source",id:"the-source",level:2}],c={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"So you've got two repositories now (assuming you followed the ",(0,o.kt)("a",{parentName:"p",href:"../../settingup/"},"setting up")," guide.) this page looks at what's in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP")," folder so you know where to look when you start coding."),(0,o.kt)("h2",{id:"the-root"},"The Root"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP")," directory itself there're a number of files and folders, the table below highlights the important ones:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"public")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds static files used when compiling CIPP (building) for use. Mostly images and a little ",(0,o.kt)("inlineCode",{parentName:"td"},"HTML")," scaffolding.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"src")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds the code that powers CIPP, this is where most CIPP development takes place.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"package.json")),(0,o.kt)("td",{parentName:"tr",align:null},"An npm package file - this tells npm what other libraries/resources to use when building CIPP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"package-lock.json")),(0,o.kt)("td",{parentName:"tr",align:null},"An npm package file - this tells npm exact version numbers/packages to use for repeatable builds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"version_latest.txt")),(0,o.kt)("td",{parentName:"tr",align:null},"Our version file. This gets incremented just before ",(0,o.kt)("inlineCode",{parentName:"td"},"dev")," gets merged into ",(0,o.kt)("inlineCode",{parentName:"td"},"main")," for a new release.")))),(0,o.kt)("h2",{id:"the-source"},"The Source"),(0,o.kt)("p",null,"The table below goes into detail on the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"assets/images")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds image files used when building the app.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"components")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds custom ",(0,o.kt)("a",{parentName:"td",href:"https://reactjs.org/docs/components-and-props.html"},"React components")," used throughout CIPP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds static data files used throughout CIPP. At the time of writing the only one is ",(0,o.kt)("inlineCode",{parentName:"td"},"countryList.json"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"hooks")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds custom ",(0,o.kt)("a",{parentName:"td",href:"https://reactjs.org/docs/hooks-reference.html"},"React hooks")," used throughout CIPP.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"layout")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds the main layout file which handles setting up the overall layout of the CIPP user interface.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"scss")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds the ",(0,o.kt)("a",{parentName:"td",href:"https://sass-lang.com/"},"SCSS")," files which control the look and feel of the CIPP user interface.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"store")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds the various API interfaces, app feature functional code and middle-ware to drive CIPP functionality.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"views")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds the pages which make up the CIPP user interface.")))),(0,o.kt)("p",null,"of the remaining files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory the following are noteworthy:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"_nav.js")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds the navigation items displayed in the left hand navigation bar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"adminRoutes.js")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds information on admin-privileged routes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"routes.js")),(0,o.kt)("td",{parentName:"tr",align:null},"Holds information on routes.")))))}m.isMDXComponent=!0}}]);