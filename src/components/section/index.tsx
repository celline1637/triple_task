import * as S from './style';

interface propsType {
  children?: React.ReactNode;
  title: string;
}

export const Section = ({ children, title }: propsType) => {
  return (
    <S.Section>
      <h2 aria-label={`해당 영역은 ${title} 내용입니다.`}>{title}</h2>Section
      {children}
    </S.Section>
  );
};
