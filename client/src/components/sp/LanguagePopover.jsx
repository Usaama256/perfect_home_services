import { useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton } from "@mui/material";
import MenuPopover from "../../components/MenuPopover";

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "/static/icons/ic_flag_en.svg",
  },
  {
    value: "ug",
    label: "Luganda",
    icon: "/static/icons/ic_flag_ug.svg",
  },
  {
    value: "de",
    label: "German",
    icon: "/static/icons/ic_flag_de.svg",
  },
  {
    value: "fr",
    label: "French",
    icon: "/static/icons/ic_flag_fr.svg",
  },
];

// ----------------------------------------------------------------------

const LanguagePopover = () => {
  const [selectedLang, setSelectedLang] = useState(LANGS[0]);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (lang) => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img
          src={selectedLang?.icon}
          alt={selectedLang?.label}
          style={
            selectedLang?.value === "ug"
              ? { width: "28px", height: "20px", borderRadius: "4px" }
              : {}
          }
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === LANGS[0].value}
              onClick={() => {
                setSelectedLang(option);
                handleClose();
              }}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
              />

              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
};

export default LanguagePopover;
