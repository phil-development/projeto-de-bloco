import React, { useState } from 'react';
import {
    Container,
    LeftContent,
    RightContent,
    LateralNavigation,
    ProfileMenu,
    Profile,
    ToggleMenu,
    ProfileContent,
    ProfileItem
} from './styles';

import { Link, useNavigate } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

import { ToggleTheme, Search } from '../index';
import { logout } from '../../utils/auth';

export const Menu: React.FC = () => {

    const navigate = useNavigate();

    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate('/signIn');
    };

    const toggleProfileMenu = () => {
        setIsOpenProfile(!isOpenProfile);
    };

    return (
        <Container>

            <LeftContent>

                <ToggleMenu onClick={() => setIsOpenMenu(!isOpenMenu)}>

                    {isOpenMenu ? <IoMdClose /> : <IoMdMenu />}

                </ToggleMenu>

                <h1>PHTV</h1>

                <LateralNavigation isOpen={isOpenMenu}>

                    <ul>
                        <li><Link to='/' />Inicio</li>
                        <li><Link to='/' />Filmes</li>
                        <li><Link to='/' />Series</li>
                    </ul>

                </LateralNavigation>

            </LeftContent>

            <RightContent>

                <Search />

                <ToggleTheme />

                <ProfileMenu>

                    <Profile onClick={toggleProfileMenu}>

                        <FaUser />

                    </Profile>

                    <ProfileContent isOpen={isOpenProfile}>
                        <ProfileItem onClick={handleLogout}>Logout</ProfileItem>
                    </ProfileContent>

                </ProfileMenu>

            </RightContent>

        </Container>
    );
};

export default Menu;