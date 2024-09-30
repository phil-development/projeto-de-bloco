import { Container } from "./styles";

import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";

import { useTheme } from '../../context/Theme';

export default function ToggleTheme() {

    const { toggleTheme, theme } = useTheme();

    const handleChange = () => toggleTheme();

    return (
        <Container onClick={handleChange}>

            {theme.title === 'light' ? <MdWbSunny /> : <FaMoon />}

        </Container>
    );
};
