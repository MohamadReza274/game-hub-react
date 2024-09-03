import {Game, useGames} from "@/hooks/useGames.tsx";
import GameCard from "@/components/GameCard.tsx";


const GameContainer = () => {

    const {games, loading, error} = useGames()

    console.log(games);

    return (
        <div>
            {loading && <span className={"animate-spin "}>Loading...</span>}
            {error && <p className={"text-red-500 text-2xl p-2"}>{error}</p>}
            <div className={"flex flex-col sm:flex-row items-center flex-wrap justify-center gap-4 p-4"}>
                {games.map((game: Game) => <GameCard key={game.id} game={game}/>)}
            </div>
        </div>
    );
};

export default GameContainer;