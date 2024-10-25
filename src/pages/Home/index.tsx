import { Container, Content } from './styles';

import Menu from '../../components/Menu';
import MovieList from '../../components/MovieList';
import Footer from '../../components/Footer';

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