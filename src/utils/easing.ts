export const easing = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t,
  easeOut: (t: number) => t * (2 - t),
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  default: (t: number) => 1 - Math.exp(-t * 7),
};
