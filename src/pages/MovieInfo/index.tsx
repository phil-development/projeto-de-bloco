import { useParams } from 'react-router-dom';

import { Container } from './styles';

export default function MovieInfo() {

    const { id } = useParams();

    return (
        <Container>
            ID do filme: {id}
        </Container>
    );
};
