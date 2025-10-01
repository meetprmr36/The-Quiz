import React from "react";
import TechnologyRow from "./TechnologyRow";

const TechnologyTable = ({ data, onDelete, quest, onEdit }) => {
  return (
    <div className="max-h-[calc(100vh-190px)] mb-5 overflow-y-auto shadow-md rounded-lg max-lg:max-h-[calc(100vh-150px)] ">
      <table className="whole-table w-full border-collapse bg-[var(--white)]">
        <thead className="Table-head sticky top-0 z-20 transition-all duration-400">
          <tr className="text-left">
            <th
            className="p-3 w-[35%] px-5 bg-[var(--Gray)] max-lg:w-[30%] max-sm:text-xs max-sm:w-[40%]">Technology</th>
            <th
            className="p-3 w-[15%] bg-[var(--Gray)] max-lg:w-[20%] max-sm:text-xs max-sm:w-[35%]">Created Date</th>
            <th
            className="p-3 w-[15%] bg-[var(--Gray)] max-lg:w-[20%] max-sm:text-xs max-sm:w-[30%]">Status</th>
            <th
            className="p-3 w-[10%] bg-[var(--Gray)] max-lg:w-[15%] max-sm:text-xs max-sm:w-[15%]">Questions</th>
            <th
            className="p-3 w-[15%] px-10 bg-[var(--Gray)] max-lg:w-[15%] max-lg:px-5 max-sm:text-xs max-sm:w-[20%]">Actions</th>
          </tr>
        </thead>
        <tbody className="Table-body overflow-auto">
          {data?.map((tech) => (
            <TechnologyRow 
            key={tech?.id}
            tech={tech} 
            onDelete={onDelete} 
            questions={quest} 
            onEdit={onEdit} />
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default TechnologyTable;
