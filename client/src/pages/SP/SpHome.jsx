import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Card } from "@mui/material";
import AppWidgetSummary from "../../components/sp/home/AppWidgetSummary";
import AppOrderTimeline from "../../components/sp/home/AppOrderTimeline";
import {
  ContactPhone,
  Reviews,
  StackedLineChart,
  StarBorder,
} from "@mui/icons-material";
import SpContactSummary from "../../components/sp/home/SpContactSummary";
import { imgAvator } from "../../store/images";
import { dummyClients } from "../../store/dummies";
import { useEffect } from "react";

// ----------------------------------------------------------------------
const SpHome = () => {
  const userActive = false;
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>

      {userActive === false && (
        <Card
          sx={{
            backgroundColor: "#f6050583",
            width: "100%",
            height: "60px",
            margin: "30px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">Activation Pending</Typography>
        </Card>
      )}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            icon={<StackedLineChart />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Reviews"
            total={1352831}
            // color="info"
            icon={<Reviews />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Contact Attempts"
            total={900}
            // color="warning"
            icon={<ContactPhone />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Ratings"
            total={3.4}
            // color="error"
            icon={<StarBorder />}
          />
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <SpContactSummary users={dummyClients} />
        </Grid>

        {/* <Grid item xs={12} md={6} lg={4} >
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: `13242Fq34d_${index}`,
              title: [
                "1983, orders, $4220",
                "12 Invoices have been paid",
                "Order #37745 from September",
                "New order placed #XF-2356",
                "New order placed #XF-2346",
              ][index],
              type: `order${index + 1}`,
              time: new Date(),
            }))}
          />
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default SpHome;
