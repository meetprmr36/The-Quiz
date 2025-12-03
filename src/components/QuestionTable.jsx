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
        {/* <thead className="Table-head sticky top-0 z-20">
          <tr className="text-left">
            <th className="p-3 px-5 w-[50%] max-lg:w-[40%] max-md:w-[35%] max-md:text-sm max-sm:w-60">Questions</th>
            <th className="p-3  w-[10%] max-lg:w-[15%] text-center max-md:w-[10%] max-md:text-sm max-sm:w-35">Status</th>
            <th className="p-3 w-[10%] text-center max-lg:w-[15%] max-lg:text-center max-md:w-[10%] max-md:text-sm max-sm:w-25">Options</th>
            <th className="p-3 px-10 w-[10%] max-lg:w-[15%] max-md:w-[10%] max-md:text-sm max-sm:w-35">Actions</th>
          </tr>
        </thead> */}
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