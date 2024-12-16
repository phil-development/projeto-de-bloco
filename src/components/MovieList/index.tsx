import React, { useContext, useEffect, useState, useMemo } from 'react';
import { Movie } from '../../types';
import { List } from './styles';
import MovieCard from '../MovieCard';
import Loading from '../Loading';
import useApi from '../../hooks/useApi';
import { SearchContext } from '../../context/Search/index';

const MovieList: React.FC = () => {
    const { searchTerm } = useContext(SearchContext);
    const [movies, setMovies] = useState<Movie[]>([]);

    const { response, loading, error } = useApi<{ results: Movie[] }>({
        method: 'get',
        url: useMemo(() => {
            return searchTerm
                ? 'https://api.themoviedb.org/3/search/movie'
                : 'https://api.themoviedb.org/3/discover/movie';
        }, [searchTerm]),
        params: useMemo(() => {
            return {
                language: 'pt-BR',
                query: searchTerm,
            };
        }, [searchTerm]),
    });

    useEffect(() => {
        if (response) {
            setMovies(response.results);
        }
    }, [response]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Erro: {error.message}</div>;
    }

    return (
        <List>
            {movies.map((movie) => (
                <MovieCard key={movie.id} data={movie} />
            ))}
        </List>
    );
};

export default MovieList;