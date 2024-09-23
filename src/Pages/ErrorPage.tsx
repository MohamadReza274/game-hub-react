import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Navbar />
            <div className={"p-4"}>
                <h2>Oops</h2>
                {isRouteErrorResponse(error) ? "This page does not exist" : "An unexpected error occurred."}
            </div>
        </>
    );
};

export default ErrorPage;