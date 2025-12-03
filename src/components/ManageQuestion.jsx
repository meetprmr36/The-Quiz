import React, { useState, useEffect } from "react";
import QuestionTable from "./QuestionTable";
import SectionHeader from "./Common/SectionHeader";
import axios from "axios";
import QuesForm from "./QuesForm";

const ManageQuestion = ({ questions, setQuestions, technologies }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    question: "",
    technology: "",
    status: "Active",
    options: [
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
    ],
  });
  const [suggestions, setSuggestions] = useState([]);
  const [modalMessage, setModalMessage] = useState(null);

  const showMessage = (text, type = "info") => {
    setModalMessage({ text, type });
    setTimeout(() => setModalMessage(null), 2000);
  };

  const API_BASE = `${import.meta.env.VITE_API_URL}v1/questions`;
  const token = import.meta.env.VITE_API_TOKEN;

  const techList = technologies.map((t) => t.name);

  const selectSuggestion = (tech) => {
    setFormData({ ...formData, technology: tech });
    setSuggestions([]);
  };

  const handleBack = () => {
    handleReset();
    setShowForm(false);
  };

  const handleEdit = (tech) => {
    setEditingId(tech.id);
    setFormData({
      question: tech.question || "",
      status: tech.active ? "Active" : "Inactive",
      options: tech.options?.map((opt, i) => ({
        id: i + 1,
        text: opt.text || opt.option || "",
        isCorrect: opt.isCorrect || opt.is_correct || false,
      })) || [],
    });
    setShowForm(true);
  }

  // const handleEdit = async (id) => {
  //   try {
  //     const { data } = await axios.get(`${API_BASE}/${id}`, {
  //       headers: {
  //         "ngrok-skip-browser-warning": "true",
  //         "Authorization": `Bearer ${token}`,
  //       },
  //     });

  //     if (data && data.data) {
  //       const q = data.data;

  //       const techId = q.techLevel?.[0]?.technology || q.technology?.id || q.technology;
  //       const techName = technologies.find(t => t.id === techId || t._id === techId)?.name || "";

  //       const formattedOptions = q.options?.map((opt, i) => {
  //         if (typeof opt === "string") {
  //           return {
  //             id: i + 1,
  //             text: opt,
  //             // isCorrect: false,
  //           };
  //         } else {
  //           return {
  //             id: i + 1,
  //             text: opt.text || opt.option || "",
  //             // isCorrect: opt.isCorrect || opt.is_correct || false,
  //           };
  //         }
  //       }) || [];

  //       while (formattedOptions.length < 2) {
  //         formattedOptions.push({
  //           id: formattedOptions.length + 1,
  //           text: "",
  //           isCorrect: false,
  //         });
  //       }
  //       setFormData({
  //         question: q.question || "",
  //         technology: techName,
  //         status: q.status || "Active",
  //         options: formattedOptions,
  //       });

  //       setEditingId(id);
  //       setShowForm(true);
  //     } else {
  //       showMessage("Question not found!");
  //     }
  //   } catch (err) {
  //     showMessage(err.response?.data?.meta?.message || err.response?.data?.message || "Failed to fetch question");
  //   }
  // };

  const handleSave = async () => {
    if (!formData.question.trim()) {
      showMessage("Question text cannot be empty");
      return;
    }

    const hasValidOptions = formData.options.some((option) => option.text.trim());
    if (!hasValidOptions) {
      showMessage("At least one option must have text");
      return;
    }

    const hasCorrectOption = formData.options.some((option) => option.isCorrect);
    if (!hasCorrectOption) {
      showMessage("At least one option must be marked as correct");
      return;
    }

    const selectedTech = technologies.find(t => t.name === formData.technology);
    const techId = selectedTech?.id || selectedTech?._id;
    console.log(formData);

    try {
      if (formData, editingId) {
        // const { data } = await axios.patch(
        //   `${API_BASE}/${formData.id}`,
        //   { name: formData.name, active: formData.active },
        //   { headers: { "ngrok-skip-browser-warning": "true", "Authorization": `Bearer ${token}` } }
        // );

        // setTechnologies(prev =>
        //   prev.map(tech => tech.id === formData.id ? data.data : tech)
        // );
        // showMessage("Technology updated successfully", "success");
        setQuestions(prev =>
          prev.map(q => q.id === editingId ? { ...q, ...formData } : q)
        );
        showMessage("Technology updated successfully", "success");
      }
      handleReset();
      setShowForm(false);
    } catch (err) {
      if (err.response?.status === 409) {
        showMessage("question already exists!");
      } else if (err.response?.status === 404) {
        showMessage("API endpoint not found. Check backend.");
      } else {
        showMessage(err.message || "Failed to process request");
      }
    }

    // const payload = {
    //   question: formData.question,
    //   // active: formData.status === "Active" ? 1 : 0,
    //   techLevel: [{
    //     technology: techId,
    //     level: 1
    //   }]
    // };

    // try {
    //   if (editingId) {

    //     const { data } = await axios.patch(
    //       `${API_BASE}/${editingId}`,
    //       payload,
    //       {
    //         headers: {
    //           "ngrok-skip-browser-warning": "true",
    //           "Authorization": `Bearer ${token}`,
    //         },
    //       }
    //     );

    //     if (data?.meta?.code === 1) {
    //       showMessage("Question updated successfully!");
    //       await fetchQuestions();
    //       setShowForm(false);
    //       handleReset();
    //     } else {
    //       showMessage(data?.meta?.message || "Update failed");
    //     }
    //   }
    //   else {
    //     const { data } = await axios.post(API_BASE, payload, {
    //       headers: {
    //         "ngrok-skip-browser-warning": "true",
    //         "Authorization": `Bearer ${token}`,
    //       },
    //     });

    //     if (data?.meta?.code === 1) {
    //       showMessage("Question added successfully!");
    //       await fetchQuestions();
    //       setShowForm(false);
    //       handleReset();
    //     } else {
    //       showMessage(data?.meta?.message || "Create failed");
    //     }
    //   }
    // } catch (err) {
    //   showMessage(
    //     err.response?.data?.meta?.message ||
    //     err.response?.data?.message ||
    //     "Failed to save question"
    //   );
    // }
  };

  // const fetchQuestions = async () => {
  //   try {
  //     const { data } = await axios.get(API_BASE, {
  //       headers: {
  //         "ngrok-skip-browser-warning": "true",
  //         "Authorization": `Bearer ${token}`,
  //       },
  //     });

  //     if (data?.data) {
  //       setQuestions(data.data);
  //     }
  //   } catch (err) {
  //     console.error("Error fetching questions:", err);
  //   }
  // };

  const handleReset = () => {
    setFormData({
      question: "",
      technology: "",
      status: "Active",
      options: [
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
      ],
    });
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    try {
      const checkExists = await axios.get(`${API_BASE}/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${token}`,
        },
      });

      const { data } = await axios.delete(`${API_BASE}/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${token}`,
        },
      });


      if (data?.meta?.code === 1) {
        showMessage("Question deleted successfully!");
      } else {
        showMessage(data?.meta?.message || "Failed to delete question");
      }
    } catch (err) {
      showMessage(err.response?.data?.meta?.message || "Failed to delete question");
    }
  };

  return (
    <div className="Manage-Question px-6 py-3 bg-[var(--white)] text-[var(--black)] min-h-screen max-lg:px-4 max-lg:py-3">
      {modalMessage && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md text-white z-[9999] ${modalMessage.type === "success"
            ? "bg-green-500/70" : "bg-red-400/70"}`}
        >
          {modalMessage.text}
        </div>
      )}

      <SectionHeader
        title="Manage Questions"
        subtitle="Create and manage questions for your quizzes"
        onAdd={() => setShowForm(true)}
        Name="Add Question"
      />

      <QuestionTable
        data={questions}
        tech={technologies}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {showForm && (
        <QuesForm
          formData={formData}
          setFormData={setFormData}
          handleSave={handleSave}
          handleReset={handleReset}
          handleBack={handleBack}
          editingId={editingId}
          suggestions={suggestions}
          setSuggestions={setSuggestions}
          selectSuggestion={selectSuggestion}
          techList={techList}
          showMessage={showMessage}
        />
      )}
    </div>
  );
};

export default ManageQuestion;