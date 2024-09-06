import Navbar from "@/components/Navbar.tsx";
import "./app.css"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GameContainer from "@/components/GameContainer.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "@/hooks/useGenres.ts";
import FilteringByPlatform from "@/components/FilteringByPlatform.tsx";
import {Platform} from "@/hooks/usePlatforms.ts";

function App() {

    const [selectGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);

    console.log("App Components", selectPlatform);

    return (
        <ThemeProvider>
            <div className={'gird-area'}>
                <nav className="navbar">
                    <Navbar/>
                </nav>
                <aside className={" sidebar"}>
                    <GenreList selectedGenre={selectGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
                </aside>
                <main className={"main"}>
                    <div>
                        <FilteringByPlatform onSelectPlatform={(platform) => setSelectPlatform(platform)}/>
                    </div>
                    <GameContainer selectPlatform={selectPlatform} selectGenre={selectGenre}/>
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
