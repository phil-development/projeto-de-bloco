import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`

  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

`;

export const Form = styled.form`

  width: 100%;
  max-width: 400px;
  padding: 1rem;

`;

export const Title = styled.h1`

  text-align: center;
  margin-bottom: 20px;
`;

export const Error = styled.div`

  color: orangered; 
  margin-bottom: 15px;
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 15px;
`;

export const LinkFooter = styled(Link)`
  color: ${({ theme }) => theme.colors.primary}; 
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
  
`;