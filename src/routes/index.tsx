import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import Home from '../pages/Home/';
import SignIn from '../pages/SignIn/';
import Callback from '../pages/Callback';
import MovieInfo from '../pages/MovieInfo';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter basename="/projeto-de-bloco">
            <Routes>
                <Route path="/signIn" element={<PublicRoute><SignIn /></PublicRoute>} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path='/movieInfo/:id' element={<PrivateRoute><MovieInfo /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;