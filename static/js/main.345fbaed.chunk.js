(this["webpackJsonpeurovision-voting"]=this["webpackJsonpeurovision-voting"]||[]).push([[0],{119:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(11),c=n.n(r),i=(n(119),n(16)),s=n(44),o=n(195),l=n(3),u=function(e){var t=e.page;return Object(l.jsx)(o.a,{id:"main_page",display:"block",m:0,children:t})},j=n(193),d=n(194),b=n(70),p=n(61),O=n(4),x=n(165),h=n(167),f=n(168),m=n(75),g=n(199),v=n(172),y=n(173),S=n(131),w=n(174),k=n(175),N=n(169),C=n(170),F=n(171),P=n(164),E=n(23),T=240,I=Object(P.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(45deg, #F60707 16%, #F09501 32%, #F7F712 48%, #46B229 65%, #1826E6 81%, #960DDA 100%)"},appBarShift:{width:"calc(100% - ".concat(T,"px)"),marginLeft:T,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:T,flexShrink:0},drawerPaper:{width:T},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1},buttons:{display:"flex",aligncontent:"center",m:"1"}}}));function U(e){var t=e.pages,n=e.setPage,r=e.popUpNotification,c=I(),s=Object(E.a)(),u=Object(a.useState)(!1),j=Object(i.a)(u,2),d=j[0],p=j[1],P=function(){p(!1)};return Object(l.jsxs)(o.a,{className:c.root,children:[Object(l.jsx)(x.a,{position:"fixed",className:Object(O.a)(c.appBar,Object(b.a)({},c.appBarShift,d)),children:Object(l.jsxs)(h.a,{children:[Object(l.jsx)(f.a,{color:"inherit","aria-label":"open drawer",onClick:function(){p(!0)},edge:"start",className:Object(O.a)(c.menuButton,d&&c.hide),children:Object(l.jsx)(N.a,{})}),Object(l.jsx)(m.a,{variant:"h6",className:c.title,children:"STUZOVISION"})]})}),Object(l.jsxs)(g.a,{className:c.drawer,variant:"persistent",anchor:"left",open:d,classes:{paper:c.drawerPaper},children:[Object(l.jsx)("div",{className:c.drawerHeader,children:Object(l.jsx)(f.a,{onClick:P,children:"ltr"===s.direction?Object(l.jsx)(C.a,{}):Object(l.jsx)(F.a,{})})}),Object(l.jsx)(v.a,{}),Object(l.jsx)(y.a,{children:t.map((function(e){return Object(l.jsxs)(S.a,{button:!0,onClick:function(){P(),n(Object(l.jsx)(e.page,{popUpNotification:r}))},children:[Object(l.jsx)(w.a,{children:e.icon}),Object(l.jsx)(k.a,{primary:e.label})]},e.key)}))})]})]})}var D=n(198),B=n(200);function L(e){return Object(l.jsx)(D.a,Object(p.a)({elevation:6,variant:"filled"},e))}var V=Object(P.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function A(e){var t=e.message,n=e.severity,r=e.setNotify,c=V(),s=Object(a.useState)(!0),o=Object(i.a)(s,2),u=o[0],j=o[1],d=function(e,t){"clickaway"!==t&&(j(!1),r(!1))};return Object(l.jsx)("div",{className:c.root,children:Object(l.jsx)(B.a,{open:u,autoHideDuration:6e3,onClose:d,children:Object(l.jsx)(L,{onClose:d,severity:n,children:t})})})}var G=n(74),W=n(22),Q=n.n(W),z=n(41),H=n(183),J=n(184),R=n(181),_=n(203),K=n(177),Z=n(201),q=n(196),M=n(180),X=function(e){var t=e.selectKey,n=e.addFinalScore,r=Object(a.useState)(""),c=Object(i.a)(r,2),s=c[0],o=c[1];return Object(l.jsxs)(K.a,{fullWidth:!0,style:{minWidth:"100px"},children:[Object(l.jsx)(Z.a,{id:"demo-simple-select-label",children:"Score"}),Object(l.jsxs)(q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:s,label:"Score",onChange:function(e){return function(e){var a=e.value;o(a),n({key:t,score:a})}({value:e.target.value})},children:[Object(l.jsx)(M.a,{value:"0",children:"0"}),Object(l.jsx)(M.a,{value:"1",children:"1"}),Object(l.jsx)(M.a,{value:"2",children:"2"}),Object(l.jsx)(M.a,{value:"3",children:"3"}),Object(l.jsx)(M.a,{value:"4",children:"4"}),Object(l.jsx)(M.a,{value:"5",children:"5"}),Object(l.jsx)(M.a,{value:"6",children:"6"}),Object(l.jsx)(M.a,{value:"7",children:"7"}),Object(l.jsx)(M.a,{value:"8",children:"8"}),Object(l.jsx)(M.a,{value:"10",children:"10"}),Object(l.jsx)(M.a,{value:"12",children:"DOUZE POINTS"})]})]})};function Y(e){var t=e.item,n=e.addFinalScore;return Object(l.jsxs)(S.a,{alignItems:"flex-start",children:[Object(l.jsx)(R.a,{children:Object(l.jsx)(_.a,{src:t.flag})}),Object(l.jsx)(k.a,{primary:t.country,secondary:Object(l.jsx)(a.Fragment,{children:Object(l.jsx)(m.a,{sx:{display:"inline"},component:"span",variant:"body2",children:t.song})})}),Object(l.jsx)(o.a,{children:Object(l.jsx)(X,{selectKey:t.key,addFinalScore:n})})]})}function $(e){var t=e.items,n=e.addFinalScore;return Object(l.jsx)(y.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:t.map((function(e,t){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(Y,{item:e,addFinalScore:n}),Object(l.jsx)(v.a,{variant:"inset",component:"li"})]},t)}))})}var ee=n(182),te=Object(P.a)({root:{background:"linear-gradient(45deg, #F7DC25 30%, #F9F959 90%)",borderRadius:3,border:0,color:"black",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(206, 206, 19, .4)"},label:{textTransform:"capitalize"}}),ne=function(e){var t=e.handleSubmit,n=e.buttonName,a=te();return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(ee.a,{className:a.root,variant:"outlined",onClick:t,children:n})})},ae=n(204),re=Object(P.a)((function(){return{root:{backgroundColor:"#F9F9F9"}}})),ce=function(e){var t=e.value,n=e.setValue,a=e.label,r=e.type,c=void 0===r?"text":r,i=e.width,s=void 0===i?300:i,u=re();return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(ae.a,{className:u.root,style:{width:s},value:t,onChange:function(e){return n(e.target.value)},label:a,variant:"outlined",type:c})})},ie="https://2725-46-117-134-54.ngrok-free.app";function se(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(z.a)(Q.a.mark((function e(t){var n,a,r,c,i,s,o;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=void 0===a?"POST":a,c=t.headers,i=void 0===c?{"Content-Type":"application/json"}:c,s=t.body,e.next=3,fetch(n,{method:r,headers:i,body:s&&JSON.stringify(s)});case 3:if((o=e.sent).ok){e.next=10;break}return e.t0=Error,e.next=8,o.text();case 8:throw e.t1=e.sent,new e.t0(e.t1);case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e){return ue.apply(this,arguments)}function ue(){return(ue=Object(z.a)(Q.a.mark((function e(t){var n,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.scores,(a=t.name)&&""!==a){e.next=3;break}throw new Error("Name must be provided");case 3:return e.next=5,se({url:"".concat(ie,"/api/v1/eurovision/").concat(a),method:"POST",body:n});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(){return de.apply(this,arguments)}function de(){return(de=Object(z.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se({url:"".concat(ie,"/api/v1/eurovision/songs"),method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return pe.apply(this,arguments)}function pe(){return(pe=Object(z.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se({url:"".concat(ie,"/api/v1/eurovision"),method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Oe=new G.a;function xe(e){var t=e.scores,n=Object.values(t).reduce((function(e,t){return"0"!==t&&(e[t]=e[t]+1),e}),{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,10:0,12:0});return Object.values(n).every((function(e){return 1===e}))}var he=function(e){var t=e.popUpNotification,n=e.setVoted,r=Object(a.useState)(""),c=Object(i.a)(r,2),u=c[0],j=c[1],d=Object(a.useState)({}),b=Object(i.a)(d,2),p=b[0],O=b[1],x=Object(s.useQuery)("songs",je),h=x.data,f=x.isLoading,m=x.isSuccess,g=x.isError,v=x.error;function y(){return(y=Object(z.a)(Q.a.mark((function e(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!xe({scores:p})){e.next=10;break}return e.next=5,le({scores:p,name:u});case 5:Oe.set("voted",!0,{path:"/",maxAge:7200}),n(!0),t({message:"Successfully send scores",severity:"success"}),e.next=11;break;case 10:t({message:"Please make sure the scores are valid",severity:"error"});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),t({message:e.t0.message,severity:"error"});case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function S(){return(S=Object(z.a)(Q.a.mark((function e(t){var n,a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.key,a=t.score,(r=p)[n]=a,O(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return g&&t({message:v.message||"Failed to get songs",severity:"error"}),Object(l.jsx)(H.a,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(ce,{value:u,setValue:j,label:"Name"}),m&&Object(l.jsx)($,{items:h,addFinalScore:function(e){return S.apply(this,arguments)}}),f&&Object(l.jsx)(J.a,{}),Object(l.jsx)(ne,{handleSubmit:function(){return y.apply(this,arguments)},buttonName:"Submit Scores"},"submitScores")]})})},fe=n(186),me=n(185),ge=Object(P.a)((function(){return{root:{maxWidth:304,margin:"auto",boxShadow:"none",padding:24,borderRadius:20,marginTop:24,backgroundColor:"#d9b3ff",align:"center"}}}));function ve(e){var t=e.children,n=ge();return Object(l.jsx)(me.a,{className:n.root,children:t})}var ye={media:{height:"150px",width:"220px"}},Se=function(){return Object(l.jsx)(H.a,{children:Object(l.jsxs)(o.a,{flexDirection:"column",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)("h1",{children:"\u05ea\u05d5\u05d3\u05d4 \u05e9\u05d4\u05e6\u05d1\u05e2\u05ea \u05d0\u05d5\u05d7\u05e6\u05f3\u05d9\u05e0\u05d4"}),Object(l.jsx)(ve,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)("h1",{children:"---------------"}),Object(l.jsx)(fe.a,{component:"img",image:"https://upload.wikimedia.org/wikipedia/commons/6/66/Gay_harrotasunaren_bandera.png",alt:"Flag",style:ye.media}),Object(l.jsx)("h1",{children:"---------------"})]})}),Object(l.jsx)("h1",{children:"\u05e1\u05ea\u05d5\u05de\u05d5\u05ea \u05d6\u05d5\u05e0\u05d5\u05ea"})]})})},we=new G.a,ke=function(e){var t=e.popUpNotification,n=Object(a.useState)(null),r=Object(i.a)(n,2),c=r[0],s=r[1];return c||we.get("voted")?Object(l.jsx)(o.a,{m:0,children:Object(l.jsx)(Se,{popUpNotification:t})}):Object(l.jsx)(o.a,{m:0,children:Object(l.jsx)(he,{popUpNotification:t,setVoted:s})})},Ne=n(94),Ce=n.n(Ne),Fe=n(187),Pe=n(96),Ee=n(188),Te=n(189),Ie=n(190),Ue=n(191),De=n(192),Be=Object(P.a)({table:{minWidth:"40px"},firstPlace:{backgroundColor:"#F6EE07"},secondPlace:{backgroundColor:"#D4D3CA"},thirdPlace:{backgroundColor:"#ECA244"}}),Le=function(e){var t=e.rows,n=e.columns,a=Be(),r=function(e){switch(e){case 0:return a.firstPlace;case 1:return a.secondPlace;case 2:return a.thirdPlace}};return Object(l.jsx)(o.a,{display:"flex",aligncontent:"center",m:1,children:Object(l.jsx)(Fe.a,{component:Pe.a,children:Object(l.jsxs)(Ee.a,{className:a.table,"aria-label":"simple table",children:[Object(l.jsx)(Te.a,{children:Object(l.jsxs)(Ie.a,{children:[Object(l.jsx)(Ue.a,{children:"#"}),n.map((function(e){return Object(l.jsx)(Ue.a,{children:e.label},e.key)}))]})}),Object(l.jsx)(De.a,{children:t.map((function(e,t){return Object(l.jsxs)(Ie.a,{className:r(t),children:[Object(l.jsx)(Ue.a,{component:"th",scope:"row",children:t+1}),n.map((function(n){return Object(l.jsx)(Ue.a,{children:e[n.key]},"".concat(n.key,"-").concat(t))}))]},t)}))})]})})})},Ve=[{label:"Country Name",key:"country"},{label:"Song Name",key:"song"},{label:"Score",key:"score"}],Ae=function(e){var t=e.popUpNotification,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],u=r[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),b=d[0],p=d[1],O=Object(s.useQuery)("songs",be,{refetchInterval:1e3}),x=O.data,h=O.isLoading,f=O.isSuccess,m=O.isError,g=O.error;return f&&function(e){var t=e.oldScores,n=e.newScores;return!Ce.a.isEqual(t,n)}({oldScores:c,newScores:x})&&u(x),m&&t({message:g.message||"Failed to get songs",severity:"error"}),Object(l.jsx)(H.a,{children:Object(l.jsxs)(o.a,{flexDirection:"column",m:1,display:"flex",justifyContent:"center",alignItems:"center",children:[Object(l.jsx)(ce,{value:b,setValue:p,label:"Name"}),h&&Object(l.jsx)(J.a,{}),f&&"stuza"===b&&Object(l.jsx)(Le,{rows:c,columns:Ve})]})})},Ge=new s.QueryClient,We=[{label:"Stuzot Voting",page:ke,key:"voting",icon:Object(l.jsx)(j.a,{},"vote-icon")},{label:"Admin page",page:Ae,key:"admin",icon:Object(l.jsx)(d.a,{},"admin-icon")}];function Qe(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),j=Object(i.a)(c,2),d=j[0],b=j[1],p=Object(a.useState)(""),O=Object(i.a)(p,2),x=O[0],h=O[1],f=Object(a.useState)(null),m=Object(i.a)(f,2),g=m[0],v=m[1],y=function(e){var t=e.message,n=e.severity;b(t),h(n),r(!0)};return Object(a.useEffect)((function(){null===g&&v(Object(l.jsx)(ke,{popUpNotification:y}))}),[g]),Object(l.jsx)(s.QueryClientProvider,{client:Ge,children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(U,{pages:We,setPage:v,popUpNotification:y})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(u,{page:g}),n&&Object(l.jsx)(A,{message:d,severity:x,setNotify:r})]})})}var ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};c.a.render(Object(l.jsx)(Qe,{}),document.getElementById("root")),ze()}},[[127,1,2]]]);
//# sourceMappingURL=main.345fbaed.chunk.js.map