import { Container, Content } from './styles';

import { Menu, MovieList, Footer } from '../../components/';

const Home: React.FC = () => { 

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

export default Home;