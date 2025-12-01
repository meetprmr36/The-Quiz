import '../App.css';
import React from "react";
import { FaPlus } from "react-icons/fa";

const AddButton =({ onAdd })=> {
  return (
    <button
      onClick={onAdd}
      className="Button-Technology bg-[var(--bitlightblue)] text-white px-2 py-2 rounded-md flex items-center">
      <span className='px-1'><FaPlus /></span> Add Technology
    </button>
  );
};

export default AddButton;
