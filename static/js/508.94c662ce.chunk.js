"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[508],{9508:function(e,n,s){s.r(n),s.d(n,{default:function(){return q}});var r=s(2791),t=s(4270),i=s(9434),o=s(4190),a=s(3634),d=function(e){return e.contacts.isLoading},l=function(e){return e.filter},c=function(e){var n=function(e){return e.contacts.items}(e),s=l(e).toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(s)}))},x=s(1413),u=s(4164),m=s(1134),p=s(9948),h=s(5863),j=s(824),f=s(5777),v=s(8820),b=s(3329),g=document.querySelector("#modal-root"),z=function(e){var n,s,r=e.props,t=r.contact,d=r.isOpen,l=r.onClose,c=t.id,z=t.name,I=t.number,w=(0,i.I0)(),y=(0,m.cI)({defaultValues:{name:z,number:I}}),Z=y.register,S=y.handleSubmit,C=y.reset,q=y.formState.errors;return(0,u.createPortal)((0,b.jsxs)(p.u_,{size:"md",isOpen:d,onClose:l,children:[(0,b.jsx)(p.ZA,{}),(0,b.jsxs)(p.hz,{p:3,children:[(0,b.jsx)(p.ol,{zIndex:"docked"}),(0,b.jsxs)(o.Kq,{as:"form",gap:3,onSubmit:S((function(e){w((0,a.Tk)({id:c,data:e})),C(),l()})),children:[(0,b.jsxs)(h.NI,{pos:"relative",children:[(0,b.jsx)(h.lX,{mb:3,children:"Name"}),(0,b.jsxs)(j.BZ,{children:[(0,b.jsx)(j.II,(0,x.Z)((0,x.Z)({},Z("name",{required:"Name is required",pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contains only letters, apostrophe, dash and spaces."}})),{},{type:"text"})),(0,b.jsx)(j.Z8,{pointerEvents:"none",children:(0,b.jsx)(v.nf1,{color:"gray.300"})})]}),(0,b.jsx)(o.xu,{position:"absolute",top:"100%",children:(null===q||void 0===q?void 0:q.name)&&(0,b.jsx)(o.xv,{fontSize:"xs",color:"#ff001b",textShadow:"rgb(0 0 0 / 25%) 0px 2px 2px",children:(null===q||void 0===q||null===(n=q.name)||void 0===n?void 0:n.message)||"Error"})})]}),(0,b.jsxs)(h.NI,{pos:"relative",children:[(0,b.jsx)(h.lX,{mb:3,children:"Number"}),(0,b.jsxs)(j.BZ,{children:[(0,b.jsx)(j.II,(0,x.Z)((0,x.Z)({},Z("number",{required:"Number is required",pattern:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})),{},{type:"tel"})),(0,b.jsx)(j.Z8,{pointerEvents:"none",transform:"rotate(-90deg) scale(-1) ",children:(0,b.jsx)(v.Nhm,{color:"gray.300"})})]}),(0,b.jsx)(o.xu,{position:"absolute",top:"100%",children:(null===q||void 0===q?void 0:q.number)&&(0,b.jsx)(o.xv,{fontSize:"xs",color:"#ff001b",textShadow:"rgb(0 0 0 / 25%) 0px 2px 2px",children:(null===q||void 0===q||null===(s=q.number)||void 0===s?void 0:s.message)||"Error"})})]}),(0,b.jsx)(f.zx,{type:"submit",children:"Save"})]})]})]}),g)},I=s(1197),w=function(e){var n=e.contact,s=n.id,r=n.name,t=n.number,d=(0,i.I0)(),l=(0,I.qY)(),c=l.isOpen,x=l.onOpen,u=l.onClose;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(o.kC,{as:"li",justify:"space-between",align:"center",gap:6,w:"300px",p:3,borderRadius:"16px",boxShadow:"0px 4px 18px -2px #c3d0dd",children:[(0,b.jsxs)(o.xu,{children:[(0,b.jsx)(o.xv,{fontSize:"18px",fontWeight:"600",children:r}),(0,b.jsx)(o.xv,{children:t})]}),(0,b.jsxs)(o.kC,{gap:3,children:[(0,b.jsx)(f.zx,{size:"sm",borderRadius:"70% 30% 56% 44% / 44% 61% 39% 56%",onClick:function(){return d((0,a.GK)(s))},children:(0,b.jsx)(v.VPh,{})}),(0,b.jsx)(f.zx,{size:"sm",borderRadius:"28% 72% 52% 48% / 44% 53% 47% 56%",onClick:x,children:(0,b.jsx)(v.$iz,{})})]})]}),(0,b.jsx)(z,{props:{contact:n,isOpen:c,onClose:u}})]})},y=function(){var e=(0,i.v9)(c);return(0,b.jsx)(o.kC,{as:"ul",direction:"column",gap:4,children:e.map((function(e){return(0,b.jsx)(w,{contact:e},e.id)}))})},Z=s(4808),S=function(){var e=(0,i.v9)(l),n=(0,i.I0)();return(0,b.jsxs)(o.Kq,{w:"300px",mb:5,children:[(0,b.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),(0,b.jsx)(j.II,{size:"sm",id:"filter",type:"text",value:e,onChange:function(e){n((0,Z.hL)(e.target.value))}})]})},C=function(){var e,n,s=(0,i.I0)(),r=(0,m.cI)(),t=r.register,d=r.handleSubmit,l=r.reset,c=r.formState.errors;return(0,b.jsx)(o.xu,{children:(0,b.jsxs)(o.Kq,{as:"form",gap:3,mb:4,onSubmit:d((function(e){s((0,a.uK)(e)),l()})),children:[(0,b.jsxs)(h.NI,{pos:"relative",children:[(0,b.jsx)(h.lX,{children:"Name"}),(0,b.jsx)(j.II,(0,x.Z)((0,x.Z)({size:"sm",w:"300px"},t("name",{required:"Name is required",pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contains only letters, apostrophe, dash and spaces."}})),{},{type:"text"})),(0,b.jsx)(o.xu,{position:"absolute",children:(null===c||void 0===c?void 0:c.name)&&(0,b.jsx)(o.xv,{fontSize:"xs",color:"#ff001b",textShadow:"rgb(0 0 0 / 25%) 0px 2px 2px",children:(null===c||void 0===c||null===(e=c.name)||void 0===e?void 0:e.message)||"Error"})})]}),(0,b.jsxs)(h.NI,{pos:"relative",children:[(0,b.jsx)(h.lX,{children:"Number"}),(0,b.jsx)(j.II,(0,x.Z)((0,x.Z)({size:"sm",w:"300px"},t("number",{required:"Number is required",pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}})),{},{type:"tel"})),(0,b.jsx)(o.xu,{position:"absolute",children:(null===c||void 0===c?void 0:c.number)&&(0,b.jsx)(o.xv,{fontSize:"xs",color:"#ff001b",textShadow:"rgb(0 0 0 / 25%) 0px 2px 2px",children:(null===c||void 0===c||null===(n=c.number)||void 0===n?void 0:n.message)||"Error"})})]}),(0,b.jsx)(f.zx,{size:"sm",w:"300px",type:"submit",children:"Add contact"})]})})};function q(){var e=(0,i.I0)(),n=(0,i.v9)(d);return(0,r.useEffect)((function(){e((0,a.yF)())}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.q,{children:(0,b.jsx)("title",{children:"My Contacts"})}),(0,b.jsx)(o.X6,{as:"h1",mb:5,children:"My Contacts"}),(0,b.jsx)(C,{}),(0,b.jsxs)(o.xu,{children:[(0,b.jsx)(S,{}),(0,b.jsx)("div",{children:n&&"Request in progress..."}),(0,b.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=508.94c662ce.chunk.js.map