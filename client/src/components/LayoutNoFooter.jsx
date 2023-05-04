import React from "react";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const LayoutNoFooter = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <ScrollToTop />
    </div>
  );
};

export default LayoutNoFooter;
