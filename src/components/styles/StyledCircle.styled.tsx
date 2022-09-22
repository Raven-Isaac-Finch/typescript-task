import styled from "styled-components"

interface Props {
    bg?: string;
    top?: string;
    left?: string;
    right?: string;
}

export const StyledCircle = styled.div<Props>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    top: ${({ top }) => top || '0'};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    background-color: ${({ bg }) => bg || 'black'};
`