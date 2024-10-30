import ReactLoading from 'react-loading';

import { LoadContainer } from './styles';

import { useTheme } from '../../context/Theme';

export default function Loading() {

    const { theme } = useTheme();

    return (
        <LoadContainer>
            <ReactLoading type={'bars'} color={theme.colors.primary} height={'5%'} width={'5%'} />
        </LoadContainer>
    );
};
