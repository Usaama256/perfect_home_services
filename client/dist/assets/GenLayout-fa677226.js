import{s as r,j as e,a as c,i as l,W as s}from"./index-559316ce.js";const i=()=>e(a,{children:c(l,{to:"/",style:{color:"white",textDecoration:"none",padding:"5px"},children:["Perfect Home Services © ",`${new Date().getFullYear()}`]})}),a=r.div`
  /* height: calc(100vh - 100px); */
  padding: 20px;
  /* background-color: #aa0000; */
  background-color: #000000dd;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: auto;
    text-align: center;
  }
`,d=()=>e("i",{className:"lni lni-chevron-up scroll-top",onClick:()=>{window.scrollTo(0,0)}}),x=({children:o,title:n,nav:h})=>c(p,{onScroll:t=>{console.log(t)},children:[e(s,{children:e("title",{children:n?`${n} | Perfect Home Services`:"Perfect Home Services"})}),o,e(i,{}),e(d,{})]}),p=r.div`
  background: "#fff4f2";
`;export{x as G};
