import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { AddBusiness, ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

const RegAgreements = ({ onBack, onNext, agreements, setAgreements }) => {
  const [middleman, setMiddleman] = useState(agreements);

  useEffect(() => {
    setMiddleman(agreements);
  }, [agreements]);

  const nextHandler = () => {
    setAgreements(middleman);
    onNext();
  };

  const backHandler = () => {
    setAgreements(middleman);
    onBack();
  };

  const resetFields = () => {
    setMiddleman({
      age: false,
      TCs: false,
    });
  };
  return (
    <Card>
      <CardHeader title="Confirmation" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid item xs={12} md={12}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              >
                <Checkbox
                  checked={middleman.age}
                  // indeterminate={checked[0] !== checked[1]}
                  onChange={() =>
                    setMiddleman({ ...middleman, age: !middleman.age })
                  }
                />
                <Typography>
                  I confirm that I am above 18 years of age.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={12}>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              >
                <Checkbox
                  checked={middleman.TCs}
                  // indeterminate={checked[0] !== checked[1]}
                  onChange={() =>
                    setMiddleman({ ...middleman, TCs: !middleman.TCs })
                  }
                />
                <Typography>
                  I’ve read through the{" "}
                  <Link
                    variant="subtitle1"
                    component={RouterLink}
                    to="#"
                    sx={{ color: "#3f42ff", fontWeight: 700 }}
                  >
                    PerfectHome Services terms and conditions
                  </Link>{" "}
                  and I agree to adhere to them.
                </Typography>
              </Stack>
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
          onClick={() => backHandler()}
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
            disabled={middleman.TCs === false || middleman.age === false}
            variant="contained"
            color="primary"
            endIcon={
              <SvgIcon size="small">
                <AddBusiness />
              </SvgIcon>
            }
            onClick={() => nextHandler()}
          >
            Finish
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default RegAgreements;
