(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{30:function(n,e,t){},32:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,d,u,l=t(0),j=t.n(l),m=t(20),b=t.n(m),h=(t(30),t(7)),p=t.n(h),f=t(21),O=t(9),g=(t(32),t(3)),x=t(4),v=x.a.div(a||(a=Object(g.a)(["\n    display: flex;\n    flex-direction: column;\n    background: #95dada;\n    width: 265px;\n    padding: 1em;\n    border-radius: 1em;\n    margin: 0 auto;\n\n    &:hover {\n        transform: scale(1.05);\n        transition: 0.3s ease-in-out;\n    }\n"]))),w=x.a.img(r||(r=Object(g.a)(["\n    height: 180px;\n    width: 180px;\n    display: inline-block;\n    margin: 0 auto;\n"]))),y=x.a.h2(c||(c=Object(g.a)(["\n    font-size: 1.5rem;\n    margin-bottom: 0;\n"]))),C=x.a.p(i||(i=Object(g.a)(["\n    margin-bottom: 0;\n  \n"]))),k=x.a.p(o||(o=Object(g.a)(["\n    font-size: 1rem;\n\n"]))),z=t(1),F=function(n){var e=n.user;return Object(z.jsxs)(v,{children:[Object(z.jsx)(w,{src:"https://robohash.org/".concat(e.id,"set=set2/?size=180x180"),alt:"monster"}),Object(z.jsx)(y,{children:e.name}),Object(z.jsxs)(C,{children:["Nickname: ",e.username]}),Object(z.jsx)(k,{children:e.email})]},e.id)},S=x.a.div(s||(s=Object(g.a)(["\n    width: 85vw;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));\n    grid-gap: 2em;\n    padding-bottom: 2.5em;\n"]))),B=function(n){var e=n.users;return Object(z.jsx)(S,{children:e.map((function(n){return Object(z.jsx)(F,{user:n},n.id)}))})},I=t(25),L=t.n(I),N=x.a.input(d||(d=Object(g.a)(["\n    margin: 2em;\n    padding: .5rem;\n    font-size: 1.3rem;\n"]))),E=function(n){var e=n.placeholder,t=n.handleChange;return Object(z.jsx)("div",{children:Object(z.jsx)(N,{type:"search",placeholder:e,onChange:t})})},A=x.a.h1(u||(u=Object(g.a)(["\n    font-size: 3rem;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    color: #95dada;\n    margin-bottom: 0;\n    \n"]))),D=function(){return Object(z.jsx)(A,{children:"ROBOFRIENDS"})};var J=function(){var n=Object(l.useState)([]),e=Object(O.a)(n,2),t=e[0],a=e[1],r=Object(l.useState)(""),c=Object(O.a)(r,2),i=c[0],o=c[1];Object(l.useEffect)((function(){(function(){var n=Object(f.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L()("https://jsonplaceholder.typicode.com/users");case 2:e=n.sent,console.log(e.data),a(e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var s=t.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())}));return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(D,{}),Object(z.jsx)(E,{placeholder:"search robots",handleChange:function(n){o(n.target.value)}}),Object(z.jsx)(B,{users:s})]})},P=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};b.a.render(Object(z.jsx)(j.a.StrictMode,{children:Object(z.jsx)(J,{})}),document.getElementById("root")),P()}},[[52,1,2]]]);
//# sourceMappingURL=main.0f9ca4e6.chunk.js.map