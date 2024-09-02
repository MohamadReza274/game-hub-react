import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {CanceledError} from "axios";

export interface Game {
    id: number;
    name: string;
}

interface GameResponse {
    count: number;
    results: Game[];
}


export const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [gamesCount, setGamesCount] = useState(0);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const controller = new AbortController();

        apiClient.get<GameResponse>("/games",{signal:controller.signal}).then(res => {
            setGames(res.data.results);
            setGamesCount(res.data.count);
        })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            }).finally(() => {
            setLoading(false);
        })
        return () => controller.abort();
    }, [])

    return {games, error, loading, gamesCount};
};