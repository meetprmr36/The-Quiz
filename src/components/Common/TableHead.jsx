import React from "react";

const TableHead = ({ Name, Status, Number, Action }) => {
    return (
        <thead className="Table-head sticky top-0 z-20 transition-all duration-400">
            <tr className="text-left">
                <th className="p-3 px-5 w-[50%] max-lg:w-[40%] max-md:w-[35%] max-md:text-sm max-sm:w-60 bg-[var(--Gray)]">{Name}</th>
                <th className="p-3 w-[15%] max-lg:w-[15%] text-center max-md:w-[10%] max-md:text-sm max-sm:w-35 bg-[var(--Gray)]">{Status}</th>
                <th className="p-3 w-[15%] text-center max-lg:w-[15%] max-lg:text-center max-md:w-[10%] max-md:text-sm max-sm:w-25 bg-[var(--Gray)]">{Number}</th>
                <th className={"p-3 w-[15%] text-center max-lg:w-[20%] max-lg:text-center max-md:w-[15%] max-md:text-sm max-sm:w-30 bg-[var(--Gray)]"}>{Action}</th>
            </tr>
        </thead>
    );
}
export default TableHead;