import { useEffect, useRef, useState } from 'react'
import { Gnb } from '../gnb'
import * as S from './style'

export const Header = () => {
  const [isShow, setIsShow] = useState(false)
  const baseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!baseRef.current) return
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      entry.isIntersecting ? setIsShow(false) : setIsShow(true)
    })
    observer.observe(baseRef.current)
  }, [setIsShow])

  return (
    <>
      <S.Header isShow={isShow}>
        <Gnb />
      </S.Header>
      <S.BaseHeader ref={baseRef}>
        <Gnb />
      </S.BaseHeader>
    </>
  )
}
