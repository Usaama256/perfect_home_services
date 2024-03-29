import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Link, Drawer, Typography, Stack, Button } from "@mui/material";
import Scrollbar from "../../components/Scrollbar";
// import NavSection from "../../components/NavSection";
import { logo_g } from "../../store/images";
import useResponsive from "../../store/hooks/useRsponsive";
import {
  Analytics,
  Business,
  Inventory2,
  Logout,
  PeopleAlt,
} from "@mui/icons-material";
import NavSection from "./NavSection";
import { useSelector } from "react-redux";
import BackgroundLetterAvatars from "../BackgroundLetterAvatars";
import LogoutConfirmDialog from "../LogoutConfirmDialog";

const navConfig = [
  {
    title: "dashboard",
    path: "/admin/dash/home",
    icon: <Analytics width={22} height={22} />,
  },
  {
    title: "Services",
    path: "/admin/dash/services",
    icon: <Inventory2 width={22} height={22} />,
  },
  {
    title: "service providers",
    path: "/admin/dash/sps",
    icon: <Business width={22} height={22} />,
  },
  {
    title: "clients",
    path: "/admin/dash/users",
    icon: <PeopleAlt width={22} height={22} />,
  },
  // {
  //   title: "settings",
  //   path: "/admin/dash/settings",
  //   icon: <Settings width={22} height={22} />,
  // },
];

const DashboardSidebar = ({ isOpenSidebar, onCloseSidebar }) => {
  const { user } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [openLogout, setOpenLogout] = useState(false);

  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {openLogout && (
        <LogoutConfirmDialog open={openLogout} setOpen={setOpenLogout} />
      )}
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <img src={logo_g} alt="alt" width="100%" />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="/admin/dash/profile">
          <AccountStyle>
            <BackgroundLetterAvatars
              name={`${user.firstName} ${user.lastName}`}
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {`Admin`}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: "relative" }}
        >
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Logout />}
            onClick={() => setOpenLogout(true)}
          >
            Log Out
          </Button>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: "background.default",
              borderRightStyle: "dashed",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
};

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

export default DashboardSidebar;
