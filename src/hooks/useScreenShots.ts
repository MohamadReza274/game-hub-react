import {useQuery} from "@tanstack/react-query";
import apiClient from "@/services/api-client.ts";
import {ScreenShot} from "@/types";


const useScreenShots = (gameId: number) => {
    const apiclient = new apiClient<ScreenShot>(`games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: apiclient.getAll
    })
}

export default useScreenShots;