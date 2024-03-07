import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Hourly from "./Hourly/Hourly";
import EightDay from "./EightDay/EightDay";
import Weekend from "./Weekend/Weekend";





function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/hourly" Component={Hourly}>
            </Route>
          <Route path="/eight-day" Component={EightDay}>
            </Route>
          <Route path="/weekend" Component={Weekend}>
            </Route>
          <Route path="/" Component={Home} >
            </Route>
        </Routes>
      </div>
    </Router>
    
  )
}


export default App;
