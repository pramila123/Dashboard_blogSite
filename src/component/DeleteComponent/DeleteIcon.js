import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { AiOutlineDelete } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@mui/material/Alert";

import Snackbar from "@material-ui/core/Snackbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import styled from "styled-components";

const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background-color: transparent;
    backdrop-filter: blur(1px);
  }
`;

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteIcon = (props) => {
  const classes = useStyle();

  //ConfirmationDialog
  const [openConfimationDialog, setOpenConfimationDialog] =
    React.useState(false);

  const handleClickOpenConfimationDialog = () => {
    setOpenConfimationDialog(true);
  };

  const handleCloseConfimationDialog = () => {
    setOpenConfimationDialog(false);
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
      <Tooltip title="Delete" TransitionComponent={Zoom} arrow>
        <AiOutlineDelete
          className={classes.deleteIcon}
          onClick={handleClickOpenConfimationDialog}
          // onClick={handleClickOpen}
        />
      </Tooltip>
      {/* Confirmation Dialog */}

      <StyledDialog
        open={openConfimationDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseConfimationDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to delete?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfimationDialog}>Disagree</Button>
          <Button
            onClick={() => {
              handleClickOpen();
              handleCloseConfimationDialog();
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </StyledDialog>

      {/* Snack bar */}
      <Snackbar
        open={openDialog}
        autoHideDuration={1500}
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
