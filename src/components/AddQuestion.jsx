import '../App.css';
import React from "react";
import { FaPlus } from "react-icons/fa";

const AddQuestion =({ onAdd })=> {
  return (
    <button
      onClick={onAdd}
      className="Button-style Blue-text bg-blue-600 text-white px-2 py-2 rounded-md hover:bg-blue-700 flex items-center">
      <span className='px-1'><FaPlus /></span> Add Question
    </button>
  );
};

export default AddQuestion 