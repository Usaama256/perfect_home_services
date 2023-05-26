import React from "react";
import { Stack, Button, Divider, Typography } from "@mui/material";
import { Facebook, Google, Twitter } from "@mui/icons-material";

const AuthSocial = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          style={{ svg: { color: "#DF3E30", width: 22, height: 22 } }}
        >
          <Google />
        </Button>

        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          style={{ svg: { color: "#1877F2", width: 22, height: 22 } }}
        >
          <Facebook />
        </Button>

        <Button
          fullWidth
          size="large"
          color="inherit"
          variant="outlined"
          style={{ svg: { color: "#1C9CEA", width: 22, height: 22 } }}
        >
          <Twitter />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          OR
        </Typography>
      </Divider>
    </>
  );
};

export default AuthSocial;
