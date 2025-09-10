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
        <div className="flex items-center gap-3 p-2 rounded-xl shadow-lg mb-2 hover:border-indigo-400 transition">
            <input
                type="checkbox"
                checked={isCorrect}
                onChange={handleCheckboxChange}
                className="w-5 h-5 accent-indigo-500 cursor-pointer"
            />
            <input
                type="text"
                value={text}
                onChange={handleTextChange}
                placeholder="Enter Option"
                className="flex-1 border-1 border-gray-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-[var(--white)]"
            />
        </div>
    );
};

export default OptionBar;
