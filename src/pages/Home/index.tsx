import { Container, Content } from './styles';

import { Menu, MovieList, Footer } from '../../components/';

export default function Home() {

    return (
        <Container>

            <Menu />

            <Content>

                <MovieList />

            </Content>

            <Footer />

        </Container>
    );
};