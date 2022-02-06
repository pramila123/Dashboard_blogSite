import React from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { IoAddCircleOutline } from "react-icons/io5";

import { useFormik } from "formik";
import * as Yup from "yup";

const CategoryAdd = () => {
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
      // formik.resetForm();
      // formik.setErrors({});
    },
  });

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
    </>
  );
};

export default CategoryAdd;
