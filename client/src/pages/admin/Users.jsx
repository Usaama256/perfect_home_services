import { Grid, Container, Typography } from "@mui/material";
import UsersTb from "../../components/admin/users/UsersTb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsersAdmin } from "../../redux/apiCalls";

// ----------------------------------------------------------------------
const Users = () => {
  const { users } = useSelector((state) => state.adminData);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUsersAdmin(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        App Users
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <UsersTb users={users} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Users;
