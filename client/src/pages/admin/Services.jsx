import { Grid, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import ServicesTb from "../../components/admin/services/ServicesTb";
import AddService from "../../components/admin/services/AddService";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesAdmin } from "../../redux/apiCalls";

// ----------------------------------------------------------------------
const Services = () => {
  const { services } = useSelector((state) => state.adminData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServicesAdmin(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Services
      </Typography>

      <Grid container spacing={3}>
        {services && (
          <Grid item xs={12} md={12} lg={12}>
            <ServicesTb services={services} />
          </Grid>
        )}
        <Grid item xs={12} md={12} lg={12}>
          <AddService />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
