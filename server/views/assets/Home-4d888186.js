import{r as s,j as e,Z as u,s as l,u as h,a as n,B as g,F as w,b as c,c as y,f as v,d as b}from"./index-559316ce.js";import{G as z}from"./GenLayout-fa677226.js";import{c as N}from"./createSvgIcon-ec21463d.js";import{L as d}from"./LoadingPlaceholder-0e2d79bb.js";const S=N(s.createElement("path",{d:"M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"})),C=({images:t,width:r,height:i,autoplay:o,duration:a,dots:p,style:m})=>e("div",{className:"slide-container",style:{width:r,height:i,margin:0,padding:0,position:"relative",overflow:"hidden",...m},children:e(u,{scale:1.4,duration:a,indicators:p,autoplay:o,canSwipe:!0,arrows:!1,children:t==null?void 0:t.map((f,x)=>e("img",{style:{width:r,height:i,objectFit:"cover"},src:f.src,alt:""},x))})}),j=({id:t,name:r,desc:i,imgs:o})=>{const a=h();return n(k,{children:[e(C,{images:o,width:"100%",height:"320px",autoplay:!0,duration:5e3,dots:!1,style:{borderRadius:"15px"}}),e("h1",{className:"title",children:r}),e("span",{className:"desc",children:i}),e("div",{className:"info",children:e("div",{className:"btnCont",children:e(g,{onClick:()=>a(`/service/${t}`),variant:"outlined",color:"primary",endIcon:e(S,{}),children:"Explore"})})})]})},k=l.div`
  position: relative;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px 40px;
  /* cursor: pointer; */

  /* img {
    width: 100%;
    height: 320px;
    border-radius: 15px;
  } */
  .title {
    margin-top: 15px;
    font-size: 20px;
    font-weight: bold;
    color: #aa0000;
  }

  .desc {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #666;
  }

  .desc {
    text-align: center;
    color: #777;
    font-size: 16px;
  }

  .info {
    opacity: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    /* cursor: pointer; */
    z-index: 3;

    .btnCont {
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.642);
      border-radius: 6px;
    }
  }

  &:hover {
    .info {
      opacity: 1;
    }
    .icon {
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    .info {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.102);
    }

    .title {
      font-size: 16px;
    }

    .desc {
      font-size: 14px;
    }
  }
`,E=({servicesArr:t})=>n(L,{id:"products",children:[e("h1",{className:"title",children:"Where Quality Meets Comfort"}),e("div",{className:"desc",children:"We care for your home like it's our own"}),e("div",{className:"wrapper",children:t?t==null?void 0:t.map((r,i)=>s.createElement(j,{...r,key:i})):n(w,{children:[e(d,{}),e(d,{})]})})]}),L=l.div`
  padding: 100px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4f2;

  .desc {
    text-align: center;
    font-size: 22px;
    color: #444;
    width: 70%;
  }

  .wrapper {
    width: 100%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
`,D=()=>{const{services:t}=c(o=>o.services),{sPs:r}=c(o=>o.sPs),i=y();return s.useEffect(()=>{v(i,!0,t),b(i,!0,r)},[]),e(z,{title:"Home",nav:!0,children:e(E,{servicesArr:t})})};export{D as default};
