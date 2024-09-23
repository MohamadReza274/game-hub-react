import {useParams} from "react-router-dom";
import useGame from "@/hooks/useGame.ts";
import ExpandableText from "@/components/ExpandableText.tsx";
import Spinner from "@/components/Spinner.tsx";
import GameFeatures from "@/components/GameFeatures.tsx";
import GameTrailer from "@/components/GameTrailer.tsx";
import GameScreenShots from "@/components/GameScreenShots.tsx";


const GameDetails = () => {
    const {id} = useParams();
    const {data: game, isLoading, error} = useGame(parseInt(id!));

    if (isLoading) {
        return <Spinner/>;
    }
    if (error || !game) return null;
    return (
        <div className={"p-8 grid grid-cols-1 sm:grid-cols-2 gap-4"}>
            <div>
                <h1 className={"text-3xl font-bold mb-2"}>{game.name}</h1>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameFeatures game={game}/>
            </div>
            <div>
                <GameTrailer gameId={game.id}/>
                <GameScreenShots gameId={game.id}/>
            </div>
        </div>
    );
};

export default GameDetails;