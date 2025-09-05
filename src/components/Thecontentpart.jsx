import React from "react";
import MainDashboard from "./MainDashboard";

const Thecontentpart = () => {
  return (
    <div className="Thecontent">
      <div className="welcome">
        <h1>Dashboard</h1>
        <p>Welcome to quiz managment system</p>
      </div>
      <div className="dashboard Flex-column">
        <MainDashboard />
      </div>
    </div>
  );
}

export default Thecontentpart;