import { LocationOn, StarRateOutlined } from "@material-ui/icons";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { logo_g } from "../store/images";
import ProgressiveImage from "./ProgressiveImage";

const CompanyCard = ({ id, title, logo, desc, rating, location, sx }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: "6px",
        background: "rgba(0, 0, 0, 0)",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
        },
        svg: {
          color: "#aa0000",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              height: "100px",
              overflow: "hidden",
            }}
          >
            <ProgressiveImage
              src={logo}
              // placeholder={logo_g}
              width={100}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/services/provider/${id}`)}
            />
          </div>
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
          sx={{
            cursor: "pointer",
            fontsize: "20px",
            fontWeight: "bold",
            color: "#AA0000",
          }}
          onClick={() => navigate(`/services/provider/${id}`)}
        >
          {title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
          sx={{ fontsize: "16px", fontWeight: "bold", color: "#666" }}
        >
          {desc?.length < 100 ? desc : `${desc?.substring(0, 100)}...`}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider style={{ color: "#AA0000 !important" }} />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          <SvgIcon color="action" fontSize="small">
            <LocationOn style={{ color: "#AA0000 !important" }} />
          </SvgIcon>
          <Typography color="text.secondary" display="inline" variant="body2">
            {location}
          </Typography>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          <SvgIcon color="action" fontSize="small">
            <StarRateOutlined style={{ color: "#AA0000 !important" }} />
          </SvgIcon>
          <Typography color="text.secondary" display="inline" variant="body2">
            {rating?.value}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CompanyCard;
