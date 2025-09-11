import React, { useState } from "react";
import QuestionTable from "./QuestionTable";
// import AddQuestion from "./AddQuestion";
import ModalMessage from "./ModalMessage"
import OptionBar from "./OptionBar";
import { IoIosSave } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

const ManageQuestion = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is React?",
      technology: "React.js",
      options: ["A JS library", "A framework", "A DB"],
      status: "Active",
    },
    {
      id: 2,
      question: "Explain Node.js event loop",
      technology: "Node.js",
      options: ["Async process", "Database engine"],
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);


  const initialForm = {
    question: "",
    technology: "",
    status: "Active",
    options: [
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
    ],
  };

  const [formData, setFormData] = useState(initialForm);

  const [modalMessage, setModalMessage] = useState("");

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


  const handleReset = () => {
    setFormData(initialForm);
  };


  const handleSave = () => {
    if (!formData.question.trim()) {
      setModalMessage("Question text cannot be empty");
      return;
    }

    const { question, technology = "General", options, status } = formData;

    const newQuestion = {
      id: questions.length + 1,
      question,
      technology,
      options: options.map(({ text }) => text),
      status,
    };

    setQuestions([...questions, newQuestion]);
    setFormData(initialForm);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleEdit = (question) => {
    alert("Editing: " + question.question);
  };

  const handleBack = () => {
    handleReset();
    setShowForm(false);
  };

  return (
    <div className="Manage-Question p-6 bg-[var(--white)] text-[var(--black)] min-h-screen">
      <div className="my-5 mx-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-semibold">Manage Questions</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[var(--accent)] text-[var(--white)] px-4 py-2 rounded hover:opacity-90"
          >
            + Add Question
          </button>
        </div>
        <p className="text-lg text-[var(--lightGray)] mb-4">
          Create and manage questions for your quizzes
        </p>
      </div>


      <QuestionTable data={questions} onDelete={handleDelete} onEdit={handleEdit} />

      {showForm && (
        <div className="Technology-form-model fixed inset-0 flex w-full items-center justify-center bg-black/50 animate-fadeIn">
          <div className="Technology-form max-w-xl bg-[var(--black)] p-6 rounded-lg shadow dark:shadow-lg my-auto">
            <div className="mb-6 flex flex-col">
              <div className="flex flex-row text-left">
                <button onClick={handleBack} className="px-3 cursor-pointer text-[var(--white)] text-lg">
                  <FaArrowLeft />
                </button>
                <h1 className="text-2xl items-center flex font-semibold text-[var(--white)] py-3">
                  Add Question
                </h1>
              </div>
              <p className="text-[var(--gray)] text-left text-sm">
                Create a new quiz question with options
              </p>
            </div>

            <div className="mb-4 text-left">
              <label className="block text-[var(--gray)] font-medium mb-1">
                Question Text <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Enter Your Question Here"
                value={formData.question}
                onChange={(e) =>
                  setFormData({ ...formData, question: e.target.value })
                }
                className="w-full max-h-32 min-h-20 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-[var(--lightGray)] text-[var(--black)]" />
            </div>


            <h2 className="text-2xl font-semibold mb-4 flex justify-between text-[var(--white)] items-center">
              Options
              <button
                onClick={handleAddOption}
                className="bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-800 text-sm dark:bg-indigo-500 dark:hover:bg-indigo-700"
              >
                + Add Option
              </button>
            </h2>
            <div className="Option-Bar">
              {formData.options.map((option) => (
                <OptionBar
                  key={option.id}
                  option={option}
                  onChange={handleOptionChange}
                />
              ))}
            </div>

            <div className="mb-6 mt-4">
              <label className="block text-[var(--gray)] text-left font-medium mb-2">
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
                      setFormData({ ...formData, status: e.target.value })}
                    className="text-blue-600 rounded-full focus:ring-blue-500" />

                  <span className="text-[var(--white)]">Active</span>
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
                  <span className="text-[var(--white)]">Inactive</span>
                </label>
              </div>
            </div>


            <div className="flex space-x-3">
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center dark:bg-blue-500 dark:hover:bg-blue-700">
                <span className="px-2">
                  <IoIosSave />
                </span>
                Save Question
              </button>
              <button
                onClick={handleReset}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      <ModalMessage message={modalMessage} onClose={() => setModalMessage("")} />

      {/* {modalMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-20 dark:bg-opacity-60 flex items-center justify-center z-999">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-lg font-semibold mb-3">{modalMessage}</h3>
            <button
              onClick={() => setModalMessage("")}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
              Okay
            </button>
          </div>
        </div>
      )} */}
    </div>

  );
};

export default ManageQuestion;
