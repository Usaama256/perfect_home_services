import{r as p,j as e,aA as M,f as r,aP as X,aQ as _,aR as J,aS as L,aT as V,B as P,aU as R,l as q,m as E,aV as K,aw as Q,aW as H,aX as Y,aY as j,aZ as u,a_ as Z,aJ as ee,I as w,a2 as $,a9 as ie,A as O,T as k,S as v,C as x,a$ as G,ag as N,x as te,y as re,z as ae,G as b,t as D,H as ne,J as le,K as se,M as z,w as S,D as ce,E as oe,k as B,aN as A}from"./index-f05f604f.js";import{d as de,a as ge}from"./KeyboardArrowUp-ef6a96ca.js";import{E as me,A as ue}from"./Edit-fbb8d2c6.js";import{i as he}from"./base64ImgConverter-9cb29916.js";import{C as U}from"./CameraAlt-9e2f1c62.js";import{S as pe}from"./SpAccountSuspended-e0fb7dcb.js";import{C as fe}from"./Container-62f5593e.js";const ye=p.forwardRef(function(a,n){return e(M,{direction:"up",ref:n,...a})}),be=({open:t,setOpen:a,data:n,deleteFn:l})=>{const o=()=>{a(!1)};return e("div",{children:r(X,{open:t,TransitionComponent:ye,keepMounted:!0,onClose:o,"aria-describedby":"alert-dialog-slide-description",children:[e(_,{children:"Confirm Product Delete"}),e(J,{children:r(L,{id:"alert-dialog-slide-description",children:["Product/Service: ",n.name,e("br",{}),"Price: ",n.price?`${n.currency?n.currency:""} ${n.price}`:"NA",e("br",{}),"Description: ",n.desc?n.desc:"NA"]})}),r(V,{children:[e(P,{onClick:o,variant:"outlined",color:"primary",children:"Cancel"}),e(P,{variant:"contained",color:"error",endIcon:e(R,{}),onClick:()=>{l(n.id),o()},children:"Delete Item"})]})]})})},ve={overflow:"hidden",boxShadow:"0px 2px 5px #0000008e",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"center",height:320,width:320},xe=({row:t,isFetching:a,deletePdt:n})=>{var m,i,f;const{enqueueSnackbar:l}=q(),[o,d]=p.useState(!1),[h,g]=p.useState(!1);return r(ee.Fragment,{children:[h&&e(be,{open:h,setOpen:g,data:t,deleteFn:n}),r(j,{sx:{"& > *":{borderBottom:"unset"}},children:[e(u,{children:e(w,{"aria-label":"expand row",size:"small",onClick:()=>d(!o),children:o?e(de,{}):e(ge,{})})}),e(u,{component:"th",scope:"row",children:t.name?t.name:"N/A"}),e(u,{align:"left",children:t.price?`${t.currency?t.currency:""} ${t.price}`:"N/A"}),e(u,{align:"left",children:t.desc?`${((m=t.desc)==null?void 0:m.length)>199?(i=t.desc)==null?void 0:i.subString(0,199):t.desc}`:"N/A"}),r(u,{align:"right",children:[e($,{title:"Edit Product/Service",arrow:!0,children:e(w,{color:"primary",size:"large",disabled:a,onClick:()=>l("Our Engineers Are Working On It",{variant:"info"}),children:e(me,{})})}),"  ",e($,{title:"Delete Product/Service",arrow:!0,children:e(w,{color:"error",size:"large",disabled:a,onClick:()=>g(!0),children:e(R,{})})})]})]}),e(j,{children:e(u,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e(ie,{in:o,timeout:"auto",unmountOnExit:!0,children:r(O,{sx:{margin:1},children:[e("br",{}),e(k,{variant:"h6",gutterBottom:!0,component:"div",children:"Images"}),e("br",{}),r(H,{size:"small","aria-label":"purchases",children:[e(v,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:3,sx:{width:"100%"},children:(f=t.images)==null?void 0:f.map((y,C)=>r(v,{direction:"column",alignItems:"center",justifyContent:"center",spacing:3,children:[e(x,{style:ve,children:y&&e("img",{src:y,alt:"img",style:{width:"100%",height:"100%",objectFit:"cover"}})}),r(k,{variant:"body1",children:["Image ",C+1]})]},C))}),e("br",{})]})]})})})})]})},Ce=({products:t,SPid:a})=>{const{enqueueSnackbar:n}=q(),l=E(),[o,d]=p.useState(!1),h=async g=>{var m;try{n("Please Wait While Deleting Product",{variant:"info"}),d(!0),(await G.get(`/sp.api/deletePdt/${a}/${g}`)).status===200?(n("Product Deleted Successfully",{variant:"success"}),N(a,l)):n("Error: Deleting Failed",{variant:"error"})}catch(i){n("Error: Deleting Failed",{variant:"error"}),n((m=i.response)==null?void 0:m.data,{variant:"error"}),console.log(i),i.response?console.log(i.response,i.message):i.request?i.request.status?console.error(i.message,i.request):console.log(i.request,i.message):console.log(i.message)}finally{d(!1)}};return e(K,{component:Q,children:r(H,{"aria-label":"collapsible table",children:[e(Y,{children:r(j,{children:[e(u,{}),e(u,{children:"Item/Product/Service"}),e(u,{align:"left",children:"Price"}),e(u,{align:"left",children:"Description"}),e(u,{align:"right",children:"Actions"})]})}),e(Z,{children:t==null?void 0:t.map((g,m)=>e(xe,{row:g,isFetching:o,deletePdt:h},m))})]})})},T={overflow:"hidden",boxShadow:"0px 2px 5px #0000008e",display:"flex",alignItems:"center",justifyContent:"center",height:320,width:320},Se=({SPid:t})=>{const{enqueueSnackbar:a}=q(),n=E(),[l,o]=p.useState(!1),[d,h]=p.useState({name:"",price:"",desc:"",currency:""}),[g,m]=p.useState(!1),[i,f]=p.useState({img1:"",img2:"",img3:""}),y=(s,c)=>{s.target.files.length!==0&&(m(!0),a("Please Wait While Uploading Images",{variant:"info"}),he(s.target.files[0]).then(I=>{c===1?(f({...i,img1:I}),m(!1),a("Image 1 Uploaded Successfully",{variant:"success"})):c===2?(f({...i,img2:I}),m(!1),a("Image 1 Uploaded Successfully",{variant:"success"})):c===3&&(f({...i,img3:I}),m(!1),a("Image 1 Uploaded Successfully",{variant:"success"}))})),s.target.value=null},C=async()=>{var s;if(g===!0)a("Please Wait While Uploading Images",{variant:"info"});else if(d.name.length<2)a("Enter A Valid Product/Service Name",{variant:"error"});else try{a("Please wait while adding the New Product",{variant:"info"}),o(!0),(await G.post(`/sp.api/addPdt/${t}`,{...d,imgsArr:[i.img1?i.img1:"",i.img2?i.img2:"",i.img3?i.img3:""]})).status===200?(a("Product/Service Added Successfully",{variant:"success"}),W(),N(t,n)):a("Error: Product/Service Not Added",{variant:"error"})}catch(c){a("Error: Product/Service Not Added",{variant:"error"}),a((s=c.response)==null?void 0:s.data,{variant:"error"}),console.log(c),c.response?console.log(c.response,c.message):c.request?c.request.status?console.error(c.message,c.request):console.log(c.request,c.message):console.log(c.message)}finally{o(!1)}},W=()=>{h({name:"",price:"",desc:"",currency:"",imagesArr:[]}),f({img1:"",img2:"",img3:""})};return r(x,{children:[e(re,{title:"Add Product / Service"}),e(ae,{sx:{pt:0},children:e(O,{sx:{margin:"20px 0px 10px 0px"},children:r(b,{container:!0,spacing:3,columns:12,children:[e(b,{item:!0,xs:12,md:6,children:e(D,{fullWidth:!0,label:"Product/Service Name",required:!0,value:d.name,onChange:s=>h({...d,name:s.target.value}),disabled:l})}),e(b,{item:!0,xs:12,md:3,children:e(D,{fullWidth:!0,label:"Price",value:d.price,onChange:s=>h({...d,price:s.target.value}),disabled:l})}),e(b,{item:!0,xs:12,md:3,children:r(ne,{sx:{m:1,width:"100%",margin:"0px 0px",flex:1},size:"large",children:[e(le,{id:"select-small",children:"Currency"}),r(se,{labelId:"select-small",id:"select-small",value:d.currency,label:"currency",onChange:s=>h({...d,currency:s.target.value}),disabled:l,children:[e(z,{value:"UGX",children:" UGX"}),e(z,{value:"USD",children:"USD"})]})]})}),e(b,{item:!0,xs:12,md:12,children:e(D,{fullWidth:!0,label:"Description",helperText:"Not More than 100 words",multiline:!0,rows:4,required:!0,value:d.desc,onChange:s=>h({...d,desc:s.target.value}),disabled:l})}),e(b,{item:!0,xs:12,md:12,children:r(v,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:3,sx:{width:"100%"},children:[r(v,{direction:"column",alignItems:"center",justifyContent:"center",gap:1,children:[e(x,{style:T,children:i.img1&&e("img",{src:i.img1,alt:"img",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e("input",{style:{display:"none"},type:"file",id:"img1Upload",disabled:l||g,name:"imageUpload",accept:"image/*",onChange:s=>y(s,1)}),e("label",{htmlFor:"img1Upload",disabled:l||g,children:r(F,{children:["Upload Image One",e(S,{size:"large",children:e(U,{})})]})})]}),r(v,{direction:"column",alignItems:"center",justifyContent:"center",gap:1,children:[e(x,{style:T,children:i.img2&&e("img",{src:i.img2,alt:"img",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e("input",{style:{display:"none"},type:"file",id:"img2Upload",disabled:l||g||i.img1.length===0,name:"imageUpload",accept:"image/*",onChange:s=>y(s,2)}),e("label",{htmlFor:"img2Upload",disabled:l||g||i.img1.length===0,children:r(F,{children:["Upload Image Two",e(S,{size:"large",children:e(U,{})})]})})]}),r(v,{direction:"column",alignItems:"center",justifyContent:"center",gap:1,children:[e(x,{style:T,children:i.img3&&e("img",{src:i.img3,alt:"img",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e("input",{style:{display:"none"},type:"file",id:"img3Upload",disabled:l||g||i.img2.length===0,name:"imageUpload",accept:"image/*",onChange:s=>y(s,3)}),e("label",{htmlFor:"img3Upload",disabled:l||g||i.img2.length===0,children:r(F,{children:["Upload Image Three",e(S,{size:"large",children:e(U,{})})]})})]})]})})]})})}),e(ce,{}),r(oe,{sx:{justifyContent:"flex-end"},children:[e(P,{variant:"outlined",color:"secondary",disabled:l,onClick:()=>W(),children:"Reset Fields"}),e(P,{variant:"contained",color:"primary",endIcon:e(S,{size:"small",children:e(ue,{})}),disabled:l,onClick:()=>C(),children:"Add"})]})]})},F=te.div`
  margin: 10px 10px;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.3s linear;
  background-color: rgba(0, 0, 0, 0);
  border: 0.5px solid #2064d17c;
  color: #2065d1;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* text-transform: uppercase; */

  &:hover {
    background-color: #2064d114;
    border: 1px solid #114fb2;
  }
`,Fe=()=>{const{user:t}=B(o=>o.user),{products:a}=B(o=>o.spData),n=E(),l=t.status==="active";return p.useEffect(()=>{N(t.id,n)},[]),r(fe,{maxWidth:"xl",children:[e(k,{variant:"h4",sx:{mb:5},children:"Products / Services"}),l===!1&&e(pe,{}),r(A,{container:!0,spacing:3,children:[e(A,{item:!0,xs:12,md:12,lg:12,children:e(Ce,{products:a,SPid:t.id})}),e(A,{item:!0,xs:12,md:12,lg:12,children:e(Se,{SPid:t.id})})]})]})};export{Fe as default};
