import React from "react";
import Contentpart from "../components/DasboardCompo";

const Dashboard = () => {
  return (
    <div className="Thecontent">
      <div className="welcome">
        <h1>Dashboard</h1>
        <p>Welcome to quiz managment system</p>
      </div>
      <div className="dashboard Flex-column">
        <Contentpart />
      </div>
    </div>
  );
}

export default Dashboard;