import {useQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponseType} from "@/services/api-client.ts";
import platforms from "@/data/platforms.ts";
import {Platform} from "@/types";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");


const usePlatforms = () => useQuery<FetchResponseType<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: platforms.length, results: platforms,next:null}
});

export default usePlatforms;