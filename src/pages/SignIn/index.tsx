import React, { useState } from 'react';
import api from '../../config/api';
import { Container, Button } from './styles';

const TMDB_API_URL = 'https://api.themoviedb.org/3';
const REDIRECT_URL = 'https://phil-development.github.io/projeto-de-bloco/callback';

const Login: React.FC = () => {
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.get(`${TMDB_API_URL}/authentication/token/new`);
      const requestToken = response.data.request_token;

      window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${REDIRECT_URL}`;

    } catch (error) {
      console.error('Erro ao obter request token:', error);
      setError('Erro ao iniciar o login.');
    }
  };

  return (
    <Container>
      <h2>Login com TMDB</h2>
      {error && <div className="error">{error}</div>}
      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;