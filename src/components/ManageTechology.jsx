import React, { useState, useRef } from "react";
import TechnologyTable from "./TechnologyTable";
import AddButton from "./AddButton";
import '../App.css';
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";


const ManageTechnology = () => {
  const [technologies, setTechnologies] = useState([
    { id: 1, name: "React.js", status: "Active", date: "2024-01-15" },
    { id: 2, name: "Node.js", status: "Active", date: "2024-01-16" },
    { id: 3, name: "Python", status: "InActive", date: "2024-01-17" },
    { id: 4, name: "JavaScript", status: "Active", date: "2024-01-18" },
    { id: 5, name: "Vue.js", status: "Active", date: "2024-01-19" },
  ]);

  const addFormRef = useRef(null);

  const handleAdd = () => {
    addFormRef.current?.scrollIntoView({ behavior: "smooth" });
    const newTech = {
      id: technologies.length + 1,
      name: "New Technology " + (technologies.length + 1),
      status: "Active",
      date: new Date().toISOString().split("T")[0],
    };
    setTechnologies([...technologies, newTech]);
  };


  const handleDelete = (id) => {
    setTechnologies(technologies.filter((tech) => tech.id !== id));
  };

  return (
    <div className="p-6">
      <div>
        <div className="my-5 mx-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-semibold">Manage Technology</h2>
            <AddButton onAdd={handleAdd} />
          </div>
          <p className="text-lg text-gray-500 mb-4">
            Create and manage technology categories for your quizzes
          </p>
        </div>


        <TechnologyTable data={technologies} onDelete={handleDelete} />
      </div>

      <div className="max-w-xl my-15 bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <h1 className="text-2xl items-center flex font-semibold py-3">
            <span className="px-3 text-lg">
            <FaArrowLeft /></span>
            Add Technology</h1>
          <p className="text-gray-600 text-sm">
            Create a new technology category for quiz questions
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Technology Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., React.js, Node.js, Python"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Status</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="active"
                className="text-blue-600 focus:ring-blue-500"
                defaultChecked
              />
              <span>Active</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="inactive"
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>Inactive</span>
            </label>
          </div>
        </div>

        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
          <span className="px-2"><IoIosSave /></span>Save Technology
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            Reset
          </button>
        </div>
      </div>

    </div>
  );
};

export default ManageTechnology;