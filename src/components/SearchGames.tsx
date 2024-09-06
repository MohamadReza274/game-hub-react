import {Input} from "@/components/ui/input.tsx";
import {useRef} from "react";

interface Props {
    onSearchGames: (value: string) => void;
}

const SearchGames = ({onSearchGames}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="w-full" onSubmit={(e) => {
            e.preventDefault()
            if (inputRef.current) {
                onSearchGames(inputRef.current.value);
            }
        }}>
            <Input ref={inputRef} className={'max-w-3xl w-full'} placeholder={"Search... "} name={"search"}
                   type={"search"}/>
        </form>
    );
};

export default SearchGames;