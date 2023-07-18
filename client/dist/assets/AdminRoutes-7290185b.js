import{c as G,j as e,r as a,f as i,Y as k,I as _,Z as I,ao as F,a0 as N,A as p,T as m,D as A,S as T,M as E,o as Y,a1 as K,a2 as q,a3 as R,B as Z,$ as ce,a4 as de,s as v,a5 as P,k as J,n as he,a6 as Q,a7 as X,a8 as pe,a9 as ue,aa as V,ab as me,p as ge,L as ve,ac as ye,W as be,ad as y,ae as b,m as fe,ap as xe,aq as _e,ar as Se,aj as Ae,ak as u,am as g,an as $}from"./index-f05f604f.js";import{P as Re,S as Pe,s as ke,B as Ie,N as Te,D as we,a as ee,L as W,b as te,c as Oe,d as S,A as Le,n as Ce,e as Ee,T as De,M as Ne,f as ze,g as Be,h as He,i as j,j as Me,I as Ve}from"./Scrollbar-44e737fa.js";import{u as $e}from"./useRsponsive-cf31696a.js";const We=G(e("path",{d:"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"}),"Business"),je=G([e("path",{fillRule:"evenodd",d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"},"0"),e("circle",{cx:"9",cy:"8",r:"4",fillRule:"evenodd"},"1"),e("path",{fillRule:"evenodd",d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"},"2")],"PeopleAlt"),Ue=[{label:"Home",icon:e(K,{}),linkTo:"/admin/dash/home"},{label:"Profile",icon:e(Re,{}),linkTo:"/admin/dash/profile"},{label:"Settings",icon:e(Pe,{}),linkTo:"/admin/dash/settings"}],Ge=({user:t,openLogout:n})=>{const l=a.useRef(null),[r,o]=a.useState(null),h=s=>{o(s.currentTarget)},c=()=>{o(null)};return i(k,{children:[e(_,{ref:l,onClick:h,sx:{p:0,...r&&{"&:before":{zIndex:1,content:"''",width:"100%",height:"100%",borderRadius:"50%",position:"absolute",bgcolor:s=>I(s.palette.grey[900],.8)}}},children:e(F,{name:`${t.firstName} ${t.lastName}`})}),i(N,{open:!!r,anchorEl:r,onClose:c,sx:{p:0,mt:1.5,ml:.75,"& .MuiMenuItem-root":{typography:"body2",borderRadius:.75}},children:[i(p,{sx:{my:1.5,px:2.5},children:[e(m,{variant:"subtitle2",noWrap:!0,children:t.firstName}),e(m,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:t.email})]}),e(A,{sx:{borderStyle:"dashed"}}),e(T,{sx:{p:1},children:Ue.map(s=>e(E,{to:s.linkTo,component:Y,onClick:c,children:s.label},s.label))}),e(A,{sx:{borderStyle:"dashed"}}),e(E,{onClick:()=>{n(),c()},sx:{m:1},children:"Logout"})]})]})},O=[{value:"en",label:"English",icon:"/static/icons/ic_flag_en.svg"},{value:"ug",label:"Luganda",icon:"/static/icons/ic_flag_ug.svg"},{value:"de",label:"German",icon:"/static/icons/ic_flag_de.svg"},{value:"fr",label:"French",icon:"/static/icons/ic_flag_fr.svg"}],Fe=()=>{const[t,n]=a.useState(O[0]),l=a.useRef(null),[r,o]=a.useState(!1),h=()=>{o(!0)},c=s=>{o(!1)};return i(k,{children:[e(_,{ref:l,onClick:h,sx:{padding:0,width:44,height:44,...r&&{bgcolor:s=>I(s.palette.primary.main,s.palette.action.focusOpacity)}},children:e("img",{src:t==null?void 0:t.icon,alt:t==null?void 0:t.label,style:(t==null?void 0:t.value)==="ug"?{width:"28px",height:"20px",borderRadius:"4px"}:{}})}),e(N,{open:r,onClose:c,anchorEl:l.current,sx:{mt:1.5,ml:.75,width:180,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75}},children:e(T,{spacing:.75,children:O.map(s=>i(E,{selected:s.value===O[0].value,onClick:()=>{n(s),c()},children:[e(p,{component:"img",alt:s.label,src:s.icon,sx:{width:28,mr:2}}),s.label]},s.value))})})]})},Ye=[{id:"12er432",title:"Notifications",description:"You have no notifications to display",avatar:null,type:"chat_message",createdAt:ke(new Date,{hours:0,minutes:1}),isUnRead:!0}],Ke=()=>{const t=a.useRef(null),[n,l]=a.useState(Ye),r=n.filter(d=>d.isUnRead===!0).length,[o,h]=a.useState(null),c=d=>{h(d.currentTarget)},s=()=>{h(null)},x=()=>{l(n.map(d=>({...d,isUnRead:!1})))};return i(k,{children:[e(_,{ref:t,color:o?"primary":"default",onClick:c,sx:{width:40,height:40},children:e(Ie,{badgeContent:r,color:"error",children:e(Te,{width:20,height:20})})}),i(N,{open:!!o,anchorEl:o,onClose:s,sx:{width:360,p:0,mt:1.5,ml:.75},children:[i(p,{sx:{display:"flex",alignItems:"center",py:2,px:2.5},children:[i(p,{sx:{flexGrow:1},children:[e(m,{variant:"subtitle1",children:"Notifications"}),i(m,{variant:"body2",sx:{color:"text.secondary"},children:["You have ",r," unread messages"]})]}),r>0&&e(q,{title:" Mark all as read",children:e(_,{color:"primary",onClick:x,children:e(we,{width:20,height:20})})})]}),e(A,{sx:{borderStyle:"dashed"}}),i(ee,{sx:{height:{xs:340,sm:"auto"}},children:[e(R,{disablePadding:!0,subheader:e(W,{disableSticky:!0,sx:{py:1,px:2.5,typography:"overline"},children:"New"}),children:n.slice(0,2).map(d=>e(U,{notification:d},d.id))}),e(R,{disablePadding:!0,subheader:e(W,{disableSticky:!0,sx:{py:1,px:2.5,typography:"overline"},children:"Before that"}),children:n.slice(2,5).map(d=>e(U,{notification:d},d.id))})]}),e(A,{sx:{borderStyle:"dashed"}}),e(p,{sx:{p:1},children:e(Z,{fullWidth:!0,disableRipple:!0,children:"View All"})})]})]})},U=({notification:t})=>{const{avatar:n,title:l}=qe(t);return i(te,{sx:{py:1.5,px:2.5,mt:"1px",...t.isUnRead&&{bgcolor:"action.selected"}},children:[e(Oe,{children:e(ce,{sx:{bgcolor:"background.neutral"},children:n})}),e(S,{primary:l,secondary:i(m,{variant:"caption",sx:{mt:.5,display:"flex",alignItems:"center",color:"text.disabled"},children:[e(Le,{sx:{mr:.5,width:16,height:16}}),de(t.createdAt)]})})]})},qe=t=>{const n=i(m,{variant:"subtitle2",children:[t.title,i(m,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["  ",Ce(t.description)]})]});return t.type==="order_placed"?{avatar:e("img",{alt:t.title,src:"/static/icons/ic_notification_package.svg"}),title:n}:t.type==="order_shipped"?{avatar:e("img",{alt:t.title,src:"/static/icons/ic_notification_shipping.svg"}),title:n}:t.type==="mail"?{avatar:e("img",{alt:t.title,src:"/static/icons/ic_notification_mail.svg"}),title:n}:t.type==="chat_message"?{avatar:e("img",{alt:t.title,src:"/static/icons/ic_notification_chat.svg"}),title:n}:{avatar:t.avatar?e("img",{alt:t.title,src:t.avatar}):null,title:n}},ae=({onOpenSidebar:t})=>{const{user:n}=J(h=>h.user),l=he(),[r,o]=a.useState(!1);return i(Xe,{children:[r&&e(Q,{open:r,setOpen:o}),i(et,{children:[e(_,{onClick:t,sx:{mr:1,color:"text.primary",display:{lg:"none"}},children:e(Ne,{})}),e(m,{color:"text.primary",variant:"h4",children:"Admin Section"}),e(p,{sx:{flexGrow:1}}),i(T,{direction:"row",alignItems:"center",spacing:{xs:.5,sm:1.5},children:[e(q,{title:"Landing Page",arrow:!0,children:e(_,{onClick:()=>l("/"),sx:{padding:0,width:44,height:44},children:e(K,{})})}),e(Fe,{}),e(Ke,{}),e(Ge,{user:n,openLogout:()=>o(!0)})]})]})]})},Ze=280,Je=64,Qe=92,Xe=v(Ee)(({theme:t})=>({boxShadow:"none",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:I(t.palette.background.default,.72),[t.breakpoints.up("lg")]:{width:`calc(100% - ${Ze+1}px)`}})),et=v(De)(({theme:t})=>({minHeight:Je,[t.breakpoints.up("lg")]:{minHeight:Qe,padding:t.spacing(0,5)}}));ae.propTypes={onOpenSidebar:P.func};const L=v(t=>e(te,{disableGutters:!0,...t}))(({theme:t})=>({...t.typography.body2,height:48,position:"relative",textTransform:"capitalize",color:t.palette.text.secondary,borderRadius:t.shape.borderRadius})),C=v(ze)({width:22,height:22,color:"inherit",display:"flex",alignItems:"center",justifyContent:"center"});ne.propTypes={item:P.object,active:P.func};function ne({item:t,active:n}){const l=pe(),r=n(t.path),{title:o,path:h,icon:c,info:s,children:x}=t,[d,se]=a.useState(r),re=()=>{se(w=>!w)},z={color:"primary.main",fontWeight:"fontWeightMedium",bgcolor:I(l.palette.primary.main,l.palette.action.selectedOpacity)},oe={color:"text.primary",fontWeight:"fontWeightMedium"};return x?i(k,{children:[i(L,{onClick:re,sx:{...r&&z},children:[e(C,{children:c&&c}),e(S,{disableTypography:!0,primary:o}),s&&s,d?e(Be,{}):e(He,{})]}),e(ue,{in:d,timeout:"auto",unmountOnExit:!0,children:e(R,{component:"div",disablePadding:!0,children:x.map(w=>{const{title:B,path:H}=w,M=n(H);return i(L,{component:V,to:H,sx:{...M&&oe},children:[e(C,{children:e(p,{component:"span",sx:{width:4,height:4,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",bgcolor:"text.disabled",transition:le=>le.transitions.create("transform"),...M&&{transform:"scale(2)",bgcolor:"primary.main"}}})}),e(S,{disableTypography:!0,primary:B})]},B)})})})]}):i(L,{component:V,to:h,sx:{...r&&z},children:[e(C,{children:c&&c}),e(S,{disableTypography:!0,primary:o}),s&&s]})}const ie=({navConfig:t,...n})=>{const{pathname:l}=X(),r=o=>o?!!me({path:o,end:!1},l):!1;return e(p,{...n,children:e(R,{disablePadding:!0,sx:{p:1},children:t.map(o=>e(ne,{item:o,active:r},o.title))})})};ie.propTypes={navConfig:P.array};const tt=[{title:"dashboard",path:"/admin/dash/home",icon:e(Me,{width:22,height:22})},{title:"Services",path:"/admin/dash/services",icon:e(Ve,{width:22,height:22})},{title:"service providers",path:"/admin/dash/sps",icon:e(We,{width:22,height:22})},{title:"clients",path:"/admin/dash/users",icon:e(je,{width:22,height:22})}],at=({isOpenSidebar:t,onCloseSidebar:n})=>{const{user:l}=J(x=>x.user),{pathname:r}=X(),[o,h]=a.useState(!1),c=$e("up","lg");a.useEffect(()=>{t&&n()},[r]);const s=i(ee,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:[o&&e(Q,{open:o,setOpen:h}),e(p,{sx:{px:2.5,py:3,display:"inline-flex"},children:e("img",{src:ge,alt:"alt",width:"100%"})}),e(p,{sx:{mb:5,mx:2.5},children:e(ve,{underline:"none",component:Y,to:"/admin/dash/profile",children:i(it,{children:[e(F,{name:`${l.firstName} ${l.lastName}`}),i(p,{sx:{ml:2},children:[i(m,{variant:"subtitle2",sx:{color:"text.primary"},children:[l.firstName," ",l.lastName]}),e(m,{variant:"body2",sx:{color:"text.secondary"},children:"Admin"})]})]})})}),e(ie,{navConfig:tt}),e(p,{sx:{flexGrow:1}}),e(p,{sx:{px:2.5,pb:3,mt:10},children:e(T,{alignItems:"center",spacing:3,sx:{pt:5,borderRadius:2,position:"relative"},children:e(Z,{variant:"outlined",color:"primary",startIcon:e(ye,{}),onClick:()=>h(!0),children:"Log Out"})})})]});return i(nt,{children:[!c&&e(j,{open:t,onClose:n,PaperProps:{sx:{width:D}},children:s}),c&&e(j,{open:!0,variant:"persistent",PaperProps:{sx:{width:D,bgcolor:"background.default",borderRightStyle:"dashed"}},children:s})]})},D=280,nt=v("div")(({theme:t})=>({[t.breakpoints.up("lg")]:{flexShrink:0,width:D}})),it=v("div")(({theme:t})=>({display:"flex",alignItems:"center",padding:t.spacing(2,2.5),borderRadius:Number(t.shape.borderRadius)*1.5,backgroundColor:t.palette.grey[50012]})),st=64,rt=92,ot=v("div")({display:"flex",minHeight:"100%",overflow:"hidden"}),lt=v("div")(({theme:t})=>({flexGrow:1,overflow:"auto",minHeight:"100%",paddingTop:st+24,paddingBottom:t.spacing(10),[t.breakpoints.up("lg")]:{paddingTop:rt+24,paddingLeft:t.spacing(2),paddingRight:t.spacing(2)}})),f=({children:t,title:n})=>{const[l,r]=a.useState(!1);return i(ot,{children:[e(be,{children:e("title",{children:n?`${n} | Perfect Home Services`:"Perfect Home Services"})}),e(ae,{onOpenSidebar:()=>r(!0)}),e(at,{isOpenSidebar:l,onCloseSidebar:()=>r(!1)}),e(lt,{children:t})]})},ct=a.lazy(()=>y(()=>b(()=>import("./Page404-9aa4f28b.js"),["assets/Page404-9aa4f28b.js","assets/index-f05f604f.js","assets/index-1057d608.css","assets/Container-62f5593e.js"]))),dt=a.lazy(()=>y(()=>b(()=>import("./AdminHome-980b43ee.js"),["assets/AdminHome-980b43ee.js","assets/index-f05f604f.js","assets/index-1057d608.css","assets/formatNumber-a66c0ac6.js","assets/Scrollbar-44e737fa.js","assets/Chip-fe8d64fd.js","assets/ArrowForwardIos-88ea5213.js","assets/Container-62f5593e.js","assets/useRsponsive-cf31696a.js"]))),ht=a.lazy(()=>y(()=>b(()=>import("./Services-6da9d33d.js"),["assets/Services-6da9d33d.js","assets/index-f05f604f.js","assets/index-1057d608.css","assets/KeyboardArrowUp-ef6a96ca.js","assets/Edit-fbb8d2c6.js","assets/Scrollbar-44e737fa.js","assets/base64ImgConverter-9cb29916.js","assets/CameraAlt-9e2f1c62.js","assets/Container-62f5593e.js"]))),pt=a.lazy(()=>y(()=>b(()=>import("./ServiceProviders-8b072baf.js"),["assets/ServiceProviders-8b072baf.js","assets/index-f05f604f.js","assets/index-1057d608.css","assets/Scrollbar-44e737fa.js","assets/KeyboardArrowUp-ef6a96ca.js","assets/Chip-fe8d64fd.js","assets/Container-62f5593e.js"]))),ut=a.lazy(()=>y(()=>b(()=>import("./Users-6eba86a6.js"),["assets/Users-6eba86a6.js","assets/index-f05f604f.js","assets/index-1057d608.css","assets/Scrollbar-44e737fa.js","assets/Chip-fe8d64fd.js","assets/Container-62f5593e.js"]))),mt=a.lazy(()=>y(()=>b(()=>import("./User-071a7c51.js"),["assets/User-071a7c51.js","assets/index-f05f604f.js","assets/index-1057d608.css","assets/SpContactSummary-20a76b7c.js","assets/Scrollbar-44e737fa.js","assets/Chip-fe8d64fd.js","assets/ReviewsTb-784c959e.js","assets/Container-62f5593e.js"]))),gt=a.lazy(()=>y(()=>b(()=>import("./Settings-73f319ca.js"),["assets/Settings-73f319ca.js","assets/index-f05f604f.js","assets/index-1057d608.css","assets/Container-62f5593e.js"]))),vt=a.lazy(()=>y(()=>b(()=>import("./Profile-c6fbe792.js"),["assets/Profile-c6fbe792.js","assets/index-f05f604f.js","assets/index-1057d608.css"]))),yt=()=>{const t=fe();return a.useEffect(()=>{xe(t),_e(t),Se(t)},[]),i(Ae,{children:[e(u,{path:"/home",element:e(f,{title:"Admin Home",children:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(dt,{})})})}),e(u,{path:"/services",element:e(f,{title:"Admin Services",children:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(ht,{})})})}),e(u,{path:"/sps/*",element:e(f,{title:"Admin SPs",children:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(pt,{})})})}),e(u,{path:"/users",element:e(f,{title:"Admin Clients",children:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(ut,{})})})}),e(u,{path:"/user/:id",element:e(f,{title:"Admin Clients",children:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(mt,{})})})}),e(u,{path:"/settings",element:e(f,{title:"Admin Settings",children:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(gt,{})})})}),e(u,{path:"/profile",element:e(f,{title:"Admin Account",children:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(vt,{})})})}),e(u,{path:"/",element:e($,{to:"/admin/dash/home"})}),e(u,{path:"/404",element:e(a.Suspense,{fallback:e("div",{children:e(g,{})}),children:e(ct,{src:"ad"})})}),e(u,{path:"*",element:e($,{to:"/admin/dash/404"})})]})},_t=Object.freeze(Object.defineProperty({__proto__:null,default:yt},Symbol.toStringTag,{value:"Module"}));export{_t as A,We as B,je as P};
