import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const year = new Date();

  return (
    <Container>
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          padding: "5px",
        }}
      >
        Perfect Home Services &#169; {`${year.getFullYear()}`}
      </Link>
    </Container>
  );
};

const Container = styled.div`
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
`;
export default Footer;
