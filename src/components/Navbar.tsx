import Logo from '../assets/14321824_5445208.jpg'
import {MoonIcon, SunIcon} from "lucide-react";
import {useTheme} from "@/components/theme-provider.tsx";
import {Button} from "@/components/ui/button.tsx";
import SearchGames from "@/components/SearchGames.tsx";

interface Props {
    onSearchGames: (value: string) => void;
}

const Navbar = ({onSearchGames}:Props) => {
    const {setTheme} = useTheme();
    return (
        <nav className="flex justify-between items-center w-full p-3">
            <div className={"flex gap-x-2 items-center"}>
                <img src={Logo} alt={"Logo"} className={"w-8 h-8 rounded-full"}/>
               <SearchGames onSearchGames={(value) => onSearchGames(value)} />
            </div>
            <Button className={"hidden dark:flex"} onClick={() => setTheme("light")} variant={"link"}><SunIcon className={"w-5 h-5"} /></Button>
            <Button className={"dark:hidden"} onClick={() => setTheme("dark")} variant={"link"}><MoonIcon className={"w-5 h-5"} /></Button>
        </nav>
    );
};

export default Navbar;