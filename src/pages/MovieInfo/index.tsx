import { MdKeyboardBackspace } from "react-icons/md"

import { useNavigate, useParams } from 'react-router-dom';

import Footer from "../../components/Footer";

import {
    Container,
    Header,
    BackButton,
    Content,
} from './styles';

export default function MovieInfo() {

    const { id } = useParams();

    const navigate = useNavigate();

    return (
        <Container>

            <Header>

                <BackButton onClick={() => navigate(-1)}>

                    <MdKeyboardBackspace />

                </BackButton>

            </Header>

            <Content>

            </Content>

            <Footer />

        </Container>
    );
};
