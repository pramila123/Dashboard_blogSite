import React from "react";
import * as p from "./Products.styles";
import Button from "@material-ui/core/Button";

const Heading = () => {
  return (
    <>
      <p.HadingButtonMainDiv>
        <p.HeadingMianDiv>
          <p.Heading>Products</p.Heading>
          <p.SubHeading>View Products Detail</p.SubHeading>
        </p.HeadingMianDiv>
        <p.ButtonMainDiv>
          <Button variant="outlined" color="primary">
            Add Products
          </Button>
        </p.ButtonMainDiv>
      </p.HadingButtonMainDiv>
    </>
  );
};

export default Heading;
