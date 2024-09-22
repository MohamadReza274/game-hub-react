import {create} from "zustand";
import {Genre} from "@/hooks/useGenres.ts";
import {Platform} from "@/hooks/usePlatforms.ts";

interface GameType {
    searchText?: string;
    genre?: Genre;
    platform?: Platform;
    sortOrder?: string;
}

interface GameStore {
    gameQuery: GameType;
    setSearchText: (input: string) => void;
    setGenre: (genre: Genre) => void;
    setPlatform: (platform: Platform) => void;
    setSortOrder: (sort: string) => void;
}


const useStore = create<GameStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText: string) => set(() => ({gameQuery: {searchText}})),
    setGenre: (genre: Genre) => set(store => ({gameQuery: {...store.gameQuery, genre}})),
    setPlatform: (platform: Platform) => set(store => ({gameQuery: {...store.gameQuery, platform}})),
    setSortOrder: (sort) => set(store => ({gameQuery: {...store.gameQuery, sortOrder: sort}}))
}))

export default useStore;