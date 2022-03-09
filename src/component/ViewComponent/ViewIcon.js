import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import { GiBlackBook } from "react-icons/gi";

const useStyle = makeStyles((theme) => ({
  viewIcon: {
    fontSize: "1.1rem",
    color: "#496C83",
    "&:hover": {
      backgroundColor: "#84818A",
      // padding: "0.1rem",
      borderRadius: "50%",
      color: "white",
    },
  },
}));
const ViewIcon = () => {
  const classes = useStyle();

  return (
    <>
      <Tooltip title="View" TransitionComponent={Zoom} arrow>
        <span>
          <GiBlackBook className={classes.viewIcon} />
        </span>
      </Tooltip>
    </>
  );
};

export default ViewIcon;
