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
import ProgressiveImage from "../../ProgressiveImage";

const CompanyCard = ({
  SPid,
  SPname,
  logoImg,
  description,
  rateValue,
  location,
  status,
  approved,
  sx,
}) => {
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
          color: "#3f42ff",
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
              src={logoImg}
              // placeholder={logo_g}
              width={100}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/admin/dash/sps/${SPid}`)}
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
            color: "#3f42ff",
          }}
          onClick={() => navigate(`/admin/dash/sps/${SPid}`)}
        >
          {SPname}
        </Typography>
        <Typography
          align="center"
          variant="body1"
          sx={{ fontsize: "16px", fontWeight: "bold", color: "#666" }}
        >
          {description?.length < 100
            ? description
            : `${description?.substring(0, 100)}...`}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider style={{ color: "#3f42ff !important" }} />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          <SvgIcon color="action" fontSize="small">
            <LocationOn style={{ color: "#3f42ff !important" }} />
          </SvgIcon>
          <Typography color="text.secondary" display="inline" variant="body2">
            {location}
          </Typography>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          <Typography
            style={
              status === "active"
                ? { color: "green", fontWeight: 700 }
                : { color: "red", fontWeight: 700 }
            }
            display="inline"
            variant="body1"
          >
            {status === "active" ? "Active" : "Suspended"}
          </Typography>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          <SvgIcon color="action" fontSize="small">
            <StarRateOutlined style={{ color: "#3f42ff !important" }} />
          </SvgIcon>
          <Typography color="text.secondary" display="inline" variant="body2">
            {rateValue?.value}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default CompanyCard;
