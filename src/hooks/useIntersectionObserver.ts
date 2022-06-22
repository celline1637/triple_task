import { useEffect, useState } from 'react';

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
  root,
  rootMargin,
  threshold,
  onIntersect,
}: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>();

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    //observer 관찰 시작
    observer.observe(target);

    //observer 관찰 종료
    return () => observer.unobserve(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return { setTarget };
};

export default useIntersectionObserver;
