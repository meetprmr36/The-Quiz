import React from "react";
import TechnologyRow from "./TechnologyRow";

const TechnologyTable = ({ data, onDelete, onEdit }) => {
  return (
    <div className="max-h-[70vh] mb-5 overflow-y-auto shadow-md rounded-lg">
      <table className="whole-table w-full border-collapse bg-[var(--white)]">
        <thead className="Table-head sticky top-0 z-20">
          <tr className="text-left">
            <th className="p-3 px-5 bg-[var(--Gray)]">Technology</th>
            <th className="p-3 bg-[var(--Gray)]">Status</th>
            <th className="p-3 bg-[var(--Gray)]">Created Date</th>
            <th className="p-3 px-10 bg-[var(--Gray)]">Actions</th>
          </tr>
        </thead>
        <tbody className="Table-body">
          {data?.map((tech) => (
            <TechnologyRow key={tech.id} tech={tech} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default TechnologyTable;  