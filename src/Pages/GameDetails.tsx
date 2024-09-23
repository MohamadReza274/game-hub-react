import {useParams} from "react-router-dom";
import useGame from "@/hooks/useGame.ts";
import ExpandableText from "@/components/ExpandableText.tsx";
import Spinner from "@/components/Spinner.tsx";
import GameFeatures from "@/components/GameFeatures.tsx";


const GameDetails = () => {
    const {id} = useParams();
    const {data: game, isLoading, error} = useGame(parseInt(id!));

    if (isLoading) {
        return <Spinner/>;
    }
    if (error || !game) return null;
    return (
        <div className={"p-8"}>
            <h1 className={"text-3xl font-bold mb-2"}>{game.name}</h1>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameFeatures game={game}/>
        </div>
    );
};

export default GameDetails;