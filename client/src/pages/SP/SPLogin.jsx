import { Link as RouterLink, useNavigate } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Card, Link, Container, Typography } from "@mui/material";
import { imgLogin, logo_g } from "../../store/images";
import useResponsive from "../../store/hooks/useRsponsive";
import LoginForm from "../../components/sp/LoginForm";
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------------------

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
  maxWidth: 480,
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

// ----------------------------------------------------------------------

const SPLogin = () => {
  const navigate = useNavigate();
  const smUp = useResponsive("up", "sm");

  const mdUp = useResponsive("up", "md");

  return (
    <MyContainer>
      <Helmet>
        <title>SP Login | Perfect Home Services</title>
      </Helmet>
      <RootStyle>
        <HeaderStyle>
          {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 }, color: "#fff" }}>
              Do you want to become a Service Provider?&ensp;
              <Link
                variant="subtitle2"
                component={RouterLink}
                to="/auth/sp/signup"
                sx={{ color: "#242323", fontWeight: 700 }}
              >
                Get started
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
              onClick={() => navigate("/")}
            />
            <Typography
              variant="h3"
              sx={{ px: 5, mt: 10, mb: 5, color: "#fff" }}
            >
              Welcome Back
            </Typography>
            <img src={imgLogin} alt="login" />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
              Service Provider Login
            </Typography>

            <Typography sx={{ mb: 5, color: "#fff" }}>
              Enter your details below.
            </Typography>

            {/* <AuthSocial /> */}

            <LoginForm />

            {!smUp && (
              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 3, color: "#fff" }}
              >
                Don’t have an account?{" "}
                <Link
                  variant="subtitle2"
                  component={RouterLink}
                  to="/auth/sp/signup"
                  sx={{ color: "#242323", fontWeight: 700 }}
                >
                  Get started
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>
    </MyContainer>
  );
};

export default SPLogin;
