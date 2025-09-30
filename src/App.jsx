import Themaincomponent from './components/DashboardRouter'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import Thesidebar from "../src/components/Thesidebar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="maincomponent transition-all duration-400 ease-in-out flex">
          <Thesidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="Thecontent flex-1">
            <Themaincomponent />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
