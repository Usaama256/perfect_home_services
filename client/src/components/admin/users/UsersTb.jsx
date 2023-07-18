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
import BackgroundLetterAvatars from "../../BackgroundLetterAvatars";
// import { fDateTimeSuffix2, fToNow } from "../../../store/formatTime";

const UsersTb = ({ users, sx }) => {
  const onCallClient = (tel) => {
    window.open(`tel:${tel}`);
  };

  const onEmailClient = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Clients" />
      <br />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Contacts</TableCell>
                <TableCell>Physical Address</TableCell>
                {/* <TableCell sortDirection="desc">Last login</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user, i) => {
                return (
                  <TableRow hover key={i}>
                    <TableCell>
                      <BackgroundLetterAvatars name={user.username} />
                      {/* <Box
                        component="img"
                        alt="img"
                        src={user.profilePic}
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 1.5,
                          flexShrink: 0,
                        }}
                      /> */}
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>
                      <Tooltip title="Send Email" arrow>
                        <Chip
                          label={user.email}
                          color="info"
                          onClick={() => onEmailClient(user.email)}
                          variant="outlined"
                        />
                      </Tooltip>
                      &ensp;
                      <Tooltip title="Call Client" arrow>
                        <Chip
                          label={user.phone}
                          color="info"
                          onClick={() => onCallClient(user.phone)}
                          variant="outlined"
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>{user.location}</TableCell>
                    {/* <TableCell>
                      {fDateTimeSuffix2(rev.createdAt)} ({fToNow(rev.createdAt)}
                      )
                    </TableCell> */}
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

UsersTb.proptotype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};

export default UsersTb;
