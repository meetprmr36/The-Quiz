import React from 'react';
import StatusBadge from './StatusBadge';
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const UserRow = ({ user }) => {
    return (
        <tr className="Border-bottom hover:bg-[var(--Hovergray)] transition-all duration-400">
            <td className="p-3 px-5 break-words max-sm:text-xs">{user.name}</td>
            <td className="p-3 max-sm:text-xs">{user.email}</td>
            <td className="p-3 max-sm:text-xs">
                {`${user.score}/15`}
            </td>
        </tr>
    );
};

export default UserRow