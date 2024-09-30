import styled from "styled-components";

export const List = styled.ul`

    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    list-style: none;

`;

export const LoadContainer = styled.div`

    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;