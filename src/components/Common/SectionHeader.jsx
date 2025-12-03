import React from "react";
import AddButton from "./AddButton";

const SectionHeader = ({ title, subtitle, onAdd,Name }) => {
  return (
    <div className="my-5 mx-0">
      <div className="flex justify-between items-center mb-4 max-lg:mb-0 transition-all duration-400">
        <h2 className="text-4xl font-semibold max-lg:text-2xl max-md:text-xl">
          {title}
        </h2>
      </div>

      <div className="flex justify-between mb-4 items-baseline max-lg:mb-2">
        <p className="text-lg text-[var(--lightGray)] items-center max-lg:text-sm transition-all duration-400">
          {subtitle}
        </p>

        <AddButton onAdd={onAdd} Name={Name} />
      </div>
    </div>
  );
};

export default SectionHeader;
