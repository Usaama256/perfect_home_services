import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";
import {
  Business,
  MonetizationOnOutlined,
  PeopleAlt,
  StarBorder,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import AppWidgetSummary from "../../components/admin/home/AppWidgetSummary";
import PendingActivations from "../../components/admin/home/PendingActivations";
import { dummySPs } from "../../store/dummies";

// ----------------------------------------------------------------------
const AdminHome = () => {
  const [pendingSps, setPendingSps] = useState(null);
  const userActive = false;
  const theme = useTheme();

  useEffect(() => {
    setPendingSps(dummySPs.filter((i) => i.status !== "active"));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Monthly Sales"
            total={87674000}
            icon={<MonetizationOnOutlined />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Service Providers"
            total={33}
            // color="info"
            icon={<Business />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Users"
            total={2006}
            // color="warning"
            icon={<PeopleAlt />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="App Rating"
            total={3.9}
            // color="error"
            icon={<StarBorder />}
          />
        </Grid>

        {pendingSps && (
          <Grid item xs={12} md={12} lg={12}>
            <PendingActivations sps={pendingSps} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default AdminHome;
