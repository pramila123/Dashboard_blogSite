import React, { useState } from "react";
import * as o from "./Employee.styles";
import Button from "@material-ui/core/Button";
import AddField from "./AddField";
import { IoAddCircleOutline } from "react-icons/io5";

const Heading = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  return (
    <>
      <o.HadingButtonMainDiv>
        <o.HeadingMianDiv>
          <o.Heading>Employee</o.Heading>
          <o.SubHeading>View Employee Detail</o.SubHeading>
        </o.HeadingMianDiv>
        <o.ButtonMainDiv>
          <Button
            variant="outlined"
            // color="primary"
            className="categoryAddBtton"
            style={{ fontSize: "0.7rem" }}
            onClick={() => {
              showAddField();
            }}
          >
            <IoAddCircleOutline className="addIcon" />
            Add Employee
          </Button>
        </o.ButtonMainDiv>
      </o.HadingButtonMainDiv>
      {show ? <AddField /> : " "}
    </>
  );
};

export default Heading;
