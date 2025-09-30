import '../App.css';
import React from "react";
import { FaPlus } from "react-icons/fa";

const AddQuestion =({ onAdd })=> {
  return (
    <button
      onClick={onAdd}
      className="Button-style Blue-text bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700 flex items-center max-lg:px-2 max-lg:py-1 max-lg:text-sm max-sm:px-1 max-sm:py-1 max-sm:text-xs">
      <span className='px-1'><FaPlus /></span> Add Question
    </button>
  );
};

export default AddQuestion 