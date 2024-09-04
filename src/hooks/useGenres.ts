import useData from "@/hooks/useData.ts";

export interface Genre {
    id: string;
    name: string;
    image_background: string;
}

const UseGenres = () => useData<Genre>("/genres");

export default UseGenres;