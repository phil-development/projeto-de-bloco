import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import MovieInfo from "../pages/MovieInfo";

const router = createBrowserRouter([
    {
        path: '/projeto-de-bloco',
        element: <Home />
    },
    {
        path: '/projeto-de-bloco/movieInfo/:id',
        element: <MovieInfo />
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
};