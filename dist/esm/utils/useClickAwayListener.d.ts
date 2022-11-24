import { type RefObject } from 'react';
declare function useClickAwayListener<T extends HTMLElement = HTMLElement>(ref: RefObject<T | undefined>, callback?: () => void): void;
export default useClickAwayListener;
