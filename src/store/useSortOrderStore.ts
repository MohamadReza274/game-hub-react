import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

interface SortOrderStore {
    sort: string | null;

    setSortOrder(sort: string): void;
}

const useSortOrderStore = create<SortOrderStore>()(
    devtools(
        persist((set) => ({
            sort: null,
            setSortOrder: (sort: string) => set(() => ({sort}))
        }), {
            name: "sort",
        })
    )
)

export default useSortOrderStore;