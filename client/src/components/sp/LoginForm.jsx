import { useState } from "react";
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
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
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        {/* <Checkbox checked={true} name="remember" label="Remember me" /> */}
        <Link variant="subtitle2" underline="hover" sx={{ color: "#fff" }}>
          Forgot password?
        </Link>
      </Stack>

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="outlined"
        onClick={() => navigate("/SPdash/home")}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
