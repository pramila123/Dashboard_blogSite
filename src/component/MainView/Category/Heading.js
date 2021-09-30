import React, { useState } from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";
import CategoryAdd from "./CategoryAdd";
const CategoryHeding = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>Category</c.Heading>
          <c.SubHeading>View Category Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv>
          <Button variant="outlined" color="primary" onClick={showAddField}>
            Add Category
          </Button>
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {show ? <CategoryAdd /> : " "}
    </>
  );
};

export default CategoryHeding;
