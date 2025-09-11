import React from "react";
import TechnologyRow from "./TechnologyRow";

const TechnologyTable = ({ data, onDelete, onEdit }) => {
  return (
    <div className="max-h-[70vh] mb-5 overflow-y-auto shadow-md rounded-lg">
      <table className="whole-table w-full border-collapse shadow-md rounded-lg overflow-hidden bg-[var(--white)] text-[var(--black)]">
        <thead className="Table-head bg-[var(--gray)]">
          <tr className="text-left p-10">
            <th className="p-3 px-5">Technology</th>
            <th className="p-3">Status</th>
            <th className="p-3">Created Date</th>
            <th className="p-3 px-10">Actions</th>
          </tr>
        </thead>
        <tbody className="Table-body bg-[var(--white)]">
        {data?.map((tech) => (
          <TechnologyRow key={tech.id} tech={tech} onDelete={onDelete} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechnologyTable;  