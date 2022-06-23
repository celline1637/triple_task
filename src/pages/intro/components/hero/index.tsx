import { useFadeIn } from '../../../../hooks';
import { Section } from '../../../../components';
import * as S from './style';

export const Hero = () => {
  const { ref, triggers } = useFadeIn(3);
  const isShow = triggers as boolean[];

  return (
    <S.Hero>
      <Section>
        <S.Title isShow={isShow[0]} ref={ref}>
          여행의 모든 것<br />
          트리플로 한 번에
        </S.Title>
        <S.SubTitle isShow={isShow[1]}>
          예약부터 일정까지 앱 하나로 간편하게 준비하세요.
        </S.SubTitle>
        <S.AppLinkButton
          isShow={isShow[1]}
          color="white"
          fontWeight="700"
          outline
          round
        >
          앱 설치하기
        </S.AppLinkButton>
        <S.PhoneFrame isShow={isShow[2]}>
          <S.PhoneScreen />
        </S.PhoneFrame>
      </Section>
    </S.Hero>
  );
};
