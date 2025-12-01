import React from "react";
import '../App.css';
import StatusBadge from "./StatusBadge";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const QuestionRow = ({ tech, onDelete, onEdit, technologies }) => {
  return (
    <tr className="Border-bottom hover:bg-[var(--accenthover)] transition-all duration-400">
      <td className="p-3 px-5 max-w-40 break-all hyphens-auto max-lg:max-w-20 max-lg:text-sm max-md:text-xs">
        {tech?.question}
        <span className="tag blue m-1 inline-block">
          {technologies.find(t => t.id === tech?.techLevel?.[0]?.technology)?.name || "N/A"}
        </span>
      </td>
      <td className="p-3 max-w-28 break-words max-lg:max-w-16 text-center max-lg:text-sm">
        <StatusBadge active={tech?.active} />
      </td>
      <td className="p-3 max-w-28 break-words max-lg:max-w-16 max-lg:text-sm text-center max-md:text-xs">{tech?.options.length}</td>
      <td className="p-3 max-w-32 break-words max-lg:max-w-32 max-lg:text-sm text-center align-middle">
        <div className="flex items-center justify-center gap-3 h-full">
          <button
            onClick={() => onEdit?.(tech.id)}
            className="Button-style text-[#8b5cf6] hover:underline duration-200"
          >
            <FaEdit />
            <span className="TooltipText">Edit</span>
          </button>
          <button
            onClick={() => onDelete?.(tech.id)}
            className="Button-style text-red-600 hover:underline duration-200"
          >
            <FaTrash />
            <span className="TooltipText">Delete</span>
          </button>
        </div>
      </td>

    </tr>
  );
};

export default QuestionRow;