import {Game} from "@/hooks/useGames.tsx";
import {Card, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import GamePlatformIcons from "@/components/GamePlatformIcons.tsx";
import CriticScore from "@/components/CriticScore.tsx";

interface GameProps {
    game: Game;
}

const GameCard = ({game}: GameProps) => {
    return (
        <Card className="w-[350px] overflow-hidden">
            <img className={"w-full"} src={game.background_image} alt={"Game Image"}/>
            <CardHeader>
                <h2 className={"text-2xl"}>{game.name}</h2>
            </CardHeader>
            <CardFooter className={"flex justify-between"}>
                <div className={'flex mx-1 text-gray-500 gap-x-2'}>
                    {game.parent_platforms?.map(({platform}) => {
                        return <GamePlatformIcons key={platform.id} platform={platform}/>
                    })}
                </div>
                <CriticScore score={game.metacritic}/>
            </CardFooter>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    );
};

export default GameCard;