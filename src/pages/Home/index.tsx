import { Container, Content } from './styles';

import Menu from '../../components/Menu';
import MovieList from '../../components/MovieList';

export default function Home() {

    return (
        <Container>

            <Menu />

            <Content>

                <MovieList />

            </Content>

        </Container>
    );
};