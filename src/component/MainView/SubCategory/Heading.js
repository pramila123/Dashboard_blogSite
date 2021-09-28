import React, { useState } from "react";
import * as c from "./SubCategory.styles";
import Button from "@material-ui/core/Button";
import SubCategoryAdd from "./SubCategoryAdd";

const CategoryHeding = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>Sub Category</c.Heading>
          <c.SubHeading>View Sub Category Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv>
          {/* <Button variant="outlined" color="primary">
            Add Category
          </Button> */}
          <Button
            variant="outlined"
            color="primary"
            style={{ marginLeft: "1rem" }}
            onClick={showAddField}
          >
            Add Sub Category
          </Button>
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {show ? <SubCategoryAdd /> : " "}
    </>
  );
};

export default CategoryHeding;
