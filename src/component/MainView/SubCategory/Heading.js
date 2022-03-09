import React, { useContext } from "react";
import * as c from "./SubCategory.styles";
import SubCategoryAdd from "./SubCategoryAdd";
import AddButton from "../../ButtonComponent/AddButton";
import { SubCategoryContext } from "../../../Store/Context/SubCategoryContext";

const CategoryHeding = () => {
  const { subCategoryDispatch } = useContext(SubCategoryContext);

  const showAddField = () => {
    subCategoryDispatch({
      type: "UPDATE_SUCCESS",
      category: {},
    });
  };
  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>Sub Category</c.Heading>
          <c.SubHeading>View Sub Category Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv>
          <AddButton showAddField={showAddField} name="Add Sub Category" />
        </c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {/* {show ? <SubCategoryAdd /> : " "} */}
      <SubCategoryAdd />
    </>
  );
};

export default CategoryHeding;
