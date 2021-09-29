import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@mui/material/Paper";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import ViewIcon from "../../ViewComponent/ViewIcon";
import EditIcon from "../../EditComponent/EditIcon";
import DeleteIcon from "../../DeleteComponent/DeleteIcon";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyle = makeStyles((theme) => ({
  tableRow: {
    whiteSpace: "nowrap",
  },
  stripColor: {
    backgroundColor: "red",
  },
  stripNoColor: {
    backgroundColor: "white",
  },
}));

export default function SubCategoryDataTable() {
  const classes = useStyle();
  useEffect(() => {
    $(document).ready(function () {
      $("#example2").DataTable();
    });
  });

  return (
    <TableContainer>
      <Table
        id="example2"
        sx={{ minWidth: 300 }}
        style={{ paddingTop: "1rem", paddingBottom: "rem" }}
      >
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableRow} align="left">
              SN
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Category
            </TableCell>

            <TableCell className={classes.tableRow} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody stripedRows>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              style={
                index % 2
                  ? { backgroundColor: "#e0e0d1" }
                  : { backgroundColor: "white" }
              }
              //   className={index % 2 ? classes.stripColor : classes.stripNoColor}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" className={classes.tableRow}>
                {index}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                {row.name}
              </TableCell>

              <TableCell align="right">
                <ViewIcon />
                <EditIcon />
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
