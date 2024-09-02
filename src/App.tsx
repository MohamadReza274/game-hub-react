import Navbar from "@/components/Navbar.tsx";

function App() {

  return (
    <div className={'grid grid-cols-1'}>
        <nav className="">
            <Navbar />
        </nav>
        <aside className={"hidden sm:block bg-yellow-400"}>Side bar</aside>
        <main className={"bg-red-500"}>Main Content</main>
    </div>
  )
}

export default App
