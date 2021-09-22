import React from "react";
import * as c from "./Category.styles";
import Button from "@material-ui/core/Button";

const CategoryHeding = () => {
  return (
    <>
      <c.CatgoryHadingButtonMainDiv>
        <c.CategoryHeadingMianDiv>
          <c.CategoryHeading>Category</c.CategoryHeading>
          <c.CategorySubHeading>View Category Detail</c.CategorySubHeading>
        </c.CategoryHeadingMianDiv>
        <c.CategryButtonMainDiv>
          <Button variant="outlined" color="primary">
            Add Category
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginLeft: "1rem" }}
          >
            Add Sub Category
          </Button>
        </c.CategryButtonMainDiv>
      </c.CatgoryHadingButtonMainDiv>
    </>
  );
};

export default CategoryHeding;
