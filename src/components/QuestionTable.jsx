import React, { useState, useEffect } from "react";
import QuestionRow from "./QuestionRow";
import TableHead from "./Common/TableHead";
import Loading from "./Common/Loading";

const QuestionTable = ({ data, onDelete, onEdit, tech }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading Name="Questions" Status="Status" Number="Options" Action="Actions" />
    );
  }
  return (
    <div className="max-h-[calc(100vh-190px)] overflow-y-auto mb-5 shadow-md rounded-lg max-sm:overflow-x-scroll">
      <table className="w-full border-collapse table-fixed">
        <TableHead Name="Questions" Status="Status" Number="Options" Action="Actions" />
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