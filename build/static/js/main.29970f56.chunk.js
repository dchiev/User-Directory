(this.webpackJsonpuserdir=this.webpackJsonpuserdir||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var s=c(0),j=c(2),n=c.n(j),r=c(12),a=c.n(r),b=(c(23),c(24),c(13)),d=c(14),l=c(17),i=c(16);var O=function(e){return Object(s.jsxs)("table",{class:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col",children:"First"}),Object(s.jsx)("th",{scope:"col",children:"Last"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"City"}),Object(s.jsx)("th",{scope:"col",children:"Image"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"1"}),Object(s.jsx)("td",{children:e.results[0].name.first}),Object(s.jsx)("td",{children:e.results[0].name.last}),Object(s.jsx)("td",{children:e.results[0].email}),Object(s.jsx)("td",{children:e.results[0].location.city}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.results[0].picture.medium,alt:""})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"2"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"3"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{children:" "}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"4"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"5"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"6"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"7"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"8"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"9"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:"10"}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{}),Object(s.jsx)("td",{})]})]})]})};var x=function(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:"Navbar"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#",children:"Features"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link",href:"#",children:"Pricing"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})})]})})]})})},h=c(15),o=c.n(h),u=function(){return o.a.get("https://randomuser.me/api/?results=10&nat=us")},v=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(b.a)(this,c);for(var s=arguments.length,j=new Array(s),n=0;n<s;n++)j[n]=arguments[n];return(e=t.call.apply(t,[this].concat(j))).state={employees:[]},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;u().then((function(t){return e.setState({employees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)(O,{results:this.state.employees})]})}}]),c}(j.Component);var p=function(){return Object(s.jsx)(v,{})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,s=t.getFID,j=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),j(e),n(e),r(e)}))};c(43);a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.29970f56.chunk.js.map