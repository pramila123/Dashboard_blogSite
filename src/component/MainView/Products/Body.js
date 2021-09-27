import React from "react";
import * as p from "./Products.styles";
import CategoryDataTable from "./CategoryDataTable";

const Body = () => {
  return (
    <>
      <p.MainDiv>
        <p.TableDiv>
          <CategoryDataTable />
        </p.TableDiv>
      </p.MainDiv>
    </>
  );
};

export default Body;
