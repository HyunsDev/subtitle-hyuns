import { styled } from "styled-components";

const Divver = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
`;

export function Background({ children }: { children: React.ReactNode }) {
    return <Divver>{children}</Divver>;
}
