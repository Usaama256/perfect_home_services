import { useNavigate } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Card, Container, Typography } from "@mui/material";
import { imgLogin, logo_g } from "../../store/images";
import useResponsive from "../../store/hooks/useRsponsive";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

const SpNotApproved = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const mdUp = useResponsive("up", "md");

  return (
    <MyContainer>
      <Helmet>
        <title>SP Not Approved | Perfect Home Services</title>
      </Helmet>
      <RootStyle>
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
              You're Welcome
            </Typography>
            <img src={imgLogin} alt="login" />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
              Service Provider
            </Typography>
            <Typography sx={{ mb: 5, color: "#fff" }}>
              Hi {user.owner.firstName},
            </Typography>
            <Typography sx={{ mb: 5, color: "#fff" }}>
              Your Company Details are still under review by our team.
            </Typography>
            <Typography sx={{ mb: 5, color: "#fff" }}>
              You will be granted permission to log in once the review and
              approval is done. You are therefore requested to be patient.
            </Typography>
            <Typography sx={{ mb: 5, color: "#fff" }}>
              Thank You For Working With Perfect Home Services
            </Typography>
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

export default SpNotApproved;
