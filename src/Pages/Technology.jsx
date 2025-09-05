import React from "react";
import ManageTechnology from "../components/ManageTechology"


const Technology = () => {
    return (
        <div>
            <div className="welcome">
                <h1>Dashboard</h1>
                <p>Welcome to quiz managment system</p>
            </div>
            <div className="dashboard Flex-column">
                <ManageTechnology />
            </div>
        </div>
    )
}

export default Technology