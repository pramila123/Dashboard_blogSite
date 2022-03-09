import React, { useState } from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";
import CategoryAdd from "./CategoryAdd";
import AddButton from "../../ButtonComponent/AddButton";
import { useContext } from "react";
import { CategoryContext } from "../../../Store/Context/CategoryContext";
const CategoryHeding = () => {
  const { dispatch } = useContext(CategoryContext);

  const showAddField = () => {
    dispatch({
      type: "UPDATE_CATEGORY_SUCCESS",
      category: {},
    });
  };

  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>Category</c.Heading>
          <c.SubHeading>View Category Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv>
          <AddButton showAddField={showAddField} name="Add Category" />
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {/* {show ? <CategoryAdd /> : " "} */}
      <CategoryAdd />
    </>
  );
};

export default CategoryHeding;
