import React from "react";
import * as c from "./Category.styles";
import CategoryAdd from "./CategoryAdd";
import Heading from "./Heading";
import CategoryTable from "./CategoryTable";
export const Category = () => {
  return (
    <c.Root>
      <c.Container>
        <Heading />
        {/* <CategoryAdd /> */}
        <CategoryTable />
      </c.Container>
    </c.Root>
  );
};
export default Category;
