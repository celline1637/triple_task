import { useState, useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

interface propType {
  duration?: number;
  easing?: 'linear' | 'easeIn' | 'easeOut' | 'easeOutQuart';
}

const EASING = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  default: (t: number) => 1 - Math.exp(-t * 7),
};

export const useCountUp = (
  numbers: number[],
  { duration, easing }: propType
) => {
  const [count, setCount] = useState<number[]>([]);
  const _duration = duration ?? 2000;
  const _easing = easing ?? 'default';
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(_duration / frameDuration);

  const countUp = (num: number, index: number) => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = EASING[_easing](frame / totalFrames);
      const currentCount = Math.ceil(num * progress);
      setCount((prev) => {
        const result = [...prev];
        result.splice(index, 1, currentCount);
        return result;
      });
      if (frame === totalFrames) {
        clearInterval(counter);
        return;
      }
    }, frameDuration);
  };

  const onIntersect: IntersectionObserverCallback = ([entry], observer) => {
    if (entry.isIntersecting) {
      numbers.forEach((num, i) => countUp(num, i));
      observer.disconnect();
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  useEffect(() => {
    const initalValue = [...Array(numbers.length)].map((_) => 0);
    setCount(initalValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    numbers: count,
    ref: setTarget,
  };
};
