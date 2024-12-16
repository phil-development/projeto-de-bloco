import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import axios from "axios";

import { Movie } from "../../types";

import {
    Container,
    Header,
    BackButton,
    Content,
    Info,
    Details,
    Trailer,
} from "./styles";

import StarRating from "../../components/StarRating";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";

interface MovieApiResponse extends Movie {
    videos: {
        results: {
            type: string;
            key: string;
        }[];
    };
}

const MovieInfo: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieApiResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get<MovieApiResponse>(
                    `https://api.themoviedb.org/3/movie/${id}`,
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
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!movie) {
        return <div>Filme não encontrado.</div>;
    }

    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigate(-1)}>
                    <MdKeyboardBackspace />
                </BackButton>
                <h1>Detalhes</h1>
            </Header>

            <Content>
                <Info>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <Details>
                        <h2>{movie.title}</h2>
                        <StarRating rating={movie.vote_average} />
                        <p>{movie.overview}</p>
                    </Details>
                </Info>

                {movie.videos && movie.videos.results && (
                    <>
                        {movie.videos.results
                            .filter((video) => video.type === "Trailer")
                            .map((trailer) => (
                                <Trailer key={trailer.key}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        title="Trailer do Filme"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </Trailer>
                            ))}
                    </>
                )}
            </Content>

            <Footer />
        </Container>
    );
};

export default MovieInfo;