import React from "react";

const Modalmsg = ({ modalmsg, onClose ,onDelete}) => {
    return (
        <div className="Technology-form-model">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl text-[var(--black)] font-semibold mb-4">Confirm Deletion</h2>
                <p className="mb-6 text-[var(--black)]">{modalmsg}</p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modalmsg;