import React, { useState } from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";
import CategoryAdd from "./CategoryAdd";
import AddButton from "../../ButtonComponent/AddButton";
import { useContext } from "react";
import { LoginContext } from "../../../Store/Context/LoginContext";
const CategoryHeding = () => {
  const [show, setShow] = useState(false);
  const showAddField = () => {
    setShow(!show);
  };
  const { login } = useContext(LoginContext);

  return (
    <>
      <c.HadingButtonMainDiv>
        <c.HeadingMianDiv>
          <c.Heading>Category</c.Heading>
          <c.SubHeading>View Category Detail</c.SubHeading>
        </c.HeadingMianDiv>
        <c.ButtonMainDiv></c.ButtonMainDiv>
      </c.HadingButtonMainDiv>
      {/* {show ? <CategoryAdd /> : " "} */}
      <CategoryAdd />
    </>
  );
};

export default CategoryHeding;
