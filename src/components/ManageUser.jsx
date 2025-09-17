import React from 'react';
import UserTable from './UserTable';

const ManageUser = ({ Users, setUsers }) => {
    const handleDelete = (id) => {
        setUsers(Users.filter((user) => user.id !== id));
    };
    return (
        <div className="Manage-Question p-6 bg-[var(--white)] text-[var(--black)] min-h-screen">
            <div className="my-5 mx-0">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-4xl font-semibold">Manage User</h2>
                    {/* <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-[var(--accent)] text-[var(--white)] px-4 py-2 rounded hover:opacity-90"
                    >
                        + Add Question
                    </button> */}
                </div>
                <p className="text-lg text-[var(--lightGray)] mb-4">
                    Create and manage questions for your quizzes
                </p>
            </div>

            <UserTable
                data={Users}
            onDelete={handleDelete}
            // onEdit={handleEdit}
            />
        </div>
    )
}

export default ManageUser