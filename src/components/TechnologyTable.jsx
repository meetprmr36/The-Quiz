import React from "react";
import TechnologyRow from "./TechnologyRow";

const TechnologyTable = ({ data, onDelete }) => {
  return (
    <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3">Technology</th>
          <th className="p-3">Status</th>
          <th className="p-3">Created Date</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tech) => (
          <TechnologyRow key={tech.id} tech={tech} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default TechnologyTable;
