/// <reference types="react" />
import React$1, { RefObject } from 'react';

type DialogProps = {
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    closeOnOverlayClick: boolean;
    children?: React.ReactNode;
};

declare const Dialog: React$1.FC<DialogProps>;

declare function useClickAwayListener<T extends HTMLElement = HTMLElement>(ref: RefObject<T | undefined>, callback?: () => void): void;

declare function useKeyPressListener(key: string, callback?: () => void): void;

export { Dialog, useClickAwayListener, useKeyPressListener };
