import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import LayoutNoFooter from "../../components/LayoutNoFooter";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleClick = async () => {};

  return (
    <LayoutNoFooter>
      <Container>
        <div className="wrapper">
          <h1>Admin Dashboard</h1>
          <input
            placeholder="username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} className="button">
            Sign In
          </button>
          {error && <span className="error">Wrong Credentials!</span>}
        </div>
      </Container>
    </LayoutNoFooter>
  );
};

const Container = styled.div`
  height: calc(100vh - 100px);
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .input {
    height: 40px;
    margin-bottom: 20px;
    padding: 0px 10px;
  }

  .button {
    height: 40px;
    margin-bottom: 20px;
    border: none;
    background-color: #d1411e;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  .error {
    font-size: 13px;
    color: red;
  }
`;
export default Login;
