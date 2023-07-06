import React from "react";
import Avatar from "@mui/material/Avatar";

const stringToColor = (str) => {
  let hash = 0;

  /* eslint-disable no-bitwise */
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var color = "#";

  for (var n = 0; n < 3; n++) {
    const value = (hash >> (n * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

const stringAvatar = (name) => {
  const isSpaced = name.split(" ").length > 1;
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: isSpaced
      ? `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
      : `${name.split(" ")[0][0]}`,
  };
};

const BackgroundLetterAvatars = ({ name }) => {
  return <Avatar {...stringAvatar(name ? name : "User")} />;
};
export default BackgroundLetterAvatars;
