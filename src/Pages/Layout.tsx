import Navbar from "@/components/Navbar.tsx";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <Outlet/>
        </>
    );
};

export default Layout;