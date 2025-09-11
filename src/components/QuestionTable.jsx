import React from "react";
import QuestionRow from "./QuestionRow";

const QuestionTable = ({ data, onDelete, onEdit }) => {
  return (
    <div className="max-h-[75vh] overflow-y-scroll mb-5 shadow-md rounded-lg">
      <table className="w-full border-collapse table-fixed">
        <thead className="Table-head">
          <tr className="text-left">
            <th className="p-3 px-5 w-[50%]">Questions</th>
            <th className="p-3 w-[12%]">Status</th>
            <th className="p-3 w-[12%]">Options</th>
            <th className="p-3 px-10 w-[25%]">Actions</th>
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