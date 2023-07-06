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
import { Delete, Edit } from "@mui/icons-material";
import { useSnackbar } from "notistack";
import { myRequest } from "../../../store/requestMethods";
import { fetchSpProductsSP } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import PdtDeleteDialog from "./PdtDeleteDialog";

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

const Row = ({ row, isFetching, deletePdt }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);

  return (
    <React.Fragment>
      {deleteDialog && (
        <PdtDeleteDialog
          open={deleteDialog}
          setOpen={setDeleteDialog}
          data={row}
          deleteFn={deletePdt}
        />
      )}
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name ? row.name : "N/A"}
        </TableCell>
        <TableCell align="left">
          {row.price
            ? `${row.currency ? row.currency : ""} ${row.price}`
            : "N/A"}
        </TableCell>
        <TableCell align="left">
          {row.desc
            ? `${
                row.desc?.length > 199 ? row.desc?.subString(0, 199) : row.desc
              }`
            : "N/A"}
        </TableCell>
        <TableCell align="right">
          <Tooltip title="Edit Product/Service" arrow>
            <IconButton
              color="primary"
              size="large"
              disabled={isFetching}
              onClick={() =>
                enqueueSnackbar("Our Engineers Are Working On It", {
                  variant: "info",
                })
              }
            >
              <Edit />
            </IconButton>
          </Tooltip>
          &ensp;&ensp;
          <Tooltip title="Delete Product/Service" arrow>
            <IconButton
              color="error"
              size="large"
              disabled={isFetching}
              onClick={() => setDeleteDialog(true)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
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
                  justifyContent="space-between"
                  spacing={3}
                  sx={{ width: "100%" }}
                >
                  {row.images?.map((i, n) => {
                    return (
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={3}
                        key={n}
                      >
                        <Card style={imgCardSx}>
                          {i && (
                            <img
                              src={i}
                              alt="img"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          )}
                        </Card>
                        <Typography variant="body1">Image {n + 1}</Typography>
                      </Stack>
                    );
                  })}
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

const ProductsTb = ({ products, SPid }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  const deletePdtHandler = async (id) => {
    try {
      enqueueSnackbar("Please Wait While Deleting Product", {
        variant: "info",
      });
      setIsFetching(true);
      const res = await myRequest.get(`/sp.api/deletePdt/${SPid}/${id}`);
      if (res.status === 200) {
        enqueueSnackbar("Product Deleted Successfully", { variant: "success" });
        fetchSpProductsSP(dispatch);
      } else {
        enqueueSnackbar("Error: Deleting Failed", { variant: "error" });
      }
    } catch (err) {
      enqueueSnackbar("Error: Deleting Failed", { variant: "error" });
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
            <TableCell>Item/Product/Service</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((row, n) => (
            <Row
              key={n}
              row={row}
              isFetching={isFetching}
              deletePdt={deletePdtHandler}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTb;
