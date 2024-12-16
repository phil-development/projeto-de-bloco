import React from 'react';
import { useContext } from 'react';
import useMovieList from '../../hooks/useMovieList';
import { List } from './styles';
import MovieCard from '../MovieCard';
import Loading from '../Loading';
import { SearchContext } from '../../context/Search/index';

const MovieList: React.FC = () => {
    const { searchTerm } = useContext(SearchContext);
    const { movies, loading, error } = useMovieList(searchTerm);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Erro: {error}</div>;
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