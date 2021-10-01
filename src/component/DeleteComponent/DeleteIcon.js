import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import SuccessAlert from "../SuccessAlertComponent/SuccessAlert";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  alert: {
    color: "red",
    backgroundColor: "#333A56",
  },
}));

const useStyle = makeStyles((theme) => ({
  deleteIcon: {
    fontSize: "1.2rem",
    marginLeft: "0.8rem",
    color: "#EF3B4F",
    "&:hover": {
      backgroundColor: "#84818A",
      // padding: "0.1rem",
      borderRadius: "50%",
      color: "white",
    },
  },
  alert: {
    backgroundColor: "red",
  },
}));
const DeleteIcon = (props) => {
  const classes = useStyle();

  //for alert dialog box after submitting.
  const [opendialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Tooltip title="Delete" TransitionComponent={Zoom} arrow>
        <AiOutlineDelete
          className={classes.deleteIcon}
          onClick={handleClickOpen}
        />
      </Tooltip>

      <Snackbar
        open={opendialog}
        // autoHideDuration={1500}
        onClose={handleCloseDialog}
      >
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
      </Snackbar>
    </>
  );
};

export default DeleteIcon;
