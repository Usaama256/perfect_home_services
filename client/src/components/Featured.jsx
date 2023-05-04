import React from "react";
import img1 from "../store/images/featured.png";
import img2 from "../store/images/featured2.png";
import img3 from "../store/images/featured3.png";
import arrR from "../store/images/arrowr.png";
import arrL from "../store/images/arrowl.png";
import { useState } from "react";
import styled from "styled-components";

const Featured = () => {
  const [index, setIndex] = useState(1);
  const images = [img1, img2, img3];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <Container>
      <div
        className="arrowContainer"
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <img src={arrL} alt="" />
      </div>
      <div
        className="wrapper"
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className="imgContainer" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      <div
        className="arrowContainer"
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <img src={arrR} alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 100px);
  margin-top: 100px;
  background-color: #d1411e;
  overflow: hidden;
  position: relative;

  .arrowContainer {
    position: absolute;
    width: 10%;
    height: 20%;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .wrapper {
    width: 300vw;
    height: 100%;
    display: flex;
    transition: all 1.5s ease-in-out;
  }

  .imgContainer {
    width: 100vw;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60%;
      height: 80%;
    }
  }

  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

export default Featured;
