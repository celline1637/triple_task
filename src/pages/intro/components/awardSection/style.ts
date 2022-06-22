import styled, { css } from 'styled-components/macro';

type propsType = {
  isShow: boolean;
};

const fadeInStyle = css<propsType>`
  opacity: ${({ isShow }) => (isShow ? 1 : 0)};
  transform: translateY(${({ isShow }) => (isShow ? 0 : '10%')});
  transition: all 700ms ease-in-out 0s;
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'flex-start')};
  padding: 150px 0 140px;
`;

export const AwardImage = styled.div`
  width: 400px;
  position: relative;
  ${fadeInStyle}

  & > img {
    width: 100%;
    object-fit: cover;
  }

  &::after {
    content: '2021년 12월 기준';
    ${({ theme }) => theme.posCenterX()};
    bottom: 48px;
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

export const MetricsContainer = styled.div<propsType>`
  ${fadeInStyle}
`;

export const MetricsItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  & > strong {
    font-weight: bold;
  }
`;

export const AwardsContainer = styled.div<propsType>`
  margin-top: 50px;
  ${({ theme }) => theme.flexSet()};
  ${fadeInStyle}
`;

export const AwardsItem = styled.div`
  ${({ theme }) => theme.flexSet()};
  gap: 8px;
  height: 54px;
  padding-right: 39px;
  font-size: 14px;
  line-height: 22px;
  & > img {
    width: 54px;
  }
`;
