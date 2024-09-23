import {createBrowserRouter} from "react-router-dom";
import Layout from "@/Pages/Layout.tsx";
import GameDetails from "@/Pages/GameDetails.tsx";
import HomePage from "@/Pages/HomePage.tsx";
import ErrorPage from "@/Pages/ErrorPage.tsx";


const router = createBrowserRouter([
    {
        path: "/", element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: "/games/:id", element: <GameDetails/>},
        ],
        errorElement:<ErrorPage />
    },


]);

export default router;