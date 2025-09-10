import React from "react";
import Contentpart from "../components/DasboardCompo";

const Dashboard = () => {
  return (
    <div className=" min-h-screen">
      <div className="welcome">
        <h1 className="text-[var(--black)]">Dashboard</h1>
        <p className="text-[var(--black)]">Welcome to quiz managment system</p>
      </div>
      <div className="dashboard Flex-column">
        <Contentpart />
      </div>
    </div>
  );
}

export default Dashboard;