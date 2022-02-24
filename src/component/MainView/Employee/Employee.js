import React from "react";
import * as o from "./Employee.styles";
import Heading from "./Heading";
import Body from "./Body";
import { Redirect } from "react-router-dom";

const Employee = () => {
  if (!localStorage.getItem("token")) {
    console.log("hello");
    return <Redirect to="/login" />;
  }
  return (
    <o.Root>
      <o.Container>
        <Heading />

        <Body />
      </o.Container>
    </o.Root>
  );
};

export default Employee;
