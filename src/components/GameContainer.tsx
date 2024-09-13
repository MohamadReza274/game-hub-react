import useGames, {Game} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {Genre} from "@/hooks/useGenres.ts";
import {Platform} from "@/hooks/usePlatforms.ts";

interface Props {
    selectGenre: Genre | null;
    selectPlatform: Platform | null;
    selectSortOrder: string | null;
    searchGames: string | null;
}

const GameContainer = ({selectGenre, selectPlatform, selectSortOrder, searchGames}: Props) => {

    const {data: games, isLoading, error} = useGames(selectGenre, selectPlatform, selectSortOrder, searchGames);

    if (isLoading) {
        return <div className={"flex flex-wrap gap-x-3 gap-y-4 justify-center"}>
            {isLoading && [...Array(9).keys()].map((skeleton) => (<div className={""} key={skeleton}>
                <Skeleton className={"h-[250px] w-[350px] rounded-xl my-1"}/>
                <Skeleton className={"h-[25px] w-[350px] rounded-xl my-1"}/>
                <Skeleton className={"h-[25px] w-[350px] rounded-xl"}/>
            </div>))}
        </div>
    }

    return (
        <>
            {error && <p className={"text-red-500 text-2xl p-2"}>{error.message}</p>}
            <div className={"flex gap-4 flex-wrap justify-center"}>
                {
                    games?.map((game: Game) => (<GameCard key={game.id} game={game}/>))}
            </div>

        </>
    );
};

export default GameContainer;