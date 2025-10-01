// import React from "react";
// import '../App.css';

// const StatusBadge = ({ active }) => {
//   const color =
//     active === "1"
//       ? "status-active" : "status-inactive";

//   return (
//     <span
//       className={`px-2 py-1 text-sm font-medium max-lg:text-[12px] rounded ${color}`}
//     >
//       {active}
//     </span>
//   );
// };

// export default StatusBadge;

import React from "react";
import '../App.css';

const StatusBadge = ({ active }) => {
  const isActive = active === 1 || active === "1";
  const colorClass = isActive ? "status-active" : "status-inactive";
  const text = isActive ? "Active" : "Inactive";

  return (
    <span className={`px-2 py-1 text-sm font-medium max-lg:text-[12px] rounded ${colorClass}`}>
      {text}
    </span>
  );
};

export default StatusBadge;