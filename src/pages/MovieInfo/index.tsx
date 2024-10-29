import { useEffect, useState } from "react";

import { useNavigate, useParams } from 'react-router-dom';

import { MdKeyboardBackspace } from "react-icons/md"

import useApi from "../../hooks/useApi";

import { Movie } from "../../types";

import {
    Container,
    Header,
    BackButton,
    Content,
} from './styles';

import Footer from "../../components/Footer";

export default function MovieInfo() {

    const navigate = useNavigate();

    const { id } = useParams();

    const { response, error } = useApi<Movie>({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {
            language: 'pt-BR',
        },
    });

    if (error) {
        return (
            <div>Erro: {error}</div>
        );
    }

    if (response) return (
        <Container>

            <Header>

                <BackButton onClick={() => navigate(-1)}>

                    <MdKeyboardBackspace />

                </BackButton>

            </Header>

            <Content>

                <h1>{response.title}</h1>

            </Content>

            <Footer />

        </Container>
    );
};
