import styled from "styled-components";

const Divver = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100dvw;
  z-index: 1;
  justify-content: center;

  height: 96px;
  backdrop-filter: blur(10px);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 96px;
`;

const StyledTitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
  font-weight: 500;
`;

const TitleLabel = styled.span`
  opacity: 0.8;
`;

const Author = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
  font-weight: 500;
`;

export function Title() {
  return (
    <Divver>
      <Inner>
        <StyledTitle>
          <TitleLabel>「 </TitleLabel>새로운 상상을 하고, 상상을 현실로 만듭니다
          <TitleLabel> 」</TitleLabel>
        </StyledTitle>
        <Author>
          <TitleLabel>Author </TitleLabel>박현우
        </Author>
      </Inner>
    </Divver>
  );
}
