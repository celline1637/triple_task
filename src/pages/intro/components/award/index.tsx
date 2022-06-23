import { APP_STORE, PLAY_STORE, TRIPLE_AWARD } from '../../../../assets/png';
import { useCountUp } from '../../../../hooks/useCountUp';
import { useFadeIn } from '../../../../hooks/useFadeIn';
import { Section } from '../../../../components/section';
import * as S from './style';

export const Award = () => {
  const { triggers, ref: fadeInRef } = useFadeIn(3);
  const { numbers, ref: metricsRef } = useCountUp([700, 100, 470], {});

  const isShow = triggers as boolean[];
  const [traveler, reviews, plans] = numbers;

  return (
    <Section>
      <S.Wrapper>
        <S.AwardImage ref={fadeInRef} isShow={isShow[0]}>
          <img
            alt="트리플 플레이스토어 올해의 앱 최우수상 수상"
            src={TRIPLE_AWARD.default}
          />
        </S.AwardImage>
        <S.MetricsContainer ref={metricsRef} isShow={isShow[1]}>
          <S.MetricsItem>
            <strong>{traveler}만 명</strong>의 여행자
          </S.MetricsItem>
          <S.MetricsItem>
            <strong>{reviews}만 개</strong>의 여행 리뷰
          </S.MetricsItem>
          <S.MetricsItem>
            <strong>{plans}만 개</strong>의 여행 일정
          </S.MetricsItem>
          <S.AwardsContainer isShow={isShow[2]}>
            <S.AwardsItem>
              <img alt="구글 수상 뱃지" src={PLAY_STORE.default} />
              <p>
                2018 구글 플레이스토어 <br />
                올해의 앱 최우수상 수상
              </p>
            </S.AwardsItem>
            <S.AwardsItem>
              <img alt="앱스토어 아이콘" src={APP_STORE.default} />
              <p>
                2018 애플 앱스토어 <br />
                오늘의 여행앱 선정
              </p>
            </S.AwardsItem>
          </S.AwardsContainer>
        </S.MetricsContainer>
      </S.Wrapper>
    </Section>
  );
};
