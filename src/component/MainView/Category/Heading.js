import React, { useState } from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";
import CategoryAdd from "./CategoryAdd";
import AddButton from "../../ButtonComponent/AddButton";
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
          {/* <Button variant="outlined" color="primary" >
            Add Category
          </Button> */}
          {/* <AddButton showAddField={showAddField} name="Add Catgory" /> */}
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {/* {show ? <CategoryAdd /> : " "} */}
      <CategoryAdd />
    </>
  );
};

export default CategoryHeding;
