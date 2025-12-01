import React from 'react';
import UserRow from './UserRow';

const UserTable = ({ data,onDelete }) => {
    return (
        <div className="max-h-[70vh] overflow-y-scroll mb-5 shadow-md rounded-lg">
            <table className="w-full border-collapse table-fixed">
                <thead className="Table-head sticky top-0 z-20">
                    <tr className="text-left">
                        <th className="p-3 px-5 w-[20%]">Users</th>
                        <th className="p-3 w-[20%]">email</th>
                        <th className="p-3 w-[20%]">Status</th>
                        <th className="p-3 px-10 w-[25%]">Actions</th>
                    </tr>
                </thead>
                <tbody className="Table-body overflow-auto">
                    {data.map((Users) => (
                        <UserRow
                            key={Users.id}
                            user={Users}
                            onDelete={onDelete}
                            // onEdit={onEdit}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable