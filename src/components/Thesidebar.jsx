import React, { useState } from "react";
import { FaEarthAmericas, FaQuestion } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosLogOut, IoMdMoon, IoMdSpeedometer } from "react-icons/io";
import { FaBrain, FaRegUser, FaUserFriends } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import LogoutCard from "./LogoutCard";
import AdminCard from "./AdminCard";
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
                                <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                                <div className="absolute -top-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                                {/* <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full"></div> */}
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
                <AdminCard
                    onCancel={() => setShowAdmin(false)}
                    onChange={() => setShowAdmin(false)}
                />
            )}

            {showLogout && (
                <LogoutCard
                    onCancel={() => setShowLogout(false)}
                    onLogout={handleLogout}
                />
            )}
        </div>
    );
}

export default Thesidebar;