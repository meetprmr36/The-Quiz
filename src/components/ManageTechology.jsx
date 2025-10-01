import React, { useState, useEffect } from "react";
import TechnologyTable from "./TechnologyTable";
import AddButton from "./AddButton";
import { IoMdClose, IoIosSave } from "react-icons/io";
import axios from "axios";

const ManageTechnology = ({ technologies, setTechnologies, questions }) => {
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    active: 1,
  });
  const [message, setMessage] = useState(null);

  const API_BASE = `${import.meta.env.VITE_API_URL}v1/technologies`;
  const token = import.meta.env.VITE_API_TOKEN;

  const showMessage = (text, type = "info") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleReset = () => {
    setFormData({ id: null, name: "", active: 1 });
  };

  const handleBack = () => {
    handleReset();
    setShowForm(false);
  };

  const handleEdit = async (id) => {
    try {
      const { data } = await axios.get(`${API_BASE}/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${token}`
        },
      });

      if (data && data.data) {
        setFormData({
          id: data.data.id,
          name: data.data.name || "",
          active: data.data.active ?? 1,
        });
        setShowForm(true);
      } else {
        showMessage("Technology not found!", "error");
      }
    } catch (err) {
      console.error(err);
      showMessage(err.response?.data?.message || "Failed to fetch technology!", "error");
    }
  };

  const handleSave = async () => {
    if (!formData.name.trim()) {
      showMessage("Technology name is required!", "error");
      return;
    }

    try {
      if (formData.id) {
        const { data } = await axios.patch(
          `${API_BASE}/${formData.id}`,
          { name: formData.name, active: formData.active },
          { headers: { "ngrok-skip-browser-warning": "true", "Authorization": `Bearer ${token}` } }
        );

        setTechnologies(prev =>
          prev.map(tech => tech.id === formData.id ? data.data : tech)
        );
        showMessage("Technology updated successfully", "success");
      } else {
        const { data } = await axios.post(
          API_BASE,
          { name: formData.name },
          { headers: { "ngrok-skip-browser-warning": "true", "Authorization": `Bearer ${token}` } }
        );

        setTechnologies(prev => [...prev, data.data]);
        showMessage("Technology added successfully", "success");
      }

      handleReset();
      setShowForm(false);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 409) {
        showMessage("Technology already exists!", "error");
      } else if (err.response?.status === 404) {
        showMessage("API endpoint not found. Check backend.", "error");
      } else {
        showMessage(err.response?.data?.message || "Something went wrong!", "error");
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`, {
        headers: { "ngrok-skip-browser-warning": "true" },
      });
      setTechnologies(prev => prev.filter(tech => tech.id !== id));
      showMessage("Technology deleted successfully", "success");
    } catch (err) {
      console.error(err);
      showMessage(err.response?.data?.message || "Failed to delete technology", "error");
    }
  };

  return (
    <div className="px-6 py-3 bg-[var(--white)] text-[var(--black)] max-lg:px-4 max-lg:py-2 min-h-screen">
      {message && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md text-white z-[9999] ${message.type === "success"
            ? "bg-green-500"
            : message.type === "error"
              ? "bg-red-400"
              : "bg-blue-400"
            }`}
        >
          {message.text}
        </div>
      )}

      <div className="my-5">
        <div className="flex justify-between mb-4 max-lg:mb-0 max-sm:mb-2">
          <h2 className="text-4xl font-semibold max-lg:text-2xl max-sm:text-xl">
            Manage Technology
          </h2>
        </div>
        <div className="flex justify-between items-baseline mb-4 max-lg:mb-2 max-sm:items-center">
          <p className="text-lg items-center text-[var(--lightGray)] max-lg:text-sm max-sm:text-xs max-sm:w-2/4">
            Create and manage technology categories for your quizzes
          </p>
          <AddButton onAdd={() => setShowForm(true)} Name="Add Technology" />
        </div>

        <TechnologyTable
          data={technologies}
          quest={questions}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>

      {showForm && (
        <div className="Technology-form-model">
          <div className="Technology-form bg-[var(--white)] text-[var(--black)] p-6 rounded-lg shadow-xl max-lg:p-4 max-w-xl mx-auto">
            <div className="mb-3 flex justify-between items-center max-lg:mb-2">
              <h1 className="text-2xl text-[var(--black)] max-lg:text-xl">
                {editingId ? "Edit Technology" : "Add Technology"}
              </h1>
              <button
                onClick={handleBack}
                className="px-3 text-[var(--black)] cursor-pointer text-2xl"
              >
                <IoMdClose />
              </button>
            </div>

            <p className="text-[var(--lightGray)] text-left text-sm mb-6 max-lg:mb-4 max-lg:text-xs">
              {editingId
                ? "Update the technology category"
                : "Create a new technology category for quiz questions"}
            </p>

            <div className="mb-8 max-lg:mb-5">
              <label className="block text-[var(--black)] mb-3 text-left font-medium max-lg:mb-2 max-lg:text-sm">
                Technology Name{" "}
                <span className="text-red-500 text-2xl max-lg:text-xl">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g., React.js, Node.js, Python"
                className="w-full border border-[var(--lightGray)] rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] focus:outline-none bg-[var(--gray)] text-[var(--black)] max-lg:px-2 max-lg:py-1 max-lg:text-sm"
              />
            </div>

            <div className="mb-8 max-lg:mb-5">
              <label className="block text-[var(--black)] font-medium mb-2 text-left">
                Status
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={formData.active === 1}
                    onChange={() => setFormData(prev => ({ ...prev, active: 1 }))}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[var(--lightGray)]">Active</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="InActive"
                    checked={formData.active === 0}
                    onChange={() => setFormData(prev => ({ ...prev, active: 0 }))}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[var(--lightGray)]">Inactive</span>
                </label>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => handleSave()}
                className="bg-[var(--bitlightblue)] text-white px-4 py-2 rounded-md flex flex-row items-center cursor-pointer max-lg:text-sm max-lg:px-3 max-lg:py-1"
              >
                <span className="px-2">
                  <IoIosSave />
                </span>
                {editingId ? "Update Technology" : "Save Technology"}
              </button>
              <button
                onClick={handleReset}
                className="bg-[var(--gray)] text-[var(--black)] px-4 py-2 rounded-md cursor-pointer max-lg:text-sm"
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