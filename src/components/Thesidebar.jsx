import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEarthAmericas, FaQuestion, FaRegUser, FaRegMoon, FaRegSun } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoMdSpeedometer } from "react-icons/io";

const Thesidebar = ({ darkMode, setDarkMode }) => {
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        setShowLogout(false);
        window.location.href = "/";
    };

    return (
        <div className="sidebar Flex-column bg-[var(--white)] text-[var(--black)] shadow-[var(--card-shadow)]">
            <nav>

                <div className="Logo-Name text-center p-4">
                    <h1 className="text-2xl font-bold tracking-[0.3em] uppercase text-white">
                        Mind Inventory
                    </h1>
                </div>

                <div className="toggles Flex-column">
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : undefined}>
                        <span><IoMdSpeedometer /></span>Dashboard
                    </NavLink>
                </div>
                <div className="toggles Flex-column">
                    <NavLink to="/technology" className={({ isActive }) => isActive ? "active-link" : undefined}>
                        <span><FaEarthAmericas /></span>Manage Technology
                    </NavLink>
                </div>
                <div className="toggles Flex-column">
                    <NavLink to="/question" className={({ isActive }) => isActive ? "active-link" : undefined}>
                        <span><FaQuestion /></span>Manage Question
                    </NavLink>
                </div>
                <div className="toggles Flex-column">
                    <NavLink to="/User" className={({ isActive }) => isActive ? "active-link" : undefined}>
                        <span><FaRegUser /></span>User
                    </NavLink>
                </div>
            </nav>



            <div className="Side Flex-column">
                <div className="fixed top-4 right-4 z-50 cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <h1 className="flex items-center bg-[var(--black)] text-[var(--white)] rounded-xl shadow-md">
                            <FaRegSun className="m-2" />
                        </h1>
                    ) : (
                        <h1 className="flex items-center bg-[var(--black)] text-[var(--white)] rounded-xl shadow-md">
                            <FaRegMoon className="m-2" />
                        </h1>
                    )}
                </div>
            </div>
            <div className="Side Flex-column">
                <p><span><FaRegUser /></span>Admin User</p>
                <p style={{ cursor: "pointer" }} onClick={() => setShowLogout(true)}>
                    <span><IoIosLogOut /></span>Logout
                </p>
            </div>
            {showLogout && (
                <div className="logout-modal">
                    <div className="logout-modal-content bg-[var(--white)]">
                        <h3 className="text-[var(--black)]">Are you sure you want to logout?</h3>
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                        <button onClick={() => setShowLogout(false)} className="cancel-btn">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Thesidebar;
