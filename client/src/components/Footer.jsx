import React from "react";
import bg from "../store/images/bg.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="item">
        <img src={bg} objectFit="cover" layout="fill" alt="" />
      </div>
      <div className="item">
        <div className="card">
          <h2 className="motto">
            OH YES, WE DID.THE BREUSA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className="card">
          <h1 className="title">FIND OUR RESTAURANTS</h1>
          <p className="text">
            1654 R. Don Road #304.
            <br /> Uganda, 85022
            <br /> (602) 867-1010
          </p>
          <p className="text">
            2356 K. Laquie Rd #235.
            <br /> Uganda, 85022
            <br /> (602) 867-1011
          </p>
          <p className="text">
            1614 E. Erwin St #104.
            <br /> Uganda, 85022
            <br /> (602) 867-1012
          </p>
          <p className="text">
            1614 W. Caroll St #125.
            <br /> Uganda, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className="card">
          <h1 className="title">WORKING HOURS</h1>
          <p className="text">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="text">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 100px);
  background-color: #222;
  display: flex;

  .item {
    flex: 1;
    position: relative;
    display: flex;
  }

  .item:last-child {
    flex: 2;
    padding: 50px;
    justify-content: space-between;
  }

  .card {
    flex: 1;
    padding: 0 20px;
  }

  .title {
    font-size: 18px;
    color: #b7903c;
  }

  .text {
    color: lightgray;
  }

  .motto {
    color: rgb(211, 211, 211);
  }

  @media screen and (max-width: 480px) {
    height: auto;
    text-align: center;
    .item:first-child {
      display: none;
    }

    .item {
      flex-direction: column;
    }

    .title {
      font-size: 30px;
    }

    .text {
      font-size: 20px;
    }
  }
`;
export default Footer;
