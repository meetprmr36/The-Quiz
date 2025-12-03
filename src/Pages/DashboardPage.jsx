import React from "react";
import SecondHeader from "../components/Common/SecondHeader";
import Contentpart from "../components/DasboardCompo";

const Dashboard = ({ tech, question, users }) => {
  return (

    <div className="min-h-screen bg-[var(--gray)]">
      <div className="h-screen flex px-6 flex-col max-lg:px-4 max-lg:py-3 max-mg:px-2">

        <SecondHeader
          title="Dashboard"
          subtitle="Welcome to quiz management system"
        />

        <div className="flex-1 overflow-auto">
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