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
        <TableCell align="left">{row.id}</TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">
          {row.desc
            ? `${
                row.desc?.length > 199 ? row.desc?.subString(0, 199) : row.desc
              }`
            : "N/A"}
        </TableCell>
        <TableCell align="right">
          <Tooltip title="Edit Service" arrow>
            <IconButton color="primary" size="large">
              <Edit />
            </IconButton>
          </Tooltip>
          &ensp;&ensp;
          <Tooltip title="Delete Service" arrow>
            <IconButton color="error" size="large">
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
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const ServicesTb = ({ services }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services?.map((row, n) => (
            <Row key={n} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServicesTb;
