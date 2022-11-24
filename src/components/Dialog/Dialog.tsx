import React from 'react';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import useClickAwayListener from '../../utils/useClickAwayListener';
import useKeyPressListener from '../../utils/useKeyPressListener';
import { DialogWrapper } from './Dialog.styles';
import { DialogProps } from './Dialog.types';
import DialogHeader from './DialogHeader';

const Dialog: React.FC<DialogProps> = ({
  children,
  isOpen,
  onClose,
  closeOnOverlayClick,
  title,
}) => {
  const listenerClickAwayRef = useRef<HTMLDivElement>(null);

  useClickAwayListener(
    listenerClickAwayRef,
    closeOnOverlayClick ? onClose : undefined,
  );

  useKeyPressListener('Escape', isOpen ? onClose : undefined);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <DialogWrapper>
      <div className="dialog-overlay" data-testid="dialog-overlay">
        <div className="dialog" ref={listenerClickAwayRef}>
          <DialogHeader title={title} onClose={onClose} />
          <div className="dialog-content">{children}</div>
        </div>
      </div>
    </DialogWrapper>,
    document.body,
  );
};

export default Dialog;
