import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../../config/api';

const TMDB_API_URL = 'https://api.themoviedb.org/3';

const Callback: React.FC = () => {
    const [searchParams] = useSearchParams();
    const approved = searchParams.get('approved');
    const requestToken = searchParams.get('request_token');
    const navigate = useNavigate();

    useEffect(() => {
        const createSession = async () => {
            if (approved === 'true' && requestToken) {
                try {
                    const sessionResponse = await api.post(`${TMDB_API_URL}/authentication/session/new`, {
                        request_token: requestToken,
                    });
                    const sessionId = sessionResponse.data.session_id;
                    localStorage.setItem('session_id', sessionId);

                    const userResponse = await api.get(`${TMDB_API_URL}/account`, {
                        params: { session_id: sessionId },
                    });
                    const userId = userResponse.data.id;

                    console.log('Sessão criada:', sessionId);
                    console.log('ID do usuário:', userId);

                    // Redireciona para a home após o login
                    navigate('/');

                } catch (error) {
                    console.error('Erro ao criar sessão:', error);
                    // Lidar com o erro (ex: exibir mensagem, redirecionar para login)
                }
            }
        };
        createSession();
    }, [approved, requestToken, navigate]);

    return (
        <div>
            {approved === 'true' ? (
                <div>
                    <h2>Login bem-sucedido! Redirecionando...</h2>
                </div>
            ) : (
                <div>
                    <h2>Login falhou.</h2>
                </div>
            )}
        </div>
    );
};

export default Callback;