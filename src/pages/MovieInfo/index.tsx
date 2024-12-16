import { useNavigate, useParams } from 'react-router-dom';
import { MdKeyboardBackspace } from "react-icons/md";

import useApi from "../../hooks/useApi";
import { Movie } from "../../types";

import {
    Container,
    Header,
    BackButton,
    Content,
    Info,
    Details,
    Trailer,
} from './styles';

import StarRating from '../../components/StarRating';
import Loading from '../../components/Loading';
import Footer from "../../components/Footer";

interface MovieApiResponse extends Movie {
    videos: {
        results: {
            type: string;
            key: string;
        }[]
    }
}

const MovieInfo: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { response, loading, error } = useApi<MovieApiResponse>({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {
            language: 'pt-BR',
            append_to_response: 'videos',
        },
    });

    if (error) {
        return (
            <div>Erro: {error.message}</div>
        );
    }

    if (loading) {
        return (
            <Loading />
        );
    }

    if (response && response.videos && response.videos.results) {

        const trailers = response.videos.results.filter(
            (video) => video.type === 'Trailer'
        );

        const trailerKey = trailers.length > 0 ? trailers[0].key : null;

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
                        <img src={`https://image.tmdb.org/t/p/original/${response.poster_path}`} alt={response.title} />

                        <Details>

                            <h2>{response.title}</h2>
                            <StarRating rating={response.vote_average} />
                            <p>{response.overview}</p>

                        </Details>

                    </Info>

                    {trailerKey && (

                        <Trailer>
                            <iframe
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                title="Trailer do Filme"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen

                            ></iframe>
                        </Trailer>

                    )}
                </Content>

                <Footer />

            </Container>
        );

    } else {

        return <div>Erro ao carregar informações do filme.</div>;
    }
};

export default MovieInfo;