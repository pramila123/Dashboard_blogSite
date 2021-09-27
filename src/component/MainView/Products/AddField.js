import React from "react";
import * as p from "./Products.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
const AddFiled = () => {
  return (
    <>
      <p.AddMainDiv>
        <p.AddHeading>Product</p.AddHeading>
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
      </p.AddMainDiv>
    </>
  );
};

export default AddFiled;
