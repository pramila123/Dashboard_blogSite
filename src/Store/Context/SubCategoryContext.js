import axios from "axios";
import React, { useState, createContext, useReducer } from "react";
import { SubCategoryReducer } from "../Reducer/SubCategoryReducer";

export const SubCategoryContext = createContext();

function CategoryContextProvider(props) {
  const getSubCategoryFormDb = () => {
    axios
      .get("http://localhost:4000/subCategory/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        subCategoryDispatch({
          type: "GET_SUBCATEGORY",
          subCategory: {
            data: res.data.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [subCategory, subCategoryDispatch] = useReducer(SubCategoryReducer, {
    data: [
      {
        id: "---",
        subcategoryName: "---",
        categoryId: "---",
        categoryName: "---",
        createdAt: "---",
        updatedAt: "---",
      },
    ],
    success: false,
    error: false,
    errorMessage: null,
    loading: false,
    checkUpdate: false,
    updatedData: {
      id: " ",
      subcategoryName: " ",
      categoryId: " ",
      categoryName: " ",
      createdAt: " ",
      updatedAt: " ",
    },
  });

  return (
    <SubCategoryContext.Provider
      value={{ subCategory, subCategoryDispatch, getSubCategoryFormDb }}
    >
      {props.children}
    </SubCategoryContext.Provider>
  );
}

export default CategoryContextProvider;
