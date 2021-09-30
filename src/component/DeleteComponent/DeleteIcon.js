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
      <Dialog
        open={opendialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack sx={{ width: "100%" }} spacing={2} autoHideDuration={6000}>
          <Alert className={classes.alert} onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
          {/* <Alert
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This is a success alert — check it out!
        </Alert> */}
        </Stack>
      </Dialog>
    </>
  );
};

export default DeleteIcon;
