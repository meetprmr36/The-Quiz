import React from "react";
import '../App.css';

const StatusBadge = ({ status }) => {
  const color =
    status === "active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <span
      className={`px-2 py-1 text-sm font-medium rounded ${color}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;