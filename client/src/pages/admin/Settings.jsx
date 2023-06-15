import { Grid, Container, Typography } from "@mui/material";
// ----------------------------------------------------------------------
const Settings = () => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={12}>
          Settings
        </Grid>
        <Grid item xs={12} md={6} lg={12}></Grid>
      </Grid>
    </Container>
  );
};

export default Settings;
