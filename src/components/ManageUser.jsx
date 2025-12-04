import React, { useState } from 'react';
import UserTable from './UserTable';
import SectionHeader from './Common/SectionHeader';

const ManageUser = ({ Users, setUsers }) => {
    // const [message, setMessage] = useState(null);

    return (
        <div className="px-6 py-3 bg-[var(--white)] text-[var(--black)] max-lg:px-4 max-lg:py-2 min-h-screen relative">
            {/* {message && (
                <ModalMsg message={message} />
            )} */}
            <SectionHeader
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
