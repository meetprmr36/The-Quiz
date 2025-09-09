import React from "react";
import QuestionRow from "./QuestionRow";

const QuestionTable = ({ data, onDelete, onEdit }) => {
  return (
    <table className="whole-table w-full border-collapse shadow-md rounded-lg overflow-hidden">
      <thead className="Table-head">
        <tr className="text-left p-10">
          <th className="p-3 px-5">Technologies</th>
          <th className="p-3">Status</th>
          <th className="p-3">Options</th>
          <th className="p-3 px-10">Actions</th>
        </tr>
      </thead>
      <tbody className="Table-body">
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
  );
};

export default QuestionTable;