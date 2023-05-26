import React from "react";
import styled from "styled-components";
import { logo_g, mainSlider } from "../store/images";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Navbar from "./Navbar";

const Slider = ({ images, width, height, autoplay, duration, dots, style }) => {
  return (
    <div
      className="slide-container"
      style={{
        width: width,
        height: height,
        margin: 0,
        padding: 0,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <Navbar />
      <div
        className="logo"
        style={{
          position: "absolute",
          top: "300px",
          left: "35%",
          zIndex: 998,
        }}
      >
        <img src={logo_g} alt="" />
      </div>
      <Zoom
        scale={1.4}
        duration={duration}
        indicators={dots}
        autoplay={autoplay}
        canSwipe={true}
        // pauseOnHover={true}
        arrows={false}
      >
        {images?.map((i, n) => (
          <img
            key={n}
            style={{
              width: width,
              height: height,
              objectFit: "cover",
              filter: "brightness(0.3)",
            }}
            src={i.src}
            alt=""
          />
        ))}
      </Zoom>
    </div>
  );
};

const TopSlider = () => {
  return (
    <Container>
      <Slider
        images={mainSlider}
        width="100vw"
        // height="calc(100vh - 100px)"
        height="100vh"
        autoplay={true}
        duration={5000}
        dots={false}
      />
    </Container>
  );
};

const Container = styled.div`
  /* height: calc(100vh - 100px); */
  height: 100vh;
  /* background-color: #AA0000; */
  background-color: #000000bd;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

export default TopSlider;
