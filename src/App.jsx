import "./App.css"
import { Router, Routes, Route } from "react-router-dom"
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'



function Hourly() {
  return (
    
      <h2>Forecast by the Hour</h2>
  )
}
function EightDay() {
  return (
    
      <h2>8 Day Forecast</h2>
  )
}
function Weekend() {
  return (
    
      <h2 >Weekend Forecast</h2>
  )
}
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/hourly">
            <Hourly />
            </Route>
          <Route path="/eight-day">
            <EightDay />
            </Route>
          <Route path="/weekend">
            <Weekend/>
            </Route>
          <Route path="/">
            <Home />
            </Route>
        </Routes>
      </div>
    </Router>
    
  )
}


export default App;
