"use strict";(self.webpackChunkstardust_website=self.webpackChunkstardust_website||[]).push([[16],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3260:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="PointerInput",d={unversionedId:"stardust-protocol/server/types/input/inputtypes/PointerInput",id:"stardust-protocol/server/types/input/inputtypes/PointerInput",isDocsHomePage:!1,title:"PointerInput",description:"Derived from InputMethod",source:"@site/docs/stardust-protocol/server/types/input/inputtypes/PointerInput.md",sourceDirName:"stardust-protocol/server/types/input/inputtypes",slug:"/stardust-protocol/server/types/input/inputtypes/PointerInput",permalink:"/docs/stardust-protocol/server/types/input/inputtypes/PointerInput",editUrl:"https://github.com/StardustXR/website/edit/main/docs/stardust-protocol/server/types/input/inputtypes/PointerInput.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HandInput",permalink:"/docs/stardust-protocol/server/types/input/inputtypes/HandInput"},next:{title:"Zone",permalink:"/docs/stardust-protocol/server/types/Zone"}},s=[{value:"Derived from InputMethod",id:"derived-from-inputmethod",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Datamap",id:"datamap",children:[{value:"Required",id:"required",children:[]},{value:"Built in",id:"built-in",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>setDirection(Vector3 direction)</code>",id:"setdirectionvector3-direction",children:[]},{value:"<code>setTilt(float angle)</code>",id:"settiltfloat-angle",children:[]},{value:"<code>setOrientation(Vector3 direction, float angle)</code>",id:"setorientationvector3-direction-float-angle",children:[]},{value:"<code>setPose(Vector3 origin, Vector3 direction, float angle)</code>",id:"setposevector3-origin-vector3-direction-float-angle",children:[]}]}],u={toc:s};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pointerinput"},"PointerInput"),(0,i.kt)("h3",{id:"derived-from-inputmethod"},"Derived from ",(0,i.kt)("a",{parentName:"h3",href:"../InputMethod"},"InputMethod")),(0,i.kt)("p",null,"An input method for pointers, such as the Daydream's remote, a pointer put on an Index controller, Oculus style laser mouse, and your desktop's mouse in flatscreen."),(0,i.kt)("p",null,"The local space for a pointer is where +Z is along the pointer's direction, +X is to the right of the pointer when laying face up, and +Y is upward when laying face up."),(0,i.kt)("h2",{id:"serialization"},"Serialization"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"origin"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"direction"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Vector3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tilt"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"datamap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dictionary"))))),(0,i.kt)("h2",{id:"datamap"},"Datamap"),(0,i.kt)("h3",{id:"required"},"Required"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"select"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")," (range ",(0,i.kt)("inlineCode",{parentName:"td"},"0.0"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the pointer is attempting to select an object, usually through trigger. 1.0 is selected, 0.0 is not selected, and inbetween is to add smoothness to the interaction.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grab"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")," (range ",(0,i.kt)("inlineCode",{parentName:"td"},"0.0"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"1.0"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"How much the pointer is attempting to grab an object. 0.0 is not grabbing at all, 1.0 is grabbing the strongest, and inbetween is to add smoothness.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scroll"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Vector2")," (component range ",(0,i.kt)("inlineCode",{parentName:"td"},"-0.5"),"-",(0,i.kt)("inlineCode",{parentName:"td"},"0.5"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount to scroll on this input tick (sensitivity determined on the receiving client). Can be used for 2D scrolling as well as adjusting depth/size when grabbing an object.")))),(0,i.kt)("h3",{id:"built-in"},"Built in"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deepestPointDistance"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")," (>=",(0,i.kt)("inlineCode",{parentName:"td"},"0.0"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"The distance along the ray where the deepest surface point resides.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of pointer. Can be one of ",(0,i.kt)("inlineCode",{parentName:"td"},'"eyes"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"mouse"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"controller"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"gaze"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"generic"'))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"setdirectionvector3-direction"},(0,i.kt)("inlineCode",{parentName:"h3"},"setDirection(Vector3 direction)")),(0,i.kt)("p",null,"Sets the direction the pointer is pointing in stage space."),(0,i.kt)("h3",{id:"settiltfloat-angle"},(0,i.kt)("inlineCode",{parentName:"h3"},"setTilt(float angle)")),(0,i.kt)("p",null,"Sets the tilt of the pointer (rotation about the pointer direction) clockwise in radians."),(0,i.kt)("h3",{id:"setorientationvector3-direction-float-angle"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOrientation(Vector3 direction, float angle)")),(0,i.kt)("p",null,"Sets the direction and tilt of the pointer to save on IPC calls."),(0,i.kt)("h3",{id:"setposevector3-origin-vector3-direction-float-angle"},(0,i.kt)("inlineCode",{parentName:"h3"},"setPose(Vector3 origin, Vector3 direction, float angle)")),(0,i.kt)("p",null,"Sets the origin, direction, and tilt of the pointer to save on IPC calls."))}c.isMDXComponent=!0}}]);