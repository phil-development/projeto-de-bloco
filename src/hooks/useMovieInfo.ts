import { useState, useEffect } from "react";
import axios from "axios";

import { Movie } from "../types";

interface MovieApiResponse extends Movie {
    videos: {
        results: {
            type: string;
            key: string;
        }[];
    };
}

const useMovieInfo = (movieId: string) => {
    const [movie, setMovie] = useState<MovieApiResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get<MovieApiResponse>(
                    `https://api.themoviedb.org/3/movie/${movieId}`,
                    {
                        params: {
                            language: "pt-BR",
                            append_to_response: "videos",
                            api_key: import.meta.env.APP_TMDB_API_KEY,
                        },
                    }
                );
                setMovie(response.data);
            } catch (err) {
                setError("Erro ao carregar informações do filme.");
                console.error("Erro na requisição Axios:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [movieId]);

    return { movie, loading, error };
};

export default useMovieInfo;