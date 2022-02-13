/*! For license information please see 9f8175e8.a518bbeb.js.LICENSE.txt */
"use strict";(self.webpackChunkdocuilib=self.webpackChunkdocuilib||[]).push([[8994],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6216:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7378),r(3905)),o=["components"],l={id:"DateTimePicker",title:"DateTimePicker",sidebar_label:"DateTimePicker"},c=void 0,p={unversionedId:"components/form/DateTimePicker",id:"components/form/DateTimePicker",isDocsHomePage:!1,title:"DateTimePicker",description:"Date and Time Picker Component that wraps RNDateTimePicker for date and time modes. See//github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker",source:"@site/../docs/components/form/DateTimePicker.md",sourceDirName:"components/form",slug:"/components/form/DateTimePicker",permalink:"/react-native-ui-lib/docs/components/form/DateTimePicker",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/DateTimePicker.md",tags:[],version:"current",frontMatter:{id:"DateTimePicker",title:"DateTimePicker",sidebar_label:"DateTimePicker"},sidebar:"tutorialSidebar",previous:{title:"ColorSwatch",permalink:"/react-native-ui-lib/docs/components/form/ColorSwatch"},next:{title:"MaskedInput",permalink:"/react-native-ui-lib/docs/components/form/MaskedInput"}},u=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"dateFormat",id:"dateformat",children:[]},{value:"dateFormatter",id:"dateformatter",children:[]},{value:"dialogProps",id:"dialogprops",children:[]},{value:"headerStyle",id:"headerstyle",children:[]},{value:"is24Hour",id:"is24hour",children:[]},{value:"locale",id:"locale",children:[]},{value:"maximumDate",id:"maximumdate",children:[]},{value:"minimumDate",id:"minimumdate",children:[]},{value:"minuteInterval",id:"minuteinterval",children:[]},{value:"mode",id:"mode",children:[]},{value:"onChange",id:"onchange",children:[]},{value:"renderInput",id:"renderinput",children:[]},{value:"themeVariant",id:"themevariant",children:[]},{value:"timeFormat",id:"timeformat",children:[]},{value:"timeFormatter",id:"timeformatter",children:[]},{value:"timeZoneOffsetInMinutes",id:"timezoneoffsetinminutes",children:[]},{value:"value",id:"value",children:[]}]}],m={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Date and Time Picker Component that wraps RNDateTimePicker for date and time modes. See: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker"},"https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/DateTimePickerScreen.js"},"(code example)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This component extends ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/wix/react-native-ui-lib/blob/master/src/components/textField/index.tsx"},"TextField"))," props."))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/DateTimePicker/DateTimePicker_iOS.gif?raw=true, https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/DateTimePicker/DateTimePicker_Android.gif?raw=true"})),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<DateTimePicker title={'Select time'} placeholder={'Placeholder'} mode={'time'}/>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"dateformat"},"dateFormat"),(0,i.kt)("p",null,"The date format for the text display",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"dateformatter"},"dateFormatter"),(0,i.kt)("p",null,"A callback function to format date",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => Date ")," "),(0,i.kt)("h3",{id:"dialogprops"},"dialogProps"),(0,i.kt)("p",null,"Props to pass the Dialog component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DialogProps ")," "),(0,i.kt)("h3",{id:"headerstyle"},"headerStyle"),(0,i.kt)("p",null,"Style to apply to the iOS dialog header",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"is24hour"},"is24Hour"),(0,i.kt)("p",null,"Allows changing of the time picker to a 24 hour format",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"locale"},"locale"),(0,i.kt)("p",null,"Allows changing of the locale of the component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"maximumdate"},"maximumDate"),(0,i.kt)("p",null,"The maximum date or time value to use",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Date ")," "),(0,i.kt)("h3",{id:"minimumdate"},"minimumDate"),(0,i.kt)("p",null,"The minimum date or time value to use",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Date ")," "),(0,i.kt)("h3",{id:"minuteinterval"},"minuteInterval"),(0,i.kt)("p",null,"The interval at which minutes can be selected. Possible values are: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"mode"},"mode"),(0,i.kt)("p",null,"The type of picker to display ('date' or 'time')",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"DATE | TIME ")," "),(0,i.kt)("h3",{id:"onchange"},"onChange"),(0,i.kt)("p",null,"Called when the date/time change",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => Date ")," "),(0,i.kt)("h3",{id:"renderinput"},"renderInput"),(0,i.kt)("p",null,"Render custom input",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,i.kt)("h3",{id:"themevariant"},"themeVariant"),(0,i.kt)("p",null,"Override system theme variant (dark or light mode) used by the date picker",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"LIGHT | DARK ")," "),(0,i.kt)("h3",{id:"timeformat"},"timeFormat"),(0,i.kt)("p",null,"The time format for the text display",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"timeformatter"},"timeFormatter"),(0,i.kt)("p",null,"A callback function to format time",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"() => Date ")," "),(0,i.kt)("h3",{id:"timezoneoffsetinminutes"},"timeZoneOffsetInMinutes"),(0,i.kt)("p",null,"Allows changing of the timeZone of the date picker. By default it uses the device's time zone",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"value"},"value"),(0,i.kt)("p",null,"The initial value to set the picker to",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Date ")))}s.isMDXComponent=!0},2525:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,l,c=a(e),p=1;p<arguments.length;p++){for(var u in o=Object(arguments[p]))r.call(o,u)&&(c[u]=o[u]);if(t){l=t(o);for(var m=0;m<l.length;m++)n.call(o,l[m])&&(c[l[m]]=o[l[m]])}}return c}},1535:function(e,t,r){var n=r(2525),a=60103,i=60106;var o=60109,l=60110,c=60112;var p=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var m=Symbol.for;a=m("react.element"),i=m("react.portal"),m("react.fragment"),m("react.strict_mode"),m("react.profiler"),o=m("react.provider"),l=m("react.context"),c=m("react.forward_ref"),m("react.suspense"),p=m("react.memo"),u=m("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function k(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||f}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=k.prototype;var y=b.prototype=new v;y.constructor=b,n(y,k.prototype),y.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,i={},o=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,n)&&!N.hasOwnProperty(n)&&(i[n]=t[n]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var p=Array(c),u=0;u<c;u++)p[u]=arguments[u+2];i.children=p}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:a,type:e,key:o,ref:l,props:i,_owner:g.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var D=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,r,n,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return o=o(c=e),e=""===n?"."+j(c,0):n,Array.isArray(o)?(r="",null!=e&&(r=e.replace(D,"$&/")+"/"),T(o,t,r,"",(function(e){return e}))):null!=o&&(O(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(D,"$&/")+"/")+e)),t.push(o)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var u=n+j(l=e[p],p);c+=T(l,t,r,u,o)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),p=0;!(l=e.next()).done;)c+=T(l=l.value,t,r,u=n+j(l,p++),o);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,r){if(null==e)return e;var n=[],a=0;return T(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function _(){var e=S.current;if(null===e)throw Error(d(321));return e}},7378:function(e,t,r){r(1535)}}]);