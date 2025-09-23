import React from "react";
import '../App.css';

const StatusBadge = ({ status }) => {
  const color =
    status === "Active"
      ? "status-active" : "status-inactive";

  return (
    <span
      className={`px-2 py-1 text-sm font-medium rounded ${color}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;