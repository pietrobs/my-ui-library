import React from 'react';
import { DialogHeaderProps } from './Dialog.types';

const DialogHeader: React.FC<DialogHeaderProps> = ({ onClose, title }) => {
  return (
    <div className="dialog-header">
      <h1>{title}</h1>
      <button
        onClick={() => {
          onClose();
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 1L8 8L15 15" stroke="black" strokeWidth="1.2" />
          <path d="M1 1L8 8L0.999999 15" stroke="black" strokeWidth="1.2" />
        </svg>
      </button>
    </div>
  );
};

export default DialogHeader;
