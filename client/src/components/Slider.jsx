import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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
            style={{ width: width, height: height, objectFit: "cover" }}
            src={i.src}
            alt=""
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slider;
