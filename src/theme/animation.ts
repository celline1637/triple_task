import { css } from 'styled-components';

export type isShowStyleType = {
  isShow: boolean;
};

export const fadeInUpStyle = css<isShowStyleType>`
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transform: translateY(${({ isShow }) => (isShow ? 0 : '10%')});
  transition: all 700ms ease-in-out 0s;
`;

export const fadeInStyle = css<isShowStyleType>`
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transition: all 700ms ease-in-out 0s;
`;
