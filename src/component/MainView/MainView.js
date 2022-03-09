import React, { useContext, useEffect } from "react";
import * as s from "./MainView.styles";
import Routes from "../../Routes";
import { CategoryContext } from "../../Store/Context/CategoryContext";
import { SubCategoryContext } from "../../Store/Context/SubCategoryContext";

const MainView = () => {
  const { getCategoryFormDb } = useContext(CategoryContext);
  const { getSubCategoryFormDb } = useContext(SubCategoryContext);
  useEffect(() => {
    getCategoryFormDb();
    getSubCategoryFormDb();
  }, []);

  return (
    <s.MainViewContainer>
      <Routes />
    </s.MainViewContainer>
  );
};

export default MainView;
