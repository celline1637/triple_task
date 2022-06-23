import { useState, useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

export const useFadeIn = (triggers?: number) => {
  const [isShow, setIsShow] = useState(false);
  const [trigger, setTrigger] = useState<{ [x: number]: boolean }>();

  const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
    if (entry.isIntersecting) {
      setIsShow(true);
      observer.disconnect();
    }
  };
  const { setTarget } = useIntersectionObserver({ onIntersect });

  useEffect(() => {
    if (triggers) {
      const initalValue = {
        ...[...Array(triggers)].map((_) => false),
      };
      setTrigger(initalValue);
    }
  }, [triggers]);

  useEffect(() => {
    if (isShow && trigger) {
      let triggerAnimation: NodeJS.Timeout;
      Object.values(trigger).forEach((bool, index) => {
        let idx = index as 0 | 1 | 2;
        triggerAnimation = setTimeout(() => {
          setTrigger((prev) => {
            return { ...prev, [idx]: !bool };
          });
        }, index * 100);
      });
      return () => clearTimeout(triggerAnimation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  return {
    ref: setTarget,
    triggers: triggers ? Object.values(trigger ?? {}) : isShow,
  };
};
