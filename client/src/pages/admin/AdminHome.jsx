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
import { myRequest } from "../../store/requestMethods";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------
const AdminHome = () => {
  const { sps } = useSelector((state) => state.adminData);
  const [pendingApprovals, setPendingApprovals] = useState(null);
  const [totals, setTotals] = useState({
    SPs: 0,
    users: 0,
  });

  useEffect(() => {
    fetchTotals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sps) {
      setPendingApprovals(sps.filter((i) => parseInt(i.approved, 10) === 0));
    }
  }, [sps]);

  const fetchTotals = async () => {
    try {
      const res = await myRequest.get("/admin.api/gettotals");
      if (res.status === 200) {
        if (JSON.stringify(res.data) === JSON.stringify(totals)) {
          return;
        } else {
          setTotals(res.data);
        }
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.log(err.response, err.message);
      } else if (err.request) {
        if (err.request.status) {
          console.error(err.message, err.request);
        } else {
          console.log(err.request, err.message);
        }
      } else {
        console.log(err.message);
      }
    }
  };

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
            total={0}
            icon={<MonetizationOnOutlined />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Service Providers"
            total={totals.SPs}
            // color="info"
            icon={<Business />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Users"
            total={totals.users}
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

        {pendingApprovals && (
          <Grid item xs={12} md={12} lg={12}>
            <PendingActivations sps={pendingApprovals} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default AdminHome;
