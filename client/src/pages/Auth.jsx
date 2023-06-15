import { ArrowBack, Facebook, Google, Twitter } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInUser, signupUser } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Auth = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.user.isFetching);
  const { enqueueSnackbar } = useSnackbar();
  const [addContClass, setAddContClass] = useState(null);
  const [signUpData, setSignUpData] = useState({
    user_email: "",
    phoneNo: "",
    user_address: "",
    user_password: "",
    pass2: "",
  });
  const [signInData, setSignInData] = useState({
    user_email: "",
    user_password: "",
  });

  const onSignUp = (e) => {
    e.preventDefault();
    if (
      (signUpData.user_address === "",
      signUpData.phoneNo === "" ||
        signUpData.user_address === "" ||
        signUpData.user_password === "" ||
        signUpData.pass2 === "")
    ) {
      enqueueSnackbar("Enter All Fields", { variant: "error" });
    } else {
      if (signUpData.user_password !== signUpData.pass2) {
        enqueueSnackbar("Make Sure Passwords match", { variant: "error" });
      } else {
        enqueueSnackbar("Wait A Moment", { variant: "info" });
        signupUser(signUpData, dispatch, navigate, enqueueSnackbar);
      }
    }
  };

  const onSignIn = (e) => {
    e.preventDefault();

    if (type === "admin") {
      navigate("/admin/dash/home");
    }

    if (signInData.user_address === "" || signInData.user_password === "") {
      enqueueSnackbar("Enter All Fields", { variant: "error" });
    } else {
      enqueueSnackbar("Wait A Moment", { variant: "info" });
      signInUser(signInData, dispatch, navigate, enqueueSnackbar);
    }
  };

  return (
    <Layout type={type}>
      <div className={`container ${addContClass}`} id="container">
        <div className={`arrow-back ${addContClass && "arrow-back-white"}`}>
          <Tooltip title={"Back"} arrow>
            <ArrowBack onClick={() => navigate(-1)} />
          </Tooltip>
        </div>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <Link to={() => false} className="social">
                <Google />
              </Link>
              <Link to={() => false} className="social">
                <Facebook />
              </Link>
              <Link to={() => false} className="social">
                <Twitter />
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input
              type="email"
              placeholder="Email"
              value={signUpData.user_email}
              onChange={(e) =>
                setSignUpData({ ...signUpData, user_email: e.target.value })
              }
              disabled={fetching}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={signUpData.phoneNo}
              onChange={(e) =>
                setSignUpData({ ...signUpData, phoneNo: e.target.value })
              }
              disabled={fetching}
            />
            <input
              type="text"
              placeholder="Address"
              value={signUpData.user_address}
              onChange={(e) =>
                setSignUpData({ ...signUpData, user_address: e.target.value })
              }
              disabled={fetching}
            />
            <input
              type="password"
              placeholder="Password"
              value={signUpData.user_password}
              onChange={(e) =>
                setSignUpData({ ...signUpData, user_password: e.target.value })
              }
              disabled={fetching}
            />
            <input
              type="password"
              placeholder="Re-type Password"
              value={signUpData.pass2}
              onChange={(e) =>
                setSignUpData({ ...signUpData, pass2: e.target.value })
              }
              disabled={fetching}
            />
            <button onClick={onSignUp} disabled={fetching}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>{type === "admin" ? "Admin Login" : "User Login"}</h1>
            <div className="social-container">
              <Link to={() => false} className="social">
                <Google />
              </Link>
              <Link to={() => false} className="social">
                <Facebook />
              </Link>
              <Link to={() => false} className="social">
                <Twitter />
              </Link>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={signInData.user_email}
              onChange={(e) =>
                setSignInData({ ...signInData, user_email: e.target.value })
              }
              disabled={fetching}
            />
            <input
              type="password"
              placeholder="Password"
              value={signInData.user_password}
              onChange={(e) =>
                setSignInData({ ...signInData, user_password: e.target.value })
              }
              disabled={fetching}
            />
            <Link to={() => false}>Forgot your password?</Link>
            <button onClick={onSignIn} disabled={fetching}>
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Plenty of home services under one roof. Please login with your
                personal info. You’re in good hands with us.
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setAddContClass("")}
                disabled={fetching}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Perfect Home Services</h1>
              <p>Where Quality Meets Comfort</p>
              {type !== "admin" && (
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => setAddContClass("right-panel-active")}
                  disabled={type === "admin" ? true : fetching}
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  background: ${({ type }) => {
    if (type === "user") {
      return "rgba(0, 0, 0, 0)";
    } else if (type === "admin") {
      return "linear-gradient(to right, #aa0000, #f82828)";
    }
    if (type === "sp") {
      return;
    }
  }};
  background: ${({ type }) => {
    if (type === "user") {
      return "rgba(0, 0, 0, 0)";
    } else if (type === "admin") {
      return "-webkit-linear-gradient(to right, #aa0000, #f82828)";
    }
    if (type === "sp") {
      return;
    }
  }};
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
    padding: 0 50px;
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
`;

export default Auth;
