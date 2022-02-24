import { Avatar, Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import { ImPencil } from "react-icons/im";
import featured from "../../../Assets/featured.svg";
import { LoginContext } from "../../../Store/Context/LoginContext";

import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Root = styled.div`
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #efefef;
`;
const MainContainer = styled.div`
  background: #fff;
  width: 55%;
  height: 75vh;
  display: flex;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const LeftContainer = styled.div`
  width: 50%;
  background: #a4c4b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .featuredImage {
    width: 80%;
  }
  .featuredTitle {
    font-size: 1.1rem;
    margin-top: 1rem;
    color: #fff;
  }
  .featuredSubTitle {
    font-size: 0.9rem;
    color: #e6e6e6;
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  padding: 3rem 1rem 1rem 1rem;
  width: 50%;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: red;
  .avater {
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);

    margin-right: 0.5rem;
  }

  .pencil-log {
    font-size: 1rem;
  }
  .companyName {
    font-family: "Festive", cursive;

    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .welcomeTitle {
    font-size: 1.1rem;
    margin-top: 3rem;
    color: #b3b3b3;
  }
`;
const LoginFormContainer = styled.div`
  // background: yellow;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem 1rem 3rem;

  .startWriting {
    margin-top: 2rem;
    height: 2rem;
    width: 9rem;
    font-size: 0.8rem;
    text-transform: none;
    border-radius: 20px;
    background: linear-gradient(105.6deg, #7db6e7 37.65%, #1ad697 83.5%);
    text-fill-color: transparent;
    display: inline-block;
  }
  .textField {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const LoginPage = () => {
  const { login, dispatch, hello } = useContext(LoginContext);
  let history = useHistory();
  // console.log(login.email);

  const loginAction = (email, password) => {
    axios
      .post("http://localhost:4000/user/login/", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.name);
        localStorage.setItem("email", response.data.email);

        dispatch({
          type: "SIGN_IN_SUCCESS",
          login: {
            name: response.data.name,
            email: response.data.email,
            token: response.data.token,
          },
        });

        history.push("/");
      })
      .catch((error) => {
        dispatch({
          type: "SIGN_IN_FAIL",
          login: {
            errorMessage: error.response.data.message,
          },
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid!").required("Email Required!"),
      password: Yup.string().required("Email Required!"),
    }),

    onSubmit: (values) => {
      // formik.resetForm();
      loginAction(values.email, values.password);
    },
  });

  return (
    <Root>
      <MainContainer>
        <LeftContainer>
          <img src={featured} alt="featuredImg" className="featuredImage" />
          <span className="featuredTitle">Dipesh Shrestha</span>
          <span className="featuredSubTitle">
            If we dont change, Tomorrow we will be literally powerless
          </span>
        </LeftContainer>
        <RightContainer>
          <TitleContainer>
            <span className="companyName">
              <Avatar className="avater">
                <ImPencil className="pencil-log" />
              </Avatar>
              Integra
              {login.hello}
            </span>
            <span className="welcomeTitle">Welcome To Integra</span>
          </TitleContainer>
          <LoginFormContainer>
            {formik.touched.email && formik.errors.email ? (
              <TextField
                id="standard-password-input"
                label={formik.errors.email}
                type="email"
                autoComplete="current-password"
                className="textField"
                variant="standard"
                {...formik.getFieldProps("email")}
                error
                // focused
              />
            ) : (
              <TextField
                id="standard-password-input"
                label={
                  login.errorMessage === "Invalid Email!"
                    ? "Invalid Email!"
                    : "Email"
                }
                type="email"
                autoComplete="current-password"
                className="textField"
                variant="standard"
                {...formik.getFieldProps("email")}
                error={login.errorMessage === "Invalid Email!" ? true : null}
                // {...()}
                // focused
              />
            )}

            {formik.touched.password && formik.errors.password ? (
              <TextField
                id="standard-password-input"
                label={formik.errors.password}
                type="password"
                autoComplete="current-password"
                className="textField"
                variant="standard"
                {...formik.getFieldProps("password")}
                error
                // focused
              />
            ) : (
              <TextField
                id="standard-password-input"
                label={
                  login.errorMessage === "Invalid Email!"
                    ? "Invalid Password!"
                    : "Password"
                }
                type="password"
                autoComplete="current-password"
                className="textField"
                variant="standard"
                {...formik.getFieldProps("password")}
                error={login.errorMessage === "Invalid Password!" ? true : null}
                // focused
              />
            )}

            <Button
              variant="contained"
              className="startWriting"
              onClick={formik.handleSubmit}
            >
              Sign In
            </Button>
          </LoginFormContainer>
        </RightContainer>
      </MainContainer>
    </Root>
  );
};

export default LoginPage;
