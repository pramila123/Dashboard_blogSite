import React from "react";
import * as p from "./Products.styles";
import Heading from "./Heading";
import AddField from "./AddField";
import Body from "./Body";
export default function Products() {
  return (
    <p.Root>
      <p.Container>
        <Heading />
        <AddField />
        <Body />
      </p.Container>
    </p.Root>
  );
}
