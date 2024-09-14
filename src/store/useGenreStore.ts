import {create} from 'zustand'
import {Genre} from "@/hooks/useGenres.ts";
import {devtools, persist} from "zustand/middleware";


interface GenreStore {
    genre: Genre | null;
    setGenre: (genre: Genre) => void;
}

const useGenreStore = create<GenreStore>()(
    devtools(
        persist((set) => ({
            genre: null,
            setGenre: (genre: Genre) => set(() => ({genre: genre}))
        }), {
            name: "genre-store"
        })
    )
)

export default useGenreStore;