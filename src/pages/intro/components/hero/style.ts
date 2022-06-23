import styled from 'styled-components/macro';
import { Button } from '../../../../components/button';
import { fadeInStyle, fadeInUpStyle } from '../../../../theme/animation';

export const Hero = styled.div`
  height: 860px;
  padding-top: 220px;
  color: white;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: url('https://triple.guide/intro/images/img-01-bg.png');
  background-size: 100% 100%;
`;

export const Title = styled.h1`
  font-size: 90px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -3px;
  ${fadeInUpStyle}
`;

export const SubTitle = styled.p`
  margin-top: 18px;
  margin-bottom: 76px;
  font-weight: 500;
  ${fadeInUpStyle}
`;

export const AppLinkButton = styled(Button)`
  padding: 14px 44px;
  ${fadeInStyle}
`;

export const PhoneFrame = styled.div`
  width: 330px;
  height: 680px;
  border-radius: 42px;
  box-shadow: rgb(0 0 0 / 18%) 0px 9px 17px 0px,
    rgb(0 0 0 / 8%) 0px -4px 6px 0px inset;
  background-color: rgb(250, 250, 250);
  display: inline-block;
  position: relative;
  background-color: rgb(250, 250, 250);
  position: absolute;
  inset: 10px 0px auto auto;
  ${fadeInStyle}
`;

export const PhoneScreen = styled.div`
  width: 300px;
  height: 650px;
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 33px;
  background-size: 300px 650px;
  background-image: url('https://triple.guide/intro/images/img_01_screen_3_520@3x.png');
`;
