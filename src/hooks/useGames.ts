import {Genre} from "@/hooks/useGenres.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "@/services/api-client.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    page: number;
    page_size: number;
}

const useGames = (selectGenre?: Genre | null, selectPlatform?: Platform | null, selectSortOrder?: string | null, searchGames?: string | null) => useQuery<Game[]>({
    queryKey: ["games", selectGenre?.name, selectPlatform?.name, selectSortOrder, searchGames],
    queryFn: () => apiClient.get("/games", {
        params: {
            genres: selectGenre?.id,
            platforms: selectPlatform?.id,
            ordering: selectSortOrder,
            search: searchGames,
        }
    }).then(res => res.data.results)
})

export default useGames;