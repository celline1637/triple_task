import * as S from './style';

interface propsType {
  children?: React.ReactNode;
  title?: string;
}

export const Section = ({ children, title }: propsType) => {
  return <S.Section>{children}</S.Section>;
};
