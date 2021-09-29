import React from "react";
import * as o from "./Order.styles";
import Heading from "./Heading";
import Body from "./Body";
const Order = () => {
  return (
    <o.Root>
      <o.Container>
        <Heading />

        <Body />
      </o.Container>
    </o.Root>
  );
};

export default Order;
