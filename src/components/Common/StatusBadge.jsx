import React from "react";

const StatusBadge = ({ active }) => {
  // const isActive = active === 1;
  // const colorClass = isActive ? "status-active" : "status-inactive";
  // const text = isActive ? "Active" : "Inactive";

  return (
    <span className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full w-26 text-xs font-semibold shadow-sm transition-all duration-300 border ${active
        ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/50'
        : 'bg-gray-500/20 text-gray-400 border-gray-400/40'
      }`}>
      <span className={`w-2 h-2 rounded-full ${active ? 'bg-emerald-600 animate-pulse' : 'bg-gray-400'}`}></span>
      {active ? 'Active' : 'Inactive'}
    </span>
  );
};

export default StatusBadge;