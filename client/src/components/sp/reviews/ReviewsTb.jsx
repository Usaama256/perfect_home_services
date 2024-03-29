import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import Scrollbar from "../../Scrollbar";
import { fDateTimeSuffix2, fToNow } from "../../../store/formatTime";
import BackgroundLetterAvatars from "../../BackgroundLetterAvatars";

const ReviewsTb = ({ comments, userActive, sx }) => {
  const onCallClient = (tel) => {
    userActive && window.open(`tel:${tel}`);
  };

  const onEmailClient = (email) => {
    userActive && window.open(`mailto:${email}`);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Reviews" />
      <br />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell> </TableCell>
                <TableCell>Contacts</TableCell>
                <TableCell>Message</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {comments?.map((comm, i) => {
                return (
                  <TableRow
                    hover
                    key={i}
                    style={{
                      background: `${
                        parseInt(comm.status, 10) === 1 ? "" : "#ff5d5d7c"
                      }`,
                    }}
                  >
                    <TableCell>
                      <BackgroundLetterAvatars name={comm.username} />
                    </TableCell>
                    <TableCell>{comm.username}</TableCell>
                    <TableCell>
                      <Tooltip title="Send Email" arrow>
                        <Chip
                          label={comm.email}
                          color="info"
                          onClick={() => onEmailClient(comm.email)}
                          variant="outlined"
                        />
                      </Tooltip>
                      &ensp;
                      <Tooltip title="Call Client" arrow>
                        <Chip
                          label={comm.phone}
                          color="info"
                          onClick={() => onCallClient(comm.phone)}
                          variant="outlined"
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>{comm.comment}</TableCell>
                    <TableCell>
                      {fDateTimeSuffix2(comm.createdAt)} (
                      {fToNow(comm.createdAt)})
                    </TableCell>
                    <TableCell>
                      {parseInt(comm.status, 10) === 1 ? "Visible" : "Deleted"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        {/* <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowForwardIos />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button> */}
      </CardActions>
    </Card>
  );
};

ReviewsTb.proptotype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};

export default ReviewsTb;
