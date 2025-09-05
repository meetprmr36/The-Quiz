import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Thesidebar from "./Thesidebar";
import Dashboard from "../Pages/DashboardPage";
import Technology from "../Pages/Technology";
import ManageQuestion from "../Pages/Questions";
import "../index.css"
import "../App.css"

const Themaincomponent = () => {
    return (
        <Router>
            <div className="maincomponent">
                <Thesidebar />
                <div className="Thecontent">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/technology" element={<Technology />} />
                        <Route path="/question" element={<ManageQuestion />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Themaincomponent;