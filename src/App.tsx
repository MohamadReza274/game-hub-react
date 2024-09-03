import Navbar from "@/components/Navbar.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import GameContainer from "@/components/GameContainer.tsx";

function App() {

  return (
      <ThemeProvider>
          <div className={'grid grid-cols-1'}>
              <nav className="">
                  <Navbar/>
              </nav>
              <aside className={"hidden sm:block"}>Side bar</aside>
              <main>
                  <GameContainer/>
              </main>
          </div>
      </ThemeProvider>
  )
}

export default App
