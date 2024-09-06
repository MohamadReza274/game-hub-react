import useData from "@/hooks/useData.ts";
import {Genre} from "@/hooks/useGenres.ts";

interface Platform {
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
}


const useGames = (selectGenre?: Genre | null, selectPlatform?: Platform | null, selectSortOrder?: string | null) => useData<Genre>("/games", {
    params: {
        genres: selectGenre?.id,
        platforms: selectPlatform?.id,
        ordering: selectSortOrder,
    }
}, [selectGenre?.id, selectPlatform?.id, selectSortOrder]);

export default useGames;