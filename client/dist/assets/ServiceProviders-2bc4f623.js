import{u as L,a as n,j as e,E as k,h as g,G as T,S as v,D as A,b as E,V as B,c as M,g as O,r as o,d as G,F as y,T as W,M as F,s as P,X as $}from"./index-559316ce.js";import{G as H}from"./GenLayout-fa677226.js";import{P as K}from"./ProgressiveImage-db1fb5f0.js";import{C as V}from"./Card-2c90ac9f.js";import{C as X}from"./CardContent-e3b9abf5.js";import{L as Y,S as J,C as Q,a as U}from"./CircularLoader-7c1da3ec.js";import{L as p}from"./LoadingPlaceholder-0e2d79bb.js";import{C as Z}from"./Close-e1edc6ff.js";import{F as _,I as ee,S as re}from"./Select-3d2ee0e4.js";import"./createSvgIcon-ec21463d.js";import"./useFormControl-ad3eb840.js";const te=({id:c,title:d,logo:m,desc:a,rating:h,location:x,sx:i})=>{const l=L();return n(V,{sx:{display:"flex",flexDirection:"column",height:"100%",borderRadius:"6px",background:"rgba(0, 0, 0, 0)",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.1)","&:hover":{boxShadow:"0 5px 15px rgba(0, 0, 0, 0.3)"},svg:{color:"#aa0000"}},children:[n(X,{children:[e(k,{sx:{display:"flex",justifyContent:"center"},children:e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100px",height:"100px",overflow:"hidden"},children:e(K,{src:m,width:100,style:{cursor:"pointer"},onClick:()=>l(`/services/provider/${c}`)})})}),e(g,{align:"center",gutterBottom:!0,variant:"h5",sx:{cursor:"pointer",fontsize:"20px",fontWeight:"bold",color:"#AA0000"},onClick:()=>l(`/services/provider/${c}`),children:d}),e(g,{align:"center",variant:"body1",sx:{fontsize:"16px",fontWeight:"bold",color:"#666"},children:(a==null?void 0:a.length)<100?a:`${a==null?void 0:a.substring(0,100)}...`})]}),e(k,{sx:{flexGrow:1}}),e(T,{style:{color:"#AA0000 !important"}}),n(v,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:2},children:[n(v,{alignItems:"center",direction:"row",spacing:1,children:[e(A,{color:"action",fontSize:"small",children:e(Y,{style:{color:"#AA0000 !important"}})}),e(g,{color:"text.secondary",display:"inline",variant:"body2",children:x})]}),n(v,{alignItems:"center",direction:"row",spacing:1,children:[e(A,{color:"action",fontSize:"small",children:e(J,{style:{color:"#AA0000 !important"}})}),e(g,{color:"text.secondary",display:"inline",variant:"body2",children:h==null?void 0:h.value})]})]})]})},xe=()=>{const{services:c}=E(r=>r.services),{sPs:d,isFetching:m}=E(r=>r.sPs),a=B().pathname.split("/")[2],h=L(),x=M(),{enqueueSnackbar:i}=O(),[l,z]=o.useState(null),[u,j]=o.useState(null),[S,q]=o.useState(""),[b,f]=o.useState(!1),[w,C]=o.useState(!1),[ne,D]=o.useState(null);o.useEffect(()=>{if(a&&d){const r=[];d.forEach((s,t)=>{if(parseInt(s.sId,10)===parseInt(a,10))return r.push(s)}),j(r)}G(x,!0,d)},[a,d]),o.useEffect(()=>{if(a&&c){const r=c.findIndex(s=>parseInt(s.id,10)===parseInt(a,10));r===-1?h("/404"):z(c[r])}},[a,c]);const I=async r=>{const s=new AbortController;try{if((r==null?void 0:r.length)>1){C(!0);const t=await $.get("",{signal:s.signal});t.status===200?(f(!0),D(t.data.filtered)):(console.log("Search Failed: E42174"),i("Search Failed: E42174",{variant:"error"}))}else i("Search with at least 2 characters",{variant:"warning"})}catch(t){console.error("Error: Search Failed"),i("Error: Search Failed",{variant:"error"}),t.response?(console.log(t.response,t.message),i(t.response.data,{variant:"error"})):t.request?t.request.status?(console.error(t.message,t.request),i(t.request.response,{variant:"error"})):(console.log(t.request,t.message),i("Connection Failed Or Refused",{variant:"error"})):(console.log(t.message),i(t.message,{variant:"error"}))}finally{C(!1)}return()=>s.abort()},N=r=>{const s=r.target.value;r.key==="Enter"&&((s==null?void 0:s.length)>1?I(s):f(!1)),r.key==="Escape"&&f(!1)},R=()=>{if(S.length>1)I(S);else return};return e(H,{title:l==null?void 0:l.name,nav:!0,children:n(ae,{children:[e("h1",{className:"title",children:l?l.name:""}),e("div",{className:"desc",children:"Check Out Our Trusted Service Providers"}),e("div",{className:"desc-extra",children:`"We care for your home like it's our own"`}),n(se,{children:[e("input",{type:"search",placeholder:"Search",onKeyDown:r=>N(r),onChange:r=>q(r.target.value)}),w?e(Q,{size:25,color:"primary"}):e(y,{children:!b&&e(U,{style:{cursor:"pointer"},onClick:()=>R()})}),!w&&b&&e(W,{title:"Close Search",arrow:!0,children:e(Z,{onClick:()=>f(!1),style:{color:"red"}})}),n(_,{sx:{m:1,width:"100%",margin:"10px 0px",flex:1},size:"small",children:[e(ee,{id:"select-small",children:"Search By"}),n(re,{labelId:"select-small",id:"select-small",value:"",label:"filterBy",children:[e(F,{value:"Any",children:"Any"}),e(F,{value:"Location",children:"Location"})]})]})]}),!u&&!m&&e("h2",{style:{margin:"20px 0px"},children:"No Service Providers Yet"}),e("div",{className:"wrapper",children:u?u==null?void 0:u.map((r,s)=>o.createElement(te,{...r,key:s})):e(y,{children:m&&n(y,{children:[e(p,{}),e(p,{}),e(p,{}),e(p,{}),e(p,{}),e(p,{})]})})})]})})},ae=P.div`
  padding: 100px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4f2;

  .title {
    text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
    color: #aa0000;
  }

  .desc {
    text-align: center;
    font-size: 22px;
    margin-bottom: 10px;
    color: #444;
    width: 70%;
  }

  .desc-extra {
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    color: #444;
    width: 70%;
  }

  .wrapper {
    width: 78%;
    margin-top: 18px;
    /* padding: 0px 160px; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
    .title {
      text-align: center;
    }

    .desc {
      width: 90%;
    }
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`,se=P.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #666;
  gap: 1rem;
  padding: 6px 10px;
  margin-top: 18px;
  border-radius: 6px;
  svg {
    color: #aa0000;
    cursor: pointer;
    &:hover {
      color: #666;
    }
  }
  input {
    flex: 3;
    background-color: transparent;
    border: 0.4px solid #345;
    border-radius: 4px;
    padding: 10px;
    color: #666;
    letter-spacing: 0.2rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #666;
      font-family: "Montserrat", sans-serif;
    }
  }
`;export{xe as default};
