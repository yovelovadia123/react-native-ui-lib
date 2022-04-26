/*! For license information please see f457112f.9a176924.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[353],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},891:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7378),n(3905)),a=["components"],l={id:"ActionSheet",title:"ActionSheet",sidebar_label:"ActionSheet"},s=void 0,c={unversionedId:"components/overlays/ActionSheet",id:"components/overlays/ActionSheet",isDocsHomePage:!1,title:"ActionSheet",description:"Cross platform Action Sheet, with a support for native iOS solutions",source:"@site/../docs/components/overlays/ActionSheet.md",sourceDirName:"components/overlays",slug:"/components/overlays/ActionSheet",permalink:"/react-native-ui-lib/docs/components/overlays/ActionSheet",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/overlays/ActionSheet.md",tags:[],version:"current",frontMatter:{id:"ActionSheet",title:"ActionSheet",sidebar_label:"ActionSheet"},sidebar:"tutorialSidebar",previous:{title:"TextField",permalink:"/react-native-ui-lib/docs/components/form/TextField"},next:{title:"Dialog",permalink:"/react-native-ui-lib/docs/components/overlays/Dialog"}},p=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"cancelButtonIndex",id:"cancelbuttonindex",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"destructiveButtonIndex",id:"destructivebuttonindex",children:[]},{value:"dialogStyle",id:"dialogstyle",children:[]},{value:"message",id:"message",children:[]},{value:"onDismiss",id:"ondismiss",children:[]},{value:"onModalDismissed",id:"onmodaldismissed",children:[]},{value:"options",id:"options",children:[]},{value:"optionsStyle",id:"optionsstyle",children:[]},{value:"renderAction",id:"renderaction",children:[]},{value:"renderTitle",id:"rendertitle",children:[]},{value:"showCancelButton",id:"showcancelbutton",children:[]},{value:"testID",id:"testid",children:[]},{value:"title",id:"title",children:[]},{value:"useNativeIOS",id:"usenativeios",children:[]},{value:"useSafeArea",id:"usesafearea",children:[]},{value:"visible",id:"visible",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cross platform Action Sheet, with a support for native iOS solutions",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ActionSheetScreen.tsx"},"(code example)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This component extends ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/components/overlays/Dialog"},"Dialog"))," props."))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://media.giphy.com/media/l0HUpXOR6RqB2ct5S/giphy.gif"})),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<ActionSheet\n title={'Title'}\n message={'Message goes here'}\n cancelButtonIndex={3}\n destructiveButtonIndex={0}\n options={[\n  {label: '', onPress: },\n  {label: '', onPress: },\n  {label: 'Cancel', onPress: () => console.log('cancel')}\n ]}\n/>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"cancelbuttonindex"},"cancelButtonIndex"),(0,i.kt)("p",null,"Index of the option represents the cancel action (to be displayed as the separated bottom bold button)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"Add or override style of the action sheet (wraps the title and actions)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"destructivebuttonindex"},"destructiveButtonIndex"),(0,i.kt)("p",null,"Index of the option represents the destructive action (will display red text. Usually used for delete or abort actions)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"dialogstyle"},"dialogStyle"),(0,i.kt)("p",null,"Add or override style of the dialog wrapping the action sheet",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"message"},"message"),(0,i.kt)("p",null,"Message of the action sheet",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"ondismiss"},"onDismiss"),(0,i.kt)("p",null,"Called when dismissing the action sheet (usually used for setting 'visible' prop to false)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DialogProps['onDismiss'] ")," "),(0,i.kt)("h3",{id:"onmodaldismissed"},"onModalDismissed"),(0,i.kt)("p",null,"Called once the modal has been dismissed",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DialogProps['onDialogDismissed'] ")," "),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"List of options for the action sheet, follows the Button prop types (supply 'label' string and 'onPress' function)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Array<ButtonProps> ")," "),(0,i.kt)("h3",{id:"optionsstyle"},"optionsStyle"),(0,i.kt)("p",null,"Add or override style of the options list",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"renderaction"},"renderAction"),(0,i.kt)("p",null,"Render custom action",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(\noption: ButtonProps, \nindex: number, \nonOptionPress: ActionSheetOnOptionPress\n) => JSX.Element")," "),(0,i.kt)("h3",{id:"rendertitle"},"renderTitle"),(0,i.kt)("p",null,"Render custom title",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => JSX.Element ")," "),(0,i.kt)("h3",{id:"showcancelbutton"},"showCancelButton"),(0,i.kt)("p",null,"When passed (only with useNativeIOS), will display a cancel button at the bottom (overrides cancelButtonIndex)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"The test id for e2e tests",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"title"},"title"),(0,i.kt)("p",null,"Title of the action sheet",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"usenativeios"},"useNativeIOS"),(0,i.kt)("p",null,"Should use the native action sheet for iOS",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"usesafearea"},"useSafeArea"),(0,i.kt)("p",null,"In iOS, use safe area, in case component attached to the bottom",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"visible"},"visible"),(0,i.kt)("p",null,"Whether to show the action sheet or not",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")))}d.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,l,s=o(e),c=1;c<arguments.length;c++){for(var p in a=Object(arguments[c]))n.call(a,p)&&(s[p]=a[p]);if(t){l=t(a);for(var u=0;u<l.length;u++)r.call(a,l[u])&&(s[l[u]]=a[l[u]])}}return s}},1535:function(e,t,n){var r=n(2525),o=60103,i=60106;var a=60109,l=60110,s=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),a=u("react.provider"),l=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var k=b.prototype=new v;k.constructor=b,r(k,y.prototype),k.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,i={},a=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!S.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var c=Array(s),p=0;p<s;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+x(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=r+x(l=e[c],c);s+=C(l,t,n,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(l=e.next()).done;)s+=C(l=l.value,t,n,p=r+x(l,c++),a);else if("object"===l)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function A(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function _(){var e=D.current;if(null===e)throw Error(f(321));return e}},7378:function(e,t,n){n(1535)}}]);