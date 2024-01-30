import { useState } from 'react';

export const useFetch = (
  callback: (...args: unknown[]) => void
): [(...args: unknown[]) => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const fetching = async (...args: unknown[]) => {
    try {
      setIsLoading(true);
      callback(...args);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
