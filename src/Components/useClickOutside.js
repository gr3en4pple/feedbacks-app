import { useEffect } from 'react';

export const useClickOutside = (ref, callbackFN) => {
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      callbackFN();
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [ref,callbackFN]);
};
