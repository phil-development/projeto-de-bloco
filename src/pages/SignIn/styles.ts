import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    

`;

export const Button = styled.button`

    width: 128px;
    height: 36px;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;

`;