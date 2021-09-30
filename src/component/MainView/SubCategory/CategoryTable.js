import React from "react";
import * as c from "./SubCategory.styles";
import SubCategoryDataTable from "./SubCategoryDataTable";

const CategoryTable = () => {
  return (
    <>
      <c.CategoryTableMainDiv>
        <c.SubCategoryTableDiv>
          <SubCategoryDataTable />
        </c.SubCategoryTableDiv>
      </c.CategoryTableMainDiv>
    </>
  );
};

export default CategoryTable;
