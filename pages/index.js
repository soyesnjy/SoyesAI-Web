/* eslint-disable react-hooks/exhaustive-deps */

import styled from 'styled-components';
import { useEffect } from 'react';

import Carousel from '@/component/Home_Component/Carousel';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AvartarCard from '@/component/Home_Component/AvartarCard';
import ContentCard from '@/component/Home_Component/Content/ContentCard';

// Home 페이지
export default function Home() {
  // const [loading, setLoading] = useState(false);

  // const { t } = useTranslation("nav");
  // console.log('Test 주석');
  // 스크롤 이벤트 리스너 추가 및 제거

  useEffect(() => {
    // Loading (1 sec)
    // const timer = setTimeout(() => {
    //   setLoading(true);
    // }, 1000);
    // 모바일 width 확인
    return () => {};
  }, []);

  return (
    <MasterContainer>
      <MainContainer>
        <Carousel />
        <AvartarTitle />
        <AvartarCard />
        <ContentCard />
      </MainContainer>
    </MasterContainer>

    // <PageContainer>
    //   <Section>
    //     {/* 첫 번째 섹션 내용 */}
    //     <MainContainer>
    //       {mobile && loading && <Title>AI Avartar Project</Title>}
    //       {!mobile && loading && <ScrollDownIndicator />}
    //     </MainContainer>
    //   </Section>
    //   <Section style={{ backgroundColor: 'lightgreen' }}>
    //     {/* 두 번째 섹션 내용 */}
    //     <SubContainer>
    //       {!mobile && <ScrollUpIndicator />}
    //       <Title>AI Avartar Soyes</Title>
    //       <Live2DViewerMain avartar="mao" />
    //       {!mobile && <ScrollDownIndicator />}
    //     </SubContainer>
    //   </Section>
    //   <Section style={{ backgroundColor: 'lightcoral' }}>
    //     {/* 세 번째 섹션 내용 */}
    //     <SubContainer>
    //       {!mobile && <ScrollUpIndicator />}
    //       <Title>AI Avartar Pupu</Title>
    //       <Live2DViewerMain avartar="shizuku" />
    //     </SubContainer>
    //   </Section>
    //   {/* Footer 섹션  */}
    //   <FooterSection>
    //     <Footer />
    //   </FooterSection>
    // </PageContainer>
  );
}

// Translation 파일 적용
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'nav'])), // 파일 다중 적용 가능
    },
  };
}

const MasterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: -1;
`;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    background-image: url('/src/Background_IMG/Mobile/mobile_background_2.png');
    justify-content: center;
  }
`;

const AvartarTitle = styled.h2`
  font-family: AppleSDGothicNeoB00;
  font-weight: 600;
`;
