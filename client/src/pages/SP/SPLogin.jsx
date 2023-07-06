import { Link as RouterLink, useNavigate } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import {
  Card,
  Link,
  Container,
  Typography,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { imgLogin, logo_g } from "../../store/images";
import useResponsive from "../../store/hooks/useRsponsive";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { validateEmail } from "../../store/otherMethods";
import { SPsignin } from "../../redux/apiCalls";

// ----------------------------------------------------------------------

const SPLogin = () => {
  const { isFetching } = useSelector((state) => state.user);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");
  const [sp, setSp] = useState({ email: "", pass: "" });
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = () => {
    if (sp.email.length < 6 || !validateEmail(sp.email)) {
      enqueueSnackbar("Wrong User Credentials", { variant: "warning" });
    } else {
      if (sp.pass.length < 8) {
        enqueueSnackbar("Wrong User Credentials", {
          variant: "warning",
        });
      } else {
        //Loging in
        SPsignin(sp, dispatch, navigate, enqueueSnackbar);
      }
    }
  };

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
                disabled={isFetching}
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
              onClick={() => isFetching === false && navigate("/")}
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

        <Container maxWidth="xl" fullWidth>
          <ContentStyle>
            <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
              Service Provider Login
            </Typography>

            <Typography sx={{ mb: 5, color: "#fff" }}>
              Enter your details below.
            </Typography>

            <Card
              style={{
                width: "100%",
                padding: "40px 10px",
                boxShadow: "0px 2px 5px #0000009d",
                background: "#fafafabb",
              }}
            >
              <Stack spacing={3}>
                <TextField
                  name="email"
                  label="Email address"
                  required
                  disabled={isFetching}
                  value={sp.email}
                  onChange={(e) => setSp({ ...sp, email: e.target.value })}
                />

                <TextField
                  name="password"
                  label="Password"
                  required
                  disabled={isFetching}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={sp.pass}
                  onChange={(e) => setSp({ ...sp, pass: e.target.value })}
                />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 2, cursor: "pointer" }}
              >
                {/* <Checkbox checked={true} name="remember" label="Remember me" /> */}
                <Link
                  variant="subtitle2"
                  underline="hover"
                  sx={{ color: "#000" }}
                  disabled={isFetching}
                >
                  Forgot password?
                </Link>
              </Stack>

              <Button
                fullWidth
                size="large"
                color="primary"
                variant="outlined"
                onClick={() => loginHandler()}
                disabled={isFetching}
              >
                Login
              </Button>
            </Card>

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
                  disabled={isFetching}
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

export default SPLogin;
