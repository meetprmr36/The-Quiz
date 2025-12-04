import React, { useState, useEffect } from "react";
import Loading from "./Common/Loading";
import TableHead from "./Common/TableHead";
import TechnologyRow from "./TechnologyRow";

const TechnologyTable = ({ data, onDelete, quest, onEdit }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading Name="Technology" Status="Status" Number="Questions" Action="Actions" />
    );
  }
  return (
    <div className="max-h-[calc(100vh-190px)] mb-5 overflow-y-auto shadow-md rounded-lg max-lg:max-h-[calc(100vh-150px)] ">
      <table className="whole-table w-full border-collapse bg-[var(--white)]">
        <TableHead Name="Technology" Status="Status" Number="Questions" Action="Actions" />
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
