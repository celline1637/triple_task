import { Outlet } from 'react-router-dom';
import { Gnb } from '../gnb';
import * as S from './style';

export const Layout = () => {
  return (
    <>
      <Gnb />
      <S.Layout>
        <Outlet />
      </S.Layout>
    </>
  );
};
