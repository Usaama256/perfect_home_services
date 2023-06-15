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
import { dummyReviews, dummySPs, ownerSample } from "../../../store/dummies";
import { servicesArr } from "../../../store/services";
import { ArrowBackIos } from "@material-ui/icons";
import OwnerInfo from "./OwnerInfo";
import CompanyInfo from "./CompanyInfo";
import ProductsTb from "./ProductsTb";
import ReviewsTb from "./ReviewsTb";

// ----------------------------------------------------------------------
const ServiceProvider = () => {
  const spId = useLocation().pathname.split("/")[4];
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [currentSP, setCurrentSP] = useState(null);
  const [currentService, setCurrentService] = useState({});

  //Fetching Selected Service provider
  useEffect(() => {
    const index = dummySPs.findIndex((item) => item.id === spId);
    if (index === -1) {
      navigate("/404");
    } else {
      setCurrentSP(dummySPs[index]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spId]);

  //Fetching Service Details
  useEffect(() => {
    if (currentSP) {
      const index = servicesArr.findIndex((item) => item.id === currentSP.sId);
      if (index === -1) {
        // navigate("/404");
      } else {
        setCurrentService(servicesArr[index]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSP]);

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
              <CompanyInfo data={currentSP} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <OwnerInfo data={ownerSample} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <ProductsTb products={currentSP.pricing} />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <ReviewsTb reviews={dummyReviews} />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};

export default ServiceProvider;
