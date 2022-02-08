import React from "react";
import * as o from "./Employee.styles";
import DataTable from "./DataTable";

const Body = () => {
  return (
    <>
      <o.MainDiv>
        <o.TableDiv>
          <DataTable />
        </o.TableDiv>
      </o.MainDiv>
    </>
  );
};

export default Body;
