import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    max-width: 196px;
    height: 32px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.items};
    display: flex;

    input {

        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background: transparent;
        padding: 4px 4px 4px 0;
        color: ${({ theme }) => theme.colors.text};
        letter-spacing: .1rem;

        &::placeholder {

            color: ${({ theme }) => theme.colors.text};
            opacity: .5;

        }

    }

    label {

        padding: 0 .5rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.text};
        cursor: text;

        svg {

            width: 100%;
            height: 100%;

        }

    }

`;