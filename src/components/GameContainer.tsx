import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";

interface Game {
    id: number;
    name: string;
}

interface GameResponse {
    count: number;
    results: Game[];
}

const GameContainer = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiClient.get<GameResponse>("/games").then(res => {
            setGames(res.data.results);
        })
            .catch(error => {
                setError(error.message);
            }).finally(() => {
                setLoading(false);
        })
    }, [])

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