export type DialogProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick: boolean;
  children?: React.ReactNode;
};

export type DialogHeaderProps = {
  title?: string;
  onClose: () => void;
};
