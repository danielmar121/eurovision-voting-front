(this["webpackJsonpeurovision-voting"]=this["webpackJsonpeurovision-voting"]||[]).push([[0],{156:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),i=(n(156),n(17)),s=n(51),o=n(255),l=n(3),u=function(e){var t=e.page;return Object(l.jsx)(o.a,{id:"main_page",display:"block",m:0,children:t})},j=n(248),d=n(249),b=n(94),p=n(73),O=n(4),x=n(221),h=n(222),f=n(223),m=n(99),g=n(253),v=n(227),y=n(228),S=n(193),w=n(229),k=n(230),N=n(224),C=n(225),F=n(226),P=n(220),E=n(26),I=240,T=Object(P.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(45deg, #F60707 16%, #F09501 32%, #F7F712 48%, #46B229 65%, #1826E6 81%, #960DDA 100%)"},appBarShift:{width:"calc(100% - ".concat(I,"px)"),marginLeft:I,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:I,flexShrink:0},drawerPaper:{width:I},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1},buttons:{display:"flex",aligncontent:"center",m:"1"}}}));function D(e){var t=e.pages,n=e.setPage,r=e.popUpNotification,c=T(),s=Object(E.a)(),u=Object(a.useState)(!1),j=Object(i.a)(u,2),d=j[0],p=j[1],P=function(){p(!1)};return Object(l.jsxs)(o.a,{className:c.root,children:[Object(l.jsx)(x.a,{position:"fixed",className:Object(O.a)(c.appBar,Object(b.a)({},c.appBarShift,d)),children:Object(l.jsxs)(h.a,{children:[Object(l.jsx)(f.a,{color:"inherit","aria-label":"open drawer",onClick:function(){p(!0)},edge:"start",className:Object(O.a)(c.menuButton,d&&c.hide),children:Object(l.jsx)(N.a,{})}),Object(l.jsx)(m.a,{variant:"h6",className:c.title,children:"STUZOVISION"})]})}),Object(l.jsxs)(g.a,{className:c.drawer,variant:"persistent",anchor:"left",open:d,classes:{paper:c.drawerPaper},children:[Object(l.jsx)("div",{className:c.drawerHeader,children:Object(l.jsx)(f.a,{onClick:P,children:"ltr"===s.direction?Object(l.jsx)(C.a,{}):Object(l.jsx)(F.a,{})})}),Object(l.jsx)(v.a,{}),Object(l.jsx)(y.a,{children:t.map((function(e){return Object(l.jsxs)(S.a,{button:!0,onClick:function(){P(),n(Object(l.jsx)(e.page,{popUpNotification:r}))},children:[Object(l.jsx)(w.a,{children:e.icon}),Object(l.jsx)(k.a,{primary:e.label})]},e.key)}))})]})]})}var U=n(251),B=n(254);function L(e){return Object(l.jsx)(U.a,Object(p.a)({elevation:6,variant:"filled"},e))}var W=Object(P.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function V(e){var t=e.message,n=e.severity,r=e.setNotify,c=W(),s=Object(a.useState)(!0),o=Object(i.a)(s,2),u=o[0],j=o[1],d=function(e,t){"clickaway"!==t&&(j(!1),r(!1))};return Object(l.jsx)("div",{className:c.root,children:Object(l.jsx)(B.a,{open:u,autoHideDuration:6e3,onClose:d,children:Object(l.jsx)(L,{onClose:d,severity:n,children:t})})})}var A=n(25),G=n.n(A),Q=n(47),R=n(238),z=n(239),H=n(236),J=n(258),K=n(232),Z=n(256),q=n(250),M=n(235),_=function(e){var t=e.selectKey,n=e.addFinalScore,r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1];return Object(l.jsxs)(K.a,{fullWidth:!0,style:{minWidth:"100px"},children:[Object(l.jsx)(Z.a,{id:"demo-simple-select-label",children:"Score"}),Object(l.jsxs)(q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"Score",onChange:function(e){return function(e){var a=e.value;o(a),n({key:t,score:a})}({value:e.target.value})},children:[Object(l.jsx)(M.a,{value:"0",children:"0"}),Object(l.jsx)(M.a,{value:"1",children:"1"}),Object(l.jsx)(M.a,{value:"2",children:"2"}),Object(l.jsx)(M.a,{value:"3",children:"3"}),Object(l.jsx)(M.a,{value:"4",children:"4"}),Object(l.jsx)(M.a,{value:"5",children:"5"}),Object(l.jsx)(M.a,{value:"6",children:"6"}),Object(l.jsx)(M.a,{value:"7",children:"7"}),Object(l.jsx)(M.a,{value:"8",children:"8"}),Object(l.jsx)(M.a,{value:"10",children:"10"}),Object(l.jsx)(M.a,{value:"12",children:"DOUZE POINTS"})]})]})};function X(e){var t=e.item,n=e.addFinalScore;return Object(l.jsxs)(S.a,{alignItems:"flex-start",children:[Object(l.jsx)(H.a,{children:Object(l.jsx)(J.a,{src:t.flag})}),Object(l.jsx)(k.a,{primary:t.country,secondary:Object(l.jsx)(a.Fragment,{children:Object(l.jsx)(m.a,{sx:{display:"inline"},component:"span",variant:"body2",children:t.song})})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(_,{selectKey:t.key,addFinalScore:n})})]})}function Y(e){var t=e.items,n=e.addFinalScore;return Object(l.jsx)(y.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:t.map((function(e,t){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(X,{item:e,addFinalScore:n}),Object(l.jsx)(v.a,{variant:"inset",component:"li"})]},t)}))})}var $=n(237),ee=Object(P.a)({root:{background:"linear-gradient(45deg, #F7DC25 30%, #F9F959 90%)",borderRadius:3,border:0,color:"black",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(206, 206, 19, .4)"},label:{textTransform:"capitalize"}}),te=function(e){var t=e.handleSubmit,n=e.buttonName,a=ee();return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)($.a,{className:a.root,variant:"outlined",onClick:t,children:n})})},ne=n(259),ae=Object(P.a)((function(){return{root:{backgroundColor:"#F9F9F9"}}})),re=function(e){var t=e.value,n=e.setValue,a=e.label,r=e.type,c=void 0===r?"text":r,i=e.width,s=void 0===i?300:i,u=ae();return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(ne.a,{className:u.root,style:{width:s},value:t,onChange:function(e){return n(e.target.value)},label:a,variant:"outlined",type:c})})},ce="https://3097-77-124-6-115.eu.ngrok.io";function ie(e){return se.apply(this,arguments)}function se(){return(se=Object(Q.a)(G.a.mark((function e(t){var n,a,r,c,i,s,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=void 0===a?"POST":a,c=t.headers,i=void 0===c?{"Content-Type":"application/json"}:c,s=t.body,e.next=3,fetch(n,{method:r,headers:i,body:s&&JSON.stringify(s)});case 3:if((o=e.sent).ok){e.next=10;break}return e.t0=Error,e.next=8,o.text();case 8:throw e.t1=e.sent,new e.t0(e.t1);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){return le.apply(this,arguments)}function le(){return(le=Object(Q.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.scores,(a=t.name)&&""!==a){e.next=3;break}throw new Error("Name must be provided");case 3:return e.next=5,ie({url:"".concat(ce,"/api/v1/eurovision/").concat(a),method:"POST",body:n});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return je.apply(this,arguments)}function je(){return(je=Object(Q.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({url:"".concat(ce,"/api/v1/eurovision/songs"),method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return be.apply(this,arguments)}function be(){return(be=Object(Q.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie({url:"".concat(ce,"/api/v1/eurovision"),method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e){var t=e.scores,n=Object.values(t).reduce((function(e,t){return"0"!==t&&(e[t]=e[t]+1),e}),{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,10:0,12:0});return Object.values(n).every((function(e){return 1===e}))}var Oe=function(e){var t=e.popUpNotification,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1],j=Object(a.useState)({}),d=Object(i.a)(j,2),b=d[0],p=d[1],O=Object(s.useQuery)("songs",ue),x=O.data,h=O.isLoading,f=O.isSuccess,m=O.isError,g=O.error;function v(){return(v=Object(Q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!pe({scores:b})){e.next=8;break}return e.next=5,oe({scores:b,name:c});case 5:t({message:"Successfully send scores",severity:"success"}),e.next=9;break;case 8:t({message:"Please make sure the scores are valid",severity:"error"});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({message:e.t0.message,severity:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(){return(y=Object(Q.a)(G.a.mark((function e(t){var n,a,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.key,a=t.score,(r=b)[n]=a,p(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return m&&t({message:g.message||"Failed to get songs",severity:"error"}),Object(l.jsx)(R.a,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(re,{value:c,setValue:u,label:"Name"}),f&&Object(l.jsx)(Y,{items:x,addFinalScore:function(e){return y.apply(this,arguments)}}),h&&Object(l.jsx)(z.a,{}),Object(l.jsx)(te,{handleSubmit:function(){return v.apply(this,arguments)},buttonName:"Submit Scores"},"submitScores")]})})},xe=n(241),he=n(132),fe=n(240),me=Object(P.a)((function(){return{root:{maxWidth:304,margin:"auto",boxShadow:"none",padding:24,borderRadius:20,marginTop:24,backgroundColor:"#d9b3ff",align:"center"}}}));function ge(e){var t=e.children,n=me();return Object(l.jsx)(fe.a,{className:n.root,children:t})}var ve=function(){var e=Object(he.useWideCardMediaStyles)();return Object(l.jsx)(R.a,{children:Object(l.jsxs)(o.a,{flexDirection:"column",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)("h1",{children:"\u05ea\u05d5\u05d3\u05d4 \u05e9\u05d4\u05e6\u05d1\u05e2\u05ea \u05d0\u05d5\u05d7\u05e6\u05f3\u05d9\u05e0\u05d4"}),Object(l.jsx)(ge,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)("h1",{children:"---------------"}),Object(l.jsx)(xe.a,{classes:e,image:"http://www.dgalim.co.il/ufiles/banners/PRIDE.jpg"}),Object(l.jsx)("h1",{children:"---------------"})]})}),Object(l.jsx)("h1",{children:"\u05e1\u05ea\u05d5\u05de\u05d5\u05ea \u05d6\u05d5\u05e0\u05d5\u05ea"})]})})},ye=function(e){var t=e.popUpNotification,n=Object(a.useState)(null);return Object(i.a)(n,1)[0]?Object(l.jsx)(o.a,{m:0,children:Object(l.jsx)(ve,{popUpNotification:t})}):Object(l.jsx)(o.a,{m:0,children:Object(l.jsx)(Oe,{popUpNotification:t})})},Se=n(133),we=n.n(Se),ke=n(242),Ne=n(135),Ce=n(243),Fe=n(244),Pe=n(245),Ee=n(246),Ie=n(247),Te=Object(P.a)({table:{minWidth:"40px"},firstPlace:{backgroundColor:"#F6EE07"},secondPlace:{backgroundColor:"#D4D3CA"},thirdPlace:{backgroundColor:"#ECA244"}}),De=function(e){var t=e.rows,n=e.columns,a=Te(),r=function(e){switch(e){case 0:return a.firstPlace;case 1:return a.secondPlace;case 2:return a.thirdPlace}};return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(ke.a,{component:Ne.a,children:Object(l.jsxs)(Ce.a,{className:a.table,"aria-label":"simple table",children:[Object(l.jsx)(Fe.a,{children:Object(l.jsxs)(Pe.a,{children:[Object(l.jsx)(Ee.a,{children:"#"}),n.map((function(e){return Object(l.jsx)(Ee.a,{children:e.label},e.key)}))]})}),Object(l.jsx)(Ie.a,{children:t.map((function(e,t){return Object(l.jsxs)(Pe.a,{className:r(t),children:[Object(l.jsx)(Ee.a,{component:"th",scope:"row",children:t+1}),n.map((function(n){return Object(l.jsx)(Ee.a,{children:e[n.key]},"".concat(n.key,"-").concat(t))}))]},t)}))})]})})})},Ue=[{label:"Country Name",key:"country"},{label:"Song Name",key:"song"},{label:"Score",key:"score"}],Be=function(e){var t=e.popUpNotification,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],u=r[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),b=d[0],p=d[1],O=Object(s.useQuery)("songs",de,{refetchInterval:1e3}),x=O.data,h=O.isLoading,f=O.isSuccess,m=O.isError,g=O.error;return f&&function(e){var t=e.oldScores,n=e.newScores;return!we.a.isEqual(t,n)}({oldScores:c,newScores:x})&&u(x),m&&t({message:g.message||"Failed to get songs",severity:"error"}),Object(l.jsx)(R.a,{children:Object(l.jsxs)(o.a,{flexDirection:"column",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)(re,{value:b,setValue:p,label:"Name"}),h&&Object(l.jsx)(z.a,{}),f&&"stuza"===b&&Object(l.jsx)(De,{rows:c,columns:Ue})]})})},Le=new s.QueryClient,We=[{label:"Stuzot Voting",page:ye,key:"voting",icon:Object(l.jsx)(j.a,{},"vote-icon")},{label:"Admin page",page:Be,key:"admin",icon:Object(l.jsx)(d.a,{},"admin-icon")}];function Ve(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),j=Object(i.a)(c,2),d=j[0],b=j[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),x=O[0],h=O[1],f=Object(a.useState)(null),m=Object(i.a)(f,2),g=m[0],v=m[1],y=function(e){var t=e.message,n=e.severity;b(t),h(n),r(!0)};return Object(a.useEffect)((function(){null===g&&v(Object(l.jsx)(ye,{popUpNotification:y}))}),[g]),Object(l.jsx)(s.QueryClientProvider,{client:Le,children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(D,{pages:We,setPage:v,popUpNotification:y})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{page:g}),n&&Object(l.jsx)(V,{message:d,severity:x,setNotify:r})]})})}var Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};c.a.render(Object(l.jsx)(Ve,{}),document.getElementById("root")),Ae()}},[[187,1,2]]]);
//# sourceMappingURL=main.1fbb45fe.chunk.js.map