import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Card, Stack, Tooltip } from "@mui/material";
import { Delete, DoneAll, Edit } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { fetchServicesAdmin } from "../../../redux/apiCalls";
import { myRequest } from "../../../store/requestMethods";

const imgCardSx = {
  overflow: "hidden",
  //   padding: "10px",
  boxShadow: "0px 2px 5px #0000008e",
  // borderRadius: "50%",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 320,
  width: 320,
};

const Row = ({ row, fetching, enableService, disableService }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const cutDescStr = row.desc?.substring(0, 20);
  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          background: `${parseInt(row.active, 10) === 1 ? "" : "#ff5d5d7c"}`,
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.Sid}</TableCell>
        <TableCell component="th" scope="row">
          {row.Sname}
        </TableCell>
        <TableCell align="left">
          {row.desc?.length > 0
            ? `${row.desc?.length > 20 ? `${cutDescStr}...` : row.desc}`
            : "N/A"}
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography
            color={parseInt(row.active, 10) === 1 ? "success" : "error"}
          >
            {parseInt(row.active, 10) === 1 ? "Active" : "Disabled"}
          </Typography>
        </TableCell>
        <TableCell align="right">
          {parseInt(row.active, 10) === 1 && (
            <Tooltip title="Edit Service" arrow>
              <IconButton
                color="primary"
                size="large"
                disabled={fetching}
                onClick={() =>
                  enqueueSnackbar("Our Engineers Are Working On It", {
                    variant: "info",
                  })
                }
              >
                <Edit />
              </IconButton>
            </Tooltip>
          )}
          &ensp;&ensp;
          {parseInt(row.active, 10) === 1 ? (
            <Tooltip title="Disable Service" arrow>
              <IconButton
                color="error"
                size="large"
                onClick={() => disableService()}
                disabled={fetching}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Enable Service" arrow>
              <IconButton
                color="success"
                size="large"
                onClick={() => enableService()}
                disabled={fetching}
              >
                <DoneAll />
              </IconButton>
            </Tooltip>
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <br />
              <Typography variant="h6" gutterBottom component="div">
                Images
              </Typography>
              <br />
              <Table size="small" aria-label="purchases">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                  flexWrap="wrap"
                  spacing={3}
                  sx={{ width: "100%" }}
                >
                  {row.imgs?.map((i, n) => {
                    return (
                      <Card style={imgCardSx} key={n}>
                        <img
                          src={i.src}
                          alt="img"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Card>
                    );
                  })}
                </Stack>
                <br />
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-around"
                  flexWrap="wrap"
                  spacing={3}
                  sx={{ width: "100%" }}
                >
                  {row.desc}
                </Stack>
                <br />
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const ServicesTb = ({ services }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  const disableService = async (Sid) => {
    try {
      enqueueSnackbar("Disabling Service", { variant: "info" });
      setIsFetching(true);
      const res = await myRequest.get(`/admin.api/disableService/${Sid}`);
      if (res.status === 200) {
        enqueueSnackbar("Disabling Service Successfully", {
          variant: "success",
        });
        fetchServicesAdmin(dispatch);
      } else {
        enqueueSnackbar("Error: Disabling Service Failed", {
          variant: "error",
        });
      }
    } catch (err) {
      enqueueSnackbar("Error: Disabling Service Failed", { variant: "error" });
      enqueueSnackbar(err.response?.data, { variant: "error" });
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
    } finally {
      setIsFetching(false);
    }
  };

  const enableService = async (Sid) => {
    try {
      enqueueSnackbar("Enabling Service", { variant: "info" });
      setIsFetching(true);
      const res = await myRequest.get(`/admin.api/enableService/${Sid}`);
      if (res.status === 200) {
        enqueueSnackbar("Enabling Service Successfully", {
          variant: "success",
        });
        fetchServicesAdmin(dispatch);
      } else {
        enqueueSnackbar("Error: Enabling Service Failed", {
          variant: "error",
        });
      }
    } catch (err) {
      enqueueSnackbar("Error: Enabling Service Failed", { variant: "error" });
      enqueueSnackbar(err.response?.data, { variant: "error" });
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
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services?.map((row, n) => (
            <Row
              key={n}
              row={row}
              fetching={isFetching}
              disableService={() => disableService(row.Sid)}
              enableService={() => enableService(row.Sid)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServicesTb;
