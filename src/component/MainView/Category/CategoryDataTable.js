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

import DeleteIcon from "../../DeleteComponent/DeleteIcon";
import EditIcon from "../../EditComponent/EditIcon";
import ViewIcon from "../../ViewComponent/ViewIcon";
import axios from "axios";
import { CategoryContext } from "../../../Store/Context/CategoryContext";
import { Alert, Snackbar } from "@mui/material";
import { SubCategoryContext } from "../../../Store/Context/SubCategoryContext";

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

export default function CategoryDataTable() {
  const classes = useStyle();
  const { category, dispatch, getCategoryFormDb } = useContext(CategoryContext);
  const { subCategory, sucCategoryDispatch, getSubCategoryFormDb } =
    useContext(SubCategoryContext);

  //for alert dialog box after submitting.
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  });

  const deleteCategryFromDb = (id) => {
    axios
      .delete("http://localhost:4000/category/" + id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status == "ok") {
          dispatch({
            type: "DELETE_CATEGORY_SUCCESS",
            category: {
              success: true,
            },
          });
          handleClickOpen();
          getCategoryFormDb();
        } else {
          dispatch({
            type: "DELETE_CATEGORY_SUCCESS",
            category: {
              success: false,
            },
          });
          handleClickOpen();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCategoryFormDb = (data) => {
    // console.log(data);
    dispatch({
      type: "PASSING_UPDATE_CATEGORY_SUCCESS",
      category: {
        data: data,
      },
    });
  };

  // useEffect(() => {
  //   getCategoryFormDb();
  // }, []);
  // console.log(category.success);
  return (
    <>
      <TableContainer>
        <Table
          id="example"
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
          <TableBody>
            {category.data.map((row, index) => (
              <TableRow
                key={index}
                style={
                  index % 2
                    ? { backgroundColor: "#e0e0d1" }
                    : { backgroundColor: "white" }
                }
              >
                <TableCell align="left" className={classes.tableRow}>
                  {index + 1}
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
                      deleteCategryFromDb(row.id);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={openDialog}
        autoHideDuration={1500}
        onClose={handleCloseDialog}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {category.success ? (
          <Alert
            onClose={handleCloseDialog}
            style={{
              color: "#fff",
              backgroundColor: "#333A56",
              borderLeft: "1px green",
            }}
          >
            Deleted Successfully !
          </Alert>
        ) : (
          <Alert
            severity="error"
            onClose={handleCloseDialog}
            style={{
              color: "#fff",
              backgroundColor: "#333A56",
              borderLeft: "1px green",
            }}
          >
            Error !
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
