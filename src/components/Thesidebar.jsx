import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEarthAmericas, FaQuestion } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { } from "react-icons/fa";
import { IoIosLogOut, IoMdMoon, IoMdSpeedometer } from "react-icons/io";
import { FaBrain, FaRegUser, FaUserFriends } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";


const Thesidebar = ({ darkMode, setDarkMode }) => {
    const [showLogout, setShowLogout] = useState(false);

    // const handleLogout = () => {
    //     setShowLogout(false);
    //     window.location.href = "/";
    // };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.clear();
        setShowLogout(false);
        window.location.href = "/";
    };

    return (
        <div className="sidebar Flex-column bg-[var(--white)] text-[var(--black)] shadow-[var(--card-shadow)]  transition-all duration-400">
            <nav>
                <div className="Logo-Name text-center p-4 mb-2">
                    <div className="flex flex-col items-center justify-center">
                        <div className="logo-container mb-3">
                            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-xl shadow-lg">
                                <FaBrain className="text-white text-3xl" />
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
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span className="text-lg"><LuLayoutDashboard /></span>
                            <p className="hidden md:inline">Dashboard</p>
                        </NavLink>
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavLink to="/technology" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span><FaEarthAmericas /></span>
                            <p className="hidden md:inline">Technologies</p>
                        </NavLink>
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavLink to="/question" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span><FaQuestion /></span>
                            <p className="hidden md:inline">Questions</p>
                        </NavLink>
                    </div>
                    <div className="toggles Flex-column mb-1">
                        <NavLink to="/User" className={({ isActive }) => isActive ? "active-link" : undefined}>
                            <span><FaUserFriends /></span>
                            <p className="hidden md:inline">User</p>
                        </NavLink>
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
                    <div className="admin-profile-card group">
                        <div className="flex items-center space-x-3 w-full py-3 px-3 rounded-xl transition-all duration-300 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(97,99,241,0.1)] border border-transparent hover:border-[rgba(97,99,241,0.3)] max-lg:justify-center">
                            <div className="admin-icon-wrapper">
                                <FaRegUser className="text-base transition-all duration-300 group-hover:scale-110" />
                            </div>
                            <button className="max-lg:hidden text-sm font-medium text-[rgba(255,255,255,0.85)] group-hover:text-white transition-colors duration-300">
                                Admin User
                            </button>
                        </div>
                    </div>

                    <div className="logout-card group">
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

                {/* <div className="px-3 max-2xl:px-2 space-y-2">
                    <div className="admin-profile-card group">
                        <div className="glass-shine flex items-center space-x-3 w-full py-3 px-3 rounded-xl transition-all duration-300 bg-gradient-to-br from-[rgba(97,99,241,0.2)] to-[rgba(139,92,246,0.2)] hover:from-[rgba(97,99,241,0.35)] hover:to-[rgba(139,92,246,0.35)] border border-[rgba(139,92,246,0.4)] hover:border-[rgba(139,92,246,0.6)] shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 max-lg:justify-center hover:-translate-y-1">
                            <div className="admin-icon-wrapper w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-purple-500/50 transition-all duration-300">
                                <FaRegUser className="text-sm text-white transition-all duration-300 group-hover:scale-110" />
                            </div>
                            <span className="max-lg:hidden text-sm font-semibold text-white group-hover:text-white transition-colors duration-300">
                                Admin User
                            </span>
                        </div>
                    </div>

                    <div className="logout-card group">
                        <button
                            onClick={() => setShowLogout(true)}
                            className="glass-shine w-full flex items-center space-x-3 py-3 px-3 text-sm rounded-xl transition-all duration-300 bg-gradient-to-br from-[rgba(248,113,113,0.2)] to-[rgba(239,68,68,0.2)] hover:from-[rgba(248,113,113,0.35)] hover:to-[rgba(239,68,68,0.35)] border border-[rgba(248,113,113,0.4)] hover:border-[rgba(248,113,113,0.6)] shadow-lg shadow-red-500/20 hover:shadow-red-500/40 text-white hover:text-white max-lg:justify-center active:scale-95 hover:-translate-y-1"
                        >
                            <div className="logout-icon-wrapper w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-md group-hover:shadow-red-500/50 transition-all duration-300">
                                <IoIosLogOut className="text-base text-white transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1" />
                            </div>
                            <span className="max-lg:hidden font-semibold">
                                Logout
                            </span>
                        </button>
                    </div>
                </div> */}

            </div>

            {/* {showLogout && (
                <div className="logout-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="logout-modal-content bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 max-lg:p-5 max-lg:mx-3">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 max-lg:w-12 max-lg:h-12">
                                <IoIosLogOut className="text-red-600 text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 max-lg:text-base">Confirm Logout</h3>
                            <p className="text-gray-600 mb-6 max-lg:text-sm max-sm:text-xs max-md:mb-3">Are you sure you want to logout from your admin session ?</p>
                            <div className="flex space-x-3">
                                <button
                                    onClick={handleLogout}
                                    // className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 max-lg:py-2 max-lg:px-2"
                                    className="flex-1 items-center space-x-3 py-3 px-3 text-sm rounded-xl transition-all duration-300 bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(248,113,113,0.15)] border border-transparent hover:border-[rgba(248,113,113,0.4)] text-[rgba(205, 51, 51, 0.7)] hover:text-red-400  active:scale-95"
                                >
                                    Logout
                                </button>
                                <button
                                    onClick={() => setShowLogout(false)}
                                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200 max-lg:py-2 max-lg:px-2"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
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