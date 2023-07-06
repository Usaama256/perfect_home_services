import { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
import { Dashboard, Home } from "@mui/icons-material";
import BackgroundLetterAvatars from "./BackgroundLetterAvatars";
import MenuPopover from "./MenuPopover";

// ----------------------------------------------------------------------

const MENU_OPTIONS_USER = [
  {
    label: "Home",
    icon: <Home />,
    linkTo: "/",
  },
  {
    label: "Administrator",
    icon: <Dashboard />,
    linkTo: "/auth/ad/login",
  },
  {
    label: "Service Provider",
    icon: <Dashboard />,
    linkTo: "/auth/sp/login",
  },
];

const MENU_OPTIONS_SP = [
  {
    label: "Service Provider",
    icon: <Dashboard />,
    linkTo: "/SPdash/home",
  },
  {
    label: "Home",
    icon: <Home />,
    linkTo: "/",
  },
  {
    label: "Administrator",
    icon: <Dashboard />,
    linkTo: "/auth/ad/login",
  },
];

const MENU_OPTIONS_ADMIN = [
  {
    label: "Administrator",
    icon: <Dashboard />,
    linkTo: "/admin/dash/home",
  },
  {
    label: "Home",
    icon: <Home />,
    linkTo: "/",
  },
  {
    label: "Service Provider",
    icon: <Dashboard />,
    linkTo: "/auth/sp/login",
  },
];
// ----------------------------------------------------------------------

const AccountPopover = ({ user, openLogout }) => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  if (user.type === "client") {
    return (
      <>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            p: 0,
            ...(open && {
              "&:before": {
                zIndex: 1,
                content: "''",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                position: "absolute",
                // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}
        >
          {user.profilePic?.length > 16 ? (
            <Avatar src={user.profilePic} alt={user.username} />
          ) : (
            <BackgroundLetterAvatars name={user.username} />
          )}
        </IconButton>

        <MenuPopover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          sx={{
            p: 0,
            mt: 1.5,
            ml: 0.75,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {user.username}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {user.email}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: "dashed" }} />

          <Stack sx={{ p: 1 }}>
            {MENU_OPTIONS_USER.map((option) => (
              <MenuItem
                key={option.label}
                to={option.linkTo}
                component={RouterLink}
                onClick={handleClose}
              >
                {option.label}
              </MenuItem>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem
            onClick={() => {
              openLogout();
              handleClose();
            }}
            sx={{ m: 1 }}
          >
            Logout
          </MenuItem>
        </MenuPopover>
      </>
    );
  } else if (user.type === "sp") {
    return (
      <>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            p: 0,
            ...(open && {
              "&:before": {
                zIndex: 1,
                content: "''",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                position: "absolute",
                // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}
        >
          {user.owner?.avator?.length > 16 ? (
            <Avatar
              src={user.owner.avator}
              alt={`${user.owner.firstName} ${user.owner.lastName}`}
            />
          ) : (
            <BackgroundLetterAvatars
              name={`${user.owner.firstName} ${user.owner.lastName}`}
            />
          )}
        </IconButton>

        <MenuPopover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          sx={{
            p: 0,
            mt: 1.5,
            ml: 0.75,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {`${user.owner.firstName} ${user.owner.lastName}`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {user.owner.email}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: "dashed" }} />

          <Stack sx={{ p: 1 }}>
            {MENU_OPTIONS_SP.map((option) => (
              <MenuItem
                key={option.label}
                to={option.linkTo}
                component={RouterLink}
                onClick={handleClose}
              >
                {option.label}
              </MenuItem>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem
            onClick={() => {
              openLogout();
              handleClose();
            }}
            sx={{ m: 1 }}
          >
            Logout
          </MenuItem>
        </MenuPopover>
      </>
    );
  } else if (user.type === "admin") {
    return (
      <>
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            p: 0,
            ...(open && {
              "&:before": {
                zIndex: 1,
                content: "''",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                position: "absolute",
                // bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}
        >
          <BackgroundLetterAvatars
            name={`${user.firstName} ${user.lastName}`}
          />
        </IconButton>

        <MenuPopover
          open={Boolean(open)}
          anchorEl={open}
          onClose={handleClose}
          sx={{
            p: 0,
            mt: 1.5,
            ml: 0.75,
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {user.email}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: "dashed" }} />

          <Stack sx={{ p: 1 }}>
            {MENU_OPTIONS_ADMIN.map((option) => (
              <MenuItem
                key={option.label}
                to={option.linkTo}
                component={RouterLink}
                onClick={handleClose}
              >
                {option.label}
              </MenuItem>
            ))}
          </Stack>

          <Divider sx={{ borderStyle: "dashed" }} />

          <MenuItem
            onClick={() => {
              openLogout();
              handleClose();
            }}
            sx={{ m: 1 }}
          >
            Logout
          </MenuItem>
        </MenuPopover>
      </>
    );
  } else {
    return <div></div>;
  }
};

export default AccountPopover;
