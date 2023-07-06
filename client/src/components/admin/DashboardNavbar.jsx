import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import AccountPopover from "./AccountPopover";
import LanguagePopover from "./LanguagePopover";
import NotificationsPopover from "./NotificationsPopover";
import { Home, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutConfirmDialog from "../LogoutConfirmDialog";
import { useState } from "react";

// ----------------------------------------------------------------------

const DashboardNavbar = ({ onOpenSidebar }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [openLogout, setOpenLogout] = useState(false);

  return (
    <RootStyle>
      {openLogout && (
        <LogoutConfirmDialog open={openLogout} setOpen={setOpenLogout} />
      )}

      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}
        >
          <Menu />
        </IconButton>

        <Typography color="text.primary" variant="h4">
          Admin Section
        </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <Tooltip title="Landing Page" arrow>
            <IconButton
              onClick={() => navigate("/")}
              sx={{
                padding: 0,
                width: 44,
                height: 44,
              }}
            >
              <Home />
            </IconButton>
          </Tooltip>
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover user={user} openLogout={() => setOpenLogout(true)} />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
};

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};
export default DashboardNavbar;
