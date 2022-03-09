import React, { useContext, useState } from "react";
import * as c from "./SubCategory.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { IoAddCircleOutline } from "react-icons/io5";

import { useFormik } from "formik";
import * as Yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import { CategoryContext } from "../../../Store/Context/CategoryContext";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import { SubCategoryContext } from "../../../Store/Context/SubCategoryContext";

const CategoryAdd = () => {
  const { category, dispatch, getCategoryFormDb } = useContext(CategoryContext);
  const { subCategory, subCategoryDispatch, getSubCategoryFormDb } =
    useContext(SubCategoryContext);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Category: subCategory.checkUpdate
        ? subCategory.updatedData.categoryId
        : "",
      SubCategory: subCategory.checkUpdate
        ? subCategory.updatedData.subcategoryName
        : "",
    },
    validationSchema: Yup.object({
      Category: Yup.string().required("Category Required !"),
      SubCategory: Yup.string()
        .min(3, "Minimum 3 character !")
        .required("Category Required !"),
    }),

    onSubmit: (values) => {
      if (subCategory.checkUpdate) {
        subCategoryUpdate(
          subCategory.updatedData.id,
          values.Category,
          values.SubCategory
        );
      } else {
        subCategoryPost(values.Category, values.SubCategory);
      }
    },
  });

  const subCategoryPost = (categoryId, subcategoryName) => {
    axios
      .post(
        "http://localhost:4000/subCategory/",
        {
          subcategoryName: subcategoryName,
          categoryId: categoryId,
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
          // alert("hello");
          setOpenDialog(true);
          getSubCategoryFormDb();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const subCategoryUpdate = (id, categoryId, subcategoryName) => {
    console.log(id + " " + categoryId + " " + subcategoryName);
    axios
      .patch(
        "http://localhost:4000/subCategory/" + id,
        {
          categoryId: categoryId,
          subcategoryName: subcategoryName,
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
          // setOpenDialog(true);
          getSubCategoryFormDb();
          subCategoryDispatch({
            type: "UPDATE_SUCCESS",
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

  return (
    <>
      <c.AddCategoryMainDiv>
        <c.AddCategoryHeading>Add Sub Category</c.AddCategoryHeading>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={4}>
            <c.Title>FirstName</c.Title>
            <FormControl size="small" fullWidth>
              {formik.touched.Category && formik.errors.Category ? (
                <>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ fontSize: "0.9rem", color: "#D32F2F" }}
                  >
                    {formik.errors.Category}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label={formik.errors.Category}
                    error
                    style={{
                      width: "20rem",
                    }}
                    {...formik.getFieldProps("Category")}
                  >
                    {category.data.map((item, index) => (
                      <MenuItem
                        key={index}
                        value={item.id}
                        style={{
                          fontSize: "0.9rem",
                          paddingTop: "0.1rem",
                          paddingBottom: "0.1rem",
                        }}
                      >
                        {item.categoryName}
                      </MenuItem>
                    ))}
                  </Select>
                </>
              ) : (
                <>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Category"
                    {...formik.getFieldProps("Category")}
                    style={{
                      width: "20rem",
                    }}
                  >
                    {category.data.map((item, index) => (
                      <MenuItem
                        key={index}
                        value={item.id}
                        style={{
                          fontSize: "0.9rem",
                          paddingTop: "0.1rem",
                          paddingBottom: "0.1rem",
                        }}
                      >
                        {item.categoryName}
                      </MenuItem>
                    ))}{" "}
                  </Select>
                </>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={6} md={4}>
            <c.Title>Sub Category</c.Title>

            {formik.touched.SubCategory && formik.errors.SubCategory ? (
              <TextField
                id="outlined-basic"
                label="Sub Category"
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                {...formik.getFieldProps("Category")}
                style={{ width: "100%", marginBottom: "0.8rem" }}
                error
                {...formik.getFieldProps("SubCategory")}
              />
            ) : (
              <TextField
                id="outlined-basic"
                label="Sub Category"
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                {...formik.getFieldProps("Category")}
                style={{ width: "100%", marginBottom: "0.8rem" }}
                {...formik.getFieldProps("SubCategory")}
              />
            )}
          </Grid>
        </Grid>

        {subCategory.checkUpdate ? (
          <Button
            variant="outlined"
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
          // severity="error"
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
