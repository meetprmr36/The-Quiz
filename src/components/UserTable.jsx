import React from 'react';
import UserRow from './UserRow';

const UserTable = ({ data,onDelete }) => {
    return (
        <div className="max-h-[70vh] overflow-y-scroll mb-5 shadow-md rounded-lg">
            <table className="w-full border-collapse table-fixed">
                <thead className="Table-head sticky top-0 z-20">
                    <tr className="text-left">
                        <th className="p-3 px-5 w-[40%] max-lg:w-[30%] max-md:w-[40%] max-sm:w-45 max-sm:text-xs">Users</th>
                        <th className="p-3 w-[25%] max-lg:w-[30%] max-md:w-[50%] max-sm:w-60 max-sm:text-xs">email</th>
                        <th className="p-3 w-[20%] max-lg:w-[15%] max-md:w-[15%] max-sm:w-30 max-sm:text-xs">Status</th>
                        <th className="p-3 px-10 w-[20%] max-lg:w-[15%] max-md:w-[40%] max-lg:text-center max-lg:px-5 max-sm:w-30 max-sm:text-xs">Actions</th>
                    </tr>
                </thead>
                <tbody className="Table-body overflow-auto">
                    {data.map((Users) => (
                        <UserRow
                            key={Users.id}
                            user={Users}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable