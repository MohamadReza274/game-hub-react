import Navbar from "@/components/Navbar.tsx";
import "./app.css"
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GameContainer from "@/components/GameContainer.tsx";
import GenreList from "@/components/GenreList.tsx";

function App() {

    return (
        <ThemeProvider>
            <div className={'gird-area'}>
                <nav className="navbar">
                    <Navbar/>
                </nav>
                <aside className={" sidebar"}>
                    <GenreList/>
                </aside>
                <main className={"main"}>
                    <GameContainer/>
                </main>
            </div>
        </ThemeProvider>
    )
}

export default App
