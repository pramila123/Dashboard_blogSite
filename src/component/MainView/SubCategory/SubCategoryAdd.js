import React from "react";
import * as c from "./SubCategory.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { IoAddCircleOutline } from "react-icons/io5";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useFormik } from "formik";
import * as Yup from "yup";

const CategoryAdd = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      Category: "",
      SubCategory: "",
    },
    validationSchema: Yup.object({
      Category: Yup.string().required("Category Required !"),
      SubCategory: Yup.string()
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
        <c.AddCategoryHeading>Add Sub Category</c.AddCategoryHeading>
        <FormControl variant="filled" margin="dense">
          <c.SelectTextfieldMainDiv>
            <FormControl
              style={
                {
                  // marginBottom: "1rem",
                  // marginLeft: "1rem",
                }
              }
            >
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
                    value={age}
                    label={formik.errors.Category}
                    size="small"
                    error
                    style={{
                      width: "20rem",
                      // marginBottom: "1rem",
                      // marginLeft: "1rem",
                    }}
                    {...formik.getFieldProps("Category")}
                    // onChange={handleChange}
                  >
                    <MenuItem
                      value={10}
                      style={{
                        fontSize: "0.9rem",
                        paddingTop: "0.1rem",
                        paddingBottom: "0.1rem",
                      }}
                    >
                      Ten
                    </MenuItem>
                    <MenuItem
                      value={20}
                      style={{
                        fontSize: "0.9rem",
                        paddingTop: "0.1rem",
                        paddingBottom: "0.1rem",
                      }}
                    >
                      Twenty
                    </MenuItem>
                    <MenuItem
                      value={30}
                      style={{
                        fontSize: "0.9rem",
                        paddingTop: "0.1rem",
                        paddingBottom: "0.1rem",
                      }}
                    >
                      Thirty
                    </MenuItem>
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
                    value={age}
                    label="Category"
                    size="small"
                    {...formik.getFieldProps("Category")}
                    style={{
                      width: "20rem",
                      // marginBottom: "1rem",
                      // marginLeft: "1rem",
                    }}
                    onChange={handleChange}
                  >
                    <MenuItem
                      value={10}
                      style={{
                        fontSize: "0.9rem",
                        paddingTop: "0.1rem",
                        paddingBottom: "0.1rem",
                      }}
                    >
                      Ten
                    </MenuItem>
                    <MenuItem
                      value={20}
                      style={{
                        fontSize: "0.9rem",
                        paddingTop: "0.1rem",
                        paddingBottom: "0.1rem",
                      }}
                    >
                      Twenty
                    </MenuItem>
                    <MenuItem
                      value={30}
                      style={{
                        fontSize: "0.9rem",
                        paddingTop: "0.1rem",
                        paddingBottom: "0.1rem",
                      }}
                    >
                      Thirty
                    </MenuItem>
                  </Select>
                </>
              )}
            </FormControl>
            {formik.touched.SubCategory && formik.errors.SubCategory ? (
              <TextField
                id="outlined-basic"
                label="Sub Category"
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 15 } }}
                InputLabelProps={{ style: { fontSize: 15 } }}
                style={{
                  width: "20rem",
                  marginBottom: "1rem",
                  marginLeft: "1rem",
                }}
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
                style={{
                  width: "20rem",
                  marginBottom: "1rem",
                  marginLeft: "1rem",
                }}
                {...formik.getFieldProps("SubCategory")}
              />
            )}
          </c.SelectTextfieldMainDiv>

          <Button
            variant="outlined"
            className="categoryAddBtton"
            style={{ width: "5rem", fontSize: "0.7rem" }}
            onClick={formik.handleSubmit}
          >
            <IoAddCircleOutline className="addIcon" />
            Add
          </Button>
        </FormControl>
      </c.AddCategoryMainDiv>
    </>
  );
};

export default CategoryAdd;
