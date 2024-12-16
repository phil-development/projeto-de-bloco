import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const InputComponent = styled.input`
  background-color: ${({ theme }) => theme.colors.items};
  color: ${({ theme }) => theme.colors.text}; 
  outline: none;
  padding: 0.5rem;
  border: none;
  border-radius: 2px;
`;