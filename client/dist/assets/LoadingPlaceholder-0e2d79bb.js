import{o as R,n as _,Y as C,p as $,_ as r,P as S,$ as g,r as U,q as M,t as j,j as n,v as A,x as P,s as X,a as L}from"./index-559316ce.js";function N(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function B(t){return parseFloat(t)}function F(t){return R("MuiSkeleton",t)}_("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const K=["animation","className","component","height","style","variant","width"];let l=t=>t,m,f,v,b;const T=t=>{const{classes:a,variant:e,animation:i,hasChildren:o,width:d,height:s}=t;return P({root:["root",e,i,o&&"withChildren",o&&!d&&"fitContent",o&&!s&&"heightAuto"]},F,a)},W=C(m||(m=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),q=C(f||(f=l`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),E=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const e=N(t.shape.borderRadius)||"px",i=B(t.shape.borderRadius);return r({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:S(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${e}/${Math.round(i/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(v||(v=l`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),W),({ownerState:t,theme:a})=>t.animation==="wave"&&g(b||(b=l`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),q,(a.vars||a).palette.action.hover)),O=U.forwardRef(function(a,e){const i=M({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:d,component:s="span",height:c,style:k,variant:w="text",width:y}=i,u=j(i,K),p=r({},i,{animation:o,component:s,variant:w,hasChildren:!!u.children}),x=T(p);return n(E,r({as:s,ref:e,className:A(x.root,d),ownerState:p},u,{style:r({width:y,height:c},k)}))}),h=O,z=()=>L(V,{children:[n(h,{variant:"rounded",width:"100%",height:100}),n("br",{}),n(h,{animation:"wave",variant:"rounded",width:"100%",height:80}),n("br",{}),n(h,{animation:!1,width:"100%",height:50,variant:"rounded"})]}),V=X.div``;export{z as L};
