import React, { useContext } from "react";
import * as c from "./Category.styles";
import Heading from "./Heading";
import CategoryTable from "./CategoryTable";
import { LoginContext } from "../../../Store/Context/LoginContext";
import { Redirect } from "react-router-dom";

export const Category = () => {
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
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
