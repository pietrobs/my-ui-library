import { useEffect } from 'react';

function useKeyPressListener(key: string, callback?: () => void) {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback?.call(null);
      }
    };

    document.addEventListener('keyup', listener);
    return () => {
      document.removeEventListener('keyup', listener);
    };
  }, [key, callback]);
}

export default useKeyPressListener;
