import React from "react";
import Contentpart from "../components/DasboardCompo";

const Dashboard = ({ techCount,questionCount, userCount }) => {
  return (
    <div className="min-h-screen p-6">
      <div className="welcome mt-5">
        <h1 className="text-[var(--black)]">Dashboard</h1>
        <p className="text-[var(--lightGray)]">Welcome to quiz managment system</p>
      </div>
      <div className="dashboard Flex-column">
       <Contentpart 
       technologies={techCount} 
       question={questionCount} 
       users={userCount}
       />
      </div>
    </div>
  );
}

export default Dashboard;