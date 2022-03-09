import axios from "axios";
import React, { useState, createContext, useReducer } from "react";
import { CategoryReducer } from "../Reducer/CategoryReducer";

export const CategoryContext = createContext();

function CategoryContextProvider(props) {
  const getCategoryFormDb = () => {
    axios
      .get("http://localhost:4000/category/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        dispatch({
          type: "GET_CATEGORY_SUCCESS",
          category: {
            data: res.data.data,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [category, dispatch] = useReducer(CategoryReducer, {
    data: [
      {
        categoryName: "---",
        createdAt: "---",
        id: "---",
        updatedAt: "---",
      },
    ],
    success: false,
    error: false,
    errorMessage: null,
    loading: false,
    checkUpdate: false,
    updatedData: {
      categoryName: " ",
      createdAt: " ",
      id: " ",
      updatedAt: " ",
    },
  });

  return (
    <CategoryContext.Provider value={{ category, dispatch, getCategoryFormDb }}>
      {props.children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
