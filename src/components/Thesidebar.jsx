import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEarthAmericas, FaQuestion } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { } from "react-icons/fa";
import { IoIosLogOut, IoMdMoon, IoMdSpeedometer } from "react-icons/io";
import { FaBrain, FaRegUser, FaUserFriends } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import NavItem from "./Common/NavItem";


const Thesidebar = ({ darkMode, setDarkMode }) => {
    const [showLogout, setShowLogout] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.clear();
        setShowLogout(false);
        window.location.href = "/";
    };

    return (
        <div className="sidebar Flex-column transition-all duration-400">
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
                <div className="px-3 max-xl:px-0 transition-all duration-400">
                    <div className="toggles Flex-column mb-1">
                        {/* <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span className="text-lg"><LuLayoutDashboard /></span>
                            <p className="hidden md:inline">Dashboard</p>
                        </NavLink> */}
                        <NavItem to="/dashboard" icon={IoMdSpeedometer} label="Dashboard" />
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavItem to="/technology" icon={FaEarthAmericas} label="Technologies" />
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavItem to="/question" icon={FaQuestion} label="Questions" />
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavItem to="/User" icon={FaUserFriends} label="Users" />
                    </div>
                </div>
            </nav>

            <div className="Side Flex-column transition-all duration-400">
                <div
                    onClick={() => setDarkMode(!darkMode)}
                    className="fixed top-4 right-4 z-50 cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 max-lg:top-2 group"
                >
                    {darkMode ? (
                        <div className="flex items-center bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <IoSunnyOutline className="m-3 text-black text-xl max-sm:m-2 max-sm:text-base relative z-10 transform group-hover:rotate-90 transition-transform duration-500" />
                        </div>
                    ) : (
                        <div className="flex items-center bg-gradient-to-br from-indigo-500 via-purple-400 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            <IoMdMoon className="m-3 text-white text-xl max-sm:m-2 max-sm:text-base relative z-10 transform group-hover:-rotate-12 transition-transform duration-500" />
                        </div>
                    )}
                </div>
            </div>


            <div className="Side mt-auto border-t border-[rgba(255,255,255,0.1)] pt-4 transition-all duration-400">
                <div className="px-3 max-2xl:px-2 space-y-3">
                    <div className="admin-profile-card">
                        <button
                            onClick={() => setShowAdmin(true)}
                            className="flex items-center space-x-3 w-full py-3 px-3 rounded-xl transition-all duration-300 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(97,99,241,0.15)] border border-transparent hover:border-[rgba(160, 114, 245, 0.3)] max-lg:justify-center
                            hover:text-violet-500 active:scale-95">
                            <div className="admin-icon-wrapper">
                                <FaRegUser className="text-base transition-all duration-300 group-hover:scale-110" />
                            </div>
                            <span
                                className="max-lg:hidden text-sm font-medium group-hover:text-white transition-colors duration-300">
                                Admin User
                            </span>
                        </button>
                    </div>

                    <div className="logout-card">
                        <button
                            onClick={() => setShowLogout(true)}
                            className="w-full flex items-center space-x-3 py-3 px-3 text-sm rounded-xl transition-all duration-300 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(248,113,113,0.15)] border border-transparent hover:border-[rgba(248,113,113,0.4)] text-[rgba(255,255,255,0.7)] hover:text-red-400 max-lg:justify-center active:scale-95"
                        >
                            <div className="logout-icon-wrapper">
                                <IoIosLogOut className="text-xl transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1" />
                            </div>
                            <span className="max-lg:hidden font-medium">
                                Logout
                            </span>
                        </button>
                    </div>
                </div>

            </div>

            {showAdmin && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
                    <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-scaleIn border border-gray-200 dark:border-gray-700">
                        <div className="px-4 py-2 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white m-4">
                                Account Details
                            </h3>
                        </div>
                        <div className="mx-4 my-2">
                            <div className="p-2 text-left inline-flex items-center">
                                <MdEmail className="text-gray-900 dark:text-white mr-2" />
                                <p className="text-gray-900 dark:text-white m-1">
                                    Email - Example@gmail
                                </p>
                            </div>
                            <div className="p-2 text-left inline-flex items-center">
                                <FaUser className="text-gray-900 dark:text-white mr-2" />
                                <p className="text-gray-900 dark:text-white m-1">
                                    Username - Example
                                </p>
                            </div>
                            <div className="p-2 text-left inline-flex items-center">
                                <RiLockPasswordLine className="text-gray-900 dark:text-white mr-2" />
                                <p className="text-gray-900 dark:text-white m-1">
                                    Password - ExamplePassword
                                </p>
                            </div>
                            <div className="p-2 text-left inline-flex items-center">
                                <MdOutlineWorkOutline className="text-gray-900 dark:text-white mr-2" />
                                <p className="text-gray-900 dark:text-white m-1">
                                    Designation - ExampleDesignation
                                </p>
                            </div>
                        </div>

                        <div className="p-6 align-center flex gap-3">
                            <button
                                onClick={() => setShowAdmin(false)}
                                className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-200 border border-gray-700 hover:border-gray-800 shadow-md hover:shadow-lg shadow-gray-700/30 hover:shadow-gray-500/50 active:scale-95 hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>Cancel</span>
                            </button>

                            <button
                                onClick={() => setShowAdmin(false)}
                                className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white hover:border-purple-500 shadow-md hover:shadow-lg shadow-purple-600/30 shadow-md hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 hover:-translate-y-0.5">
                                <FaExchangeAlt className="w-4 h-4" />
                                <span>Change</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showLogout && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
                    <div className="glass-card bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-scaleIn border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-center pt-6 pb-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </div>
                        </div>
                        <div className="px-6 pb-6 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Confirm Logout
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Are you sure you want to logout from your admin session?
                            </p>
                        </div>

                        <div className="px-6 pb-6 flex gap-3">
                            <button
                                onClick={() => setShowLogout(false)}
                                className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 shadow-md hover:shadow-lg active:scale-95 hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>Cancel</span>
                            </button>

                            <button
                                onClick={handleLogout}
                                className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white border border-red-600 hover:border-red-700 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 active:scale-95 hover:-translate-y-0.5"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Thesidebar;