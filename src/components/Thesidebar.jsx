import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEarthAmericas, FaQuestion } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { } from "react-icons/fa";
import { IoIosLogOut, IoMdMoon, IoMdSpeedometer } from "react-icons/io";
import { FaBrain, FaRegUser,FaUserFriends } from "react-icons/fa";


const Thesidebar = ({ darkMode, setDarkMode }) => {
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        setShowLogout(false);
        window.location.href = "/";
    };

    return (
        <div className="sidebar Flex-column bg-[var(--white)] text-[var(--black)] shadow-[var(--card-shadow)] transition-all duration-500">
            <nav>
                <div className="Logo-Name text-center p-4 mb-2">
                    <div className="flex flex-col items-center justify-center">
                        <div className="logo-container mb-3">
                            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-xl shadow-lg">
                                <FaBrain className="text-white text-2xl" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                        </div>

                        <div className="text-center max-lg:hidden">
                            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                                MIND
                            </h1>
                            <h2 className="text-sm font-semibold text-[var(--lightGray)] tracking-[0.2em] uppercase mt-0.5">
                                INVENTORY
                            </h2>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-2 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="px-2 max-xl:px-1">
                    <div className="toggles Flex-column mb-1">
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span><IoMdSpeedometer /></span>
                            <span className="hidden md:inline">Dashboard</span>
                        </NavLink>
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavLink to="/technology" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span><FaEarthAmericas /></span>
                            <span className="hidden md:inline">Manage Technology</span>
                        </NavLink>
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavLink to="/question" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span><FaQuestion /></span>
                            <span className="hidden md:inline">Manage Question</span>
                        </NavLink>
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavLink to="/User" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span><FaUserFriends /></span>
                            <span className="hidden md:inline">User</span>
                        </NavLink>
                    </div>
                </div>
            </nav>

            <div className="Side Flex-column">
                <div className="fixed top-4 right-4 z-50 cursor-pointer transition-all duration-200 hover:scale-105 max-lg:top-2" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-xl">
                            <IoSunnyOutline className="m-3 text-black text-xl" />
                        </div>
                    ) : (
                        <div className="flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl">
                            <IoMdMoon className="m-3 text-white text-xl" />
                        </div>
                    )}
                </div>
            </div>

            <div className="Side mt-auto border-t border-gray-200 pt-4">
                <div className="px-4 flex w-[75%] py-2 max-2xl:w-full max-2xl:px-2 max-md:py-0">
                    <p className="text-sm w-full justify-start px-3 py-2 rounded-lg max-lg:justify-center max-md:py-0"><span className="my-2 mx-3"><FaRegUser /></span><span className="max-lg:hidden">Admin User</span></p>
                </div>

                <div className="px-4 flex w-[75%] py-2 max-2xl:w-full max-2xl:px-2 max-md:py-0">
                    <button
                        onClick={() => setShowLogout(true)}
                        className="w-full flex justify-start items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 max-lg:justify-center"
                    >
                        <IoIosLogOut className="text-lg my-2 mx-3" />
                        <span className="max-lg:hidden">Logout</span>
                    </button>
                </div>
            </div>

            {showLogout && (
                <div className="logout-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="logout-modal-content bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <IoIosLogOut className="text-red-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm Logout</h3>
                            <p className="text-gray-600 mb-6">Are you sure you want to logout from your admin session?</p>
                            <div className="flex space-x-3">
                                <button
                                    onClick={handleLogout}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    Logout
                                </button>
                                <button
                                    onClick={() => setShowLogout(false)}
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Thesidebar;