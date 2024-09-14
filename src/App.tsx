import Navbar from "@/components/Navbar.tsx";
import "./app.css"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GameContainer from "@/components/GameContainer.tsx";
import FilteringByPlatform from "@/components/FilteringByPlatform.tsx";
import SortGames from "@/components/SortGames.tsx";
import Sidebar from "@/components/Sidebar.tsx";

function App() {

    return (
        <ThemeProvider>
            <nav>
                <Navbar/>
            </nav>
            <main className={"grid grid-cols-6"}>
                <aside className={"pt-3 pl-2 "}>
                    <Sidebar/>
                </aside>
                <div className={"col-span-6 sm:col-span-5"}>
                    <div className={"py-4 flex gap-x-4 mb-4 justify-center sm:justify-start"}>
                        <FilteringByPlatform/>
                        <SortGames/>
                    </div>
                    <GameContainer/>
                </div>
            </main>
        </ThemeProvider>
    )
}

export default App
