import MainView from "./component/MainView/MainView";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Navbar from "./component/Navbar/Navbar";
import React, { useEffect } from "react";
import MainNavbar from "./Blog/pages/Navbar/Navbar";
import SelectField from "./SelectField";
import LoginPage from "./component/MainView/LoginPage/LoginPage";
import { useLocation } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import LoginContextProvider from "./Store/Context/LoginContext";
import CategoryContextProvider from "./Store/Context/CategoryContext";

const Appstyle = styled.div``;

const MainPageContainor = styled.div``;

function App() {
  const location = useLocation();

  return (
    <>
      <LoginContextProvider>
        <CategoryContextProvider>
          <Appstyle>
            <GlobalStyles />
            {location.pathname == "/login" ? " " : <Navbar />}

            <MainView />
            {/* <LoginPage /> */}
            <Switch>
              <Route path="/login" component={LoginPage} />
            </Switch>
          </Appstyle>
        </CategoryContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
