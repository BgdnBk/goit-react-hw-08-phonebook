(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[6],{108:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(38),l=t(39),o=t(41),c=t(40),i=t(0),r=t(8),b=t(17),h=t(15),u=t.n(h),m=t(1),p=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,l=t.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(m.jsxs)("div",{className:u.a.conteiner,children:[Object(m.jsx)("h1",{children:"\u041b\u043e\u0433\u0438\u043d "}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(m.jsxs)("label",{className:u.a.labelName,children:["Email",Object(m.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange,className:u.a.label})]}),Object(m.jsxs)("label",{className:u.a.labelName,children:["Password",Object(m.jsx)("input",{type:"password",name:"password",value:t,onChange:this.handleChange,className:u.a.label})]}),Object(m.jsx)("button",{type:"submit",className:u.a.buttonLogin,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}}]),t}(i.Component),j={onLogin:b.a.login};a.default=Object(r.b)(null,j)(p)}}]);
//# sourceMappingURL=6.722ddd58.chunk.js.map