import React from "react";
import * as o from "./Employee.styles";
import Heading from "./Heading";
import Body from "./Body";
const Employee = () => {
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
