const ModalMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed inset-0 bg-opacity-80 flex items-center justify-center z-999" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="bg-[var(--darkblue)] p-6 rounded-lg shadow-lg max-w-sm">
        <h3 className="text-lg bg-[var(--bitblue)] font-semibold mb-3 text-[var(--white)]">{message}</h3>
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
