// import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => {
    return (
        <div className="toggles Flex-column mb-1">
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "active-link" : undefined)}
            >
                <span className="text-lg">
                    <Icon />
                </span>
                <p className="hidden md:inline">{label}</p>
            </NavLink>
        </div>
    );
};

export default NavItem;
