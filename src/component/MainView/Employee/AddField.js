import React from "react";
import * as o from "./Employee.styles";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { IoAddCircleOutline } from "react-icons/io5";
const AddFiled = () => {
  return (
    <>
      <o.AddMainDiv>
        <o.AddHeading>Add Employee</o.AddHeading>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={4}>
            <o.Title>FirstName</o.Title>
            <TextField
              id="outlined-basic"
              label="FirstName"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <o.Title>MiddleName</o.Title>
            <TextField
              id="outlined-basic"
              label="MiddleName"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <o.Title>LastName</o.Title>
            <TextField
              id="outlined-basic"
              label="LastName"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <o.Title>Email</o.Title>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <o.Title>Contact No</o.Title>
            <TextField
              id="outlined-basic"
              label="Contact"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <o.Title>Password</o.Title>
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <o.Title>Confirm Password</o.Title>
            <TextField
              id="outlined-basic"
              type="password"
              label="Confirm Password"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <o.Title>Description</o.Title>
            <TextField
              id="outlined-basic"
              multiline
              label="Description"
              variant="outlined"
              rows="3"
              size="small"
              inputProps={{ style: { fontSize: 15 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              style={{ width: "100%", marginBottom: "0.8rem" }}
            />
          </Grid>
        </Grid>

        <Button
          variant="outlined"
          // color="primary"
          className="categoryAddBtton"
          style={{ width: "5rem", fontSize: "0.7rem" }}
          // onClick={formik.handleSubmit}
        >
          <IoAddCircleOutline className="addIcon" />
          Add
        </Button>
      </o.AddMainDiv>
    </>
  );
};

export default AddFiled;
