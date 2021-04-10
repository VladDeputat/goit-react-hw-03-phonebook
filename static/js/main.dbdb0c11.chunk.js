(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={subtitle:"Filter_subtitle__1-BRU"}},13:function(t,e,n){t.exports={container:"App_container__5rBbB"}},19:function(t,e,n){},2:function(t,e,n){t.exports={contactsBox:"Contacts_contactsBox__dyESU",listItem:"Contacts_listItem__2nMtH",btn:"Contacts_btn__3WrbT"}},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),r=n.n(o),s=(n(19),n(4)),i=n(14),l=n(5),u=n(6),m=n(8),b=n(7),d=n(22),h=n(2),j=n.n(h),f=n(0),p=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(f.jsxs)("li",{className:j.a.listItem,children:[n,": ",a,Object(f.jsx)("button",{type:"button",className:j.a.btn,onClick:function(){return c(e)},children:"Delete"})]})},O=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("div",{className:j.a.contactsBox,children:Object(f.jsx)("ul",{children:e.map((function(t){return Object(f.jsx)(p,{id:t.id,name:t.name,number:t.number,onDeleteContact:n},t.id)}))})})},C=n(12),x=n.n(C),v=Object(d.a)(),g=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{htmlFor:v,children:[Object(f.jsx)("p",{className:x.a.subtitle,children:"Find contacts by name"}),Object(f.jsx)("input",{id:v,type:"text",name:"filter",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",required:!0,onChange:n})]})},_=n(3),y=n.n(_),S=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t.nameFormId=Object(d.a)(),t.numberFormId=Object(d.a)(),t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.onHandleSubmit,className:y.a.form,children:[Object(f.jsxs)("label",{htmlFor:this.nameFormId,children:[Object(f.jsx)("p",{className:y.a.subtitle,children:"Name"}),Object(f.jsx)("input",{id:this.nameFormId,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"off",required:!0,onChange:this.onHandleChange})]}),Object(f.jsxs)("label",{htmlFor:this.numberFormId,children:[Object(f.jsx)("p",{className:y.a.subtitle,children:"Number"}),Object(f.jsx)("input",{id:this.numberFormId,type:"tel",name:"number",value:this.state.number,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",onChange:this.onHandleChange})]}),Object(f.jsx)("button",{type:"submit",className:y.a.btn,children:"Add contact"})]})}}]),n}(a.Component),F=n(13),A=n.n(F),N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert(e.name+" is already in contacts."):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{id:Object(d.a)(),name:e.name,number:e.number}])}}))},t.onFilterChange=function(e){t.setState(Object(s.a)({},e.target.name,e.target.value))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(t,e){var n=JSON.parse(localStorage.getItem("contacts"));n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));return Object(f.jsxs)("div",{className:A.a.container,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(S,{onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(g,{value:this.state.filter,onChange:this.onFilterChange}),Object(f.jsx)(O,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__1Ws1y",subtitle:"ContactForm_subtitle__i4exj",btn:"ContactForm_btn__1y-lK"}}},[[21,1,2]]]);
//# sourceMappingURL=main.dbdb0c11.chunk.js.map