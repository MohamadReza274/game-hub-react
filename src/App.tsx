import Navbar from "@/components/Navbar.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {useEffect} from "react";
import apiClient from "@/services/api-client.ts";
import GameContainer from "@/components/GameContainer.tsx";

function App() {

    useEffect(() => {
        apiClient.get("/games").then((data) => {
            console.log(data.data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

  return (
      <ThemeProvider>
          <div className={'grid grid-cols-1'}>
              <nav className="">
                  <Navbar/>
              </nav>
              <aside className={"hidden sm:block bg-yellow-400"}>Side bar</aside>
              <main>
                  <GameContainer/>
              </main>
          </div>
      </ThemeProvider>
  )
}

export default App
