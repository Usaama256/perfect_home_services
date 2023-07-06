import { styled } from "@mui/material/styles";
import {
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  Stack,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { myRequest } from "../store/requestMethods";
import { useSnackbar } from "notistack";
import { fDate } from "../store/formatTime";
import SvgIconStyle from "./SvgIconStyle";
import BackgroundLetterAvatars from "./BackgroundLetterAvatars";

const ReviewCard = ({ review, userId, SPid, setComments }) => {
  const { Cid, Uid, username, comment, profilePic, createdAt } = review;
  const isCreator = parseInt(Uid, 10) === parseInt(userId, 10);
  const { enqueueSnackbar } = useSnackbar();

  const onDeleteComment = async () => {
    if (isCreator === true) {
      try {
        const res = await myRequest.get(
          `/user.api/userDeleteComment/${Cid}/${Uid}/${SPid}`
        );
        if (res.status === 200) {
          setComments(res.data);
          enqueueSnackbar("Comment Deleted Successfully", {
            variant: "success",
          });
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          console.log(err.response, err.message);
        } else if (err.request) {
          if (err.request.status) {
            console.error(err.message, err.request);
          } else {
            console.log(err.request, err.message);
          }
        } else {
          console.log(err.message);
        }
        enqueueSnackbar("Deleted Failed", { variant: "error" });
      }
    }
  };
  return (
    <Grid item xs={12} sm={6} md={6} style={{ width: "100%" }}>
      <Card sx={{ position: "relative", width: "100%" }}>
        <CardMediaStyle>
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: "absolute",
              color: "background.paper",
            }}
          />
          <AvatarStyle alt={username} src={profilePic} />

          <CoverTextStyle>
            <Typography variant="h5">
              {username}&ensp;
              <Typography variant="caption">
                on&ensp;{fDate(createdAt)}
              </Typography>
            </Typography>
          </CoverTextStyle>
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
          }}
        >
          {/* <Typography
            gutterBottom
            variant="caption"
            // sx={{ color: "text.disabled", display: "block" }}
          ></Typography> */}
          {/* <br /> */}
          <Typography variant="body" style={{ padding: "0px" }}>
            {comment}
          </Typography>
          {isCreator && (
            <Stack
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <IconButton
                size="small"
                color="error"
                onClick={() => onDeleteComment()}
              >
                <Delete size="small" />
              </IconButton>
            </Stack>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

const CardMediaStyle = styled("div")({
  position: "relative",
  paddingTop: 0,
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: "absolute",
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const CoverTextStyle = styled("div")({
  top: 0,
  width: "100%",
  height: "100%",
  padding: "10px 0px 5px 80px",
  background: "#d8d7d7",
});
export default ReviewCard;
