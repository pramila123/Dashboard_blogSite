import React from "react";
import * as c from "./SubCategory.styles";
import Heading from "./Heading";
import CategoryTable from "./CategoryTable";
const SubCategory = () => {
  return (
    <c.Root>
      <c.Container>
        <Heading />
        <CategoryTable />
      </c.Container>
    </c.Root>
  );
};

export default SubCategory;
