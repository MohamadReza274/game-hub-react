import Navbar from "@/components/Navbar.tsx";
import "./app.css"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GameContainer from "@/components/GameContainer.tsx";
import {useState} from "react";
import {Genre} from "@/hooks/useGenres.ts";
import FilteringByPlatform from "@/components/FilteringByPlatform.tsx";
import {Platform} from "@/hooks/usePlatforms.ts";
import SortGames from "@/components/SortGames.tsx";
import Sidebar from "@/components/Sidebar.tsx";

function App() {

    const [selectGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
    const [selectSortOrder, setSelectSortOrder] = useState<string | null>(null);
    const [searchValue, setSearchValue] = useState<string | null>(null);

    return (
        <ThemeProvider>
            <div>
                <nav>
                    <Navbar onSearchGames={(value) => setSearchValue(value)}/>
                </nav>
                <aside className={"pt-3 pl-2"}>
                   <Sidebar selectedGenre={selectGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
                </aside>
                <main>
                    <div className={"py-4 flex gap-x-4  justify-center sm:justify-start sm:pl-9"}>
                        <FilteringByPlatform onSelectPlatform={(platform) => setSelectPlatform(platform)}/>
                        <SortGames onSelectedSortOrder={(value) => setSelectSortOrder(value)}/>
                    </div>
                    <GameContainer searchGames={searchValue} selectSortOrder={selectSortOrder}
                                   selectPlatform={selectPlatform}
                                   selectGenre={selectGenre}/>
                </main>

            </div>
        </ThemeProvider>
    )
}

export default App
