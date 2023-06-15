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
import { ownerSample } from "../../../store/dummies";

const SpOwnerProfile = ({ editOwner }) => {
  const SpOwner = ownerSample;

  return (
    <Card
      sx={{
        color: (theme) => theme.palette["primary"].darker,
        bgcolor: (theme) => theme.palette["primary"].lighter,
      }}
    >
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h4">
            Owner (CEO / Director / Chairperson)
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
              src={SpOwner.avator}
              alt="logo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <Typography gutterBottom variant="h5">
            {SpOwner.position}
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
              Name
            </Typography>
            <Typography
              color="text.secondary"
              variant="body1"
              sx={{ margin: "0px !important" }}
            >
              {SpOwner.firstName} {SpOwner.lastName}
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
              Location
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ margin: "0px !important" }}
            >
              <Typography color="text.secondary" variant="body1">
                {SpOwner.location}
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
              {SpOwner.email?.map((i, n) => (
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
              Telephone Contact(s)
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ margin: "0px !important" }}
            >
              {SpOwner.tel?.map((i, n) => (
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
              About
            </Typography>
            <Typography
              color="text.secondary"
              variant="body1"
              sx={{ margin: "0px !important" }}
            >
              {SpOwner.desc}
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
          onClick={() => editOwner()}
        >
          Edit Owner Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default SpOwnerProfile;
