/*! For license information please see 0af7329b.fb2effe3.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[7160],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5901:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7378),n(3905)),i=["components"],l={id:"ColorPalette",title:"ColorPalette",sidebar_label:"ColorPalette"},c=void 0,u={unversionedId:"components/form/ColorPalette",id:"components/form/ColorPalette",isDocsHomePage:!1,title:"ColorPalette",description:"A component for displaying a color palette",source:"@site/../docs/components/form/ColorPalette.md",sourceDirName:"components/form",slug:"/components/form/ColorPalette",permalink:"/react-native-ui-lib/docs/components/form/ColorPalette",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/ColorPalette.md",tags:[],version:"current",frontMatter:{id:"ColorPalette",title:"ColorPalette",sidebar_label:"ColorPalette"},sidebar:"tutorialSidebar",previous:{title:"ChipsInput",permalink:"/react-native-ui-lib/docs/components/form/ChipsInput"},next:{title:"ColorPicker",permalink:"/react-native-ui-lib/docs/components/form/ColorPicker"}},p=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"animatedIndex",id:"animatedindex",children:[]},{value:"colors",id:"colors",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"containerWidth",id:"containerwidth",children:[]},{value:"loop",id:"loop",children:[]},{value:"numberOfRows",id:"numberofrows",children:[]},{value:"onValueChange",id:"onvaluechange",children:[]},{value:"style",id:"style",children:[]},{value:"swatchStyle",id:"swatchstyle",children:[]},{value:"testID",id:"testid",children:[]},{value:"usePagination",id:"usepagination",children:[]},{value:"value",id:"value",children:[]}]}],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A component for displaying a color palette",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ColorPickerScreen.tsx"},"(code example)")),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,a.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/ColorPalette/ColorPalette.gif?raw=true"})),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<ColorPalette\n colors={['transparent', Colors.green30, Colors.yellow30, Colors.red30]}\n value={this.state.selectedColor}\n onValueChange={() => console.log('value changed)}\n/>\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"animatedindex"},"animatedIndex"),(0,a.kt)("p",null,"The index of the item to animate at first render",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"colors"},"colors"),(0,a.kt)("p",null,"Array of colors to render in the palette",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string[] ")," "),(0,a.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,a.kt)("p",null,"Component's container style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"containerwidth"},"containerWidth"),(0,a.kt)("p",null,"The container margins",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"loop"},"loop"),(0,a.kt)("p",null,"Whether the colors pagination scrolls in a loop",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"numberofrows"},"numberOfRows"),(0,a.kt)("p",null,"The number of color rows from 2 to 5",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"onvaluechange"},"onValueChange"),(0,a.kt)("p",null,"Invoked once when value changes by selecting one of the swatches in the palette",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"(value: string, options: object) => void ")," "),(0,a.kt)("h3",{id:"style"},"style"),(0,a.kt)("p",null,"Component's style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"swatchstyle"},"swatchStyle"),(0,a.kt)("p",null,"Style to pass all the ColorSwatches in the palette",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"testid"},"testID"),(0,a.kt)("p",null,"The test id for e2e tests",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"usepagination"},"usePagination"),(0,a.kt)("p",null,"Whether to use pagination when number of colors exceeds the number of rows",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"The value of the selected swatch",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")))}f.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,l,c=o(e),u=1;u<arguments.length;u++){for(var p in i=Object(arguments[u]))n.call(i,p)&&(c[p]=i[p]);if(t){l=t(i);for(var s=0;s<l.length;s++)r.call(i,l[s])&&(c[l[s]]=i[l[s]])}}return c}},1535:function(e,t,n){var r=n(2525),o=60103,a=60106;var i=60109,l=60110,c=60112;var u=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),a=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),i=s("react.provider"),l=s("react.context"),c=s("react.forward_ref"),s("react.suspense"),u=s("react.memo"),p=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var k=v.prototype=new b;k.constructor=v,r(k,y.prototype),k.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:g.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+N(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=r+N(l=e[u],u);c+=S(l,t,n,p,i)}else if("function"==typeof(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=p.call(e),u=0;!(l=e.next()).done;)c+=S(l=l.value,t,n,p=r+N(l,u++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function T(){var e=E.current;if(null===e)throw Error(d(321));return e}},7378:function(e,t,n){n(1535)}}]);