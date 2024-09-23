import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponseType} from "@/services/api-client.ts";
import {Platform} from "@/hooks/usePlatforms.ts";
import useStore from "@/store.ts";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    page: number;
    page_size: number;
    description_raw:string;
}

const useGames = () => {
    const {gameQuery: {genre, platform, sortOrder, searchText}} = useStore()
    return useInfiniteQuery<FetchResponseType<Game>>({
        queryKey: ["games", genre?.name, platform?.name, sortOrder, searchText],
        queryFn: ({pageParam}) => apiClient.getAll({
            params: {
                genres: genre?.id,
                parent_platforms: platform?.id,
                ordering: sortOrder,
                search: searchText,
                page: pageParam
            }
        }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        }
    })
}

export default useGames;