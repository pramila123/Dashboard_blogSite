import React, { useState, createContext, useReducer } from "react";
import { LoginReducer } from "../Reducer/LoginReducer";

export const LoginContext = createContext();

function LoginContextProvider(props) {
  const hello = () => {
    dispatch({
      type: "HELLO",
    });
  };
  const [login, dispatch] = useReducer(LoginReducer, {
    email: null,
    token: null,
    name: null,
    error: null,
    errorMessage: null,
    loading: false,
    authRedirectPath: "/dashboard",
    hello: null,
  });

  return (
    <LoginContext.Provider value={{ login, dispatch, hello }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
