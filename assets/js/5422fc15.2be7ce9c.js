/*! For license information please see 5422fc15.2be7ce9c.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7091],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6116:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(8168),a=(n(3696),n(5680));const o={index:6,path:"/foundation/testing",title:"Testing"},i="<div style=",s={unversionedId:"foundation/testing",id:"foundation/testing",isDocsHomePage:!1,title:"Testing",description:"Testing",source:"@site/../docs/foundation/testing.md",sourceDirName:"foundation",slug:"/foundation/testing",permalink:"/react-native-ui-lib/docs/foundation/testing",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/foundation/testing.md",tags:[],version:"current",frontMatter:{index:6,path:"/foundation/testing",title:"Testing"},sidebar:"tutorialSidebar",previous:{title:"ThemeManager",permalink:"/react-native-ui-lib/docs/foundation/theme-manager"},next:{title:"Text",permalink:"/react-native-ui-lib/docs/components/basic/Text"}},l=[{value:"How to use the testkits",id:"how-to-use-the-testkits",children:[{value:"Initializing the driver",id:"initializing-the-driver",children:[]},{value:"Example",id:"example",children:[]},{value:"Testing our flow",id:"testing-our-flow",children:[]}]}],u={toc:l},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:""}),(0,a.yg)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},(0,a.yg)("h1",null,"Testing"),(0,a.yg)("label",{style:{backgroundColor:"#5848ff",color:"#ffffff",borderRadius:"5px",padding:"5px 10px",margin:"10px",display:"flex",alignItems:"center"}},(0,a.yg)("span",null,"Experimental"))),(0,a.yg)("p",null,"Testkits allows us to test components without knowing the internal implementation, making it easier to test and reduce over head from migrations and changes in implementation. For example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Changing the input of a ",(0,a.yg)("inlineCode",{parentName:"li"},"TextField")," component can be done using the driver's ",(0,a.yg)("inlineCode",{parentName:"li"},"changeText")),(0,a.yg)("li",{parentName:"ul"},"Pressing a button could be achieved using the Button driver's press function.")),(0,a.yg)("h2",{id:"how-to-use-the-testkits"},"How to use the testkits"),(0,a.yg)("h3",{id:"initializing-the-driver"},"Initializing the driver"),(0,a.yg)("p",null,"In order to initialize a test driver you pass it the renderTree and the component's testId as an object."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"Suppose we have a form that takes a ",(0,a.yg)("inlineCode",{parentName:"p"},"first name"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"last name")," and an ",(0,a.yg)("inlineCode",{parentName:"p"},"address")," and we want to test the submitting of this form. Our form component will look something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"import {Button, TextField, View} from 'react-native-ui-lib/testkit';\n\ntype OnSubmitHandler = (firstName: string, lastName: string, address: string) => void;\nconst MyForm = (props: {onSubmit: OnSubmitHandler}) => {\n  const {onSubmit} = props;\n  const [firstName, setFirstName] = useState('');\n  const [lastName, setLastName] = useState('');\n  const [address, setAddress] = useState('');\n  return (\n    <View>\n      <TextField label=\"First name\" onChangeText={(value) => setFirstName(value)} value={firstName}/>\n      <TextField label=\"Last name\" onChangeText={(value) => setLastName(value)} value={lastName}/>\n      <TextField label=\"Address\" onChangeText={(value) => setAddress(value)} value={address}/>\n      <Button label=\"Submit\" onPress={() => onSubmit(firstName, lastName, address)}/>\n    </View>\n  );\n};\n")),(0,a.yg)("h3",{id:"testing-our-flow"},"Testing our flow"),(0,a.yg)("h4",{id:"in-order-to-test-our-flow-we-would-do-the-following-steps"},"In order to test our flow we would do the following steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Import the TextField and Button driver from UI-LIB's testkit")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"import {TextFieldDriver, ButtonDriver} from 'react-native-ui-lib/testkit';\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"render our test case")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"const renderTree = render(<MyForm onSubmit={onSubmit}/>);\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Initialize our drivers for the TextFields and submit button")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"const firstNameDriver = TextFieldDriver({renderTree, testID: 'firstName'});\nconst lastNameDriver = TextFieldDriver({renderTree, testID: 'lastName'});\nconst addressDriver = TextFieldDriver({renderTree, testID: 'address'});\nconst submitBtnDriver = ButtonDriver({renderTree, testID: 'submit'});\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Change the text of the fields and submit the form.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"firstNameDriver.changeText('Musa');\nlastNameDriver.changeText('The Man');\naddressDriver.changeText('Yunitzman 5');\nsubmitBtnDriver.press();\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"Check that the correct values were passed to the submit handler")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"expect(onSubmit).toHaveBeenCalledWith('Musa', 'The Man', 'Yunitzman 5');\n")),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Full test"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"describe('My Form', () => {\n  it('should submit MyForm with Musa The Man, Yunitzman 5', () => {\n    const onSubmit = jest.fn();\n    const renderTree = render(<MyForm onSubmit={onSubmit}/>);\n    const firstNameDriver = TextFieldDriver({renderTree, testID: 'firstName'});\n    const lastNameDriver = TextFieldDriver({renderTree, testID: 'lastName'});\n    const addressDriver = TextFieldDriver({renderTree, testID: 'address'});\n    const submitBtnDriver = ButtonDriver({renderTree, testID: 'submit'});\n    firstNameDriver.changeText('Musa');\n    lastNameDriver.changeText('The Man');\n    addressDriver.changeText('Yunitzman 5');\n    submitBtnDriver.press();\n    expect(onSubmit).toHaveBeenCalledWith('Musa', 'The Man', 'Yunitzman 5');\n  });\n});\n"))))}p.isMDXComponent=!0},4403:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var w=b.prototype=new v;w.constructor=b,y(w,h.prototype),w.isPureReactComponent=!0;var T=Array.isArray,x=Object.prototype.hasOwnProperty,N={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,r){var a,o={},i=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:n,type:e,key:i,ref:s,props:o,_owner:N.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var k=/\/+/g;function O(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function F(e,t,a,o,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return i=i(l=e),e=""===o?"."+O(l,0):o,T(i)?(a="",null!=e&&(a=e.replace(k,"$&/")+"/"),F(i,t,a,"",(function(e){return e}))):null!=i&&(j(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(k,"$&/")+"/")+e)),t.push(i)),1;if(l=0,o=""===o?".":o+":",T(e))for(var u=0;u<e.length;u++){var c=o+O(s=e[u],u);l+=F(s,t,a,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=F(s=s.value,t,a,c=o+O(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function _(e,t,n){if(null==e)return e;var r=[],a=0;return F(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},M={transition:null}},3696:(e,t,n)=>{n(4403)}}]);