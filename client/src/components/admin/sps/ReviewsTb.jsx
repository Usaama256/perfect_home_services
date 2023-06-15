import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import Scrollbar from "../../Scrollbar";
import { ArrowForwardIos } from "@mui/icons-material";
import { fDateTimeSuffix2, fToNow } from "../../../store/formatTime";
import { imgAvator } from "../../../store/images";

const ReviewsTb = ({ reviews, sx }) => {
  const onCallClient = (tel) => {
    window.open(`tel:${tel}`);
  };

  const onEmailClient = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="User Comments On Company" />
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
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews?.map((rev, i) => {
                // const createdAt = format(order.createdAt, "dd/MM/yyyy");
                return (
                  <TableRow hover key={i}>
                    <TableCell>
                      <Box
                        component="img"
                        alt="img"
                        src={imgAvator}
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 1.5,
                          flexShrink: 0,
                        }}
                      />
                    </TableCell>
                    <TableCell>{rev.name}</TableCell>
                    <TableCell>
                      <Tooltip title="Send Email" arrow>
                        <Chip
                          label={rev.email}
                          color="info"
                          onClick={() => onEmailClient(rev.email)}
                          variant="outlined"
                        />
                      </Tooltip>
                      &ensp;
                      <Tooltip title="Call Client" arrow>
                        <Chip
                          label={rev.phone}
                          color="info"
                          onClick={() => onCallClient(rev.phone)}
                          variant="outlined"
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>{rev.message}</TableCell>
                    <TableCell>
                      {fDateTimeSuffix2(rev.createdAt)} ({fToNow(rev.createdAt)}
                      )
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
        <Button
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
        </Button>
      </CardActions>
    </Card>
  );
};

ReviewsTb.proptotype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};

export default ReviewsTb;
