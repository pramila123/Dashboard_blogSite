import MainView from "./component/MainView/MainView";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Navbar from "./component/Navbar/Navbar";
import React, { useEffect } from "react";

const Appstyle = styled.div``;

function App() {
  // useEffect(() => {
  //   document.title = "Ecommerce";
  // });
  return (
    <Appstyle>
      <GlobalStyles />
      <Navbar />

      <MainView />
    </Appstyle>
  );
}

export default App;
