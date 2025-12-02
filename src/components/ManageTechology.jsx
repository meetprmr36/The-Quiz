import React, { useState, useEffect } from "react";
import TechnologyTable from "./TechnologyTable";
import AddButton from "./AddButton";
import Modalmsg from "./Modalmsg";
import TechForm from "./TechForm";
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
    setTimeout(() => setMessage(null), 2000);
  };

  const handleReset = () => {
    setFormData({ id: null, name: "", active: 1 });
  };

  const handleBack = () => {
    handleReset();
    setShowForm(false);
  };

  const handleEdit = (tech) => {
    setEditingId(tech.id);
    setFormData({
      id: tech.id,
      name: tech.name,
      active: tech.active ?? 1,
    });
    setShowForm(true);
    // try {
    //   const { data } = await axios.get(`${API_BASE}/${id}`, {
    //     headers: {
    //       "ngrok-skip-browser-warning": "true",
    //       "Authorization": `Bearer ${token}`
    //     },
    //   });

    //   if (data && data.data) {
    //     setFormData({
    //       id: data.data.id,
    //       name: data.data.name || "",
    //       active: data.data.active ?? 1,
    //     });
    //     setShowForm(true);
    //   } else {
    //     showMessage("Technology not found!", "error");
    //   }
    // } catch (err) {
    //   showMessage(err.response?.data?.message || "Failed to fetch technology!");
    // }
  };

  const handleSave = async () => {
    if (!formData.name.trim()) {
      showMessage("Technology name is required!");
      return;
    }

    try {
      if (formData.id) {
        // const { data } = await axios.patch(
        //   `${API_BASE}/${formData.id}`,
        //   { name: formData.name, active: formData.active },
        //   { headers: { "ngrok-skip-browser-warning": "true", "Authorization": `Bearer ${token}` } }
        // );

        // setTechnologies(prev =>
        //   prev.map(tech => tech.id === formData.id ? data.data : tech)
        // );
        // showMessage("Technology updated successfully", "success");
        const data = formData;
        setTechnologies(prev =>
          prev.map(tech => tech.id === formData.id ? data : tech)
        );
        showMessage("Technology updated successfully", "success");
      }
      else {
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
      if (err.response?.status === 409) {
        showMessage("Technology already exists!");
      } else if (err.response?.status === 404) {
        showMessage("API endpoint not found. Check backend.");
      } else {
        showMessage(err.message || "Failed to process request");
      }
    }
  };
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);


  const handleDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setTechnologies(prev => prev.filter(tech => tech.id !== deleteId));
    showMessage("Technology deleted successfully");
    setShowModal(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`${API_BASE}/${id}`, {
  //       headers: {
  //         "ngrok-skip-browser-warning": "true",
  //         "Authorization": `Bearer ${token}`
  //       },
  //     });
  //     setTechnologies(prev => prev.filter(tech => tech.id !== id));
  //     showMessage("Technology deleted successfully");
  //   } catch (err) {
  //     showMessage(err.response?.data?.message || "Failed to delete technology", "error");
  //   }
  // };

  return (
    <div className="px-6 py-3 bg-[var(--white)] text-[var(--black)] max-lg:px-4 max-lg:py-2 min-h-screen">
      {message && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md text-white z-[9999] ${message.type === "success"
            ? "bg-green-500/70"
            : message.type === "error"
              ? "bg-red-400/70"
              : "bg-blue-400"
            }`}
        >
          {message.text}
        </div>
      )}

      <div className="my-5">
        <div className="flex justify-between mb-5 max-lg:mb-0 max-sm:mb-2">
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

      {showModal && (
        <Modalmsg modalmsg="Are you sure you want to delete this technology?" onClose={cancelDelete} onDelete={confirmDelete} />
      )}

      {showForm && (
        <TechForm
          formData={formData}
          setFormData={setFormData}
          onSave={handleSave}
          onBack={handleBack}
          onReset={handleReset}
          editingId={editingId}
        />
      )}
    </div>
  );
};

export default ManageTechnology;