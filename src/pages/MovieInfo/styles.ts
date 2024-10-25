import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;

`;

export const Header = styled.header`

    width: 100%;
    height: 96px;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: transparent;

`;

export const BackButton = styled.button`

    width: 32px;
    height: 32px;
    outline: none;
    border: none;
    background: transparent;
    color: ${props => props.theme.colors.text};
    cursor: pointer;

    svg {

        width: 100%;
        height: 100%;

    }

`;

export const Content = styled.main`

    width: 100%;
    min-height: calc(100vh - 96px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;