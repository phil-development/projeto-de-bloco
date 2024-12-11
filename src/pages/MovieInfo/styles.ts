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

    h1 {

        margin: 0 0 0 1rem;
        font-size: clamp(1.5rem, 1vw + 0.8rem, 2.5rem); 

    }

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
    min-height: calc(100vh - 96px - 48px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 3rem 0;

`;

export const Info = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    img {

        width: 100%;
        max-width: 320px;
        border-radius: 2px;

    }

`;

export const Details = styled.div`

    width: 100%;
    max-width: 320px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (max-width: 768px) {
     
        height: auto;

    }

    p {

        text-align: justify;
        margin: 1rem 0 0 0;

    }

`;

export const Trailer = styled.div`

    width: 100%;
    max-width: 720px;
    height: 100%;
    margin: 4rem 0 0 0;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    iframe {

        width: 100%;
        max-width: 640px;
        height: 360px;
        border: none;

    }

`;