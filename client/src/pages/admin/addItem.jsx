import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const addItem = () => {
  return (
    <Container>
      <div className="inputs-cotainer">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to={() => false} className="social">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to={() => false} className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link to={() => false} className="social">
                <i className="fab fa-linkedin-in"></i>
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
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #000000ab;
  display: fixed;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .inputs-container {
    padding: 15px;
    width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
`;
export default addItem;
