import React from "react";

const Loading = ({ Name, Status, Number, Action }) => {
    return (
        <div className="max-h-[calc(100vh-190px)] mb-5 overflow-y-auto shadow-md rounded-lg max-lg:max-h-[calc(100vh-150px)]">
            <table className="whole-table w-full border-collapse bg-[var(--white)]">
                <thead className="Table-head sticky top-0 z-20 transition-all duration-400">
                    <tr className="text-left">
                        <th className="p-3 W-[70%] px-5 bg-[var(--Gray)]">{Name}</th>
                        <th className="p-3 W-[10%] text-center bg-[var(--Gray)]">{Status}</th>
                        <th className="p-3 W-[10%] text-center bg-[var(--Gray)]">{Number}</th>
                        <th className="p-3 W-[10%] text-center bg-[var(--Gray)]">{Action}</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <tr key={i} className="border-b animate-pulse">
                            <td className="p-3 w-[50%]">
                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                            </td>
                            <td className="p-3 w-[15%] text-center">
                                <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto"></div>
                            </td>
                            <td className="p-3 w-[15%] text-center">
                                <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto"></div>
                            </td>
                            <td className="p-3 w-[15%] text-center">
                                <div className="flex justify-center gap-4">
                                    <div className="h-6 w-6 bg-gray-200 rounded"></div>
                                    <div className="h-6 w-6 bg-gray-200 rounded"></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Loading;