import React, { useState } from 'react';
import {
    Container,
    LeftContent,
    RightContent,
    LateralNavigation,
    MenuItems,
    Items,
    ToggleMenu,
    ToggleMenuItems,
} from './styles';

import { IoMdMenu, IoMdClose, IoMdNotifications } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { FaCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import Search from '../Search/';
import ToggleTheme from '../ToggleTheme';

export const Menu: React.FC = () => {

    const [lateralNavigationState, setLateralNavigationState] = useState(false);
    const [lateralItemsState, setLateralItemsState] = useState(false);

    return (
        <Container>

            <LeftContent>

                <ToggleMenu onClick={() => setLateralNavigationState(!lateralNavigationState)}>

                    {lateralNavigationState ? <IoMdClose /> : <IoMdMenu />}

                </ToggleMenu>

                <h1>PHTV</h1>

                <LateralNavigation state={lateralNavigationState}>

                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Series</a></li>

                    </ul>

                </LateralNavigation>

            </LeftContent>

            <RightContent>

                <Search />

                <ToggleTheme />

                <ToggleMenuItems onClick={() => setLateralItemsState(!lateralItemsState)}>

                    <SlOptionsVertical />

                </ToggleMenuItems>

                <MenuItems state={lateralItemsState}>

                    <Items>

                        <IoMdNotifications />

                    </Items>

                    <Items>

                        <FaStar />

                    </Items>

                    <Items>

                        <FaCircleUser />

                    </Items>

                </MenuItems>

            </RightContent>

        </Container>
    );
};

export default Menu;