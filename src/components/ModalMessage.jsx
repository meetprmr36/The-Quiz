const ModalMessage = ({ message, onClose }) => {
  if (!message) return null; // Don't render if no message

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 dark:bg-opacity-60 flex items-center justify-center z-999">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
        <h3 className="text-lg font-semibold mb-3">{message}</h3>
        <button
          onClick={onClose}
          className="text-white px-4 py-2 rounded-md bg-[var(--bitlightblue)]" >
          Okay
        </button>
      </div>
    </div>
  );
};

export default ModalMessage;
