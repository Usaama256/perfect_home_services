import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Card } from "@mui/material";

import SpContactSummary from "../../components/sp/home/SpContactSummary";
import { dummyReviews } from "../../store/dummies";
import ReviewsTb from "../../components/sp/reviews/ReviewsTb";

// ----------------------------------------------------------------------
const User = () => {
  const userActive = false;
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        User Reviews
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
        <Grid item xs={12} md={12} lg={12}>
          <ReviewsTb reviews={dummyReviews} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default User;
