import { RefObject, useEffect } from "react";

function useClickAwayListener<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | undefined>,
  callback?: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        callback?.call(null);
      }
    };

    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [callback, ref]);
}

export default useClickAwayListener;
