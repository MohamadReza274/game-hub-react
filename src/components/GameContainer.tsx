import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "@/components/Spinner.tsx";
import {Game} from "@/types";

const GameContainer = () => {

    const {data: games, isLoading, error, fetchNextPage, hasNextPage} = useGames();

    if (isLoading) {
        return <div className={"flex flex-wrap gap-x-3 gap-y-4 justify-center"}>
            {isLoading && [...Array(9).keys()].map((skeleton) => (<div className={""} key={skeleton}>
                <Skeleton className={"h-[250px] w-[350px] rounded-xl my-1"}/>
                <Skeleton className={"h-[25px] w-[350px] rounded-xl my-1"}/>
                <Skeleton className={"h-[25px] w-[350px] rounded-xl"}/>
            </div>))}
        </div>
    }

    // if (games?.results?.length === 0) {
    //     return <p className={"text-3xl text-gray-600 dark:text-gray-300"}>There is no games.</p>
    // }

    const fetchedGameCount = games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <div className={"flex flex-col"}>
            {error && <p className={"text-red-500 text-2xl p-2"}>{error.message}</p>}
            <InfiniteScroll next={() => fetchNextPage()} hasMore={hasNextPage} loader={<Spinner/>}
                            dataLength={fetchedGameCount}>
                <div className={"flex gap-4 flex-wrap justify-center"}>
                    {games?.pages.map((page, i) => {
                        return <React.Fragment key={i}>
                            {page?.results.map((game: Game) => (<GameCard key={game.id} game={game}/>))}
                        </React.Fragment>
                    })}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default GameContainer;