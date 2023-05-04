import React from "react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    //<a href={"#"} className="scroll-top">
    <i className="lni lni-chevron-up scroll-top" onClick={scrollToTop}></i>
    // </a>
  );
};

export default ScrollToTop;
