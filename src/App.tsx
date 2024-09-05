import Navbar from "@/components/Navbar.tsx";
import "./app.css"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GameContainer from "@/components/GameContainer.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useEffect, useState} from "react";
import {Genre} from "@/hooks/useGenres.ts";

function App() {

    const [selectGenre, setSelectedGenre] = useState<Genre | null>(null);

    // const handleSelectGenre = (genre: Genre) => {
    //     setSelectedGenre(genre);
    // }

    useEffect(() => {
        console.log("Hello")
    }, [selectGenre]);

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
                    <GameContainer selectGenre={selectGenre}/>
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
