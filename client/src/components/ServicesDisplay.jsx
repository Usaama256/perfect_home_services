import React from "react";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import { LoadingPlaceholder2 } from "./LoadingPlaceholder";

const ServicesDisplay = ({ servicesArr }) => {
  return (
    <Container id="products">
      <h1 className="title">Where Quality Meets Comfort</h1>
      <div className="desc">We care for your home like it's our own</div>
      <div className="wrapper">
        {servicesArr ? (
          servicesArr?.map((item, index) => {
            return <ServiceCard {...item} key={index} />;
          })
        ) : (
          <>
            <LoadingPlaceholder2 />
            <LoadingPlaceholder2 />
          </>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
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
`;

export default ServicesDisplay;
