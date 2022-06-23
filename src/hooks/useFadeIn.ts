import { useState, useEffect, useCallback } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

export const useFadeIn = (triggers?: number) => {
  // isShow : 관찰 대상의 가시성 여부
  const [isShow, setIsShow] = useState(false);
  // trigger : triggers만큼의 효과 적용 시점을 의미하는 boolean 배열
  const [trigger, setTrigger] = useState<{ [x: number]: boolean }>();

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        setIsShow(true);
        observer.disconnect();
      }
    },
    []
  );
  const { setTarget } = useIntersectionObserver({ onIntersect });

  useEffect(() => {
    // 마운트 될 때, triggers만큼의 초기값 배열(ex. [false, ...])로 trigger의 초기화
    if (triggers) {
      const initalValue = {
        ...[...Array(triggers)].map((_) => false),
      };
      setTrigger(initalValue);
    }
  }, [triggers]);

  useEffect(() => {
    // 관찰 대상이 화면에 나타났을 때, 100ms의 간격으로 trigger의 요소가 false에서 true로 변환
    if (isShow && trigger) {
      let triggerAnimation: NodeJS.Timeout;
      Object.values(trigger).forEach((bool, index) => {
        let idx = index as 0 | 1 | 2;
        triggerAnimation = setTimeout(() => {
          setTrigger((prev) => ({ ...prev, [idx]: !bool }));
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
