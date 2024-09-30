import { Container } from "./styles";

import { IoIosSearch } from "react-icons/io";

//EM PRODUÇÃO! Não deu tempo de fazer a funcionalidade kkk
export default function Search() {
    return (
        <Container>

            <label htmlFor="search-input">

                <IoIosSearch />

            </label>

            <input type="text" id="search-input" placeholder="Procurar..." />

        </Container>
    );
};
