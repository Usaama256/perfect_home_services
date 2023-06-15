import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const SimpleScrollbar = ({ children, sx }) => {
  return (
    <SimpleBar style={sx ? { ...sx } : { maxHeight: "80vh" }}>
      {children}
    </SimpleBar>
  );
};

export default SimpleScrollbar;
