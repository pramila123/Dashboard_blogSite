import MainView from "./component/MainView/MainView";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Navbar from "./component/Navbar/Navbar";
import React, { useEffect } from "react";
import LoginPage from "./component/MainView/LoginPage/LoginPage";
import { useLocation } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LoginContextProvider from "./Store/Context/LoginContext";
import CategoryContextProvider from "./Store/Context/CategoryContext";
import SubCategoryProvider from "./Store/Context/SubCategoryContext";
const Appstyle = styled.div``;

function App() {
  const location = useLocation();

  return (
    <>
      <LoginContextProvider>
        <CategoryContextProvider>
          <SubCategoryProvider>
            <Appstyle>
              <GlobalStyles />
              {location.pathname == "/login" ? " " : <Navbar />}

              <MainView />

              <Switch>
                <Route path="/login" component={LoginPage} />
              </Switch>
            </Appstyle>
          </SubCategoryProvider>
        </CategoryContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
