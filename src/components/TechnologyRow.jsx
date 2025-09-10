import React from "react";
import '../App.css';
import StatusBadge from "./StatusBadge";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


const TechnologyRow = ({ tech, onDelete, onEdit }) => {
  return (
    <tr className="Border-bottom hover:bg-[var(--gray)]">
      <td className="p-3 px-5">{tech.name}</td>
      <td className="p-3">
        <StatusBadge status={tech.status} />
      </td>
      <td className="p-3">{tech.date}</td>
      <td className="p-3 space-x-3">
        <button
          onClick={() => onEdit?.(tech)}
          className="Button-style text-blue-600 hover:underline dark:text-blue-400"
        >
          <FaEdit />
          <span className="TooltipText">Edit</span>
        </button>
        <button
          onClick={() => onDelete?.(tech.id)}
          className="Button-style Red-border text-red-600 hover:underline dark:text-red-400"
        >
          <FaTrash />
          <span className="TooltipText">Delete</span>
        </button>
      </td>
    </tr>

  );
};

export default TechnologyRow;