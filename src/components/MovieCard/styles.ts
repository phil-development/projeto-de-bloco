import styled from "styled-components";

export const Card = styled.li`

    width: 100%;
    height: 100%;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
    user-select: none;
    background-color: black;

`;

export const Poster = styled.div`

    img {

        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;

    }

`;

export const Info = styled.div`

    width: 100%;
    height: 200px;
    padding: 12px;
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    background: linear-gradient(#00000000, #000000 90%);
    transition: opacity .6s ease;

    h1 {
        font-size: 12px;
        margin: 0 0 8px 0;
        color: ${props => props.theme.colors.white};
    }

    &:hover {
        
        cursor: pointer;


    }

`;

export const HiddenContent = styled.div`

    height: 0px;
    opacity: 0;
    margin: 8px 0 0 0;
    font-size: 12px;
    color: ${props => props.theme.colors.white};
    overflow: hidden;

`;

export const Description = styled.p``;

export const Button = styled.button`

    width: 100%;
    height: 32px;
    cursor: pointer;
    margin: 8px 0 0 0;
    border: none;
    border-radius: 2px;
    background-color: ${props => props.theme.colors.primary};
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    

`;