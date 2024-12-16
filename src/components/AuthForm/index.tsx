import React from "react";

import {
    Container,
    Form,
    Title,
    Error,
    LinkContainer,
    LinkFooter,
} from "./styles";

import { Button, Input } from '../index';

interface AuthFormProps {
    title: string;
    submitText: string;
    linkTo: string;
    linkText: string;
    onSubmit: (e: React.FormEvent) => void;
    error: string | null;
    loading: boolean;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
    title,
    submitText,
    linkTo,
    linkText,
    onSubmit,
    error,
    loading,
    email,
    setEmail,
    password,
    setPassword,
}) => {

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Title>{title}</Title>
                <Input
                    label="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />

                <Input
                    label="Senha"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                />

                {error && <Error>{error}</Error>}
                <Button type="submit" disabled={loading}>
                    {loading ? "loading" : submitText}
                </Button>
                <LinkContainer>
                    <LinkFooter to={linkTo}>
                        {linkText}
                    </LinkFooter>
                </LinkContainer>
            </Form>
        </Container>
    );
};

export default AuthForm;