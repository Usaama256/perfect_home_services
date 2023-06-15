import { Grid, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import ServicesTb from "../../components/admin/services/ServicesTb";
import AddService from "../../components/admin/services/AddService";
import { servicesArr } from "../../store/services";

// ----------------------------------------------------------------------
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Services
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <ServicesTb services={servicesArr} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AddService />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
