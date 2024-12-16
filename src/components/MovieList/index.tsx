import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../../types';
import { List } from './styles';
import MovieCard from '../MovieCard';
import Loading from '../Loading';
import { SearchContext } from '../../context/Search/index';

const MovieList: React.FC = () => {

    const { searchTerm } = useContext(SearchContext);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {

        const fetchMovies = async () => {

            setLoading(true);
            setError(null);

            try {
                const response = await axios.get<{ results: Movie[] }>(
                    searchTerm
                        ? 'https://api.themoviedb.org/3/search/movie'
                        : 'https://api.themoviedb.org/3/discover/movie',
                    {
                        params: {
                            language: 'pt-BR',
                            query: searchTerm,
                            api_key: import.meta.env.APP_TMDB_API_KEY,
                        },
                    }
                );
                setMovies(response.data.results);
            } catch (err) {
                setError('Erro ao buscar filmes.');
                console.error('Erro na requisição Axios:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

    }, [searchTerm]);

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