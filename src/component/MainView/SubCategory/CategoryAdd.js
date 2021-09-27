import React from "react";
import * as c from "./";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
const CategoryAdd = () => {
  return (
    <>
      <c.AddMainDiv>
        <c.AddHeading>Category</c.AddHeading>
        <TextField
          id="outlined-basic"
          label="Category"
          variant="outlined"
          size="small"
          inputProps={{ style: { fontSize: 15 } }}
          InputLabelProps={{ style: { fontSize: 15 } }}
          style={{ width: "20rem", marginBottom: "1rem" }}
        />

        <Button
          variant="outlined"
          color="primary"
          style={{ width: "5rem", fontSize: "0.7rem" }}
        >
          Add
        </Button>
      </c.AddMainDiv>
    </>
  );
};

export default CategoryAdd;
