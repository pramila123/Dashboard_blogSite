import MainView from "./component/MainView/MainView";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Navbar from "./component/Navbar/Navbar";

const Appstyle = styled.div``;

function App() {
  return (
    <Appstyle>
      <GlobalStyles />
      <Navbar />

      <MainView />
    </Appstyle>
  );
}

export default App;
