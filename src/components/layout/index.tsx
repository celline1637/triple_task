import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import * as S from './style'

export const Layout = () => {
  return (
    <>
      <Header />
      <S.Layout>
        <Outlet />
      </S.Layout>
    </>
  )
}
