import React from "react";
import '../App.css';
import StatusBadge from "./StatusBadge";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const QuestionRow = ({ tech, onDelete, onEdit }) => {
  return (
    <tr className="Border-bottom hover:bg-[var(--Hovergray)] transition-all duration-400">
      <td className="p-3 px-5 max-w-40 break-words max-lg:max-w-20 max-lg:text-sm max-md:text-xs">{tech.question}<span className="tag blue m-2">{tech.technology}</span></td>
      <td className="p-3 max-w-28 break-words max-lg:max-w-16 max-lg:text-center max-lg:text-sm">
        <StatusBadge status={tech.status} />
      </td>
      <td className="p-3 max-w-28 break-words max-lg:max-w-16 max-lg:text-sm max-lg:text-center max-md:text-xs">{tech.options.length}</td>
      <td className="p-3 max-w-32 break-words flex max-lg:max-w-32 max-lg:text-sm flex justify-center max-md:text-xs">
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