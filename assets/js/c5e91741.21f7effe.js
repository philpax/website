"use strict";(self.webpackChunkstardust_website=self.webpackChunkstardust_website||[]).push([[523],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(d,".").concat(u)]||c[u]||s[u]||o;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5691:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},d="Protocol",p={unversionedId:"stardust-protocol/protocol",id:"stardust-protocol/protocol",isDocsHomePage:!1,title:"Protocol",description:"Data",source:"@site/docs/stardust-protocol/protocol.md",sourceDirName:"stardust-protocol",slug:"/stardust-protocol/protocol",permalink:"/docs/stardust-protocol/protocol",editUrl:"https://github.com/StardustXR/website/edit/main/docs/stardust-protocol/protocol.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Use",permalink:"/docs/getting-started/run"},next:{title:"Initial Client Connection",permalink:"/docs/stardust-protocol/client/initial-connection"}},m=[{value:"Data",id:"data",children:[]},{value:"Message Types",id:"message-types",children:[{value:"Error",id:"error",children:[]},{value:"Signal",id:"signal",children:[]},{value:"Method Call",id:"method-call",children:[]},{value:"Method Return",id:"method-return",children:[]}]},{value:"Data Types",id:"data-types",children:[{value:"Color",id:"color",children:[]},{value:"Vector2",id:"vector2",children:[]},{value:"Vector3",id:"vector3",children:[]},{value:"Quaternion",id:"quaternion",children:[]}]}],s={toc:m};function c(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protocol"},"Protocol"),(0,o.kt)("h2",{id:"data"},"Data"),(0,o.kt)("p",null,"Every message uses ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/flatbuffers/"},"flatbuffers")," and ",(0,o.kt)("a",{parentName:"p",href:"https://google.github.io/flatbuffers/flexbuffers.html"},"flexbuffers")," to add variant data such as method arguments and return values. The Stardust XR Message schema is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace StardustXR;\n\ntable Message {\n    type: ubyte;\n    id: uint;\n    object: string;\n    method: string;\n    error: string;\n    data:[ubyte] (flexbuffer);\n}\n\nroot_type Message;\n")),(0,o.kt)("h2",{id:"message-types"},"Message Types"),(0,o.kt)("p",null,"All fields not accounted for are assumed to be not included or ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},'""')),(0,o.kt)("h3",{id:"error"},"Error"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"0")," or ID of method call")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Path to the object the error comes from")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"method")),(0,o.kt)("td",{parentName:"tr",align:"left"},"What method caused the error (if applicable, otherwise this is an empty string)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"error")),(0,o.kt)("td",{parentName:"tr",align:"left"},"String containing the error message itself")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Empty vector")))),(0,o.kt)("h3",{id:"signal"},"Signal"),(0,o.kt)("p",null,"Signals are method calls that do not expect a response of any kind."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Path to object to send signal to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"method")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the method to execute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Flexbuffer containing arguments to pass to remote method")))),(0,o.kt)("h3",{id:"method-call"},"Method Call"),(0,o.kt)("p",null,"Method calls allow for remote procedure calling."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"2"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Dynamically generated ID to identify method return for this method")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Path to object to execute method on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"method")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the method to execute")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Flexbuffer containing arguments to pass to remote method")))),(0,o.kt)("h3",{id:"method-return"},"Method Return"),(0,o.kt)("p",null,"Message to pass the return value back to the program."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"right"},"Field Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"3"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The same as the message call's ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"right"},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Flexbuffer containing return value")))),(0,o.kt)("h2",{id:"data-types"},"Data Types"),(0,o.kt)("p",null,"Stardust does not support the ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FixedTypedVector")," flexbuffers datatypes."),(0,o.kt)("h3",{id:"color"},"Color"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," of 4 ",(0,o.kt)("inlineCode",{parentName:"p"},"float")," is treated as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Color")," in the form ",(0,o.kt)("inlineCode",{parentName:"p"},"RGBA"),"."),(0,o.kt)("h3",{id:"vector2"},"Vector2"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," of 2 ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," is treated as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector2"),"."),(0,o.kt)("h3",{id:"vector3"},"Vector3"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," of 3 ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," is treated as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector3"),"."),(0,o.kt)("h3",{id:"quaternion"},"Quaternion"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," of 4 ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," is treated as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Quaternion"),"."))}c.isMDXComponent=!0}}]);