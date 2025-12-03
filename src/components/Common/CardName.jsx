import React from "react";

const CardName = (props) => {
    return (
        <div className="flex-1">
            <h2 className="text-sm font-medium text-[var(--black)] mb-1">{props.name}</h2>
            <p className="text-4xl my-2 font-semibold text-[var(--black)]">{props.length || 0}</p>
            <p className="text-xs my-2 text-gray-400">{props.subtitle}</p>
        </div>
    )
}

export default CardName;