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

const RegSecurity = ({ onBack, onNext }) => {
  return (
    <Card>
      <CardHeader title="Account Security" />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <Grid container spacing={3} columns={12}>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Email"
                // onChange={() => {}}
                // value={SP.title}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                // onChange={() => {}}
                // value={SP.location}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Retype Password"
                type="password"
                // onChange={() => {}}
                // value={SP.location}
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
          onClick={() => onBack()}
        >
          Back
        </Button>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          spacing={3}
        >
          <Button variant="outlined" color="secondary">
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
            onClick={() => onNext()}
          >
            Next
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
export default RegSecurity;
