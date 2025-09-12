import React from 'react';
import StatusBadge from './StatusBadge';
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

const UserRow = ({ user, onDelete }) => {
    return (
        <tr className="Border-bottom hover:bg-[var(--Hovergray)]">
            <td className="p-3 px-5 break-words">{user.name}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">
                {user.date}
            </td>
            <td className="p-3">
                <button
                    // onClick={() => onEdit?.(user)}
                    className="Button-style text-blue-600 hover:underline"
                >
                    <FaEdit />
                    <span className="TooltipText">Edit</span>
                </button>
                <button
                    onClick={() => onDelete?.(user.id)}
                    className="Button-style Red-border text-red-600 hover:underline"
                >
                    <FaTrash />
                    <span className="TooltipText">Delete</span>
                </button>
            </td>
        </tr>
    );
};

export default UserRow