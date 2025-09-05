import React from "react";
import '../App.css';
import StatusBadge from "./StatusBadge";

const TechnologyRow = ({ tech, onDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{tech.name}</td>
      <td className="p-3">
        <StatusBadge status={tech.status} />
      </td>
      <td className="p-3">{tech.date}</td>
      <td className="p-3 space-x-3">
        <button className="text-blue-600 hover:underline">Edit</button>
        <button
          onClick={() => onDelete(tech.id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TechnologyRow;
