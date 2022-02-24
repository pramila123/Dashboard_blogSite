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
    initialValues: {
      Category: "",
    },
    validationSchema: Yup.object({
      Category: Yup.string()
        .min(3, "Minimum 3 character !")
        .required("Category Required !"),
    }),

    onSubmit: (values) => {
      // values.preventDefault();
      // handleAdd(values.url, values.title);
      formik.resetForm();
      // formik.setErrors({});
      categoryPost(values.Category);
    },
  });

  const categoryPost = (Category) => {
    console.log(Category);
    axios
      .post("http://localhost:4000/category/", {
        categoryName: Category,
      })
      .then((response) => {
        setOpenDialog(true);
        getCategoryFormDb();
      })
      .catch((error) => {
        console.log(error);
        // getSticyNotesDataDb();
        // dispatch({
        //   type: "SIGN_IN_FAIL",
        //   login: {
        //     errorMessage: error.response.data.message,
        //   },
        // });
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

  return (
    <>
      <c.AddCategoryMainDiv>
        <c.AddCategoryHeading>
          Add Category
          {category.success}
        </c.AddCategoryHeading>
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

        <Button
          variant="outlined"
          // color="primary"
          className="categoryAddBtton"
          style={{ width: "5rem", fontSize: "0.7rem" }}
          onClick={formik.handleSubmit}
        >
          <IoAddCircleOutline className="addIcon" />
          Add
        </Button>
      </c.AddCategoryMainDiv>
      <Snackbar
        open={openDialog}
        autoHideDuration={1500}
        onClose={handleCloseDialog}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleCloseDialog}
          style={{
            color: "#fff",
            backgroundColor: "#333A56",
            borderLeft: "1px green",
          }}
        >
          Successfully !
        </Alert>
      </Snackbar>
    </>
  );
};

export default CategoryAdd;
