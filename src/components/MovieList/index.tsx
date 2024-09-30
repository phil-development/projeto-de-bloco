import { useEffect, useState } from "react";

import ReactLoading from 'react-loading';

import axios from "axios";

import { useTheme } from '../../context/Theme';

import { Movie } from "../../types";

import { List, LoadContainer } from "./styles";

import MovieCard from "../MovieCard";

export default function MovieList() {

    const { theme } = useTheme();

    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = async () => {

        await axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'ccaaf2689b668ef068779f5169e99f1d',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        });

        setIsLoading(false);

    };

    getMovies();

    if (isLoading) {

        return (
            <LoadContainer>
                <ReactLoading type={'bars'} color={theme.colors.primary} height={'5%'} width={'5%'} />
            </LoadContainer>
        );

    } else {

        return (

            <List>

                {movies.map(movie => (
                    <MovieCard key={movie.id} data={movie} />
                ))}

            </List>

        );
    };
};
