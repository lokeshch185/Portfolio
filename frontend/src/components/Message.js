import React from 'react';

const MessageBox = ({ type = 'info', message, onClose }) => {
  // Define message styles based on type
  const styles = {
    base: 'p-4 mb-4 rounded-lg border-l-4 flex justify-between items-center',
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  };

  // Get the appropriate style for the message type
  const typeStyle = styles[type] || styles.info;

  return (
    <div className={`${styles.base} ${typeStyle}`} role="alert">
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-sm font-semibold underline hover:text-gray-900 focus:outline-none"
      >
        Close
      </button>
    </div>
  );
};

export default MessageBox;
