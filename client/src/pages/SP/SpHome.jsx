import { Grid, Container, Typography } from "@mui/material";
import AppWidgetSummary from "../../components/sp/home/AppWidgetSummary";
import {
  ContactPhone,
  Reviews,
  StackedLineChart,
  StarBorder,
} from "@mui/icons-material";
import SpContactSummary from "../../components/sp/home/SpContactSummary";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpAccountSuspendedPop from "../../components/sp/SpAccountSuspended";
import { fetchSPcallsSP } from "../../redux/apiCalls";

// ----------------------------------------------------------------------
const SpHome = () => {
  const { user } = useSelector((state) => state.user);
  const { comments, callings } = useSelector((state) => state.spData);
  const dispatch = useDispatch();
  const userActive = user.status === "active";

  useEffect(() => {
    fetchSPcallsSP(user.id, dispatch);
    // window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>
      {userActive === false && <SpAccountSuspendedPop />}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={100}
            icon={<StackedLineChart />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Clients' Comments"
            total={comments ? comments.length : 0}
            // color="info"
            icon={<Reviews />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Clients' Call Requests"
            total={callings ? callings.length : 0}
            // color="warning"
            icon={<ContactPhone />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Ratings"
            total={parseFloat(user.rating.value)}
            // color="error"
            icon={<StarBorder />}
          />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <SpContactSummary calls={callings} userActive={userActive} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpHome;
