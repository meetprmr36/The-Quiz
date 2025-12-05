// import React from "react";
import OptionBar from "./OptionBar";
import FormButton from "./Common/FormButton";
import { IoIosSave, IoMdClose } from "react-icons/io";
import { Form } from "react-router-dom";

const QuesForm = ({ formData, setFormData, handleSave, handleReset, handleBack, editingId, suggestions, selectSuggestion,setSuggestions, techList,showMessage }) => {

    const handleOptionChange = (updatedOption) => {
        const selectedCount = formData.options.filter((o) => o.isCorrect).length;
        const current = formData.options.find((o) => o.id === updatedOption.id);

        if (!current.isCorrect && selectedCount >= 2 && updatedOption.isCorrect) {
            showMessage("You cannot select more than 2 options", "info");
            return;
        }

        if (current.isCorrect && selectedCount === 0 && !updatedOption.isCorrect) {
            showMessage("Select at least one option", "info");
            return;
        }

        setFormData((prev) => ({
            ...prev,
            options: prev.options.map((o) =>
                o.id === updatedOption.id ? updatedOption : o
            ),
        }));
    };
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


    const handleAddOption = () => {
        setFormData((prev) => ({
            ...prev,
            options: [
                ...prev.options,
                { id: prev.options.length + 1, text: "", isCorrect: false },
            ],
        }));
    };

    return (
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
                        onChange={(e) => handleChange(e)}
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

                {/* <div className="flex space-x-3">
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
                </div> */}
                <FormButton handleSave={handleSave} handleReset={handleReset} editingId={editingId} />
            </div>
        </div>
    )
}

export default QuesForm;