import React from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { DialogWrapper } from "./Dialog.styles";
import { DialogProps } from "./Dialog.types";
import DialogHeader from "./DialogHeader";
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
          <DialogHeader title={title} onClose={onClose} />
          <div className="dialog-content">{children}</div>
        </div>
      </div>
    </DialogWrapper>,
    document.body
  );
};

export default Dialog;
