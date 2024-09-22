import Navbar from "@/components/Navbar.tsx";
import "./app.css"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GameContainer from "@/components/GameContainer.tsx";
import FilteringByPlatform from "@/components/FilteringByPlatform.tsx";
import SortGames from "@/components/SortGames.tsx";
import Sidebar from "@/components/Sidebar.tsx";
import useStore from "@/store.ts";



function App() {

    const genre = useStore(store => store.gameQuery.genre);
    const platform = useStore(state => state.gameQuery.platform);

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
                    <div className={"py-4 flex flex-col gap-x-4 mb-4 justify-center sm:justify-start"}>
                    {(genre?.name || platform?.name) && <p className={"text-3xl text-gray-700 dark:text-gray-200 font-bold"}>{genre?.name} {genre && "/"} {platform?.name} Games</p>}
                       <div className={"flex gap-x-4 mt-2"}>
                           <FilteringByPlatform/>
                           <SortGames/>
                       </div>
                    </div>
                    <GameContainer/>
                </div>
            </main>
        </ThemeProvider>
    )
}

export default App
