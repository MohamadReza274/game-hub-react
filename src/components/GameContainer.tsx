import {Game, useGames} from "@/hooks/useGames.tsx";


const GameContainer = () => {

    const {games, loading, error} = useGames()

    console.log(games);

    return (
        <div>
            {loading && <span className={"animate-spin "}>Loading...</span>}
            {error && <p className={"text-red-500 text-2xl p-2"}>{error}</p>}
            <ul>
                {games.map((game: Game) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </div>
    );
};

export default GameContainer;