import React from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";

const CategoryHeding = () => {
  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>Category</c.Heading>
          <c.SubHeading>View Category Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv>
          <Button variant="outlined" color="primary">
            Add Category
          </Button>
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
    </>
  );
};

export default CategoryHeding;
