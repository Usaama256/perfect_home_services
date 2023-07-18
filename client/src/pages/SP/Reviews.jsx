import { useEffect } from "react";
import { Grid, Container, Typography } from "@mui/material";
import ReviewsTb from "../../components/sp/reviews/ReviewsTb";
import SpAccountSuspendedPop from "../../components/sp/SpAccountSuspended";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpCommentsSP } from "../../redux/apiCalls";

// ----------------------------------------------------------------------
const Reviews = () => {
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.spData);
  const dispatch = useDispatch();
  const userActive = user.status === "active";

  useEffect(() => {
    fetchSpCommentsSP(user.id, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Clients' Comments
      </Typography>

      {userActive === false && <SpAccountSuspendedPop />}

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <ReviewsTb comments={comments} userActive={userActive} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reviews;
