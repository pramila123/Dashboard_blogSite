import React from "react";
import * as p from "./Products.styles";
import Heading from "./Heading";
import Body from "./Body";
import { Redirect } from "react-router-dom";
export default function Products() {
  if (!localStorage.getItem("token")) {
    console.log("hello");
    return <Redirect to="/login" />;
  }
  return (
    <p.Root>
      <p.Container>
        <Heading />

        <Body />
      </p.Container>
    </p.Root>
  );
}
