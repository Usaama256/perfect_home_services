import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography } from "@mui/material";

import { dummyReviews } from "../../store/dummies";
import UsersTb from "../../components/admin/users/UsersTb";

// ----------------------------------------------------------------------
const Users = () => {
  const userActive = false;
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        App Users
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <UsersTb users={dummyReviews} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Users;
