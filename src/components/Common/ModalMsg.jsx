import React from "react";

const ModalMsg = ( message ) => {
    return (
        <div
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-md text-white z-[9999] ${message.message.type === "success"
                ? "bg-green-500/90" : message.message.type === "info" ? "bg-blue-500/90" : "bg-red-400/90"}`}
        >
            {message.message.text}
        </div>
    )
}

export default ModalMsg;