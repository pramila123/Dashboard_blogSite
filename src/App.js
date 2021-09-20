

import GlobalStyles from "./GlobalStyles";
import {BrowserRouter as Router} from 'react-router-dom'
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
   <GlobalStyles/>
   <Router>
   <HomePage/>
   </Router>
    
    </div>
  );
}

export default App;
