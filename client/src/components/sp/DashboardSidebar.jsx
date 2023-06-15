import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Drawer,
  Typography,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import Scrollbar from "../../components/Scrollbar";
// import NavSection from "../../components/NavSection";
import { logo_g } from "../../store/images";
import useResponsive from "../../store/hooks/useRsponsive";
import {
  Analytics,
  Info,
  Inventory2,
  Logout,
  Reviews,
} from "@mui/icons-material";
import NavSection from "./NavSection";
import { dummySPs } from "../../store/dummies";

const navConfig = [
  {
    title: "dashboard",
    path: "/SPdash/home",
    icon: <Analytics width={22} height={22} />,
  },
  {
    title: "products / services",
    path: "/SPdash/products",
    icon: <Inventory2 width={22} height={22} />,
  },
  {
    title: "reviews",
    path: "/SPdash/reviews",
    icon: <Reviews width={22} height={22} />,
  },
  {
    title: "Company Info",
    path: "/SPdash/info",
    icon: <Info width={22} height={22} />,
  },
];

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

const DashboardSidebar = ({ isOpenSidebar, onCloseSidebar }) => {
  const { pathname } = useLocation();
  const SP = dummySPs[0];

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
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <img src={logo_g} alt="alt" width="100%" />
      </Box>

      <Box style={{ margin: "2.5px 5px" }}>
        <Link underline="none" component={RouterLink} to="/SPdash/info">
          <AccountStyle>
            <Avatar src={SP.logo} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                {SP.title}
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
          <Button variant="outlined" color="primary" startIcon={<Logout />}>
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

export default DashboardSidebar;
