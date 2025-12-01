import React from "react";
import QuestionRow from "./QuestionRow";

const QuestionTable = ({ data, onDelete, onEdit }) => {
  return (
    <div className="max-h-[70vh] overflow-y-scroll mb-5 shadow-md rounded-lg">
      <table className="w-full border-collapse table-fixed">
        <thead className="Table-head sticky top-0 z-20">
          <tr className="text-left">
            <th className="p-3 px-5">Technologies</th>
            <th className="p-3">Status</th>
            <th className="p-3">Options</th>
            <th className="p-3 px-10">Actions</th>
          </tr>
        </thead>
        <tbody className="Table-body overflow-auto">
          {data.map((tech) => (
            <QuestionRow
              key={tech.id}
              tech={tech}
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