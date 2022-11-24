import React from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { DialogWrapper } from "./Dialog.styles";
import { DialogProps } from "./Dialog.types";
const Dialog: React.FC<DialogProps> = ({
  children,
  isOpen,
  onClose,
  closeOnOverlayClick,
  title,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <DialogWrapper>
      <div className="dialog-overlay">
        <div className="dialog">
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
                <path
                  d="M1 1L8 8L0.999999 15"
                  stroke="black"
                  strokeWidth="1.2"
                />
              </svg>
            </button>
          </div>
          <div className="dialog-content">{children}</div>
        </div>
      </div>
    </DialogWrapper>,
    document.body
  );
};

export default Dialog;
