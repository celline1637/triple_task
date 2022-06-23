import styled, { css } from 'styled-components/macro';

type propsType = {
  isShow: boolean;
  animationType?: string;
};

const animationStyle = css<propsType>``;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  padding: 150px 0 140px;
`;
