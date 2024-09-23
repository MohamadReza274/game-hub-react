import {useQuery} from "@tanstack/react-query";
import apiClient from "@/services/api-client.ts";
import {Game} from "@/hooks/useGames.ts";

const apiclient = new apiClient<Game>("/games");


const useGame = (id: number) => {
    return useQuery({
        queryKey: ["games", id],
        queryFn: () => apiclient.getById(id),
    })
}

export default useGame;