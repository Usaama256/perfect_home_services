import {
  Grid,
  Container,
  Typography,
  Stack,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { ArrowBackIos } from "@material-ui/icons";
import OwnerInfo from "./OwnerInfo";
import CompanyInfo from "./CompanyInfo";
import ProductsTb from "./ProductsTb";
import ReviewsTb from "./ReviewsTb";
import { myRequest } from "../../../store/requestMethods";

// ----------------------------------------------------------------------
const ServiceProvider = () => {
  const SPid = parseInt(useLocation().pathname.split("/")[4], 10);
  // const { services } = useSelector((state) => state.adminData);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [currentSP, setCurrentSP] = useState(null);
  const [fetchingSp, setFetchingSp] = useState(false);
  const [products, setProducts] = useState(null);
  const [reviews, setReviews] = useState(null);
  // const [currentService, setCurrentService] = useState({});

  useEffect(() => {
    fetchSP();
    fetchSpPdts();
    fetchSpReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SPid]);

  // //Fetching Service Details
  // useEffect(() => {
  //   if (currentSP && services) {
  //     const index = services.findIndex((item) => item.Sid === currentSP.Sid);
  //     if (index === -1) {
  //       // navigate("/404");
  //     } else {
  //       setCurrentService(services[index]);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentSP]);

  const fetchSP = async () => {
    try {
      setFetchingSp(true);
      const res = await myRequest.get(`/admin.api/fetchSP/${SPid}`);
      if (res.status === 200) {
        setCurrentSP(res.data);
      } else {
        enqueueSnackbar("Error: Something went wrong", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Something went wrong", { variant: "error" });
      enqueueSnackbar(err.response?.data, { variant: "error" });
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
    } finally {
      setFetchingSp(false);
    }
  };

  const fetchSpPdts = async () => {
    try {
      const res = await myRequest.get(`/admin.api/getPdts/${SPid}`);
      if (res.status === 200) {
        setProducts(res.data);
      } else {
        enqueueSnackbar("Error: Something went wrong", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Something went wrong", { variant: "error" });
      enqueueSnackbar(err.response?.data, { variant: "error" });
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
    } finally {
    }
  };

  const fetchSpReviews = async () => {
    try {
      const res = await myRequest.get(`/admin.api/fetchComments/${SPid}`);
      if (res.status === 200) {
        setReviews(res.data);
      } else {
        enqueueSnackbar("Error: Something went wrong", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Something went wrong", { variant: "error" });
      enqueueSnackbar(err.response?.data, { variant: "error" });
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
    } finally {
    }
  };

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Tooltip title="Back" arrow>
          <IconButton
            variant="text"
            color="primary"
            onClick={() => navigate(-1)}
            size="medium"
          >
            <ArrowBackIos size="medium" />
          </IconButton>
        </Tooltip>
        <Typography variant="h5" color="primary" sx={{ mb: 5 }}>
          {currentSP ? currentSP.title : "Service Provider"}
        </Typography>
      </Stack>
      <br />
      <Grid container spacing={3}>
        {currentSP && (
          <>
            <Grid item xs={12} md={12} lg={12}>
              <CompanyInfo data={currentSP} setCurrentSP={setCurrentSP} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <OwnerInfo data={currentSP.owner} />
            </Grid>
          </>
        )}
        {products && (
          <Grid item xs={12} md={12} lg={12}>
            <ProductsTb products={products} />
          </Grid>
        )}

        {reviews && (
          <Grid item xs={12} md={12} lg={12}>
            <ReviewsTb reviews={reviews} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ServiceProvider;
