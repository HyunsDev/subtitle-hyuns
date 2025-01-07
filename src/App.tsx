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
            <Subtitle text="다시쌓기" delay="0.3s" size="15vw" period="2025" />
          </FlexCenter>
        </Background>
        <Background>
          <FlexCenter>
            <Subtitle text="외적성장" delay="0.3s" size="15vw" period="2024" />
          </FlexCenter>
        </Background>
        <Background>
          <FlexCenter>
            <Subtitle
              text="더많은더넓은"
              delay="0.2s"
              size="15vw"
              period="2023"
            />
          </FlexCenter>
        </Background>
      </Subtitles>
    </>
  );
}

export default App;
