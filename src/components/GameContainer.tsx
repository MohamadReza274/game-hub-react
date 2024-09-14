import useGames, {Game} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";

const GameContainer = () => {

    const {data: games, isLoading, error} = useGames();

    if (isLoading) {
        return <div className={"flex flex-wrap gap-x-3 gap-y-4 justify-center"}>
            {isLoading && [...Array(9).keys()].map((skeleton) => (<div className={""} key={skeleton}>
                <Skeleton className={"h-[250px] w-[350px] rounded-xl my-1"}/>
                <Skeleton className={"h-[25px] w-[350px] rounded-xl my-1"}/>
                <Skeleton className={"h-[25px] w-[350px] rounded-xl"}/>
            </div>))}
        </div>
    }

    if (games?.results?.length === 0) {
        return <p className={"text-3xl text-gray-600 dark:text-gray-300"}>There is no games.</p>
    }

    return (
        <>
            {error && <p className={"text-red-500 text-2xl p-2"}>{error.message}</p>}
            <div className={"flex gap-4 flex-wrap justify-center"}>
                {
                    games?.results.map((game: Game) => (<GameCard key={game.id} game={game}/>))}
            </div>

        </>
    );
};

export default GameContainer;