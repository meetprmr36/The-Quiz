import React from "react";
import { MdEmail } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";

const AdminCard = ({ onCancel, onChange }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
            <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-scaleIn border border-gray-200 dark:border-gray-700">
                <div className="px-4 py-6 text-center border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Account Details
                    </h3>
                </div>
                <div className="mx-4 my-6 space-y-3">
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center">
                        <MdEmail className="text-blue-600 dark:text-blue-400 mr-3 text-xl flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Email</p>
                            <p className="text-gray-900 dark:text-white font-medium">Example@gmail.com</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center">
                        <FaUser className="text-green-600 dark:text-green-400 mr-3 text-xl flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Username</p>
                            <p className="text-gray-900 dark:text-white font-medium">Example</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center">
                        <RiLockPasswordLine className="text-purple-600 dark:text-purple-400 mr-3 text-xl flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Password</p>
                            <p className="text-gray-900 dark:text-white font-medium">••••••••••••••••</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center">
                        <MdOutlineWorkOutline className="text-orange-600 dark:text-orange-400 mr-3 text-xl flex-shrink-0" />
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">Designation</p>
                            <p className="text-gray-900 dark:text-white font-medium">ExampleDesignation</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 align-center flex gap-3">
                    <button
                        onClick={onCancel}
                        className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-200 border border-gray-700 hover:border-gray-800 shadow-md hover:shadow-lg shadow-gray-700/30 hover:shadow-gray-500/50 active:scale-95 hover:-translate-y-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Cancel</span>
                    </button>

                    <button
                        onClick={onChange}
                        className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white hover:border-purple-500 shadow-md hover:shadow-lg shadow-purple-600/30 shadow-md hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 hover:-translate-y-0.5">
                        <FaExchangeAlt className="w-4 h-4" />
                        <span>Change</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminCard;