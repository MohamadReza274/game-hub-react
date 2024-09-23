interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    page: number;
    page_size: number;
    description_raw: string;
}

interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface Genre {
    id: number;
    name: string;
    image_background: string;
}


export type {Game, Platform, Genre};