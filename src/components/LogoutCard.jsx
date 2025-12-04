import React from "react";

const LogoutCard = ({ onCancel, onLogout }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
            <div className="glass-card bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 animate-scaleIn border border-gray-200 dark:border-gray-700">
                <div className="flex justify-center pt-6 pb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>
                </div>
                <div className="px-6 pb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Confirm Logout
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Are you sure you want to logout from your admin session?
                    </p>
                </div>

                <div className="px-6 pb-6 flex gap-3">
                    <button
                        onClick={onCancel}
                        className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 shadow-md hover:shadow-lg active:scale-95 hover:-translate-y-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>Cancel</span>
                    </button>

                    <button
                        onClick={onLogout}
                        className="glass-shine flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-br from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white border border-red-600 hover:border-red-700 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 active:scale-95 hover:-translate-y-0.5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LogoutCard;