import React from "react";
import '../App.css';
import StatusBadge from "./StatusBadge";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const QuestionRow = ({ tech, onDelete, onEdit }) => {
  return (
    <tr className="Border-bottom hover:bg-[var(--Hovergray)]">
      <td className="p-3 px-5 max-w-40 break-words">{tech.question}</td>
      <td className="p-3 max-w-28 break-words">
        <StatusBadge status={tech.status} />
      </td>
      <td className="p-3 max-w-28 break-words">{tech.options.length}</td>
      <td className="p-3 space-x-3 max-w-32 break-words">
        <button
          onClick={() => onEdit?.(tech)}
          className="Button-style text-blue-600 hover:underline">
          <FaEdit />
          <span className="TooltipText">Edit</span>
        </button>
        <button
          onClick={() => onDelete?.(tech.id)}
          className="Button-style Red-border text-red-600 hover:underline">
          <FaTrash />
          <span className="TooltipText">Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default QuestionRow;