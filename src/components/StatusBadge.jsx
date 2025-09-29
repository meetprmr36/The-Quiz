import React from "react";
import '../App.css';

const StatusBadge = ({ status }) => {
  const color =
    status === "Active"
      ? "status-active" : "status-inactive";

  return (
    <span
      className={`px-2 py-1 text-sm font-medium max-lg:text-[12px] rounded ${color}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;