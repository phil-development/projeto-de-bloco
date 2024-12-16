import styled from 'styled-components';

export const ButtonComponent = styled.button`
  width: 100%;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.primary}; 
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}; 
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.items}; 
    cursor: default;
  }
`;