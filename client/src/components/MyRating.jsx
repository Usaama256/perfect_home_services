import React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Star, StarBorderOutlined } from "@mui/icons-material";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#aa0000",
  },
  "& .MuiRating-iconHover": {
    color: "#aa0000d3",
  },
});

const MyRating = ({ input, valueIn, setValue, valueOut, ...props }) => {
  return (
    <StyledRating
      name="customized-color"
      // defaultValue={0}
      value={input === true ? valueIn : valueOut}
      onChange={(e) => setValue(e.target.value)}
      getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
      precision={0.5}
      icon={<Star fontSize="inherit" />}
      emptyIcon={<StarBorderOutlined fontSize="inherit" />}
      {...props}
      // icon={<FavoriteIcon fontSize="inherit" />}
      // emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
    />
  );
};

export default MyRating;
