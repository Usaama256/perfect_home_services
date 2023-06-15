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
import { useNavigate } from "react-router-dom";

const PendingActivations = ({ sps, sx }) => {
  const navigate = useNavigate();
  const onCallClient = (tel) => {
    window.open(`tel:${tel}`);
  };

  const onEmailClient = (email) => {
    window.open(`mailto:${email}`);
  };

  return (
    <Card sx={sx}>
      <CardHeader title="Pending Service Provider Activations" />
      <br />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Contacts</TableCell>
                <TableCell sortDirection="desc">Submission Data</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sps?.map((sp, i) => {
                const dummyTime = 1680016500900 + Math.pow(i, 20);
                // const createdAt = format(order.createdAt, "dd/MM/yyyy");
                return (
                  <TableRow
                    hover
                    key={i}
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(`/admin/dash/sps/${sp.id}`)}
                  >
                    <TableCell>{sp.title}</TableCell>
                    <TableCell>
                      <Tooltip title="Send Email" arrow>
                        <Chip
                          label={sp.email[0]}
                          color="info"
                          onClick={() => onEmailClient(sp.email)}
                          variant="outlined"
                        />
                      </Tooltip>
                      &ensp;
                      <Tooltip title="Call Client" arrow>
                        <Chip
                          label={sp.tel[0]}
                          color="info"
                          onClick={() => onCallClient(sp.phone)}
                          variant="outlined"
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      {fDateTimeSuffix2(dummyTime)} ({fToNow(dummyTime)})
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

PendingActivations.proptotype = {
  orders: PropTypes.array,
  sx: PropTypes.object,
};

export default PendingActivations;
