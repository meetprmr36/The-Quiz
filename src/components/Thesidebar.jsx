import React from "react";
import { NavLink } from "react-router-dom";
import { FaEarthAmericas, FaQuestion, FaUser, FaBrain } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoMdSpeedometer } from "react-icons/io";
import { useState } from "react";  

const Thesidebar = () => {
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        setShowLogout(false);
        window.location.href = "/"; 
    };
    return (
        <div className="sidebar Flex-column">
            <nav>
                <div className="Logo-Name Flex-column">
                    <img src="https://www.mindinventory.com/images/logo/mindinventory-logo-for-light-bg.svg"></img>
                </div>
                <h1>Quiz Admin</h1>
                <div className="toggles Flex-column">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        <span><IoMdSpeedometer /></span>Dashboard
                    </NavLink>
                </div>
                <div className="toggles Flex-column">
                    <NavLink
                        to="/technology"
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        <span><FaEarthAmericas /></span>Manage Technology
                    </NavLink>
                </div>
                <div className="toggles Flex-column">
                    <NavLink
                        to="/question"
                        className={({ isActive }) => isActive ? "active-link" : undefined}
                    >
                        <span><FaQuestion /></span>Manage Question
                    </NavLink>
                </div>
            </nav>
            <div className="Side Flex-column">
                <p><span><FaUser /></span>Admin User</p>
                <p style={{ cursor: "pointer" }} onClick={() => setShowLogout(true)}>
                    <span><IoIosLogOut /></span>Logout
                </p>
            </div>
            {showLogout && (
                <div className="logout-modal">
                    <div className="logout-modal-content">
                        <h3>Are you sure you want to logout?</h3>
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                        <button onClick={() => setShowLogout(false)} className="cancel-btn">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Thesidebar;