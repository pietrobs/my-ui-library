export interface DialogProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: React.ReactNode;
}
