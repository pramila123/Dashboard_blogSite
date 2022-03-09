import React, { useContext, useEffect, useState } from "react";
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
import SuccessAlert from "../../SuccessAlertComponent/SuccessAlert";
import { SubCategoryContext } from "../../../Store/Context/SubCategoryContext";
import axios from "axios";

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

  const { subCategory, subCategoryDispatch, getSubCategoryFormDb } =
    useContext(SubCategoryContext);

  useEffect(() => {
    $(document).ready(function () {
      $("#example2").DataTable();
    });
  });

  const deleteSubCategryFromDb = (id) => {
    axios
      .delete("http://localhost:4000/subCategory/" + id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.status);

        if (res.data.status == "ok") {
          subCategoryDispatch({
            type: "DELETE_SUBCATEGORY",
            subCategory: {
              success: true,
            },
          });
          // handleClickOpen();
          getSubCategoryFormDb();
        } else {
          subCategoryDispatch({
            type: "DELETE_SUBCATEGORY",
            subCategory: {
              success: false,
            },
          });
          // handleClickOpen();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCategoryFormDb = (data) => {
    // console.log(data);
    subCategoryDispatch({
      type: "PASSING_UPDATE_SUBCATEGORY",
      subCategory: {
        data: data,
      },
    });
  };

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
              Sub Category
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Category
            </TableCell>

            <TableCell className={classes.tableRow} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subCategory.data.map((row, index) => (
            <TableRow
              key={index}
              style={
                index % 2
                  ? { backgroundColor: "#e0e0d1" }
                  : { backgroundColor: "white" }
              }
              //   className={index % 2 ? classes.stripColor : classes.stripNoColor}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" className={classes.tableRow}>
                {index + 1}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                {row.subcategoryName}
              </TableCell>
              <TableCell align="left" className={classes.tableRow}>
                {row.categoryName}
              </TableCell>

              <TableCell align="right">
                <EditIcon
                  updateFromDb={() => {
                    updateCategoryFormDb(row);
                  }}
                />
                <DeleteIcon
                  deleteFromDb={() => {
                    deleteSubCategryFromDb(row.id);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
