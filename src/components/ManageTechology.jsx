import React, { useState } from "react";
import TechnologyTable from "./TechnologyTable";
import AddButton from "./AddButton";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";

const ManageTechnology = ({ technologies, setTechnologies }) => {

  const [showForm, setShowForm] = useState(false);
  const [techName, setTechName] = useState("");
  const [status, setStatus] = useState("Active");


  const handleReset = () => {
    setTechName("");
    setStatus("Active");
  };


  const handleSave = () => {
    if (!techName.trim()) {
      alert("Technology name required!");
      return;
    }

    const newTech = {
      id: technologies.length + 1,
      name: techName,
      status,
      date: new Date().toISOString().split("T")[0],
    };

    setTechnologies([...technologies, newTech]);
    handleReset();
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setTechnologies(technologies.filter((tech) => tech.id !== id));
  };


  const handleBack = () => {
    handleReset();
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-[var(--white)] text-[var(--black)] min-h-screen">
      <div className="my-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">Manage Technology</h2>
          <AddButton onAdd={() => setShowForm(true)} />
        </div>
        <p className="text-lg text-[var(--lightGray)] mb-4">
          Create and manage technology categories for your quizzes
        </p>
         <TechnologyTable data={technologies} onDelete={handleDelete} />
      </div>

      {showForm && (
        <div className="Technology-form-model fixed inset-0 flex items-center justify-center bg-black/50 z-50 animate-fadeIn">

          <div className="Technology-form max-w-xl my-5 bg-[var(--black)] text-[var(--white)] p-6 rounded-lg shadow">

            <div className="mb-3 flex items-center">
              <button onClick={handleBack} className="px-3 text-[var(--white)] cursor-pointer text-lg">
                <FaArrowLeft />
              </button>
              <h1 className="text-2xl font- text-[var(--white)]">Add Technology</h1>
            </div>
            <p className="text-[var(--gray)] text-left text-sm mb-6">
              Create a new technology category for quiz questions
            </p>

            <div className="mb-8">
              <label className="block text-[var(--white)] mb-3 text-left font-medium mb-1">
                Technology Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={techName}
                onChange={(e) => setTechName(e.target.value)}
                placeholder="e.g., React.js, Node.js, Python"
                className="w-full border border-[var(--lightGray)] rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] focus:outline-none bg-[var(--lightGray)] text-[var(--black)]"
              />
            </div>

            <div className="mb-8">
              <label className="block text-[var(--gray)] font-medium mb-2 text-left">Status</label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={status === "Active"}
                    onChange={() => setStatus("Active")}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[var(--gray)]">Active</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="InActive"
                    checked={status === "InActive"}
                    onChange={() => setStatus("InActive")}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[var(--gray)]">Inactive</span>
                </label>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                className="bg-[var(--accent)] text-[var(--white)] px-4 py-2 rounded-md hover:opacity-90 flex flex-row items-center"
              >
                <span className="px-2">
                  <IoIosSave />
                </span>
                Save Technology
              </button>
              <button
                onClick={handleReset}
                className="bg-[var(--lightGray)] text-[var(--black)] px-4 py-2 rounded-md hover:opacity-80"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default ManageTechnology;
