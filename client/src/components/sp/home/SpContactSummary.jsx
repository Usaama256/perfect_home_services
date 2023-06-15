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

const SpContactSummary = ({ users, sx }) => {
  const onCallClient = (tel) => {
    window.open(`tel:${tel}`);
  };

  const onEmailClient = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Contact Summary" />
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
              {users?.map((usr, i) => {
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
                    <TableCell>{usr.name}</TableCell>
                    <TableCell>
                      <Tooltip title="Send Email" arrow>
                        <Chip
                          label={usr.email}
                          color="info"
                          onClick={() => onEmailClient(usr.email)}
                          variant={usr.type === "email" ? "filled" : "outlined"}
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Call Client" arrow>
                        <Chip
                          label={usr.phone}
                          color="info"
                          onClick={() => onCallClient(usr.phone)}
                          variant={usr.type === "phone" ? "filled" : "outlined"}
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      {fDateTimeSuffix2(usr.createdAt)} ({fToNow(usr.createdAt)}
                      )
                    </TableCell>
                    <TableCell>{usr.type}</TableCell>
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

SpContactSummary.proptotype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};

export default SpContactSummary;
