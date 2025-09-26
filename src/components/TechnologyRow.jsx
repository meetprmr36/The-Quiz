// import React from "react";
// import '../App.css';
// import StatusBadge from "./StatusBadge";
// import { FaTrash } from "react-icons/fa6";
// import { FaEdit } from "react-icons/fa";


// const TechnologyRow = ({ tech, onDelete, questions }) => {
//   return (    
//     <tr className="Border-bottom hover:bg-[var(--Hovergray)]">
//       <td className="p-3 px-5 w-45 max-w-50 break-words">{tech.name}</td>
//       <td className="p-3 w-20 max-w-24 break-words">
//         <StatusBadge status={tech.status} />
//       </td>
//       <td className="p-3 w-15 max-w-30 break-words">{tech.date}</td>
//       <td className="p-3 w-15 max-w-30 break-words">{tech.date}</td>
//       <td className="p-3 w-38 max-w-38 break-words">
//         <button
//           onClick={() => onEdit?.(tech)}
//           className="Button-style text-blue-600 hover:underline"
//         >
//           <FaEdit />
//           <span className="TooltipText">Edit</span>
//         </button>
//         <button
//           onClick={() => onDelete?.(tech.id)}
//           className="Button-style text-red-600 hover:underline"
//         >
//           <FaTrash />
//           <span className="TooltipText">Delete</span>
//         </button>
//       </td>
//     </tr>

//   );
// };

// export default TechnologyRow;


import React from "react";
import '../App.css';
import StatusBadge from "./StatusBadge";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const TechnologyRow = ({ tech, onDelete, questions, onEdit }) => {
  const questionCount = questions.filter(
    q => q.technology?.toLowerCase() === tech.name.toLowerCase()
  ).length;

  return (
    <tr className="Border-bottom hover:bg-[var(--Hovergray)]">
      <td className="p-3 px-5 max-w-50 break-words">{tech.name}</td>
      <td className="p-3 max-w-30 break-words">{tech.date}</td>
      <td className="p-3 max-w-24 break-words">
        <StatusBadge status={tech.status} />
      </td>
      <td className="p-3 max-w-30 break-words">{questionCount}</td>
      <td className="p-3 max-w-38 break-words">
        <button
          onClick={() => onEdit?.(tech.id)}
          className="Button-style text-blue-600 hover:underline"
        >
          <FaEdit />
          <span className="TooltipText">Edit</span>
        </button>
        <button
          onClick={() => onDelete?.(tech.id)}
          className="Button-style text-red-600 hover:underline"
        >
          <FaTrash />
          <span className="TooltipText">Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default TechnologyRow;
