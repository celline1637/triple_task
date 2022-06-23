import * as S from './style'

interface propsType {
  children?: React.ReactNode
}

export const Section = ({ children }: propsType) => {
  return <S.Section>{children}</S.Section>
}
