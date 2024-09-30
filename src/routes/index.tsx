import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/projeto-de-bloco-tp2',
        element: <Home />
    },
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
};