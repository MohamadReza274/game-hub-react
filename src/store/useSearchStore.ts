import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

interface SearchStoreType {
    search: string | null;
    setSearch: (search: string) => void;
}

const useSearchStore = create<SearchStoreType>()(
    devtools(
        persist((set) => ({
            search: null,
            setSearch: (search: string) => set(() => ({search})),
        }), {
            name: "search",
        })
    )
)

export default useSearchStore