(this["webpackJsonpeurovision-voting"]=this["webpackJsonpeurovision-voting"]||[]).push([[0],{123:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(12),c=a.n(r),s=(a(123),a(14)),i=a(213),o=a(3),l=function(e){var t=e.page;return Object(o.jsx)(i.a,{id:"main_page",display:"block",m:0,children:t})},j=a(207),u=a(80),b=a(62),d=a(4),h=a(183),O=a(184),p=a(185),x=a(85),m=a(211),g=a(189),f=a(190),v=a(156),y=a(191),N=a(192),S=a(186),w=a(187),k=a(188),C=a(181),I=a(22),P=a(182),F=Object(C.a)({root:{background:"linear-gradient(45deg, #F7DC25 30%, #F9F959 90%)",borderRadius:3,border:0,color:"black",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(206, 206, 19, .4)"},label:{textTransform:"capitalize"}}),T=function(e){var t=e.handleSubmit,a=e.buttonName,n=F();return Object(o.jsx)(i.a,{display:"flex",aligncontent:"center",m:1,children:Object(o.jsx)(P.a,{className:n.root,variant:"outlined",onClick:t,children:a})})},U=240,E=Object(C.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"#5900b3"},appBarShift:{width:"calc(100% - ".concat(U,"px)"),marginLeft:U,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:U,flexShrink:0},drawerPaper:{width:U},drawerHeader:Object(b.a)(Object(b.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1},buttons:{display:"flex",aligncontent:"center",m:"1"}}}));function _(e){var t=e.openRoutesFuncs,a=e.routes,r=e.routesIcons,c=e.sectionName,l=e.pagesNames,j=e.openPage,b=E(),C=Object(I.a)(),P=Object(n.useState)(!1),F=Object(s.a)(P,2),U=F[0],_=F[1],B=function(){_(!1)};return Object(o.jsxs)(i.a,{className:b.root,children:[Object(o.jsx)(h.a,{position:"fixed",className:Object(d.a)(b.appBar,Object(u.a)({},b.appBarShift,U)),children:Object(o.jsxs)(O.a,{children:[Object(o.jsx)(p.a,{color:"inherit","aria-label":"open drawer",onClick:function(){_(!0)},edge:"start",className:Object(d.a)(b.menuButton,U&&b.hide),children:Object(o.jsx)(S.a,{})}),Object(o.jsx)(x.a,{variant:"h6",className:b.title,children:c}),Object(o.jsx)(i.a,{className:b.buttons,children:l.map((function(e){return Object(o.jsx)(T,{handleSubmit:function(){return j({name:e})},buttonName:e},e)}))})]})}),Object(o.jsxs)(m.a,{className:b.drawer,variant:"persistent",anchor:"left",open:U,classes:{paper:b.drawerPaper},children:[Object(o.jsx)("div",{className:b.drawerHeader,children:Object(o.jsx)(p.a,{onClick:B,children:"ltr"===C.direction?Object(o.jsx)(w.a,{}):Object(o.jsx)(k.a,{})})}),Object(o.jsx)(g.a,{}),Object(o.jsx)(f.a,{children:a.map((function(e,a){return Object(o.jsxs)(v.a,{button:!0,onClick:function(){B(),t[a]()},children:[Object(o.jsx)(y.a,{children:r[a]}),Object(o.jsx)(N.a,{primary:e})]},e)}))})]})]})}var B=a(209),D=a(212);function W(e){return Object(o.jsx)(B.a,Object(b.a)({elevation:6,variant:"filled"},e))}var L=Object(C.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function R(e){var t=e.message,a=e.severity,r=e.setNotify,c=L(),i=Object(n.useState)(!0),l=Object(s.a)(i,2),j=l[0],u=l[1],b=function(e,t){"clickaway"!==t&&(u(!1),r(!1))};return Object(o.jsx)("div",{className:c.root,children:Object(o.jsx)(D.a,{open:j,autoHideDuration:6e3,onClose:b,children:Object(o.jsx)(W,{onClose:b,severity:a,children:t})})})}var M=a(21),V=a.n(M),A=a(38),G=a(197),H=a(198),J=a(199),z=a(110),Z=a(194),q=a(214),K=a(208),Q=a(195),X=function(e){var t=e.score,a=e.setScore;return Object(o.jsxs)(Z.a,{fullWidth:!0,style:{minWidth:"100px"},children:[Object(o.jsx)(q.a,{id:"demo-simple-select-label",children:"Score"}),Object(o.jsxs)(K.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:t,label:"Score",onChange:function(e){return a(e.target.value)},children:[Object(o.jsx)(Q.a,{value:"1",children:"1"}),Object(o.jsx)(Q.a,{value:"2",children:"2"}),Object(o.jsx)(Q.a,{value:"3",children:"3"}),Object(o.jsx)(Q.a,{value:"4",children:"4"}),Object(o.jsx)(Q.a,{value:"5",children:"5"}),Object(o.jsx)(Q.a,{value:"6",children:"6"}),Object(o.jsx)(Q.a,{value:"7",children:"7"}),Object(o.jsx)(Q.a,{value:"8",children:"8"}),Object(o.jsx)(Q.a,{value:"10",children:"10"}),Object(o.jsx)(Q.a,{value:"12",children:"DOUZE POINTS"})]})]})},Y=a(196),$=Object(C.a)((function(){return{root:{maxWidth:304,margin:"auto",boxShadow:"none",padding:24,borderRadius:20,marginTop:24,backgroundColor:"#d9b3ff",align:"center"}}}));function ee(e){var t=e.children,a=$();return Object(o.jsx)(Y.a,{className:a.root,children:t})}var te=function(e){var t=e.countryName,a=e.songName,r=e.imageUrl,c=e.popUpNotification,l=e.setVotingStatus,j=Object(n.useState)(!1),u=Object(s.a)(j,2),b=u[0],d=u[1],h=Object(n.useState)("1"),O=Object(s.a)(h,2),p=O[0],x=O[1],m=Object(z.useWideCardMediaStyles)();function g(){return(g=Object(A.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),d(!0);try{c({message:"Successfully submit score",severity:"success"}),l("wait")}catch(a){c({message:a.message,severity:"error"})}finally{d(!1)}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsx)(G.a,{children:Object(o.jsxs)(ee,{children:[Object(o.jsxs)(i.a,{children:[Object(o.jsx)(H.a,{classes:m,image:r}),Object(o.jsx)("h1",{children:t}),Object(o.jsx)("h3",{children:a}),Object(o.jsx)(i.a,{display:"flex",aligncontent:"center",m:1,children:Object(o.jsx)(X,{score:p,setScore:x})})]}),Object(o.jsxs)(i.a,{display:"flex",aligncontent:"center",m:1,children:[Object(o.jsx)(T,{handleSubmit:function(e){return g.apply(this,arguments)},buttonName:"Submit"}),b&&Object(o.jsx)(J.a,{})]})]})})},ae=a(200),ne=a(112),re=a(201),ce=a(202),se=a(203),ie=a(204),oe=a(205),le=Object(C.a)({table:{minWidth:"40px",maxWidth:"60px"},firstPlace:{backgroundColor:"#F6EE07"},secondPlace:{backgroundColor:"#D4D3CA"},thirdPlace:{backgroundColor:"#ECA244"}}),je=function(e){var t=e.rows,a=e.columns,n=le(),r=function(e){switch(e){case 0:return n.firstPlace;case 1:return n.secondPlace;case 2:return n.thirdPlace}};return Object(o.jsx)(i.a,{display:"flex",aligncontent:"center",m:1,children:Object(o.jsx)(ae.a,{component:ne.a,children:Object(o.jsxs)(re.a,{className:n.table,"aria-label":"simple table",children:[Object(o.jsx)(ce.a,{children:Object(o.jsxs)(se.a,{children:[Object(o.jsx)(ie.a,{children:"#"}),a.map((function(e){return Object(o.jsx)(ie.a,{children:e.label},e.key)}))]})}),Object(o.jsx)(oe.a,{children:t.map((function(e,t){return Object(o.jsxs)(se.a,{className:r(t),children:[Object(o.jsx)(ie.a,{component:"th",scope:"row",children:t+1}),a.map((function(a){return Object(o.jsx)(ie.a,{children:e[a.key]},"".concat(a.key,"-").concat(t))}))]},t)}))})]})})})},ue=[{label:"Country Name",key:"countryName"},{label:"Song Name",key:"songName"},{label:"Score",key:"score"}],be=function(){var e=Object(n.useState)([{countryName:"Israel",songName:"I.M",score:12},{countryName:"Ukraine",songName:"Stefania",score:10},{countryName:"bla bla bla",songName:"bla bla bla",score:8},{countryName:"sho sho sho",songName:"sho sho sho",score:5}]),t=Object(s.a)(e,2),a=t[0],r=t[1];return setTimeout((function(){r([{countryName:"Israel",songName:"I.M",score:12},{countryName:"Ukraine",songName:"Stefania",score:11},{countryName:"bla bla bla",songName:"bla bla bla",score:8},{countryName:"sho sho sho",songName:"sho sho sho",score:5},{countryName:"la la la",songName:"la la la",score:3}])}),2e3),Object(o.jsx)(G.a,{children:Object(o.jsxs)(i.a,{flexDirection:"column",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[Object(o.jsx)(je,{rows:a,columns:ue}),Object(o.jsx)("center",{children:Object(o.jsx)("h1",{children:"Please wait for the next voting session"})}),Object(o.jsx)(J.a,{size:"10rem"})]})})},de="wait",he="vote",Oe="done",pe=function(e){var t=e.popUpNotification,a=Object(n.useState)("wait"),r=Object(s.a)(a,2),c=r[0],l=r[1],j=Object(n.useState)(null),u=Object(s.a)(j,2),b=u[0],d=u[1];return Object(n.useEffect)((function(){switch(console.log(c),c){case he:d(Object(o.jsx)(te,{countryName:"Israel",songName:"I.M",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/2560px-Flag_of_Israel.svg.png",popUpNotification:t,setVotingStatus:l}));break;case Oe:d(Object(o.jsx)("h1",{children:"done"}));break;case de:setTimeout((function(){l("vote")}),5e3),d(Object(o.jsx)(be,{}));break;default:t({message:"Wrong status (".concat(c,")"),severity:"error"})}}),[c,t]),Object(o.jsx)(i.a,{m:0,children:b})},xe=a(206),me=a(215);function ge(e){var t=e.item;return Object(o.jsxs)(v.a,{alignItems:"flex-start",children:[Object(o.jsx)(xe.a,{children:Object(o.jsx)(me.a,{src:t.flag})}),Object(o.jsx)(N.a,{primary:t.country,secondary:Object(o.jsx)(n.Fragment,{children:Object(o.jsx)(x.a,{sx:{display:"inline"},component:"span",variant:"body2",children:t.song})})}),Object(o.jsx)(i.a,{children:Object(o.jsx)(X,{availableScore:[1,2,3]})})]})}function fe(e){var t=e.items;return Object(o.jsx)(f.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:t.map((function(e,t){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(ge,{item:e}),Object(o.jsx)(g.a,{variant:"inset",component:"li"})]},t)}))})}var ve="https://80f9-77-124-6-115.eu.ngrok.io/api/v1/eurovision/songs";function ye(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(A.a)(V.a.mark((function e(t){var a,n,r,c,s,i,o;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.method,r=void 0===n?"POST":n,c=t.headers,s=void 0===c?{"Content-Type":"application/json"}:c,i=t.body,e.next=3,fetch(a,{method:r,headers:s,body:i&&JSON.stringify(i)});case 3:if((o=e.sent).ok){e.next=10;break}return e.t0=Error,e.next=8,o.text();case 8:throw e.t1=e.sent,new e.t0(e.t1);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(){return we.apply(this,arguments)}function we(){return(we=Object(A.a)(V.a.mark((function e(){var t;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye({url:ve,method:"GET"});case 2:return t=e.sent,console.log(t),e.abrupt("return",t.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ke=[{key:"ISRAEL",country:"Israel",song:"I.M",flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/2560px-Flag_of_Israel.svg.png"}],Ce=function(e){var t=e.popUpNotification,a=Object(n.useState)(!0),r=Object(s.a)(a,2),c=r[0],i=r[1],l=Object(n.useState)([]),j=Object(s.a)(l,2),u=j[0],b=j[1];function d(){return(d=Object(A.a)(V.a.mark((function e(){var a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Se();case 3:a=e.sent,t({message:"Successfully got songs",severity:"success"}),console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({message:e.t0.message,severity:"error"});case 11:return e.prev=11,i(!1),b(ke),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,15]])})))).apply(this,arguments)}return function(){d.apply(this,arguments)}(),Object(o.jsxs)(G.a,{children:[u&&Object(o.jsx)(fe,{items:u}),c&&Object(o.jsx)(J.a,{})]})},Ie=["Voting"],Pe=[Object(o.jsx)(j.a,{},"vote-icon")],Fe=["vote","final"];function Te(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),j=Object(s.a)(c,2),u=j[0],b=j[1],d=Object(n.useState)(""),h=Object(s.a)(d,2),O=h[0],p=h[1],x=Object(n.useState)("Voting"),m=Object(s.a)(x,2),g=m[0],f=m[1],v=Object(n.useState)(Fe),y=Object(s.a)(v,2),N=y[0],S=y[1],w=Object(n.useState)(null),k=Object(s.a)(w,2),C=k[0],I=k[1],P=function(e){var t=e.message,a=e.severity;b(t),p(a),r(!0)},F={vote:Object(o.jsx)(pe,{popUpNotification:P}),final:Object(o.jsx)(Ce,{popUpNotification:P})},T=[function(){f("Voting"),S(Fe)}];return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(i.a,{children:Object(o.jsx)(_,{routes:Ie,routesIcons:Pe,openRoutesFuncs:T,sectionName:g,pagesNames:N,openPage:function(e){var t=e.name;I(F[t])},routePages:F})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(l,{page:C}),a&&Object(o.jsx)(R,{message:u,severity:O,setNotify:r})]})}var Ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,216)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};c.a.render(Object(o.jsx)(Te,{}),document.getElementById("root")),Ue()}},[[152,1,2]]]);
//# sourceMappingURL=main.3a70202c.chunk.js.map