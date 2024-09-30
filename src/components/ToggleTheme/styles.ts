import styled from "styled-components";

export const Container = styled.button`

    max-width: 32px;
    max-height: 32px;
    min-width: 32px;
    min-height: 32px;
    border-radius: 2px;
    border: none;
    margin: 0 0 0 1rem;
    padding: .5rem;

    background-color: ${props => props.theme.colors.items};
    color: ${props => props.theme.colors.text};
    cursor: pointer;

    svg {

        width: 100%;
        height: 100%;

    }

`;