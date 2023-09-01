import React from 'react';

export function useIsInViewport(
  ref: React.MutableRefObject<any>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const observer = React.useMemo(
    () => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), options),
    []
  );

  React.useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
