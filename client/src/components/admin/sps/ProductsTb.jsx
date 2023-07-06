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
import { Card, CardContent, CardHeader, Stack } from "@mui/material";

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

const Row = ({ row }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
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
                  {row.images?.map((image, n) => {
                    return (
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={3}
                      >
                        <Card style={imgCardSx}>
                          {image && (
                            <img
                              src={image}
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
                  {/* <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                  >
                    <Card style={imgCardSx}>
                      {row.img2 && (
                        <img
                          src={row.img2}
                          alt="img"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </Card>
                    <Typography variant="body1">Image Two</Typography>
                  </Stack>
                  <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                  >
                    <Card style={imgCardSx}>
                      {row.img3 && (
                        <img
                          src={row.img3}
                          alt="img"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </Card>
                    <Typography variant="body1">Image Three</Typography>
                  </Stack> */}
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

const ProductsTb = ({ products }) => {
  return (
    <Card>
      <CardHeader
        subheader="The information can not be edited!"
        title="Products"
      />
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ margin: "20px 0px 10px 0px" }}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Item/Product/Service</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.map((row, n) => (
                  <Row key={n} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductsTb;
