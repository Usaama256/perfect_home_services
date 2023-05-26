import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const CircularLoader = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress {...props} />
    </Box>
  );
};

export default CircularLoader;
