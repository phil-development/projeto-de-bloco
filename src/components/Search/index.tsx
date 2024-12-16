import React from "react";
import { Container } from "./styles";

import { IoIosSearch } from "react-icons/io";

export const Search: React.FC = () => {
    return (
        <Container>

            <label htmlFor="search-input">

                <IoIosSearch />

            </label>

            <input type="text" id="search-input" placeholder="Procurar..." />

        </Container>
    );
};

export default Search;