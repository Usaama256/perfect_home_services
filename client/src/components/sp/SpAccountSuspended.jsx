import { Card, Typography } from "@mui/material";
import React from "react";

const SpAccountSuspendedPop = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#f6050583",
        padding: "40px 0px",
        width: "100%",
        height: "60px",
        margin: "30px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">Account Suspended Temporarily</Typography>
      <Typography variant="body">
        Note: Clients can not see your company in their App
      </Typography>
    </Card>
  );
};

export default SpAccountSuspendedPop;
