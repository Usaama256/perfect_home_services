import { Grid, Container, Typography } from "@mui/material";
import ProductsTb from "../../components/sp/products/ProductsTb";
import AddProduct from "../../components/sp/products/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import SpAccountSuspendedPop from "../../components/sp/SpAccountSuspended";
import { fetchSpProductsSP } from "../../redux/apiCalls";
import { useEffect } from "react";

// ----------------------------------------------------------------------
const Products = () => {
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.spData);
  const dispatch = useDispatch();
  const userActive = user.status === "active";

  useEffect(() => {
    fetchSpProductsSP(user.id, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products / Services
      </Typography>
      {userActive === false && <SpAccountSuspendedPop />}
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <ProductsTb products={products} SPid={user.id} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AddProduct SPid={user.id} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
