import React from "react";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoMdSpeedometer } from "react-icons/io";
import { FaBrain } from "react-icons/fa6";

const Thesidebar = () => {
    return (
        <div className="sidebar Flex-column">
            <nav>
                <div className="Logo-Name Flex-column">
                    <div className="logoimg"><FaBrain /></div>
                    <h1>Quiz Admin</h1>
                </div>
                <div className="toggles Flex-column">
                    <a><span><IoMdSpeedometer /></span>Dashboard</a>
                </div>
                <div className="toggles Flex-column">
                    <a><span><FaEarthAmericas /></span>Manage Technology</a>
                </div>
                <div className="toggles Flex-column">
                    <a><span><FaQuestion /></span>Manage Question</a>
                </div>
            </nav>
            <div className="Side Flex-column">
                <p><span><FaUser /></span>Admin User</p>
                <p><span> <IoIosLogOut /></span>Logout</p>
            </div>
        </div>
    );
}

export default Thesidebar;