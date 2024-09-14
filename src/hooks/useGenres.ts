import {useQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponseType} from "@/services/api-client.ts";
import genres from "@/data/genres.ts";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// interface GenreResponse {
//     count: number;
//     results: Genre[];
// }

const useGenres = () => {
    // get static data from Data folder

    return useQuery<FetchResponseType<Genre>>({
        queryKey: ["genres"],
        queryFn: apiClient.getAll,
        // Time to reFetch data from api
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {count: genres.length, results: genres}
    });

    // Get Genres from API
    // return useData<Genre>("/genres");
}

export default useGenres;