import React from "react";
import QuestionRow from "./QuestionRow";

const QuestionTable = ({ data, onDelete, onEdit }) => {
  return (
    <div className="max-h-[80vh] mb-5 overflow-auto shadow-md rounded-lg">
      <table className="w-full border-collapse">
        <thead className="Table-head">
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