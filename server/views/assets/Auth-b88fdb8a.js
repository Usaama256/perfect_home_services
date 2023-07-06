import{e as g,j as e,u as k,c as y,b as C,g as S,r as h,a as s,T as z,S as A,h as N,L as I,i as d,s as L,k as M,l as P,m as X}from"./index-559316ce.js";import{C as U}from"./Checkbox-b5882623.js";import"./useFormControl-ad3eb840.js";const j=g(e("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),D=g(e("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook"),E=g(e("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google"),F=g(e("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter"),B=({type:t})=>{const p=k(),f=y(),i=C(a=>a.user.isFetching),{enqueueSnackbar:o}=S(),[u,m]=h.useState(null),[n,l]=h.useState({email:"",phone:"",location:"",pass:"",pass2:"",profilePic:""}),[r,v]=h.useState({email:"",pass:""}),[c,x]=h.useState(!1),b=a=>{a.preventDefault(),n.location.length<1||n.phone.length<1||n.location===""||n.pass.length<1||n.pass2.length<1?o("Enter All Fields",{variant:"error"}):n.pass!==n.pass2?o("Make Sure Passwords match",{variant:"error"}):c===!1?o("You must agree to our terms and conditions to continue",{variant:"warning"}):(o("Wait A Moment",{variant:"info"}),M(n,f,p,o))},w=a=>{a.preventDefault(),t==="admin"?r.email===""||r.pass===""?o("Enter All Fields",{variant:"error"}):(o("Wait A Moment",{variant:"info"}),P(r,f,p,o)):t==="user"&&(r.email===""||r.pass===""?o("Enter All Fields",{variant:"error"}):(o("Wait A Moment",{variant:"info"}),X(r,"email",f,p,o)))};return e(W,{type:t,children:s("div",{className:`container ${u}`,id:"container",children:[e("div",{className:`arrow-back ${u&&"arrow-back-white"}`,children:e(z,{title:"Back",arrow:!0,children:e(j,{onClick:()=>p("/")})})}),e("div",{className:"form-container sign-up-container",children:s("form",{action:"#",children:[e("h1",{children:"Create User Account"}),e("span",{children:"Enter Your Details"}),e("input",{type:"email",placeholder:"Email",value:n.email,onChange:a=>l({...n,email:a.target.value}),disabled:i}),e("input",{type:"text",placeholder:"Phone Number",value:n.phone,onChange:a=>l({...n,phone:a.target.value}),disabled:i}),e("input",{type:"text",placeholder:"Location",value:n.location,onChange:a=>l({...n,location:a.target.value}),disabled:i}),e("input",{type:"password",placeholder:"Password",value:n.pass,onChange:a=>l({...n,pass:a.target.value}),disabled:i}),e("input",{type:"password",placeholder:"Re-type Password",value:n.pass2,onChange:a=>l({...n,pass2:a.target.value}),disabled:i}),s(A,{width:"100%",direction:"row",justifyContent:"",alignItems:"center",spacing:3,padding:"10px 0px",children:[e(U,{checked:c,onChange:()=>x(!c)}),s(N,{onClick:()=>x(!c),sx:{cursor:"pointer",margin:"0px !important",textAlign:"left"},children:["I agree to the"," ",e(I,{variant:"subtitle1",component:d,to:"#",sx:{color:"#3f42ff",fontWeight:700},children:"PerfectHome Services terms and conditions"})]})]}),e("button",{onClick:b,disabled:!c||i,children:"Sign Up"})]})}),e("div",{className:"form-container sign-in-container",children:s("form",{action:"#",children:[e("h1",{children:t==="admin"?"Admin Login":"User Login"}),s("div",{className:"social-container",children:[e(d,{to:()=>!1,className:"social",children:e(E,{})}),e(d,{to:()=>!1,className:"social",children:e(D,{})}),e(d,{to:()=>!1,className:"social",children:e(F,{})})]}),e("span",{children:"or use your account"}),e("input",{type:"email",placeholder:"Email",value:r.email,onChange:a=>v({...r,email:a.target.value}),disabled:i}),e("input",{type:"password",placeholder:"Password",value:r.pass,onChange:a=>v({...r,pass:a.target.value}),disabled:i}),e(d,{to:()=>!1,children:"Forgot your password?"}),e("button",{onClick:w,disabled:i,children:"Sign In"})]})}),e("div",{className:"overlay-container",children:s("div",{className:"overlay",children:[s("div",{className:"overlay-panel overlay-left",children:[e("h1",{children:"Welcome Back!"}),e("p",{children:"Plenty of home services under one roof. Please login with your personal info. You’re in good hands with us."}),e("button",{className:"ghost",id:"signIn",onClick:()=>m(""),disabled:i,children:"Sign In"})]}),s("div",{className:"overlay-panel overlay-right",children:[e("h1",{children:"Perfect Home Services"}),e("p",{children:"Where Quality Meets Comfort"}),t!=="admin"&&e("button",{className:"ghost",id:"signUp",onClick:()=>m("right-panel-active"),disabled:t==="admin"?!0:i,children:"Sign Up"})]})]})})]})})},W=L.div`
  background: ${({type:t})=>{if(t==="user")return"rgba(0, 0, 0, 0)";if(t==="admin")return"linear-gradient(to right, #aa0000, #f82828)"}};
  background: ${({type:t})=>{if(t==="user")return"rgba(0, 0, 0, 0)";if(t==="admin")return"-webkit-linear-gradient(to right, #aa0000, #f82828)"}};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  min-width: 100vw;
  //margin: -20px 0 50px;

  h1 {
    font-weight: bold;
    margin: 0;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }

  span {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    border-radius: 20px;
    border: 1px solid #aa0000;
    background-color: #aa0000;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }

  button:disabled {
    border: 1px solid #aa0000;
    background-color: #c9c9c9;
    color: #101010;
    cursor: not-allowed;
  }
  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 10px;
    height: 100%;
    text-align: center;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  .arrow-back {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 999;
    cursor: pointer;

    svg {
      font-size: 30px;
      color: #aa0000;
    }
  }

  .arrow-back-white {
    svg {
      font-size: 30px;
      color: white;
    }
  }
  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: #aa0000;
    background: -webkit-linear-gradient(to right, #aa0000, #f82828);
    background: linear-gradient(to right, #aa0000, #f82828);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }

  .social-container {
    margin: 20px 0;
  }

  .social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
    /* 
    svg {
      color: blue;
    } */
  }

  footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
  }

  footer p {
    margin: 10px 0;
  }

  footer i {
    color: red;
  }

  footer a {
    color: #3c97bf;
    text-decoration: none;
  }
`;export{B as default};
