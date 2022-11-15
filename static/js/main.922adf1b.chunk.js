(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c(5),s=(c(18),c(19),c(4)),r=c(2),j=c(1),i=c(6),l=c.n(i),o=(c(20),c(0)),b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},d=function(e){var t=e.people,c=e.isPeopleLoaded,a=Object(j.useState)(""),r=Object(s.a)(a,2),i=r[0],d=r[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("table",{"data-cy":"peopleTable",className:" table is-striped is-hoverable is-narrow is-fullwidth ",children:c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=e.name,c=e.sex,a=e.born,s=e.died,r=e.motherName,j=e.fatherName,b=e.slug;return Object(o.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":i===b}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(n.b,{to:"/people/".concat(b),className:l()({"has-text-danger":"f"===c}),onClick:function(){return d(b)},children:t})}),Object(o.jsx)("td",{children:c}),Object(o.jsx)("td",{children:a}),Object(o.jsx)("td",{children:s}),Object(o.jsx)("td",{className:l()({"has-text-danger":"f"===c}),children:r||"-"}),Object(o.jsx)("td",{className:l()({"has-text-danger":"f"===c}),children:j||"-"})]},b)}))})]}):Object(o.jsx)(b,{})})})},h=function(e){var t=e.to,c=e.text;return Object(o.jsx)(n.c,{className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},x=function(){return Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})};c(22);function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(){var e=Object(j.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],n=Object(j.useState)(!1),i=Object(s.a)(n,2),l=i[0],b=i[1],p=Object(j.useState)(!1),u=Object(s.a)(p,2),m=u[0],f=u[1];return Object(j.useEffect)((function(){O().then((function(e){a(e),b(!0)})).catch((function(){f(!0),b(!0)}))}),[]),Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(h,{to:"/",text:"Home"}),Object(o.jsx)(h,{to:"people",text:"People"})]})})}),Object(o.jsx)("main",{className:"section",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsxs)(r.b,{path:"/people",element:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)(d,{people:c,isPeopleLoaded:l})]}),children:[Object(o.jsx)(r.b,{index:!0}),Object(o.jsx)(r.b,{path:":userId"})]}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})}),Object(o.jsx)(r.b,{path:"home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})})]}),m&&Object(o.jsx)(x,{})]})})]})};Object(a.createRoot)(document.getElementById("root")).render(Object(o.jsx)(n.a,{children:Object(o.jsx)(p,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.922adf1b.chunk.js.map