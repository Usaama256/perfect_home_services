import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Card } from "@mui/material";
import SpContactSummary from "../../components/sp/home/SpContactSummary";
import { dummySPs } from "../../store/dummies";
import ProductsTb from "../../components/sp/products/ProductsTb";
import AddProduct from "../../components/sp/products/AddProduct";

// ----------------------------------------------------------------------
const Products = () => {
  const userActive = false;
  const pdts = dummySPs[0].pricing;
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Products / Services
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
          <ProductsTb products={pdts} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AddProduct />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
