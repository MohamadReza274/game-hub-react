import {Input} from "@/components/ui/input.tsx";

const SearchGames = () => {
    return (
        <Input className={'max-w-3xl w-full'} placeholder={"Search... "} name={"search"} type={"search"}/>
    );
};

export default SearchGames;