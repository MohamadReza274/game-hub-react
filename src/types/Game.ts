import Platform from "@/types/Platform.ts";
import Genre from "@/types/Genre.ts";
import Publisher from "@/types/Publisher.ts";

interface Game {
    id: number;
    name: string;
    background_image: string;
    genres: Genre[];
    publishers: Publisher[];
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    page: number;
    page_size: number;
    description_raw: string;
}

export default Game;