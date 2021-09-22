import React from "react";
import * as c from "./Category.styles";
import CategoryDataTable from "./CategoryDataTable";
import SubCategoryDataTable from "./SubCategoryDataTable";

const CategoryTable = () => {
  return (
    <>
      <c.CategoryTableMainDiv>
        <c.CategoryTableDiv>
          <CategoryDataTable />
        </c.CategoryTableDiv>
        <c.SubCategoryTableDiv>
          <SubCategoryDataTable />
        </c.SubCategoryTableDiv>
      </c.CategoryTableMainDiv>
    </>
  );
};

export default CategoryTable;
