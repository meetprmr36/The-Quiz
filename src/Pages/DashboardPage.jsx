import React from "react";
import Contentpart from "../components/DasboardCompo";

const Dashboard = ({ tech, question, users }) => {
  return (

    <div className="min-h-screen bg-[var(--gray)]">
      <div className="h-screen flex px-6 flex-col max-lg:px-4 max-lg:py-3 max-mg:px-2">
        <div className="py-5 max-lg:py-3">
          <h1 className="text-3xl font-bold text-[var(--black)] max-lg:text-2xl">Dashboard</h1>
          <p className="text-[var(--lightGray)] mt-2 max-lg:text-sm">Welcome to quiz management system</p>
        </div>

        <div className="flex-1 py-3 overflow-auto">
          <Contentpart
            technologie={tech}
            question={question}
            users={users}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;