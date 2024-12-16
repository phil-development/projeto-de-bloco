import { Container } from "./styles";

import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

import { useTheme } from '../../context/Theme';
import React from "react";

const ToggleTheme: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const handleChange = () => toggleTheme();

    return (
        <Container onClick={handleChange}>

            {theme.title === 'light' ? <MdWbSunny /> : <FaMoon />}

        </Container>
    );
};

export default ToggleTheme;