import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponseType} from "@/services/api-client.ts";
import {Platform} from "@/hooks/usePlatforms.ts";
import useGenreStore from "@/store/useGenreStore.ts";
import usePlatformStore from "@/store/usePlatformStore.ts";
import useSortOrderStore from "@/store/useSortOrderStore.ts";
import useSearchStore from "@/store/useSearchStore.ts";

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

const useGames = () => {
    const genre = useGenreStore(state => state.genre);
    const platform = usePlatformStore(state => state.platform);
    const sortOrder = useSortOrderStore(state => state.sort)
    const search = useSearchStore(state => state.search)
    return useInfiniteQuery<FetchResponseType<Game>>({
        queryKey: ["games", genre?.name, platform?.name, sortOrder, search],
        queryFn: ({pageParam}) => apiClient.getAll({
            params: {
                genres: genre?.id,
                parent_platforms: platform?.id,
                ordering: sortOrder,
                search: search,
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