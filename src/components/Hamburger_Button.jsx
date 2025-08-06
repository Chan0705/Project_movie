// import React, { useState } from 'react';

const HamburgerButton = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="bg-red-100">
        <div className="bg-red-100">
          <p>test</p>
          <button
            onClick={onClose}
            className="bg-white rounded-2xl p-1 m-1 absolute right-2 top-2 hover:bg-gray-500"
          >
            X
          </button>
        </div>
      </div>
    )
  );
};

export default HamburgerButton;
