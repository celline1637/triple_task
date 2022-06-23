import styled from 'styled-components/macro'
import { fadeInUpStyle } from '../../../../theme/animation'

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'flex-start')};
  padding: 150px 0 140px;
`

export const AwardImage = styled.div`
  width: 400px;
  position: relative;
  ${fadeInUpStyle}

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
`

export const MetricsContainer = styled.div`
  ${fadeInUpStyle}
`

export const MetricsItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  & > strong {
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
  }
`

export const AwardsContainer = styled.div`
  margin-top: 50px;
  ${({ theme }) => theme.flexSet()};
  ${fadeInUpStyle}
`

export const AwardsItem = styled.div`
  ${({ theme }) => theme.flexSet()};
  gap: 8px;
  height: 54px;
  padding-right: 39px;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  & > img {
    width: 54px;
  }
`
