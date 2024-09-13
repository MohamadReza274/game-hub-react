import {useQuery} from "@tanstack/react-query";
import apiClient from "@/services/api-client.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface GenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    // get static data from Data folder
    return useQuery({
        queryKey: ["genres"],
        queryFn: async () => {
            const res = await apiClient.get<GenreResponse>("/genres");
            return res.data;
        }
    });

    // Get Genres from API
    // return useData<Genre>("/genres");
}

export default useGenres;