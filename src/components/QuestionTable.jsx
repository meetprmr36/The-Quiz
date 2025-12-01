import React, { useState, useEffect } from "react";
import QuestionRow from "./QuestionRow";

const QuestionTable = ({ data, onDelete, onEdit, tech }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="max-h-[calc(100vh-190px)] mb-5 overflow-y-auto shadow-md rounded-lg max-lg:max-h-[calc(100vh-150px)]">
        <table className="whole-table w-full border-collapse bg-[var(--white)]">
          <thead className="Table-head sticky top-0 z-20 transition-all duration-400">
            <tr className="text-left">
              <th className="p-3 px-5 bg-[var(--Gray)]">Questions</th>
              <th className="p-3 text-center bg-[var(--Gray)]">Status</th>
              <th className="p-3 text-center bg-[var(--Gray)]">Options</th>
              <th className="p-3 text-center bg-[var(--Gray)]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr key={i} className="border-b animate-pulse">
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                </td>
                <td className="p-4 text-center">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
                </td>
                <td className="p-4 text-center">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-4">
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                    <div className="h-5 w-5 bg-gray-200 rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="max-h-[calc(100vh-190px)] overflow-y-auto mb-5 shadow-md rounded-lg max-sm:overflow-x-scroll">
      <table className="w-full border-collapse table-fixed">
        <thead className="Table-head sticky top-0 z-20">
          <tr className="text-left">
            <th className="p-3 px-5 w-[50%] max-lg:w-[40%] max-md:w-[35%] max-md:text-sm max-sm:w-60">Questions</th>
            <th className="p-3  w-[10%] max-lg:w-[15%] text-center max-md:w-[10%] max-md:text-sm max-sm:w-35">Status</th>
            <th className="p-3 w-[10%] text-center max-lg:w-[15%] max-lg:text-center max-md:w-[10%] max-md:text-sm max-sm:w-25">Options</th>
            <th className="p-3 px-10 w-[10%] max-lg:w-[15%] max-md:w-[10%] max-md:text-sm max-sm:w-35">Actions</th>
          </tr>
        </thead>
        <tbody className="Table-body overflow-auto">
          {data
            .filter((item) => item)
            .map((item) => (
              <QuestionRow
                technologies={tech}
                key={item.id}
                tech={item}
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