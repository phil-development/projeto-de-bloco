import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const location = useLocation();

    const isAuthenticated = !!localStorage.getItem('session_id');

    if (!isAuthenticated) {
        return <Navigate to="/signIn" replace state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;