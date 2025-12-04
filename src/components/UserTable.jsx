import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';

const UserTable = ({ data }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="max-h-[calc(100vh-190px)] mb-5 overflow-y-auto shadow-md rounded-lg max-lg:max-h-[calc(100vh-150px)]">
                <table className="whole-table w-full border-collapse bg-[var(--white)]">
                    <thead className="Table-head sticky top-0 z-20 transition-all duration-400">
                        <tr className="">
                            <th className="p-3 text-left px-5 w-[35%] bg-[var(--Gray)]">Users</th>
                            <th className="p-3 text-left w-[25%] bg-[var(--Gray)]">Email</th>
                            <th className="p-3 text-left w-[10%] bg-[var(--Gray)]">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <tr key={i} className="border-b animate-pulse">
                                <td className="p-4 text-left">
                                    <div className="h-4 bg-gray-200 rounded w-2/4 mb-2"></div>
                                </td>
                                <td className="p-4 text-left">
                                    <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                                </td>
                                <td className="p-4 text-left">
                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    
    return (
        <div className="max-h-[calc(100vh-190px)] overflow-y-scroll mb-5 shadow-md rounded-lg">
            <table className="w-full border-collapse table-fixed">
                <thead className="Table-head sticky top-0 z-20">
                    <tr className="text-left">
                        <th className="p-3 px-5 w-[35%] max-lg:w-[30%] max-md:w-[40%] max-sm:w-45 max-sm:text-xs">Users</th>
                        <th className="p-3 w-[25%] max-lg:w-[30%] max-md:w-[50%] max-sm:w-60 max-sm:text-xs">Email</th>
                        <th className="p-3 w-[10%] max-lg:w-[15%] max-md:w-[15%] max-sm:w-30 max-sm:text-xs">Score</th>
                    </tr>
                </thead>
                <tbody className="Table-body overflow-auto">
                    {data.map((Users) => (
                        <UserRow
                            key={Users.id}
                            user={Users}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable