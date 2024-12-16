import React from 'react';
import { Container, Label, InputComponent } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
    return (
        <Container>
            <Label htmlFor={rest.id}>{label}</Label>
            <InputComponent {...rest} />
        </Container>
    );
};

export default Input;