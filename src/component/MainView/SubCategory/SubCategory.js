import React from "react";
import * as c from "./SubCategory.styles";
import Heading from "./Heading";
import CategoryTable from "./CategoryTable";
import { Redirect } from "react-router-dom";

const SubCategory = () => {
  if (!localStorage.getItem("token")) {
    console.log("hello");
    return <Redirect to="/login" />;
  }
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
