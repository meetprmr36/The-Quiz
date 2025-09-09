import Themaincomponent from './components/DashboardRouter'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Thesidebar from "../src/components/Thesidebar";

function App() {

  return (
    <Router>
      <div className="maincomponent flex">
        <Thesidebar />
        <div className="Thecontent flex-1">
          <Themaincomponent />
        </div>
      </div>
    </Router>
  )
}

export default App
