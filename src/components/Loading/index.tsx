import ReactLoading from 'react-loading';

import { LoadContainer } from './styles';

import { useTheme } from '../../context/Theme';

const Loading: React.FC = () => {

    const { theme } = useTheme();

    return (
        <LoadContainer>
            <ReactLoading type={'bars'} color={theme.colors.primary} height={'5%'} width={'5%'} />
        </LoadContainer>
    );
};

export default Loading;
