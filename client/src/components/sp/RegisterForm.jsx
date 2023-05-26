import { useState } from "react";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField name="firstName" label="First name" />
          <TextField name="lastName" label="Last name" />
        </Stack>

        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          fullWidth
          size="large"
          type="submit"
          color="inherit"
          variant="outlined"
          loading={() => {}}
        >
          Register
        </Button>
      </Stack>
    </div>
  );
}
