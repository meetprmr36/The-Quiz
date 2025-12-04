import react from 'react';
import { IoIosSave, IoMdClose } from "react-icons/io";

const FormButton = ({handleSave, handleReset, editingId }) => {
    return (
        <div className="flex space-x-3">
            <button
                type="submit"
                onClick={handleSave}
                className=" add-button text-white px-4 py-2 rounded-md hover:opacity-90 flex items-center cursor-pointer max-lg:px-2 max-lg:text-sm"
            >
                <span className="px-2">
                    <IoIosSave />
                </span>
                {editingId ? "Update Question" : "Save Question"}
            </button>
            <button
                onClick={handleReset}
                className="text-[var(--black)] px-4 py-2 bg-[var(--gray)] rounded-md hover:opacity-90 cursor-pointer max-lg:px-2 max-lg:text-sm"
            >
                Reset
            </button>
        </div>
    )
}

export default FormButton;