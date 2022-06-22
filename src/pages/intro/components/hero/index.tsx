import { useFadeIn } from '../../../../hooks/useFadeIn';
import { Section } from '../../../../components/section';
import * as S from './style';

export const Hero = () => {
  const { triggers, ref } = useFadeIn();
  const isShow = triggers as boolean;

  return (
    <S.Hero>
      <Section>
        <S.Title isShow={isShow} ref={ref}>
          여행의 모든 것<br />
          트리플로 한 번에
        </S.Title>
        <S.SubTitle isShow={isShow}>
          예약부터 일정까지 앱 하나로 간편하게 준비하세요.
        </S.SubTitle>
        <S.AppLinkButton
          isShow={isShow}
          color="white"
          fontWeight="700"
          outline
          round
        >
          앱 설치하기
        </S.AppLinkButton>
        <S.PhoneFrame isShow={isShow} animationType="fadeIn">
          <S.PhoneScreen />
        </S.PhoneFrame>
      </Section>
    </S.Hero>
  );
};
