import{s as l,r as a,j as o}from"./index-559316ce.js";const g=({placeholder:t,src:e,...i})=>{const[r,n]=a.useState(t);return a.useEffect(()=>{const s=new Image;s.src=e,s.onload=()=>{n(e)}},[e]),o(c,{src:r,...i,alt:i.alt||"",notSet:r===t})},c=l.img`
  //filter: blur(0px);
  transition: filter 0.5s linear;
  ${({notSet:t})=>t?{objectFit:"contain"}:{objectFit:"fill"}}/* .loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  .loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  } */
`;export{g as P};
