(this["webpackJsonppwa-app"]=this["webpackJsonppwa-app"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),s=n(14),j=n.n(s),i=(n(22),n(9)),a=n(2),o=(n(23),n(1));var u=function(){return Object(o.jsx)("div",{children:"ABOUT PAGE Is HERE"})};var b=function(){return Object(o.jsx)("div",{children:"HOME PAGE"})},h=n(17);var O=function(){var t=Object(c.useState)(null),e=Object(h.a)(t,2),n=e[0],r=e[1];return Object(c.useEffect)((function(){fetch("/dummy.json").then((function(t){return t.json()})).then((function(t){return r(t)}))}),[]),Object(o.jsx)("div",{children:JSON.stringify(n)})};var d=function(){return Object(o.jsx)(i.a,{basename:"pwa",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("nav",{children:[Object(o.jsx)(i.b,{to:"/",children:"Home"}),Object(o.jsx)(i.b,{to:"about",children:"ABOUT"}),Object(o.jsx)(i.b,{to:"tasks",children:"TASKS"})]}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"/tasks",children:Object(o.jsx)(O,{})}),Object(o.jsx)(a.a,{path:"/about",children:Object(o.jsx)(u,{})}),Object(o.jsx)(a.a,{path:"/",children:Object(o.jsx)(b,{})})]})]})})};j.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),function(){var t="".concat("/pwa","/sw.js");navigator.serviceWorker.register(t).then((function(t){return console.log("SW IS REGISTED: ",t)})).catch((function(t){return console.log("ERR: ",t)}))}()}},[[30,1,2]]]);
//# sourceMappingURL=main.996bb770.chunk.js.map