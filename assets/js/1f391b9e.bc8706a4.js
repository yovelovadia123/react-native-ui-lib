"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[6061],{3933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(6540),c=n(53),a=n(3400),o=n(5680),l=n(5582),s=n(1461),i=n(9777);const m="mdxPageWrapper_eQvw";const u=function(e){const{content:t}=e,{frontMatter:n,metadata:u}=t,{title:d,description:f,wrapperClassName:p,hide_table_of_contents:h}=n,{permalink:v}=u;return r.createElement(a.A,{title:d,description:f,permalink:v,wrapperClassName:p??i.GN.wrapper.mdxPages,pageClassName:i.GN.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,c.A)("row",m)},r.createElement("div",{className:(0,c.A)("col",!h&&"col--8")},r.createElement(o.xA,{components:l.A},r.createElement(t,null))),!h&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(s.A,{toc:t.toc})))))}},1461:(e,t,n)=>{n.d(t,{m:()=>f,A:()=>p});var r=n(6540),c=n(53),a=n(9777);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((e=>o(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:n[n.indexOf(r)-1]??null}return n[n.length-1]}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.pN)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((()=>{const{linkClassName:r,linkActiveClassName:c}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=l({anchorTopOffset:n.current}),o=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current?.classList.remove(c),e.classList.add(c),t.current=e):e.classList.remove(c)}(e,e===o)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){let{toc:t,isChild:n}=e;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children}))))):null}const p=function(e){let{toc:t}=e;return i(d),r.createElement("div",{className:(0,c.A)(m,"thin-scrollbar")},r.createElement(f,{toc:t}))}}}]);