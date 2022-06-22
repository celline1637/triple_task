import styled, { css } from 'styled-components/macro';

type propsType = { isShow: boolean };

export const Gnb = styled.header<propsType>`
  display: flex;
  padding: 1.5rem 2rem;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  opacity: 0;
  transform: translateY(-100%);
  transition: all 400ms ease-in-out 0s;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

  ${({ isShow }) =>
    isShow &&
    css`
      opacity: 1;
      transform: translateY(0);
    `};
`;

export const Logo = styled.div`
  ${({ theme }) => theme.flexSet()};
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Nav = styled.nav`
  margin-left: auto;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export const Link = styled.li`
  padding: 10px 17px;
  & > a {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Base = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 83px 50px 17px;
  width: 100%;
  position: absolute;
  top: 0;
  color: white;
  & a {
    color: white;
  }
`;
