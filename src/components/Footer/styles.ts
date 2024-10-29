import styled from "styled-components";

export const Container = styled.footer`

    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${props => props.theme.title === "dark" ? props.theme.colors.black : props.theme.colors.component};

`;