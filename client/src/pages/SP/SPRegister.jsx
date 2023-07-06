import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Card, Link, Container, Typography } from "@mui/material";
import useResponsive from "../../store/hooks/useRsponsive";
import { imgReg, logo_g } from "../../store/images";
import { Helmet } from "react-helmet-async";
import RegStepper from "../../components/sp/register/RegStepper";
import { useSelector } from "react-redux";

const SPRegister = () => {
  const { isFetching } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");

  return (
    <MyContainer>
      <Helmet>
        <title>SP Register | Perfect Home Services</title>
      </Helmet>
      <RootStyle>
        <HeaderStyle>
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 }, color: "#fff" }}>
              Already have an account?&ensp;
              <Link
                variant="subtitle2"
                component={RouterLink}
                to="/auth/sp/login"
                sx={{ color: "#242323", fontWeight: 700 }}
                disabled={isFetching}
              >
                Login
              </Link>
            </Typography>
          )}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <img
              alt="logo"
              src={logo_g}
              style={{
                width: 200,
                cursor: "pointer",
                borderRadius: " 10px",
                boxShadow: "0px 5px 15px #0000005b",
              }}
              onClick={() => isFetching === false && navigate("/")}
            />
            <Typography
              variant="h3"
              sx={{ px: 5, mt: 10, mb: 5, color: "#fff" }}
            >
              Manage Your Business With Us
            </Typography>
            <img alt="register" src={imgReg} />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
              Service Provider Registration
            </Typography>
            <Typography sx={{ mb: 5, color: "#fff" }}>
              Enter You're Business Details
            </Typography>
            <RegStepper />
            {!smUp && (
              <Typography
                variant="body2"
                sx={{ mt: 3, textAlign: "center", color: "#fff" }}
              >
                Already have an account?&ensp;
                <Link
                  variant="subtitle2"
                  to="/auth/sp/login"
                  component={RouterLink}
                  sx={{ color: "#242323", fontWeight: 700 }}
                  disabled={isFetching}
                >
                  Login
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </MyContainer>
  );
};

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  color: "#fff",
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "flex-end",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: theme.spacing(2, 0, 2, 2),
  background: "#ffffff26",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  // maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

const MyContainer = styled("div")(() => ({
  minWidth: "100vw",
  minHeight: "100vh",
  background: "linear-gradient(to right, #aa0000, #f82828)",
}));

export default SPRegister;
