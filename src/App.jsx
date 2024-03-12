import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Home/Home'




function App() {
   
  return (
    <Router>
      <div>
          <div>
        <Routes>
          <Route path="/" Component={Home}  >
            </Route>     
        </Routes> </div>
      </div>
    </Router>
    
  )
}


export default App;
