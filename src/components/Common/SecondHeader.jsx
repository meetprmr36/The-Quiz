import React from "react";
import AddButton from "./AddButton";

const SectionHeader = ({ title, subtitle}) => {
    return (
        <div className="my-5 mx-0 transition-all duration-400">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-4xl font-semibold max-lg:text-2xl">{title}</h2>
            </div>
            <p className="text-lg text-[var(--lightGray)] mb-4 max-lg:text-sm">
                {subtitle}
            </p>
        </div>
    );
};

export default SectionHeader;
