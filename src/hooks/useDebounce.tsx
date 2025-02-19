import { useState, useEffect } from 'react';

type UseDebounceCallback<T> = {
  (value: T): void;
};

export const useDebounce = <T,>(callback: UseDebounceCallback<T>, delay: number) => {
  const [value, setValue] = useState<T | null>(null);

  useEffect(() => {
    if (value === null) return;

    const handler = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, callback]);

  return setValue;
};
