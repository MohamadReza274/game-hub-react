import {useParams} from "react-router-dom";
import useGame from "@/hooks/useGame.ts";


const GameDetails = () => {
    const {id} = useParams();
    const {data} = useGame(parseInt(id!));
    console.log(data)
    return (
        <div>
            <h2>{data?.name}</h2>
            <p>{data?.description_raw}</p>
        </div>
    );
};

export default GameDetails;