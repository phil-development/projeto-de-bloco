import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('session_id');

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;