(this["webpackJsonpauth-redux"]=this["webpackJsonpauth-redux"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(12),a=n.n(c),s=(n(24),n(25),n(8)),o=n(2),i=n(6),l=n(7),u=n(19),j=n(13),b={name:"",email:"",password:"",isLoggedIn:!1},d=Object(j.b)({name:"user",initialState:{currentUser:b,registeredUsers:[]},reducers:{register:function(e,t){e.registeredUsers=[].concat(Object(u.a)(e.registeredUsers),[t.payload])},login:function(e,t){e.currentUser=t.payload},logout:function(e){e.currentUser=b}}}),O=d.actions,g=O.register,h=O.login,f=O.logout,m=function(e){return e.currentUser},p=d.reducer,x=n(1);var v=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(i.a)(a,2),j=u[0],b=u[1],d=Object(o.f)(),O=Object(l.b)(),g=Object(l.c)((function(e){return e.registeredUsers}));return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Login Page"}),Object(x.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=g.find((function(e){return e.email===n&&e.password===j}));n&&j?t?(console.log("user credentials match"),O(h({name:t.name,email:n,password:j,isLoggedIn:!0})),d("/home")):alert("User credentials are invalid"):alert("Please fill in all fields")}(e)},children:[Object(x.jsx)("input",{name:"email",type:"email",autoFocus:!0,placeholder:"Email",value:n,onChange:function(e){return c(e.target.value)}}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:j,onChange:function(e){return b(e.target.value)}}),Object(x.jsx)("button",{type:"submit",children:"Login"})]}),Object(x.jsxs)("p",{children:["Don't have an account?",Object(x.jsx)(s.b,{to:"/register",children:"Sign up here"})]})]})};var w=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(i.a)(a,2),j=u[0],b=u[1],d=Object(r.useState)(""),O=Object(i.a)(d,2),h=O[0],f=O[1],m=Object(o.f)(),p=Object(l.c)((function(e){return e.registeredUsers})),v=Object(l.b)();return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Registration Page"}),Object(x.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(n,j,h),n&&j&&h?p.find((function(e){return e.email===j}))?alert("Email has been registered before"):(v(g({name:n,email:j,password:h,key:Date.now()})),alert("User ".concat(n," successfully created. Please Login")),console.log(p),m("/")):alert("Please fill in all fields")}(e)},children:[Object(x.jsx)("label",{htmlFor:"name"}),Object(x.jsx)("input",{name:"name",type:"text",autoFocus:!0,placeholder:"Name",onChange:function(e){return c(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"email"}),Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",onChange:function(e){return b(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"password"}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){return f(e.target.value)}}),Object(x.jsx)("button",{type:"submit",children:"Register"})]}),Object(x.jsxs)("p",{children:["Already have an account?",Object(x.jsx)(s.b,{to:"/",children:"Login here"})]})]})};var y=function(){var e=Object(l.c)(m);console.log(e);var t=Object(l.c)((function(e){return e.currentUser})),n=Object(l.b)(),c=Object(o.f)();return Object(r.useEffect)((function(){t.isLoggedIn||(console.log("Logging you out"),alert("User not logged in. Redirecting to Login page"),c("/"))})),Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:["Welcome ",Object(x.jsx)("span",{children:e.name})]}),Object(x.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),n(f())}(e)},children:"Logout"})]})};var U=function(){return Object(x.jsx)(s.a,{className:"App",children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{path:"/",element:Object(x.jsx)(v,{})}),Object(x.jsx)(o.a,{path:"/register",element:Object(x.jsx)(w,{})}),Object(x.jsx)(o.a,{path:"/home",element:Object(x.jsx)(y,{})})]})})},L=n(17),S=n(9),C=n(18),P={key:"root",version:1,storage:n.n(C).a},k=Object(S.g)(P,p),D=Object(j.a)({reducer:k,middleware:function(e){return e({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})}}),E=Object(S.h)(D);a.a.render(Object(x.jsx)(l.a,{store:D,children:Object(x.jsx)(L.a,{loading:null,persistor:E,children:Object(x.jsx)(U,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b5068515.chunk.js.map