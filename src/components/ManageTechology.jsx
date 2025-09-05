import React, { useState } from "react";
import TechnologyTable from "./TechnologyTable";
import AddButton from "./AddButton";
import '../App.css';

const ManageTechnology = () => {
  const [technologies, setTechnologies] = useState([
    { id: 1, name: "React.js", status: "active", date: "2024-01-15" },
    { id: 2, name: "Node.js", status: "active", date: "2024-01-16" },
    { id: 3, name: "Python", status: "inactive", date: "2024-01-17" },
    { id: 4, name: "JavaScript", status: "active", date: "2024-01-18" },
    { id: 5, name: "Vue.js", status: "active", date: "2024-01-19" },
  ]);

  const handleDelete = (id) => {
    setTechnologies(technologies.filter((tech) => tech.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Technology</h2>
        <AddButton />
      </div>

      <p className="text-gray-600 mb-4">
        Create and manage technology categories for your quizzes
      </p>

      <TechnologyTable data={technologies} onDelete={handleDelete} />
    </div>
  );
};

export default ManageTechnology;