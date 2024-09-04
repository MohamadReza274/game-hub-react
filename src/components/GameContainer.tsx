import useGames, {Game} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";


const GameContainer = () => {

    const {data: games, isLoading, error} = useGames()

    return (
        <div>
            <div className={"flex flex-wrap gap-x-3 gap-y-4 justify-center"}>
                {isLoading && games.map((skeleton) => (<div className={""} key={skeleton.id}>
                    <Skeleton className={"h-[125px] w-[250px] rounded-xl my-1"}/>
                    <Skeleton className={"h-[25px] w-[250px] rounded-xl my-1"}/>
                    <Skeleton className={"h-[25px] w-[250px] rounded-xl"}/>
                </div>))}
            </div>
            {error && <p className={"text-red-500 text-2xl p-2"}>{error}</p>}
            <div className={"flex flex-col items-center sm:flex-row sm:justify-center flex-wrap gap-4 p-4"}>
                {games.map((game: Game) => {
                    return <GameCard key={game.id} game={game}/>
                })}
            </div>
        </div>
    );
};

export default GameContainer;