import {Input} from "@/components/ui/input.tsx";
import {useRef} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Search} from "lucide-react";
import useStore from "@/store.ts";
import {useNavigate} from "react-router-dom";


const SearchGames = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const setSearch = useStore(state => state.setSearchText)
    const navigate = useNavigate();
    return (
        <form className="w-full flex gap-x-1" onSubmit={(e) => {
            e.preventDefault()
            if (inputRef.current) {
                setSearch(inputRef.current.value);
                navigate("/")
            }
        }}>
            <Input ref={inputRef} className={'max-w-3xl w-full'} placeholder={"Search... "} name={"search"}
                   type={"search"}/>
            <Button className={"w-12"} variant={"outline"}><Search/></Button>
        </form>
    );
};

export default SearchGames;