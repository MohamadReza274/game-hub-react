import Navbar from "@/components/Navbar.tsx";
import {Outlet} from "react-router-dom";
import Sidebar from "@/components/Sidebar.tsx";


const Layout = () => {
    return (
        <>
            <nav>
                <Navbar/>
            </nav>
            <main className={"grid grid-cols-6"}>
                <aside className={"pt-3 pl-2 "}>
                    <Sidebar/>
                </aside>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;