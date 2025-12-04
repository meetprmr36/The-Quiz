import React from 'react';
import { useState } from "react";

const OptionBar = ({ option, onChange }) => {
    const [text, setText] = useState(option.text || "");
    const [isCorrect, setIsCorrect] = useState(option.isCorrect || false);

    const handleTextChange = (e) => {
        const value = e.target.value;
        setText(value);
        onChange({ ...option, text: value, isCorrect });
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.checked;
        setIsCorrect(value);
        onChange({ ...option, text: text, isCorrect: value });
    };

    return (
        <div className="flex items-center gap-3 p-2 rounded-xl mb-2 transition">
            <input
                type="checkbox"
                checked={option.isCorrect}
                onChange={handleCheckboxChange}
                className="w-5 h-5 accent-indigo-500 cursor-pointer max-lg:w-4 max-lg:h-4"
            />
            <input
                type="text"
                value={option.text}
                onChange={handleTextChange}
                placeholder="Enter Option"
                className="flex-1 border-gray-400 p-2 rounded-md shadow-lg border-1 border-solid  focus:outline-none focus:ring-2 focus:ring-blue-400 text-[var(--black)] max-lg:text-sm"
            />
        </div>
    );
};

export default OptionBar;
