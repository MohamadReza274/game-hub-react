import useData from "@/hooks/useData.ts";
import {Genre} from "@/hooks/useGenres.ts";

export interface Platform {
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


const useGames = (selectGenre?: Genre | null, selectPlatform?: Platform | null, selectSortOrder?: string | null, searchGames?: string | null) => useData<Genre>("/games", {
    params: {
        genres: selectGenre?.id,
        platforms: selectPlatform?.id,
        ordering: selectSortOrder,
        search: searchGames,
    }
}, [selectGenre?.id, selectPlatform?.id, selectSortOrder, searchGames]);

export default useGames;