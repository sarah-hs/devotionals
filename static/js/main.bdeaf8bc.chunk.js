(this.webpackJsonpdevotionals=this.webpackJsonpdevotionals||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),o=n.n(s),a=n(13),i=n.n(a),l=(n(20),n(3)),r=(n(21),n(14)),d=n.n(r);function j(e){var t=e.data;return Object(c.jsxs)("div",{className:"devotional",children:[Object(c.jsx)("h1",{className:"title",children:t.title}),Object(c.jsx)("p",{className:"date",children:t.date}),Object(c.jsx)("p",{className:"vers",children:t.vers}),Object(c.jsx)("div",{className:"content",children:t.content.map((function(e,t){return Object(c.jsx)("p",{children:e},t)}))})]})}function u(){return Object(c.jsx)("div",{id:"container",children:Object(c.jsxs)("ul",{class:"segmented-control",children:[Object(c.jsxs)("li",{class:"segmented-control__item",children:[Object(c.jsx)("input",{class:"segmented-control__input",type:"radio",value:"1",name:"option",id:"option-1",onClick:function(){document.getElementsByClassName("devotional")[0].style.background="white",document.getElementsByClassName("devotional")[0].style.color="black"},checked:!0}),Object(c.jsx)("label",{class:"segmented-control__label",for:"option-1",children:"Light"})]}),Object(c.jsxs)("li",{class:"segmented-control__item",children:[Object(c.jsx)("input",{class:"segmented-control__input",type:"radio",value:"2",name:"option",id:"option-2",onClick:function(){document.getElementsByClassName("devotional")[0].style.background="black",document.getElementsByClassName("devotional")[0].style.color="white"}}),Object(c.jsx)("label",{class:"segmented-control__label",for:"option-2",children:"Dark"})]})]})})}var b=function(){var e=Object(s.useState)(void 0),t=Object(l.a)(e,2),n=t[0],o=t[1],a=Object(s.useState)(!1),i=Object(l.a)(a,2),r=i[0],b=i[1],m=Object(s.useState)(void 0),h=Object(l.a)(m,2),p=h[0],O=h[1];return Object(s.useEffect)((function(){d.a.get("https://devotionals-api.herokuapp.com/api/v1/devotionals/today").then((function(e){var t=e.data;return o(t[0])})).catch((function(e){return O(e)})).finally((function(){return b(!0)}))}),[]),p?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"An error ocurred"}),Object(c.jsxs)("p",{children:["Error: ",p.message]})]}):r?Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(j,{data:n})]}):Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("h1",{className:"loading",children:"Loading..."})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),m()}},[[39,1,2]]]);
//# sourceMappingURL=main.bdeaf8bc.chunk.js.map