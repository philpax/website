(self.webpackChunkstardust_website=self.webpackChunkstardust_website||[]).push([[272],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1222:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:3},s="Model",p={unversionedId:"stardust-protocol/server/types/Model",id:"stardust-protocol/server/types/Model",isDocsHomePage:!1,title:"Model",description:"Derived from Spatial",source:"@site/docs/stardust-protocol/server/types/Model.md",sourceDirName:"stardust-protocol/server/types",slug:"/stardust-protocol/server/types/Model",permalink:"/docs/stardust-protocol/server/types/Model",editUrl:"https://github.com/StardustXR/website/edit/main/docs/stardust-protocol/server/types/Model.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Spatial",permalink:"/docs/stardust-protocol/server/types/Spatial"},next:{title:"BoxField",permalink:"/docs/stardust-protocol/server/types/field/BoxField"}},d=[{value:"Derived from Spatial",id:"derived-from-spatial",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>setVisible(bool visible)</code>",id:"setvisiblebool-visible",children:[]},{value:"<code>setOrigin(Vector3 origin)</code>",id:"setoriginvector3-origin",children:[]},{value:"<code>setOrientation(Quat orientation)</code>",id:"setorientationquat-orientation",children:[]},{value:"<code>destroy()</code>",id:"destroy",children:[]},{value:"<code>setMaterialProperty(uint32 submeshIndex, string propertyName, float value)</code>",id:"setmaterialpropertyuint32-submeshindex-string-propertyname-float-value",children:[]},{value:"<code>setMaterialProperty(uint32 submeshIndex, string propertyName, Color value)</code>",id:"setmaterialpropertyuint32-submeshindex-string-propertyname-color-value",children:[]},{value:"<code>setMaterialProperty(uint32 submeshIndex, string propertyName, string value)</code>",id:"setmaterialpropertyuint32-submeshindex-string-propertyname-string-value",children:[]}]}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"model"},"Model"),(0,i.kt)("h3",{id:"derived-from-spatial"},"Derived from ",(0,i.kt)("a",{parentName:"h3",href:"Spatial"},"Spatial")),(0,i.kt)("p",null,"A graphical model."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"setvisiblebool-visible"},(0,i.kt)("inlineCode",{parentName:"h3"},"setVisible(bool visible)")),(0,i.kt)("p",null,"Enables/disables visibility."),(0,i.kt)("h3",{id:"setoriginvector3-origin"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOrigin(Vector3 origin)")),(0,i.kt)("p",null,"Sets the origin to ",(0,i.kt)("inlineCode",{parentName:"p"},"origin"),". "),(0,i.kt)("h3",{id:"setorientationquat-orientation"},(0,i.kt)("inlineCode",{parentName:"h3"},"setOrientation(Quat orientation)")),(0,i.kt)("p",null,"Sets the orientation to ",(0,i.kt)("inlineCode",{parentName:"p"},"orientation"),". "),(0,i.kt)("h3",{id:"destroy"},(0,i.kt)("inlineCode",{parentName:"h3"},"destroy()")),(0,i.kt)("p",null,"Destroys the model instance. Resources like the mesh and material and textures may be in memory still, but the resource manager will clean it up if needed."),(0,i.kt)("h3",{id:"setmaterialpropertyuint32-submeshindex-string-propertyname-float-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"setMaterialProperty(uint32 submeshIndex, string propertyName, float value)")),(0,i.kt)("h3",{id:"setmaterialpropertyuint32-submeshindex-string-propertyname-color-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"setMaterialProperty(uint32 submeshIndex, string propertyName, Color value)")),(0,i.kt)("h3",{id:"setmaterialpropertyuint32-submeshindex-string-propertyname-string-value"},(0,i.kt)("inlineCode",{parentName:"h3"},"setMaterialProperty(uint32 submeshIndex, string propertyName, string value)")),(0,i.kt)("p",null,"Sets the material property ",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName")," on this model's submesh at ",(0,i.kt)("inlineCode",{parentName:"p"},"submeshIndex")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),". Valid material names are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"color")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Color")),(0,i.kt)("td",{parentName:"tr",align:null},"Tint/multiply the shader's output color by this amount. (default is opaque white)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"roughness")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:null},"Scale the metal texture's roughness by this amount")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"metallic")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:null},"Scale the metal texture's metalness by this amount")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tex_scale")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:null},"Scale the UV coordinates of all textures by this amount")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"diffuse")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the diffuse texture of the material (if it has one).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"emission")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the emission texture of the material (if it has one).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"metal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the metalness texture of the material (if it has one).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"normal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the normal map texture of the material (if it has one).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"occlusion")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Path to the occlusion map texture of the material (if it has one).")))))}m.isMDXComponent=!0}}]);