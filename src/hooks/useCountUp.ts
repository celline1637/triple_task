import { useState, useEffect, useCallback } from 'react'
import { easing } from '../utils/easing'
import useIntersectionObserver from './useIntersectionObserver'

interface propType {
  duration?: number
  easingType?: 'linear' | 'easeIn' | 'easeOut' | 'easeOutQuart'
}

export const useCountUp = (
  numbers: number[],
  { duration, easingType }: propType,
) => {
  const [count, setCount] = useState<number[]>([])
  const _duration = duration ?? 2000
  const _easingType = easingType ?? 'default'
  const frameDuration = 1000 / 60
  const totalFrames = Math.round(_duration / frameDuration)

  const countUp = useCallback(
    (num: number, index: number) => {
      let frame = 0
      const counter = setInterval(() => {
        frame++
        const progress = easing[_easingType](frame / totalFrames)
        const currentCount = Math.ceil(num * progress)
        setCount((prev) => {
          const result = [...prev]
          result.splice(index, 1, currentCount)
          return result
        })
        if (frame === totalFrames) {
          clearInterval(counter)
          return
        }
      }, frameDuration)
    },
    [_easingType, frameDuration, totalFrames],
  )

  const onIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        numbers.forEach((num, i) => countUp(num, i))
        observer.disconnect()
      }
    },
    [countUp, numbers],
  )

  const { setTarget } = useIntersectionObserver({ onIntersect })

  useEffect(() => {
    const initalValue = [...Array(numbers.length)].map((_) => 0)
    setCount(initalValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    numbers: count,
    ref: setTarget,
  }
}
