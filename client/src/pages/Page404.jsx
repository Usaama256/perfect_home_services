import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";
import { img404 } from "../store/images";
import GenLayout from "../components/GenLayout";

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

const Page404 = ({ src }) => {
  var homeLink = "/";
  if (src) {
    if (src === "sp") {
      homeLink = "/SPdash/home";
    } else if (src === "ad") {
      homeLink = "/admin/home";
    }
  }
  return (
    <GenLayout title={"404 Page Not Found"}>
      <Container sx={{ background: "#fff4f2" }}>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            Sorry, page not found!
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>

          <Box
            component="img"
            src={img404}
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
          />

          <Button
            to={homeLink}
            size="large"
            variant="contained"
            component={Link}
          >
            Go to Home
          </Button>
        </ContentStyle>
      </Container>
    </GenLayout>
  );
};

export default Page404;
