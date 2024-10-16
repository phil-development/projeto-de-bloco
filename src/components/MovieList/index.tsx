import { useEffect, useState } from "react";

import ReactLoading from 'react-loading';

import { useTheme } from '../../context/Theme';

import { Movie } from "../../types";

import { List, LoadContainer } from "./styles";

import MovieCard from "../MovieCard";

import useApi from '../../hooks/useApi';

export default function MovieList() {

    const { theme } = useTheme();
    const [movies, setMovies] = useState<Movie[]>([]);

    const { response, loading, error } = useApi<{ results: Movie[] }>({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            language: 'pt-BR',
        },
    });

    useEffect(() => {
        if (response) {
            setMovies(response.results);
        }
    }, [response]);

    if (loading) {
        return (
            <LoadContainer>
                <ReactLoading type={'bars'} color={theme.colors.primary} height={'5%'} width={'5%'} />
            </LoadContainer>
        );
    }

    if (error) {
        return (
            <div>Erro: {error}</div>
        );
    }

    return (
        <List>
            {movies.map(movie => (
                <MovieCard key={movie.id} data={movie} />
            ))}
        </List>
    );
};