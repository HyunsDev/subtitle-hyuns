import styled from "styled-components";
import { Background } from "./components";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Subtitles = styled.div`
  width: 100%;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Title />
      <Subtitles>
        <Background>
          <FlexCenter>
            <Subtitle
              text="다시쌓기"
              delay="0.3s"
              size="15vw"
              period="2025"
              description={
                <>
                  이상(理想)은 머나먼 하늘 그 너머에 있다.
                  <br />
                  그곳에 닿기 위해선, 익숙했던 토대를 무너뜨리고 스스로의
                  확신마저 부정해야 한다.
                  <br /> 아직 형체조차 가늠할 수 없는 그 지점을 향해, 묵묵히 첫
                  삽을 들어 올린다."
                </>
              }
            />
          </FlexCenter>
        </Background>
        <Background>
          <FlexCenter>
            <Subtitle
              text="외적성장"
              delay="0.3s"
              size="15vw"
              period="2024"
              description={
                <>
                  성장은 그릇의 확장으로부터 비롯된다. <br />더 넓은 세상을 담기
                  위해선, 먼저 스스로의 틀부터 넓혀야 한다.
                </>
              }
            />
          </FlexCenter>
        </Background>
        <Background>
          <FlexCenter>
            <Subtitle
              text="더많은더넓은"
              delay="0.2s"
              size="15vw"
              period="2023"
              description={
                <>
                  그 여우는 더 이상 우물 속에 갇힌 존재가 아니었다. <br />
                  처음 마주한 광활한 세계에 매혹된 그 눈동자는,
                  <br />
                  이제 그 너머에 자신이 나아갈 길을 묻고 있었다.
                </>
              }
            />
          </FlexCenter>
        </Background>
      </Subtitles>
    </>
  );
}

export default App;
