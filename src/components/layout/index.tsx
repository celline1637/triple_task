import { Footer } from '../footer';
import { Gnb } from '../gnb';
import * as S from './style';

interface propsType {
  children?: React.ReactNode;
}

export const Layout = ({ children }: propsType) => {
  return (
    <>
      <Gnb />
      <S.Layout>{children}</S.Layout>
      <Footer></Footer>
    </>
  );
};
