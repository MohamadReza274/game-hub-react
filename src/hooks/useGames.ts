import {Genre} from "@/hooks/useGenres.ts";
import {useQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponseType} from "@/services/api-client.ts";
import {Platform} from "@/hooks/usePlatforms.ts";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    page: number;
    page_size: number;
}

const useGames = (selectGenre?: Genre | null, selectPlatform?: Platform | null, selectSortOrder?: string | null, searchGames?: string | null) => useQuery<FetchResponseType<Game>>({
    queryKey: ["games", selectGenre?.name, selectPlatform?.name, selectSortOrder, searchGames],
    queryFn: () => apiClient.getAll({
        params: {
            genres: selectGenre?.id,
            parent_platforms: selectPlatform?.id,
            ordering: selectSortOrder,
            search: searchGames
        }
    })
})

export default useGames;