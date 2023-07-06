import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  SvgIcon,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

const RegSecurity = ({ onBack, onNext, securityInfo, setSecurityInfo }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [middleman, setMiddleman] = useState({
    email: "",
    pass: "",
    pass2: "",
  });
  console.log(securityInfo);

  const onNextHandler = () => {
    if (middleman.pass !== middleman.pass2) {
      enqueueSnackbar("Passwords Do Not Match", { variant: "warning" });
    } else {
      if (middleman.pass.length < 8 && middleman.pass2.length < 8) {
        enqueueSnackbar("Passwords Must Be At Least 8 Characters Long", {
          variant: "warning",
        });
      } else {
        setSecurityInfo(middleman);
        onNext();
      }
    }
  };

  const onBackHandler = () => {
    setSecurityInfo(middleman);
    onBack();
  };

  useEffect(() => {
    setMiddleman(securityInfo);
  }, [securityInfo]);

  const resetFields = () => {
    setMiddleman({
      ...middleman,
      pass: "",
      pass2: "",
    });
  };

  return (
    <Card>
      <CardHeader title="Account Security (Login Credentials)" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Email"
                helperText="This is your company email"
                inputProps={{ readOnly: true }}
                value={middleman.email}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={middleman.pass}
                onChange={(e) =>
                  setMiddleman({ ...middleman, pass: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Retype Password"
                type="password"
                value={middleman.pass2}
                onChange={(e) =>
                  setMiddleman({ ...middleman, pass2: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          variant="contained"
          color="inherit"
          startIcon={
            <SvgIcon size="small">
              <ArrowBackIos />
            </SvgIcon>
          }
          onClick={() => onBackHandler()}
        >
          Back
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          spacing={3}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => resetFields()}
          >
            Reset Fields
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={
              <SvgIcon size="small">
                <ArrowForwardIos />
              </SvgIcon>
            }
            onClick={() => onNextHandler()}
          >
            Next
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default RegSecurity;
