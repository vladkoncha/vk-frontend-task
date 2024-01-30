import { RefObject, useEffect, useRef } from 'react';

export const useObserver = (
  ref: RefObject<HTMLElement>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void
) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    let cb = (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    ref.current && observer.current.observe(ref.current);
  }, [callback, canLoad, isLoading, ref]);
};
