import React, { useEffect, useState } from "react";

import { Movie } from "../../types";

import { List } from "./styles";

import MovieCard from "../MovieCard";

import Loading from "../Loading";

import useApi from '../../hooks/useApi';

const MovieList: React.FC = () => {

    const [movies, setMovies] = useState<Movie[]>([]);
    const [fetched, setFetched] = useState(false);

    const { response, loading, error } = useApi<{ results: Movie[] }>({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            language: 'pt-BR',
        },
    });

    useEffect(() => {
        if (response && !fetched) {
            setMovies(response.results);
            setFetched(true);
        }
    }, [response, fetched]);


    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <div>Erro: {error.message}</div>
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

export default MovieList;