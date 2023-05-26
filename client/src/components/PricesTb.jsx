import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// const TAX_RATE = 0.07;

// function ccyFormat(num) {
//   return `${num.toFixed(2)}`;
// }

// function priceRow(qty, unit) {
//   return qty * unit;
// }

// function createRow(desc, qty, unit) {
//   const price = priceRow(qty, unit);
//   return { desc, qty, unit, price };
// }

// function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const PricesTb = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ background: "rgba(0, 0, 0, 0)", boxShadow: "none" }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        {data && (
          <>
            <TableHead>
              {/* <TableRow>
            <TableCell align="center" colSpan={3} sx={{ color: "#444" }}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow> */}
              <TableRow>
                <TableCell align="left" sx={{ color: "#aa0000" }}>
                  Item
                </TableCell>
                {data[0]?.price && (
                  <TableCell align="left" sx={{ color: "#aa0000" }}>
                    Price ({data[0]?.currency})
                  </TableCell>
                )}
                <TableCell align="left" sx={{ color: "#aa0000" }}>
                  Description
                </TableCell>
                {/* <TableCell align="right" sx={{ color: "#444" }}></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((i, n) => (
                <TableRow key={n}>
                  {i?.name ? (
                    <TableCell align="left" sx={{ color: "#444" }}>
                      {i.name ? i.name : ""}
                    </TableCell>
                  ) : (
                    <TableCell align="left" sx={{ color: "#444" }}>
                      {""}
                    </TableCell>
                  )}
                  {data[0]?.price ? (
                    <TableCell align="left" sx={{ color: "#444" }}>
                      {i.price ? i.price : ""}
                    </TableCell>
                  ) : (
                    <TableCell align="left" sx={{ color: "#444" }}>
                      {" "}
                    </TableCell>
                  )}
                  {i?.desc && (
                    <TableCell align="left" sx={{ color: "#444" }}>
                      {i?.desc?.length < 181
                        ? i.desc
                        : `${i.desc?.substring(0, 180)}...`}
                    </TableCell>
                  )}
                </TableRow>
              ))}

              {/* <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} sx={{ color: "#444" }}>
              Subtotal
            </TableCell>
            <TableCell align="right" sx={{ color: "#444" }}>
              {ccyFormat(invoiceSubtotal)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ color: "#444" }}>Tax</TableCell>
            <TableCell align="right" sx={{ color: "#444" }}>{`${(
              TAX_RATE * 100
            ).toFixed(0)} %`}</TableCell>
            <TableCell align="right" sx={{ color: "#444" }}>
              {ccyFormat(invoiceTaxes)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} sx={{ color: "#444" }}>
              Total
            </TableCell>
            <TableCell align="right" sx={{ color: "#444" }}>
              {ccyFormat(invoiceTotal)}
            </TableCell>
          </TableRow> */}
            </TableBody>
          </>
        )}
      </Table>
    </TableContainer>
  );
};

export default PricesTb;
