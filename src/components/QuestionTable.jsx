import React from "react";
import QuestionRow from "./QuestionRow";

const QuestionTable = ({ data, onDelete, onEdit }) => {
  return (
    <div className="max-h-[calc(100vh-190px)] overflow-y-scroll mb-5 shadow-md rounded-lg">
      <table className="w-full border-collapse table-fixed">
        <thead className="Table-head sticky top-0 z-20">
          <tr className="text-left">
            <th className="p-3 px-5 w-[50%]">Questions</th>
            <th className="p-3  w-[15%]">Status</th>
            <th className="p-3 w-[10%]">Options</th>
            <th className="p-3 px-10 w-[15%]">Actions</th>
          </tr>
        </thead>
        <tbody className="Table-body overflow-auto">
          {data.map((data) => (
            <QuestionRow
              key={data.id}
              tech={data}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionTable;


// import React, { useState, useEffect } from "react";
// import QuestionRow from "./QuestionRow";

// const QuestionTable = ({ data, onDelete, onEdit }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 700);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="max-h-[70vh] overflow-y-scroll mb-5 shadow-md rounded-lg">
//       <table className="w-full border-collapse table-fixed">
//         <thead className="Table-head sticky top-0 z-20">
//           <tr className="text-left">
//             <th className="p-3 px-5 w-[50%]">Questions</th>
//             <th className="p-3 w-[15%]">Status</th>
//             <th className="p-3 w-[10%]">Options</th>
//             <th className="p-3 px-10 w-[15%]">Actions</th>
//           </tr>
//         </thead>

//         <tbody className="Table-body overflow-auto">
//           {loading ? (
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
//                   <div className="h-4 bg-gray-300 rounded w-2/3"></div>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             data.map((tech) => (
//               <QuestionRow
//                 key={tech.id}
//                 tech={tech}
//                 onDelete={onDelete}
//                 onEdit={onEdit}
//               />
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default QuestionTable;