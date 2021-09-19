

import Sidebar from "./component/Sidebar/Sidebar";
import MainView from "./component/MainView/MainView";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

const Appstyle = styled.div`
display:flex;
`;

function App() {
  return (
    <Appstyle>
   <GlobalStyles/>
   <Sidebar/>
   <MainView/>

    
   </Appstyle>
  );
}

export default App;
