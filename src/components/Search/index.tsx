import React, { useContext, useState, useEffect } from 'react';
import { Container } from './styles';
import { IoIosSearch } from 'react-icons/io';
import { SearchContext } from '../../context/Search';

export const Search: React.FC = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const [inputValue, setInputValue] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        setInputValue(searchTerm);
    }, [searchTerm]);

    return (
        <Container>
            <label htmlFor="search-input">
                <IoIosSearch />
            </label>
            <input
                type="text"
                id="search-input"
                placeholder="Procurar..."
                value={inputValue}
                onChange={handleSearchChange}
            />
        </Container>
    );
};

export default Search;