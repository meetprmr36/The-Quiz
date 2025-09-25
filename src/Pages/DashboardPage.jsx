import React from "react";
import Contentpart from "../components/DasboardCompo";

// const Dashboard = ({ techCount, questionCount, users, tech }) => {
const Dashboard = ({ tech, question, users }) => {
  return (
    <div className="min-h-screen px-6 py-3">
      <div className="welcome">
        <h1 className="text-[var(--black)]">Dashboard</h1>
        <p className="text-[var(--lightGray)]">Welcome to quiz managment system</p>
      </div>
      <div className="dashboard Flex-column">
        <Contentpart 
          // technologies={techCount}
          technologie={tech}
          question={question}
          users={users}
        />
      </div>
    </div>
  );
}

export default Dashboard;