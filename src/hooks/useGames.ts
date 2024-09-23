import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponseType} from "@/services/api-client.ts";
import useStore from "@/store.ts";
import {Game} from "@/types";

const apiClient = new ApiClient<Game>("/games");



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