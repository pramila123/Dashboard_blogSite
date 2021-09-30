import React, { useState } from "react";
import * as o from "./Order.styles";
import Button from "@material-ui/core/Button";
import AddField from "./AddField";

const Heading = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  return (
    <>
      <o.HadingButtonMainDiv>
        <o.HeadingMianDiv>
          <o.Heading>Order</o.Heading>
          <o.SubHeading>View Order Detail</o.SubHeading>
        </o.HeadingMianDiv>
        <o.ButtonMainDiv>
          <Button variant="outlined" color="primary" onClick={showAddField}>
            Add Products
          </Button>
        </o.ButtonMainDiv>
      </o.HadingButtonMainDiv>
      {show ? <AddField /> : " "}
    </>
  );
};

export default Heading;
