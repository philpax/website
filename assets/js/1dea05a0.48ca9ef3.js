"use strict";(self.webpackChunkstardust_website=self.webpackChunkstardust_website||[]).push([[351],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=a(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var a=2;a<i;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6313:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return d},default:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],l={},c="BoxField",a={unversionedId:"stardust-protocol/server/types/field/BoxField",id:"stardust-protocol/server/types/field/BoxField",isDocsHomePage:!1,title:"BoxField",description:"Derived from Field",source:"@site/docs/stardust-protocol/server/types/field/BoxField.md",sourceDirName:"stardust-protocol/server/types/field",slug:"/stardust-protocol/server/types/field/BoxField",permalink:"/docs/stardust-protocol/server/types/field/BoxField",editUrl:"https://github.com/StardustXR/website/edit/main/docs/stardust-protocol/server/types/field/BoxField.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model",permalink:"/docs/stardust-protocol/server/types/Model"},next:{title:"CylinderField",permalink:"/docs/stardust-protocol/server/types/field/CylinderField"}},d=[{value:"Derived from Field",id:"derived-from-field",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>setSize(Vector3 size)</code>",id:"setsizevector3-size",children:[]}]}],p={toc:d};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"boxfield"},"BoxField"),(0,i.kt)("h3",{id:"derived-from-field"},"Derived from ",(0,i.kt)("a",{parentName:"h3",href:"Field"},"Field")),(0,i.kt)("p",null,"This field is in a rectangular prism shape."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"setsizevector3-size"},(0,i.kt)("inlineCode",{parentName:"h3"},"setSize(Vector3 size)")),(0,i.kt)("p",null,"Sets the size of the box."))}u.isMDXComponent=!0}}]);