import styled from "styled-components";

export const Container = styled.nav`

    width: 100%;
    height: 72px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    padding: 0 1rem;

    background-color: ${({ theme }) => theme.colors.background};

`;

export const Logo = styled.h1<{ isOpen: boolean }>`

    z-index: 3;
    margin: 0 1rem;
    font-size: clamp(1.5rem, 1vw, 3rem); 
    font-weight: 500;
    display: block;

    @media (max-width: 524px) {
        
        display: ${({isOpen}) => isOpen ? 'block' : 'none'};

    }

    @media (max-width: 320px) {
        
        display: none;

    }

`;

export const LeftContent = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const LateralNavigation = styled.div<{ isOpen: boolean }>`

    width: 300px;
    height: 100vh;
    position: fixed;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    z-index: 2;

    top: 0;
    left: ${props => props.isOpen ? '0' : '-100%'};
    background-color: ${({ theme }) => theme.colors.component};
    transition: all .3s ease;

    ul {

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        list-style: none;

        margin: 64px 0 0 0;

        li {
            
            margin: 0 0 1rem 0;
            align-self: flex-start;

            a {     

                color: ${({ theme }) => theme.colors.text};
                text-decoration: none;
                text-transform: uppercase;

            }

        }

    }

    button {

        width: 100%;
        height: 32px;

    }


    @media (max-width: 524px) {

        width: 100%;

        ul {

            width: 100%;
            height: 100%;
            justify-content: center;

            li {

                margin: 2rem 0;
                font-size: 1rem;
                align-self: center;

            }

        }

    };

`;

export const ToggleMenu = styled.button`
    
    max-width: 32px;
    max-height: 32px;
    min-width: 32px;
    min-height: 32px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    cursor: pointer;
    z-index: 3;

    svg {

        width: 100%;
        height: 100%;

    }

    @media (max-width: 524px) {
        
        margin: 0 1rem 0 0;
    }


`;

export const RightContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ProfileMenu = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Profile = styled.button`

    width: 32px;
    height: 32px;
    max-width: 32px;
    max-height: 32px;
    min-width: 32px;
    min-height: 32px;

    background-color: ${({ theme }) => theme.colors.items};
    color: ${({ theme }) => theme.colors.text};
    
    margin: 0 0 0 1rem;
    padding: .3rem;

    border: none;
    border-radius: 2px;
    cursor: pointer;

    svg {

        width: 80%;
        height: 80%;
        color: ${({ theme }) => theme.colors.text};

    }

`;

export const ProfileContent = styled.div<{ isOpen: boolean }>`

    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.colors.items};
    z-index: 1;
    min-width: 128px;

`;

export const ProfileItem = styled.button`

    width: 100%;
    padding: 1rem;

    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    cursor: pointer;


    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }

`;