import React from "react";
import * as c from "./Category.styles";
import CategoryAdd from "./CategoryAdd";
import CategoryHeading from "./CategoryHeding";
import CategoryTable from "./CategoryTable";
import SubCategoryAdd from "./SubCategoryAdd";
export const Category = () => {
  return (
    <c.CategoryRoot>
      <c.CategoryContainer>
        <CategoryHeading />
        <CategoryAdd />
        <SubCategoryAdd />
        <CategoryTable />
      </c.CategoryContainer>
    </c.CategoryRoot>
  );
};
export default Category;
