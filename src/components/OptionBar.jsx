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
        <div className="flex items-center gap-3 p-2 border-gray-500 rounded-lg shadow-sm mb-2">
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
                className="flex-1 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
};

export default OptionBar;
