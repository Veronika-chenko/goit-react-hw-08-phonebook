"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,i,o,a,d,s,l,c,u=r(9434),m=function(n){return n.contacts.isLoading},p=function(n){return n.filter},x=function(n){var e=function(n){return n.contacts.items}(n),r=p(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))},h=r(885),f=r(2791),b=r(3634),v=r(168),g=r(6444),j=g.ZP.li(t||(t=(0,v.Z)(["\n    padding: 4px 8px;\n    display: inline-flex;\n"]))),Z=g.ZP.button(i||(i=(0,v.Z)(["\n    margin-left: 8px;\n    padding: 4px 8px;\n\n    color: #000000;\n    background-color: #c3d0e3;\n\n    border-radius: 4px;\n    border: none;\n    box-shadow: 0 4px 10px #0000000d;\n    \n    transition: color 250ms linear, background-color 250ms linear;\n    :hover,\n    :focus {\n        color: #EDF3FC;\n        background-color: #6C8FC4;\n    }\n"]))),w=r(1413),y=r(4164),k=g.ZP.div(o||(o=(0,v.Z)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.5);\n"]))),C=g.ZP.div(a||(a=(0,v.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    min-height: 200px;\n    max-width: 400px;\n    background-color: #fff;\n    width: 100%;\n    border-radius: 4px;\n    box-shadow: 0 4px 10px #0000000d;\n\n"]))),F=r(5118),q=r(3329),E=document.querySelector("#modal-root"),P=function(n){var e,r,t=n.contact,i=n.onClose,o=t.id,a=t.name,d=t.number,s=(0,u.I0)();(0,f.useEffect)((function(){var n=function(n){"Escape"===n.code&&i()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[i]);var l=(0,F.cI)({defaultValues:{name:a,number:d}}),c=l.register,m=l.handleSubmit,p=l.reset,x=l.formState.errors;return(0,y.createPortal)((0,q.jsx)(k,{onClick:function(n){n.currentTarget===n.target&&i()},children:(0,q.jsx)(C,{children:(0,q.jsxs)("form",{onSubmit:m((function(n){s((0,b.Tk)({id:o,data:n})),p(),i()})),children:[(0,q.jsxs)("label",{children:["Name",(0,q.jsx)("input",(0,w.Z)((0,w.Z)({},c("name",{required:"Name is required field",pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contains only letters, apostrophe, dash and spaces."}})),{},{type:"text"}))]}),(0,q.jsx)("div",{children:(null===x||void 0===x?void 0:x.name)&&(0,q.jsx)("p",{children:(null===x||void 0===x||null===(e=x.name)||void 0===e?void 0:e.message)||"Error"})}),(0,q.jsxs)("label",{children:["Number",(0,q.jsx)("input",(0,w.Z)((0,w.Z)({},c("number",{required:"Number is required field",pattern:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})),{},{type:"tel"}))]}),(0,q.jsx)("div",{children:(null===x||void 0===x?void 0:x.number)&&(0,q.jsx)("p",{children:(null===x||void 0===x||null===(r=x.number)||void 0===r?void 0:r.message)||"Error"})}),(0,q.jsx)("button",{type:"submit",children:"Update contact"})]})})}),E)},N=function(n){var e=n.contact,r=(0,f.useState)(!1),t=(0,h.Z)(r,2),i=t[0],o=t[1],a=e.id,d=e.name,s=e.number,l=(0,u.I0)(),c=function(){o(!i)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(j,{children:[d,": ",s,(0,q.jsx)(Z,{onClick:function(){return l((0,b.GK)(a))},children:"Delete"}),(0,q.jsx)(Z,{onClick:c,children:"Update"})]}),i&&(0,q.jsx)(P,{contact:e,onClose:c})]})},S=g.ZP.ul(d||(d=(0,v.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: ","px;\n"])),(function(n){return n.theme.space[3]})),A=function(){var n=(0,u.v9)(x);return(0,q.jsx)(S,{children:n.map((function(n){return(0,q.jsx)(N,{contact:n},n.id)}))})},I=g.ZP.div(s||(s=(0,v.Z)(["\n    display: grid;\n    grid-row-gap: 8px;\n    width: 200px;\n    margin-bottom: 16px;\n"]))),z=r(4808),L=function(){var n=(0,u.v9)(p),e=(0,u.I0)();return(0,q.jsxs)(I,{children:[(0,q.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,q.jsx)("input",{id:"filter",type:"text",value:n,onChange:function(n){e((0,z.hL)(n.target.value))}})]})},_=r(4270),D=g.ZP.form(l||(l=(0,v.Z)(["\n    display: grid;\n    grid-row-gap: 8px;\n    width: 200px;\n    margin-bottom: 16px;\n"]))),K=g.ZP.button(c||(c=(0,v.Z)(["\n    width: 120px;\n    margin-top: 4px;\n    padding: 4px 8px;\n\n    color: #000000;\n    background-color: #c3d0e3;\n\n    border-radius: 4px;\n    border: none;\n    box-shadow: 0 4px 10px #0000000d;\n    \n    transition: color 250ms linear, background-color 250ms linear;\n    :hover,\n    :focus {\n        color: #EDF3FC;\n        background-color: #6C8FC4;\n    }\n"]))),T=function(){var n,e,r=(0,u.I0)(),t=(0,F.cI)(),i=t.register,o=t.handleSubmit,a=t.reset,d=t.formState.errors;return(0,q.jsxs)(D,{onSubmit:o((function(n){r((0,b.uK)(n)),a()})),children:[(0,q.jsx)("label",{htmlFor:"name",children:"Name"}),(0,q.jsx)("input",(0,w.Z)((0,w.Z)({},i("name",{required:"Name is required field",pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contains only letters, apostrophe, dash and spaces."}})),{},{type:"text",id:"name"})),(0,q.jsx)("div",{children:(null===d||void 0===d?void 0:d.name)&&(0,q.jsx)("p",{children:(null===d||void 0===d||null===(n=d.name)||void 0===n?void 0:n.message)||"Error"})}),(0,q.jsx)("label",{htmlFor:"number",children:"Number"}),(0,q.jsx)("input",(0,w.Z)((0,w.Z)({},i("number",{required:"Number is required field",pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}})),{},{type:"tel",id:"number"})),(0,q.jsx)("div",{children:(null===d||void 0===d?void 0:d.number)&&(0,q.jsx)("p",{children:(null===d||void 0===d||null===(e=d.number)||void 0===e?void 0:e.message)||"Error"})}),(0,q.jsx)(K,{type:"submit",children:"Add contact"})]})};function U(){var n=(0,u.I0)(),e=(0,u.v9)(m);return(0,f.useEffect)((function(){n((0,b.yF)())}),[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_.q,{children:(0,q.jsx)("title",{children:"My Contacts"})}),(0,q.jsx)(T,{}),(0,q.jsx)(L,{}),(0,q.jsx)("div",{children:e&&"Request in progress..."}),(0,q.jsx)(A,{})]})}}}]);
//# sourceMappingURL=257.2cf7b8e1.chunk.js.map