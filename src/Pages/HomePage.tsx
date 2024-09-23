import FilteringByPlatform from "@/components/FilteringByPlatform.tsx";
import SortGames from "@/components/SortGames.tsx";
import GameContainer from "@/components/GameContainer.tsx";
import useStore from "@/store.ts";

const HomePage = () => {
    const genre = useStore(store => store.gameQuery.genre);
    const platform = useStore(state => state.gameQuery.platform);

    return (
        <div className={"col-span-6 sm:col-span-5"}>
            <div className={"py-4 flex flex-col gap-x-4 mb-4 justify-center sm:justify-start"}>
                {(genre?.name || platform?.name) &&
                    <p className={"text-3xl text-gray-700 dark:text-gray-200 font-bold"}>{genre?.name} {genre && "/"} {platform?.name} Games</p>}
                <div className={"flex gap-x-4 mt-2"}>
                    <FilteringByPlatform/>
                    <SortGames/>
                </div>
            </div>
            <GameContainer/>
        </div>
    );
};

export default HomePage;