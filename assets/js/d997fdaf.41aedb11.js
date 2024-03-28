/*! For license information please see d997fdaf.41aedb11.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[681],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3746:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(8168),o=(r(3696),r(5680));const a={id:"Card.Image",title:"Card.Image",sidebar_label:"Image"},i=void 0,c={unversionedId:"components/layout/Card/Card.Image",id:"components/layout/Card/Card.Image",isDocsHomePage:!1,title:"Card.Image",description:"Inner component for the Card component (better be a direct child)",source:"@site/../docs/components/layout/Card/Card.Image.md",sourceDirName:"components/layout/Card",slug:"/components/layout/Card/Card.Image",permalink:"/react-native-ui-lib/docs/components/layout/Card/Card.Image",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/layout/Card/Card.Image.md",tags:[],version:"current",frontMatter:{id:"Card.Image",title:"Card.Image",sidebar_label:"Image"},sidebar:"tutorialSidebar",previous:{title:"Card",permalink:"/react-native-ui-lib/docs/components/layout/Card/Card"},next:{title:"Section",permalink:"/react-native-ui-lib/docs/components/layout/Card/Card.Section"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"height",id:"height",children:[]},{value:"position",id:"position",children:[]},{value:"width",id:"width",children:[]}]}],s={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Inner component for the Card component (better be a direct child)",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CardsScreen.tsx"},"(code example)")),(0,o.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,o.yg)("div",{parentName:"div",className:"admonition-heading"},(0,o.yg)("h5",{parentName:"div"},(0,o.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,o.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.yg)("div",{parentName:"div",className:"admonition-content"},(0,o.yg)("p",{parentName:"div"},"This component extends ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"/docs/components/media/Image"},"Image"))," props."))),(0,o.yg)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.yg)("h3",{id:"usage"},"Usage"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<Card.Image source={{uri: 'https://github.com/wix/react-native-ui-lib/blob/master/demo/src/assets/images/card-example.jpg'}} height={115}/>\n")),(0,o.yg)("h2",{id:"api"},"API"),(0,o.yg)("h3",{id:"height"},"height"),(0,o.yg)("p",null,"Height",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")," "),(0,o.yg)("h3",{id:"position"},"position"),(0,o.yg)("p",null,"The Image position which determines the appropriate flex-ness of the image and border radius (for Android) this prop derived automatically from Card parent component if it rendered as a direct child of the Card component",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"string[] ")," "),(0,o.yg)("h3",{id:"width"},"width"),(0,o.yg)("p",null,"Width",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"number ")))}p.isMDXComponent=!0},4403:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function b(){}function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var w=v.prototype=new b;w.constructor=v,y(w,h.prototype),w.isPureReactComponent=!0;var C=Array.isArray,O=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var o,a={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,o)&&!S.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===a[o]&&(a[o]=l[o]);return{$$typeof:r,type:e,key:i,ref:c,props:a,_owner:j.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function k(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,o,a,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case n:l=!0}}if(l)return i=i(l=e),e=""===a?"."+k(l,0):a,C(i)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),I(i,t,o,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,a=""===a?".":a+":",C(e))for(var s=0;s<e.length;s++){var u=a+k(c=e[s],s);l+=I(c,t,o,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(c=e.next()).done;)l+=I(c=c.value,t,o,u=a+k(c,s++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,r){if(null==e)return e;var n=[],o=0;return I(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function E(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},$={transition:null}},3696:(e,t,r)=>{r(4403)}}]);