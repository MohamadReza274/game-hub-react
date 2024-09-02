import Logo from '../assets/14321824_5445208.jpg'
import {Input} from "@/components/ui/input.tsx";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full py-2">
            <div className={"flex gap-x-2 items-center"}>
                <img src={Logo} alt={"Logo"} className={"w-12 h-12 rounded-full"}/>
                <Input className={'max-w-lg'} placeholder={"Search... "} name={"search"} type={"search"}/>
            </div>
        </nav>
    );
};

export default Navbar;