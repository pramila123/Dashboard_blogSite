

import Navbar from "./components/Navbar/Navbar";
import GlobalStyles from "./GlobalStyles";
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
   <GlobalStyles/>
   <Router>
   <Navbar/>
   </Router>
    
    </div>
  );
}

export default App;
