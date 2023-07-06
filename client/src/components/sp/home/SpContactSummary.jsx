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
import { Phone } from "@mui/icons-material";

const SpContactSummary = ({ calls, userActive, sx }) => {
  const onCallClient = (tel) => {
    userActive && window.open(`tel:${tel}`);
  };

  const onEmailClient = (email) => {
    userActive && window.open(`mailto:${email}`);
  };

  return (
    <Card sx={sx}>
      <CardHeader
        title="User Call Requests"
        subheader="Please Contact these clients"
      />
      <br />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell> </TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell sortDirection="desc">Date</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {calls?.map((call, i) => {
                // const createdAt = format(order.createdAt, "dd/MM/yyyy");
                return (
                  <TableRow hover key={i}>
                    <TableCell>
                      <BackgroundLetterAvatars name={call.username} />
                    </TableCell>
                    <TableCell>{call.username}</TableCell>
                    <TableCell>
                      <Tooltip title="Send Email" arrow>
                        <Chip
                          label={call.email}
                          color="info"
                          onClick={() => onEmailClient(call.email)}
                          variant={
                            call.type === "email" ? "filled" : "outlined"
                          }
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Call Client" arrow>
                        <Chip
                          label={call.phone}
                          color="info"
                          onClick={() => onCallClient(call.phone)}
                          variant={call.type === "tel" ? "filled" : "outlined"}
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      {fDateTimeSuffix2(call.time)} ({fToNow(call.time)})
                    </TableCell>
                    <TableCell
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                      }}
                    >
                      <Phone />
                      &ensp; Phone
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

SpContactSummary.proptotype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};

export default SpContactSummary;
