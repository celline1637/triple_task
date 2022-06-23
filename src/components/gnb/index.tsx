import * as S from './style'

const LINKS = [{ text: '내 예약', link: '/' }]

export const Gnb = () => {
  return (
    <>
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
    </>
  )
}
