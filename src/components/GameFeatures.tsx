import GameItemDefinition from "@/components/GameItemDefinition.tsx";
import {Game} from "@/types";
import CriticScore from "@/components/CriticScore.tsx";

interface Props {
    game: Game;
}

const GameFeatures = ({game}: Props) => {
    return (
        <dl className={"grid grid-cols-2 p-2"}>
            <GameItemDefinition term={"Platforms: "}>
                {game.parent_platforms?.map(({platform}) => (<p key={platform.id}>{platform.name}</p>))}
            </GameItemDefinition>
            <GameItemDefinition term={"Metascore: "}>
                <CriticScore score={game.metacritic}/>
            </GameItemDefinition>
            <GameItemDefinition term={"Genres: "}>
                {game.genres?.map(genre => (<p key={genre.id}>{genre.name}</p>))}
            </GameItemDefinition>
            <GameItemDefinition term={"Publishers: "}>
                {game.publishers?.map(publisher => (<p key={publisher.id}>{publisher.name}</p>))}
            </GameItemDefinition>
        </dl>
    );
};

export default GameFeatures;