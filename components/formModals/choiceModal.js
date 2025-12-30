import React from 'react';

const CourseBookingChoiceModal = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Select Your Registration Type</h2>
        <div className="space-y-4">
          <button
            onClick={() => onSelect('personal')}
            className="w-full py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 transition-all duration-300"
          >
            Personal Registration
          </button>
          <button
            onClick={() => onSelect('institute')}
            className="w-full py-4 bg-green-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:bg-green-700 transition-all duration-300"
          >
            Institute Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseBookingChoiceModal;
