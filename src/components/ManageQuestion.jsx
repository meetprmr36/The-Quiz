import React, { useState, useEffect } from "react";
import QuestionTable from "./QuestionTable";
import ModalMessage from "./ModalMessage";
import OptionBar from "./OptionBar";
import { IoIosSave, IoMdClose } from "react-icons/io";
import AddButton from "./AddButton";
import axios from "axios";

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
  const [modalMessage, setModalMessage] = useState("");

  const API_BASE = `${import.meta.env.VITE_API_URL}v1/questions`;
  const token = import.meta.env.VITE_API_TOKEN;

  const techList = technologies.map((t) => t.name);

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, technology: value });

    if (value.length > 0) {
      setSuggestions(
        techList.filter((t) =>
          t.toLowerCase().startsWith(value.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (tech) => {
    setFormData({ ...formData, technology: tech });
    setSuggestions([]);
  };

  const handleOptionChange = (updatedOption) => {
    const selectedCount = formData.options.filter((o) => o.isCorrect).length;
    const current = formData.options.find((o) => o.id === updatedOption.id);

    if (!current.isCorrect && selectedCount >= 2 && updatedOption.isCorrect) {
      setModalMessage("You cannot select more than 2 options");
      return;
    }

    if (current.isCorrect && selectedCount === 1 && !updatedOption.isCorrect) {
      setModalMessage("Select at least one option");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      options: prev.options.map((o) =>
        o.id === updatedOption.id ? updatedOption : o
      ),
    }));
  };

  const handleAddOption = () => {
    setFormData((prev) => ({
      ...prev,
      options: [
        ...prev.options,
        { id: prev.options.length + 1, text: "", isCorrect: false },
      ],
    }));
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
          "Authorization": `Bearer ${token}`,
        },
      });

      if (data && data.data) {
        const q = data.data;

        const techId = q.techLevel?.[0]?.technology || q.technology?.id || q.technology;
        const techName = technologies.find(t => t.id === techId || t._id === techId)?.name || "";

        const formattedOptions = q.options?.map((opt, i) => {
          if (typeof opt === "string") {
            return {
              id: i + 1,
              text: opt,
              isCorrect: false,
            };
          } else {
            return {
              id: i + 1,
              text: opt.text || opt.option || "",
              isCorrect: opt.isCorrect || opt.is_correct || false,
            };
          }
        }) || [];

        while (formattedOptions.length < 2) {
          formattedOptions.push({
            id: formattedOptions.length + 1,
            text: "",
            isCorrect: false,
          });
        }
        setFormData({
          question: q.question || "",
          technology: techName,
          status: q.status || "Active",
          options: formattedOptions,
        });

        setEditingId(id);
        setShowForm(true);
      } else {
        setModalMessage("Question not found!");
      }
    } catch (err) {
      console.error("Error fetching question:", err);
      console.error("Error response:", err.response?.data);
      setModalMessage(err.response?.data?.meta?.message || err.response?.data?.message || "Failed to fetch question");
    }
  };
  const handleSave = async () => {
    if (!formData.question.trim()) {
      setModalMessage("Question text cannot be empty");
      return;
    }

    const hasValidOptions = formData.options.some((option) => option.text.trim());
    if (!hasValidOptions) {
      setModalMessage("At least one option must have text");
      return;
    }

    const hasCorrectOption = formData.options.some((option) => option.isCorrect);
    if (!hasCorrectOption) {
      setModalMessage("At least one option must be marked as correct");
      return;
    }

    const selectedTech = technologies.find(t => t.name === formData.technology);
    const techId = selectedTech?.id || selectedTech?._id;

    const payload = {
      question: formData.question,
      // active: formData.status === "Active" ? 1 : 0,
      techLevel: [{
        technology: techId,
        level: 1
      }]
    };
    try {
      if (editingId) {

        const { data } = await axios.patch(
          `${API_BASE}/${editingId}`,
          payload,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
              "Authorization": `Bearer ${token}`,
            },
          }
        );

        if (data?.meta?.code === 1) {
          setModalMessage("Question updated successfully!");
          await fetchQuestions();
          setShowForm(false);
          handleReset();
        } else {
          setModalMessage(data?.meta?.message || "Update failed");
        }
      } else {

        const { data } = await axios.post(API_BASE, payload, {
          headers: {
            "ngrok-skip-browser-warning": "true",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (data?.meta?.code === 1) {
          setModalMessage("Question added successfully!");
          await fetchQuestions();
          setShowForm(false);
          handleReset();
        } else {
          setModalMessage(data?.meta?.message || "Create failed");
        }
      }
    } catch (err) {
      console.error("Save error:", err);
      console.error("Error response:", err.response?.data);
      setModalMessage(
        err.response?.data?.meta?.message ||
        err.response?.data?.message ||
        "Failed to save question"
      );
    }
  };

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(API_BASE, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (data?.data) {
        setQuestions(data.data);
      }
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

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
      console.log("Question exists?", checkExists.data);

      const { data } = await axios.delete(`${API_BASE}/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          "Authorization": `Bearer ${token}`,
        },
      });

      console.log("Delete Response:", data);

      if (data?.meta?.code === 1) {
        setModalMessage("Question deleted successfully!");
      } else {
        setModalMessage(data?.meta?.message || "Failed to delete question");
      }
    } catch (err) {
      console.error("Full error:", err);
      console.error("Error response:", err.response);
      setModalMessage(err.response?.data?.meta?.message || "Failed to delete question");
    }
  };

  return (
    <div className="Manage-Question px-6 py-3 bg-[var(--white)] text-[var(--black)] min-h-screen max-lg:px-4 max-lg:py-3">
      <div className="my-5 mx-0">
        <div className="flex justify-between items-center mb-5 max-lg:mb-0 transition-all duration-400">
          <h2 className="text-4xl font-semibold max-lg:text-2xl max-md:text-xl">
            Manage Questions
          </h2>
        </div>
        <div className="flex justify-between mb-4 items-baseline max-lg:mb-2">
          <p className="text-lg text-[var(--lightGray)] items-center max-lg:text-sm transition-all duration-400">
            Create and manage questions for your quizzes
          </p>
          <AddButton onAdd={() => setShowForm(true)} Name="Add Question" />
        </div>
      </div>

      <QuestionTable
        data={questions}
        tech={technologies}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {showForm && (
        <div className="Technology-form-model fixed inset-0 flex w-full items-center justify-center bg-black/50 animate-fadeIn">
          <div className="Technology-form max-w-xl bg-[var(--white)] rounded-lg shadow dark:shadow-lg my-auto w-full mx-4">
            <div className="mb-6 flex flex-col max-lg:mb-4">
              <div className="flex flex-row justify-between text-left">
                <h1 className="text-2xl items-center flex font-semibold text-[var(--black)] py-3 max-lg:text-xl max-lg:py-2">
                  {editingId ? "Edit Question" : "Add Question"}
                </h1>
                <button
                  onClick={handleBack}
                  className="px-3 cursor-pointer text-[var(--black)] text-2xl"
                >
                  <IoMdClose />
                </button>
              </div>
              <p className="text-[var(--lightGray)] text-left text-sm">
                {editingId ? "Update the quiz question" : "Create a new quiz question with options"}
              </p>
            </div>

            <div className="mb-4 text-left max-lg:mb-3">
              <label className="block text-[var(--black)] font-medium mb-1 max-lg:text-sm max-lg:font-light">
                Question Text <span className="text-red-500 text-2xl max-lg:text-base">*</span>
              </label>
              <textarea
                placeholder="Enter Your Question Here"
                value={formData.question}
                onChange={(e) =>
                  setFormData({ ...formData, question: e.target.value })
                }
                className="w-full max-h-32 min-h-20 border border-[var(--lightGray)] rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] focus:outline-none bg-[var(--gray)] text-[var(--black)] max-lg:text-sm max-lg:px-2 max-lg:py-1"
              />
            </div>

            <div className="mb-4 text-left relative">
              <label className="block text-[var(--black)] font-medium mb-1 max-lg:text-sm max-lg:font-light">
                Technology <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter Technology"
                value={formData.technology}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[var(--gray)] text-[var(--black)] max-lg:text-sm max-lg:px-2"
              />

              {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full border border-gray-300 bg-white rounded-md mt-1 shadow-md max-lg:text-sm">
                  {suggestions.map((s, i) => (
                    <li
                      key={i}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => selectSuggestion(s)}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <h2 className="text-lg mb-4 flex justify-between text-[var(--black)] items-center max-lg:text-base">
              Options
              <button
                onClick={handleAddOption}
                className="add-button text-white px-2 py-1 rounded text-sm max-lg:text-xs"
              >
                + Add Option
              </button>
            </h2>
            <div className="Option-Bar">
              {formData.options.map((option) => (
                <OptionBar key={option.id} option={option} onChange={handleOptionChange} />
              ))}
            </div>

            <div className="mb-6 mt-4">
              <label className="block text-[var(--black)] text-left font-medium mb-2 max-lg:font-light">
                Status
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    checked={formData.status === "Active"}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="text-blue-600 rounded-full focus:ring-blue-500"
                  />
                  <span className="text-[var(--lightGray)] max-lg:text-sm">Active</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={formData.status === "Inactive"}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-[var(--lightGray)] max-lg:text-sm">Inactive</span>
                </label>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                onClick={handleSave}
                className=" add-button text-white px-4 py-2 rounded-md hover:opacity-90 flex items-center cursor-pointer max-lg:px-2 max-lg:text-sm"
              >
                <span className="px-2">
                  <IoIosSave />
                </span>
                {editingId ? "Update Question" : "Save Question"}
              </button>
              <button
                onClick={handleReset}
                className="text-[var(--black)] px-4 py-2 bg-[var(--gray)] rounded-md hover:opacity-90 cursor-pointer max-lg:px-2 max-lg:text-sm"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      <ModalMessage message={modalMessage} onClose={() => setModalMessage("")} />
    </div>
  );
};

export default ManageQuestion;