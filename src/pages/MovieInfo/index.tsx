import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import useMovieInfo from "../../hooks/useMovieInfo";

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

const MovieInfo: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    if (typeof id === "string") {
        const { movie, loading, error } = useMovieInfo(id);

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
    } else {
        return <div>Filme não encontrado.</div>;
    }
};

export default MovieInfo;