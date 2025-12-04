import React from "react";
import { IoMdClose, IoIosSave } from "react-icons/io";

const TechForm = ({ formData, setFormData, editingId, onBack, onSave, onReset }) => {
    return (
        <div className="Technology-form-model">
            <div className="Technology-form bg-[var(--white)] text-[var(--black)] p-6 rounded-lg shadow-xl max-lg:p-4 max-w-xl mx-auto">
                <div className="mb-3 flex justify-between items-center max-lg:mb-2">
                    <h1 className="text-2xl text-[var(--black)] max-lg:text-xl">
                        {editingId ? "Edit Technology" : "Add Technology"}
                    </h1>
                    <button
                        onClick={onBack}
                        className="px-3 text-[var(--black)] cursor-pointer text-2xl rounded-md"
                    >
                        <IoMdClose />
                    </button>
                </div>

                <p className="text-[var(--lightGray)] text-left text-sm mb-6 max-lg:mb-4 max-lg:text-xs rounded-md">
                    {editingId
                        ? "Update the technology category"
                        : "Create a new technology category for quiz questions"}
                </p>

                <div className="mb-8 max-lg:mb-5">
                    <label className="block text-[var(--black)] mb-3 text-left font-medium max-lg:mb-2 max-lg:font-light max-lg:text-sm">
                        Technology Name
                        <span className="text-red-500 text-2xl max-lg:text-xl">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter Technology Name"
                        // placeholder="e.g., React.js, Node.js, Python"
                        className="w-full border border-[var(--lightGray)] rounded-md px-3 py-2 focus:ring-2 focus:ring-[var(--accent)] focus:outline-none bg-[var(--gray)] text-[var(--black)] max-lg:px-2 max-lg:py-1 max-lg:text-sm"
                    />
                </div>

                <div className="mb-8 max-lg:mb-5">
                    <label className="block text-[var(--black)] font-medium mb-2 text-left max-lg:font-light">
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
                        onClick={() => onSave()}
                        className="add-button text-white px-4 py-2 rounded-md flex flex-row items-center cursor-pointer max-lg:text-sm max-lg:px-3 max-lg:py-1 "
                    >
                        <span className="px-2">
                            <IoIosSave />
                        </span>
                        {editingId ? "Update Technology" : "Save Technology"}
                    </button>
                    <button
                        onClick={onReset}
                        className="bg-[var(--gray)] text-[var(--black)] px-4 py-2 rounded-md cursor-pointer max-lg:text-sm"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TechForm;