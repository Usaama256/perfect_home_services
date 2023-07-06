import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { EditNote } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SpCompanyProfile = ({ editCompany, sp }) => {
  const { services } = useSelector((state) => state.services);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setCategory(services.filter((i) => i.id === sp.Sid)[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h4">
            Company
          </Typography>
          <div
            style={{
              overflow: "hidden",
              // padding: "10px",
              boxShadow: "0px 2px 5px #0000008e",
              borderRadius: "50%",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 220,
              width: 220,
            }}
          >
            <img
              src={sp.logo && sp.logo}
              alt="logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <Typography gutterBottom variant="h5">
            {sp.title}
          </Typography>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ margin: "20px 0px 5px 0px" }}
          >
            <Typography
              color="text.primary"
              variant="h6"
              sx={{ margin: "0px" }}
            >
              Location
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ margin: "0px !important" }}
            >
              <Typography color="text.secondary" variant="body1">
                {sp.location}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ margin: "20px 0px 5px 0px" }}
          >
            <Typography
              color="text.primary"
              variant="h6"
              sx={{ margin: "0px" }}
            >
              Email Address
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ margin: "0px !important" }}
            >
              {[sp.email].map((i, n) => (
                <Typography color="text.secondary" variant="body1" key={n}>
                  {i}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ margin: "20px 0px 5px 0px" }}
          >
            <Typography
              color="text.primary"
              variant="h6"
              sx={{ margin: "0px" }}
            >
              Telephone Contact
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ margin: "0px !important" }}
            >
              {[sp.tel].map((i, n) => (
                <Typography color="text.secondary" variant="body1" key={n}>
                  {i}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ margin: "20px 0px 5px 0px" }}
          >
            <Typography
              color="text.primary"
              variant="h6"
              sx={{ margin: "0px" }}
            >
              Descritipn
            </Typography>
            <Typography
              color="text.secondary"
              variant="body1"
              sx={{ margin: "0px !important" }}
            >
              {sp.desc}
            </Typography>
          </Stack>

          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ margin: "20px 0px 5px 0px" }}
          >
            <Typography
              color="text.primary"
              variant="h6"
              sx={{ margin: "0px" }}
            >
              Service Category
            </Typography>
            <Typography
              color="text.secondary"
              variant="body1"
              sx={{ margin: "0px !important" }}
            >
              {category ? category.name : "Loading..."}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          // fullWidth
          color="inherit"
          variant="text"
          size="small"
          endIcon={
            <SvgIcon fontSize="small">
              <EditNote />
            </SvgIcon>
          }
          onClick={() => editCompany()}
        >
          Edit Company Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default SpCompanyProfile;
