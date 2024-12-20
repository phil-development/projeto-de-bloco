import React from 'react';
import { ButtonComponent } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonComponent {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default Button;