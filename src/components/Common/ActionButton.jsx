import React from "react";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const ActionButton = ({ onEdit, onDelete, tech }) => {
    return (
        <>
            <button
                onClick={onEdit}
                className="Button-style text-[#8b5cf6] hover:underline"
            >
                <FaEdit />
                <span className="TooltipText">Edit</span>
            </button>
            <button
                onClick={onDelete}
                className="Button-style text-red-600 hover:underline"
            >
                <FaTrash />
                <span className="TooltipText">Delete</span>
            </button>
        </>
    );
};

export default ActionButton;