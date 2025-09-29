import React from 'react';
import UserTable from './UserTable';

const ManageUser = ({ Users, setUsers }) => {
    const handleDelete = (id) => {
        setUsers(Users.filter((user) => user.id !== id));
    };
    return (
        <div className="Manage-Question p-6 bg-[var(--white)] text-[var(--black)] min-h-screen max-lg:px-4 max-lg:py-3">
            <div className="my-5 mx-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-4xl font-semibold max-lg:text-2xl">Manage User</h2>
                </div>
                <p className="text-lg text-[var(--lightGray)] mb-4 max-lg:text-sm">
                    Create and manage questions for your quizzes
                </p>
            </div>

            <UserTable
                data={Users}
            onDelete={handleDelete}
            />
        </div>
    )
}

export default ManageUser