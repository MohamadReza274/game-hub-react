import {useParams} from "react-router-dom";


const GameDetails = () => {
    const {id} = useParams();
    return (
        <div>
            User: {id}
        </div>
    );
};

export default GameDetails;