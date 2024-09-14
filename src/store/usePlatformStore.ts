import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {Platform} from "@/hooks/usePlatforms.ts";

interface PlatformStore {
    platform: Platform | null;
    setPlatform: (platform: Platform) => void;
}

const usePlatformStore = create<PlatformStore>()(
    devtools(
        persist(
            (set) => ({
                platform: null,
                setPlatform: (platform: Platform) => set(() => ({platform: platform}))
            }), {
                name: "platform",
            }
        )
    )
)

export default usePlatformStore;