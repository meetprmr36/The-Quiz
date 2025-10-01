import React, { useState } from 'react';
import UserTable from './UserTable';

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
                        ? "bg-green-500"
                        : message.type === "error"
                            ? "bg-red-500"
                            : "bg-blue-500"
                        }`}
                >
                    {message.text}
                </div>
            )}

            <div className="my-5 mx-0 transition-all duration-400">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-4xl font-semibold max-lg:text-2xl">Manage User</h2>
                </div>
                <p className="text-lg text-[var(--lightGray)] mb-4 max-lg:text-sm">
                    Create and manage users for your system
                </p>
            </div>

            <UserTable
                data={Users}
            />
        </div>
    );
};

export default ManageUser;
