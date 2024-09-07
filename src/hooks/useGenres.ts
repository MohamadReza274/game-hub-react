import genres from "@/data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const UseGenres = () => {
    // get static data from Data folder
    return {data: genres, isLoading: false, error: null};

    // Get Genres from API
    // return useData<Genre>("/genres");
}

export default UseGenres;