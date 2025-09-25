import React from "react";
import TechnologyRow from "./TechnologyRow";

const TechnologyTable = ({ data, onDelete,quest}) => {
  return (
    <div className="max-h-[calc(100vh-190px)] mb-5 overflow-y-auto shadow-md rounded-lg">
      <table className="whole-table w-full border-collapse bg-[var(--white)]">
        <thead className="Table-head sticky top-0 z-20">
          <tr className="text-left">
            <th className="p-3 w-[35%] px-5 bg-[var(--Gray)]">Technology</th>
            <th className="p-3 w-[15%] bg-[var(--Gray)]">Created Date</th>
            <th className="p-3 w-[15%] bg-[var(--Gray)]">Status</th>
            <th className="p-3 w-[10%] bg-[var(--Gray)]">Questions</th>
            <th className="p-3 w-[15%] px-10 bg-[var(--Gray)]">Actions</th>
          </tr>
        </thead>
        <tbody className="Table-body">
          {data?.map((tech) => (
            <TechnologyRow key={tech.id} tech={tech} onDelete={onDelete} questions={quest} />
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default TechnologyTable;


// import React, { useState, useEffect } from "react";
// import TechnologyRow from "./TechnologyRow";

// const TechnologyTable = ({ data, onDelete, quest }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 600); // fake delay like skeleton load
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="max-h-[70vh] mb-5 overflow-y-auto shadow-md rounded-lg">
//       <table className="whole-table w-full border-collapse bg-[var(--white)]">
//         <thead className="Table-head sticky top-0 z-20">
//           <tr className="text-left">
//             <th className="p-3 w-[40%] px-5 bg-[var(--Gray)]">Technology</th>
//             <th className="p-3 w-[20%] bg-[var(--Gray)]">Status</th>
//             <th className="p-3 w-[20%] bg-[var(--Gray)]">Created Date</th>
//             <th className="p-3 w-[15%] bg-[var(--Gray)]">Questions</th>
//             <th className="p-3 w-[15%] px-10 bg-[var(--Gray)]">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="Table-body">
//           {loading ? (
//             // Skeleton rows
//             [...Array(5)].map((_, i) => (
//               <tr key={i} className="animate-pulse border-b">
//                 <td className="p-3 px-5">
//                   <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//                 </td>
//                 <td className="p-3">
//                   <div className="h-4 bg-gray-300 rounded w-1/2"></div>
//                 </td>
//                 <td className="p-3">
//                   <div className="h-4 bg-gray-300 rounded w-1/3"></div>
//                 </td>
//                 <td className="p-3">
//                   <div className="h-4 bg-gray-300 rounded w-1/4"></div>
//                 </td>
//                 <td className="p-3">
//                   <div className="h-4 bg-gray-300 rounded w-2/3"></div>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             data?.map((tech) => (
//               <TechnologyRow
//                 key={tech.id}
//                 tech={tech}
//                 onDelete={onDelete}
//                 questions={quest}
//               />
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TechnologyTable;
