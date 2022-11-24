export interface DialogProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: React.ReactNode;
}

export interface DialogHeaderProps {
  title?: string;
  onClose: () => void;
}
