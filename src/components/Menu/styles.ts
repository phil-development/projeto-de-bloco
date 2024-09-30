import styled from "styled-components";

interface PropsMenuState {

    state: boolean;

}

export const Container = styled.nav`

    width: 100%;
    height: 64px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    padding: 0 1rem;

    background-color: ${props => props.theme.colors.component};

`;

export const LeftContent = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {

        z-index: 3;
        margin: 0 1rem;

    }

    @media (max-width: 320px) {
        
        h1 {

            display: none;

        }

    }

`;

export const LateralNavigation = styled.div<PropsMenuState>`

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
    left: ${props => props.state ? '0' : '-100%'};
    background-color: ${props => props.theme.colors.component};
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

                color: ${props => props.theme.colors.text};
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
    color: ${props => props.theme.colors.text};
    border: none;
    cursor: pointer;
    z-index: 3;

    svg {

        width: 100%;
        height: 100%;

    }

    @media (max-width: 320px) {
        
        margin: 0 1rem 0 0;
    }


`;

export const RightContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const MenuItems = styled.div<PropsMenuState>`

    display: block;

    @media (max-width: 524px) {
        
        display: ${props => props.state ? 'flex' : 'none'};
        position: fixed;
        top: calc(64px + 6px);
        right: 6px;

        align-items: center;
        justify-content: space-around;

        padding: 1rem;
        background-color: ${props => props.theme.colors.component};

    };

`;

export const ToggleMenuItems = styled(ToggleMenu)`

    max-width: 24px;
    max-height: 24px;
    min-width: 24px;
    min-height: 24px;
    margin: 0 0 0 1rem;
    display: none;
    z-index: 1;
    user-select: none;

    @media (max-width: 524px) {

        display: block;

    };

`;

export const Items = styled.button`

    min-width: 24px;
    min-height: 24px;
    margin: 0 0 0 1rem;
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    border: none;
    cursor: pointer;

    svg {

        width: 100%;
        height: 100%;

    }

    @media (max-width: 524px) {

        margin: 0 1rem;

    };

`;