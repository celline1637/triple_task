import { useEffect, useRef, useState } from 'react';
import * as S from './style';

const LINKS = [{ text: '내 예약', link: '/' }];

export const Gnb = () => {
  const [isShow, setIsShow] = useState(false);
  const baseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!baseRef.current) return;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      entry.isIntersecting ? setIsShow(false) : setIsShow(true);
    });
    observer.observe(baseRef.current);
  }, [setIsShow]);

  return (
    <>
      <S.Gnb isShow={isShow}>
        <S.Logo>TRIPLE</S.Logo>
        <S.Nav>
          <S.Menu>
            {LINKS.map((el) => (
              <S.Link key={el.link}>
                <a href={el.link}>{el.text}</a>
              </S.Link>
            ))}
          </S.Menu>
        </S.Nav>
      </S.Gnb>
      <S.Base ref={baseRef}>
        <S.Logo>TRIPLE</S.Logo>
        <S.Nav>
          <S.Menu>
            {LINKS.map((el) => (
              <S.Link key={el.link}>
                <a href={el.link}>{el.text}</a>
              </S.Link>
            ))}
          </S.Menu>
        </S.Nav>
      </S.Base>
    </>
  );
};
