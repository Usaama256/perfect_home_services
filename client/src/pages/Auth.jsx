import { Link, Checkbox, Stack, Typography } from "@mui/material";
import { ArrowBack, Facebook, Google, Twitter } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { adminSignin, cSignIn, cSignup } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Auth = ({ type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetching = useSelector((state) => state.user.isFetching);
  const { enqueueSnackbar } = useSnackbar();
  const [addContClass, setAddContClass] = useState(null);
  const [clientSignUpData, setClientSignUpData] = useState({
    email: "",
    phone: "",
    location: "",
    pass: "",
    pass2: "",
    profilePic: "",
  });
  const [signInData, setSignInData] = useState({
    email: "",
    pass: "",
  });
  const [userAgree, setUserAgree] = useState(false);

  const onSignUp = (e) => {
    e.preventDefault();
    if (
      clientSignUpData.location.length < 1 ||
      clientSignUpData.phone.length < 1 ||
      clientSignUpData.location === "" ||
      clientSignUpData.pass.length < 1 ||
      clientSignUpData.pass2.length < 1
    ) {
      enqueueSnackbar("Enter All Fields", { variant: "error" });
    } else {
      if (clientSignUpData.pass !== clientSignUpData.pass2) {
        enqueueSnackbar("Make Sure Passwords match", { variant: "error" });
      } else {
        if (userAgree === false) {
          enqueueSnackbar(
            "You must agree to our terms and conditions to continue",
            { variant: "warning" }
          );
        } else {
          enqueueSnackbar("Wait A Moment", { variant: "info" });
          // console.log(clientSignUpData);
          cSignup(clientSignUpData, dispatch, navigate, enqueueSnackbar);
        }
      }
    }
  };

  const onSignIn = (e) => {
    e.preventDefault();
    if (type === "admin") {
      if (signInData.email === "" || signInData.pass === "") {
        enqueueSnackbar("Enter All Fields", { variant: "error" });
      } else {
        enqueueSnackbar("Wait A Moment", { variant: "info" });
        adminSignin(signInData, dispatch, navigate, enqueueSnackbar);
      }
    } else if (type === "user") {
      if (signInData.email === "" || signInData.pass === "") {
        enqueueSnackbar("Enter All Fields", { variant: "error" });
      } else {
        enqueueSnackbar("Wait A Moment", { variant: "info" });
        cSignIn(signInData, "email", dispatch, navigate, enqueueSnackbar);
      }
    }
  };

  return (
    <Layout type={type}>
      <div className={`container ${addContClass}`} id="container">
        <div className={`arrow-back ${addContClass && "arrow-back-white"}`}>
          <Tooltip title={"Back"} arrow>
            <ArrowBack onClick={() => navigate("/")} />
          </Tooltip>
        </div>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create User Account</h1>
            {/* <div className="social-container">
              <Link to={() => false} className="social">
                <Google />
              </Link>
              <Link to={() => false} className="social">
                <Facebook />
              </Link>
              <Link to={() => false} className="social">
                <Twitter />
              </Link>
            </div> */}
            <span>Enter Your Details</span>
            <input
              type="email"
              placeholder="Email"
              value={clientSignUpData.email}
              onChange={(e) =>
                setClientSignUpData({
                  ...clientSignUpData,
                  email: e.target.value,
                })
              }
              disabled={fetching}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={clientSignUpData.phone}
              onChange={(e) =>
                setClientSignUpData({
                  ...clientSignUpData,
                  phone: e.target.value,
                })
              }
              disabled={fetching}
            />
            <input
              type="text"
              placeholder="Location"
              value={clientSignUpData.location}
              onChange={(e) =>
                setClientSignUpData({
                  ...clientSignUpData,
                  location: e.target.value,
                })
              }
              disabled={fetching}
            />
            <input
              type="password"
              placeholder="Password"
              value={clientSignUpData.pass}
              onChange={(e) =>
                setClientSignUpData({
                  ...clientSignUpData,
                  pass: e.target.value,
                })
              }
              disabled={fetching}
            />
            <input
              type="password"
              placeholder="Re-type Password"
              value={clientSignUpData.pass2}
              onChange={(e) =>
                setClientSignUpData({
                  ...clientSignUpData,
                  pass2: e.target.value,
                })
              }
              disabled={fetching}
            />
            <Stack
              width="100%"
              direction="row"
              justifyContent=""
              alignItems="center"
              spacing={3}
              padding="10px 0px"
            >
              <Checkbox
                checked={userAgree}
                onChange={() => setUserAgree(!userAgree)}
              />
              <Typography
                onClick={() => setUserAgree(!userAgree)}
                sx={{
                  cursor: "pointer",
                  margin: "0px !important",
                  textAlign: "left",
                }}
              >
                I agree to the{" "}
                <Link
                  variant="subtitle1"
                  component={RouterLink}
                  to="#"
                  sx={{ color: "#3f42ff", fontWeight: 700 }}
                >
                  PerfectHome Services terms and conditions
                </Link>
              </Typography>
            </Stack>
            <button onClick={onSignUp} disabled={!userAgree || fetching}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>{type === "admin" ? "Admin Login" : "User Login"}</h1>
            <div className="social-container">
              <RouterLink to={() => false} className="social">
                <Google />
              </RouterLink>
              <RouterLink to={() => false} className="social">
                <Facebook />
              </RouterLink>
              <RouterLink to={() => false} className="social">
                <Twitter />
              </RouterLink>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              value={signInData.email}
              onChange={(e) =>
                setSignInData({ ...signInData, email: e.target.value })
              }
              disabled={fetching}
            />
            <input
              type="password"
              placeholder="Password"
              value={signInData.pass}
              onChange={(e) =>
                setSignInData({ ...signInData, pass: e.target.value })
              }
              disabled={fetching}
            />
            <RouterLink to={() => false}>Forgot your password?</RouterLink>
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
`;

export default Auth;
