import React, { useState } from 'react';
import UserTable from './UserTable';
import SecondHeader from './Common/SecondHeader';

const ManageUser = ({ Users, setUsers }) => {
    const [message, setMessage] = useState(null);

    const showMessage = (text, type = "info") => {
        setTimeout(() => {
            setMessage({ text, type });
            setShow(true);
            setTimeout(() => setShow(false), 3000);
        }, 300);
    };

    return (
        <div className="px-6 py-3 bg-[var(--white)] text-[var(--black)] max-lg:px-4 max-lg:py-2 min-h-screen relative">
            {message && (
                <div
                    className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md text-white z-50 ${message.type === "success"
                        ? "bg-green-500/70": "bg-red-400/70"}`}
                // className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md text-white z-50 ${message.type === "success"
                //     ? "bg-green-500"
                //     : message.type === "error"
                //         ? "bg-red-500"
                //         : "bg-blue-500"
                //     }`}
                >
                    {message.text}
                </div>
            )}
            <SecondHeader
                title="Manage User"
                subtitle="Create and manage users for your system"
            />
            <UserTable
                data={Users}
            />
        </div>
    );
};

export default ManageUser;
