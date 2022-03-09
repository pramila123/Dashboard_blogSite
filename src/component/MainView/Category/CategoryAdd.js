import React, { useContext, useState } from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { IoAddCircleOutline } from "react-icons/io5";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CategoryContext } from "../../../Store/Context/CategoryContext";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";

const CategoryAdd = () => {
  const { category, dispatch, getCategoryFormDb } = useContext(CategoryContext);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Category: category.checkUpdate ? category.updatedData.categoryName : "",
    },
    validationSchema: Yup.object({
      Category: Yup.string()
        .min(3, "Minimum 3 character !")
        .required("Category Required !"),
    }),

    onSubmit: (values) => {
      if (category.checkUpdate) {
        categoryUpdate(category.updatedData.id, values.Category);
      } else {
        categoryPost(values.Category);
      }
    },
  });

  const categoryPost = (Category) => {
    // console.log(Category);
    axios
      .post(
        "http://localhost:4000/category/",
        {
          categoryName: Category,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.status == "ok") {
          formik.resetForm();
          setOpenDialog(true);
          getCategoryFormDb();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const categoryUpdate = (id, categoryName) => {
    axios
      .patch(
        "http://localhost:4000/category/" + id,
        {
          categoryName: categoryName,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        // console.log(res);
        if (res.data.status == "ok") {
          formik.resetForm();
          setOpenDialog(true);
          getCategoryFormDb();
          dispatch({
            type: "UPDATE_CATEGORY_SUCCESS",
            category: {},
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //for alert dialog box after submitting.
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  {
    // console.log(category);
  }
  return (
    <>
      <c.AddCategoryMainDiv>
        <c.AddCategoryHeading>Add Category</c.AddCategoryHeading>
        {formik.touched.Category && formik.errors.Category ? (
          <TextField
            id="outlined-basic"
            label={formik.errors.Category}
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            style={{ width: "20rem", marginBottom: "0.8rem" }}
            {...formik.getFieldProps("Category")}
            error
          />
        ) : (
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            style={{ width: "20rem", marginBottom: "0.8rem" }}
            {...formik.getFieldProps("Category")}
          />
        )}
        {category.checkUpdate ? (
          <Button
            variant="outlined"
            // color="primary"
            className="categoryAddBtton"
            style={{ width: "7rem", fontSize: "0.7rem" }}
            onClick={formik.handleSubmit}
          >
            <IoAddCircleOutline className="addIcon" />
            Update
          </Button>
        ) : (
          <Button
            variant="outlined"
            // color="primary"
            className="categoryAddBtton"
            style={{ width: "7rem", fontSize: "0.7rem" }}
            onClick={formik.handleSubmit}
          >
            <IoAddCircleOutline className="addIcon" />
            Add
          </Button>
        )}
      </c.AddCategoryMainDiv>
      <Snackbar
        open={openDialog}
        autoHideDuration={1500}
        onClose={handleCloseDialog}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity={category.success ? "success" : "error"}
          onClose={handleCloseDialog}
          style={{
            color: "#fff",
            backgroundColor: "#333A56",
            borderLeft: "1px green",
          }}
        >
          Done Successfully !
        </Alert>
      </Snackbar>
    </>
  );
};

export default CategoryAdd;
