import styled, { css } from 'styled-components/macro';

type propsType = { isShow: boolean };

export const Header = styled.header<propsType>`
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

export const BaseHeader = styled.div`
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
