/*! For license information please see 0b177804.9dda0e69.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[4612],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9779:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(8168),a=(r(3696),r(5680));const i={id:"Wizard.Step",title:"Wizard.Step",sidebar_label:"Step"},o=void 0,l={unversionedId:"components/navigation/Wizard/Wizard.Step",id:"components/navigation/Wizard/Wizard.Step",isDocsHomePage:!1,title:"Wizard.Step",description:"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",source:"@site/../docs/components/navigation/Wizard/Wizard.Step.md",sourceDirName:"components/navigation/Wizard",slug:"/components/navigation/Wizard/Wizard.Step",permalink:"/react-native-ui-lib/docs/components/navigation/Wizard/Wizard.Step",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/navigation/Wizard/Wizard.Step.md",tags:[],version:"current",frontMatter:{id:"Wizard.Step",title:"Wizard.Step",sidebar_label:"Step"},sidebar:"tutorialSidebar",previous:{title:"Wizard",permalink:"/react-native-ui-lib/docs/components/navigation/Wizard/Wizard"},next:{title:"ActionSheet",permalink:"/react-native-ui-lib/docs/components/overlays/ActionSheet"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"accessibilityInfo",id:"accessibilityinfo",children:[]},{value:"circleBackgroundColor",id:"circlebackgroundcolor",children:[]},{value:"circleColor",id:"circlecolor",children:[]},{value:"circleSize",id:"circlesize",children:[]},{value:"color",id:"color",children:[]},{value:"connectorStyle",id:"connectorstyle",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"icon",id:"icon",children:[]},{value:"indexLabelStyle",id:"indexlabelstyle",children:[]},{value:"label",id:"label",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"state",id:"state",children:[]}]}],s={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/WizardScreen.tsx"},"(code example)")),(0,a.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.yg)("div",{parentName:"div",className:"admonition-heading"},(0,a.yg)("h5",{parentName:"div"},(0,a.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,a.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.yg)("div",{parentName:"div",className:"admonition-content"},(0,a.yg)("p",{parentName:"div"},"Use Wizard with nested Wizard.Step(s) to achieve the desired result."))),(0,a.yg)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,a.yg)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/Wizard.gif?raw=true"}),(0,a.yg)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/WizardPresets.png?raw=true"})),(0,a.yg)("h3",{id:"usage"},"Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"<Wizard.Step state={Wizard.States.ENABLED} label={'Label'}/>\n")),(0,a.yg)("h2",{id:"api"},"API"),(0,a.yg)("h3",{id:"accessibilityinfo"},"accessibilityInfo"),(0,a.yg)("p",null,"Extra text to be read in accessibility mode",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,a.yg)("h3",{id:"circlebackgroundcolor"},"circleBackgroundColor"),(0,a.yg)("p",null,"Circle's background color",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,a.yg)("h3",{id:"circlecolor"},"circleColor"),(0,a.yg)("p",null,"Color of the circle",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,a.yg)("h3",{id:"circlesize"},"circleSize"),(0,a.yg)("p",null,"The step's circle size (diameter)",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,a.yg)("h3",{id:"color"},"color"),(0,a.yg)("p",null,"Color of the step index (or of the icon, when provided)",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,a.yg)("h3",{id:"connectorstyle"},"connectorStyle"),(0,a.yg)("p",null,"Additional styles for the connector",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.yg)("h3",{id:"enabled"},"enabled"),(0,a.yg)("p",null,"Whether the step should be enabled",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.yg)("h3",{id:"icon"},"icon"),(0,a.yg)("p",null,"Icon to replace the (default) index",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"ImageProps ")," "),(0,a.yg)("h3",{id:"indexlabelstyle"},"indexLabelStyle"),(0,a.yg)("p",null,"Additional styles for the index's label (when icon is not provided)",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,a.yg)("h3",{id:"label"},"label"),(0,a.yg)("p",null,"The label of the item",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"string ")," "),(0,a.yg)("h3",{id:"labelstyle"},"labelStyle"),(0,a.yg)("p",null,"Additional styles for the label",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,a.yg)("h3",{id:"state"},"state"),(0,a.yg)("p",null,"The state of the step (Wizard.States.X)",(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"WizardStepStates ")))}d.isMDXComponent=!0},4403:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),y=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}function h(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var S=v.prototype=new h;S.constructor=v,g(S,b.prototype),S.isPureReactComponent=!0;var w=Array.isArray,z=Object.prototype.hasOwnProperty,N={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)z.call(t,a)&&!x.hasOwnProperty(a)&&(i[a]=t[a]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var s=Array(c),p=0;p<c;p++)s[p]=arguments[p+2];i.children=s}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===i[a]&&(i[a]=c[a]);return{$$typeof:r,type:e,key:o,ref:l,props:i,_owner:N.current}}function W(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return o=o(c=e),e=""===i?"."+k(c,0):i,w(o)?(a="",null!=e&&(a=e.replace(j,"$&/")+"/"),_(o,t,a,"",(function(e){return e}))):null!=o&&(W(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(c=0,i=""===i?".":i+":",w(e))for(var s=0;s<e.length;s++){var p=i+k(l=e[s],s);c+=_(l,t,a,p,o)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(l=e.next()).done;)c+=_(l=l.value,t,a,p=i+k(l,s++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,r){if(null==e)return e;var n=[],a=0;return _(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},T={transition:null}},3696:(e,t,r)=>{r(4403)}}]);