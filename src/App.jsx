import "./App.css"
import { Router } from "react-router-dom"



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
    
      <h2>Weekend Forecast</h2>
  )
}
function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
    
  )
}


export default App;
