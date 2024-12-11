import { useEffect, useState } from "react";

import { Movie } from "../../types";

import { List } from "./styles";

import MovieCard from "../MovieCard";

import Loading from "../Loading";

import useApi from '../../hooks/useApi';

export default function MovieList() {

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
            <Loading />
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