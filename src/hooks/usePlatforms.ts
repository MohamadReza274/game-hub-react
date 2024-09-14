import {useQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponseType} from "@/services/api-client.ts";
import platforms from "@/data/platforms.ts";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery<FetchResponseType<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: platforms.length, results: platforms}
});

export default usePlatforms;