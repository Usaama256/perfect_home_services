import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressiveImage = ({ placeholder, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <Img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      notSet={imgSrc === placeholder}
    />
  );
};

const Img = styled.img`
  //filter: blur(0px);
  transition: filter 0.5s linear;
  ${({ notSet }) =>
    notSet ? { objectFit: "contain" } : { objectFit: "fill" }}/* .loading {
    filter: blur(10px);
    clip-path: inset(0);
  }
  .loaded {
    filter: blur(0px);
    transition: filter 0.5s linear;
  } */
`;
export default ProgressiveImage;
