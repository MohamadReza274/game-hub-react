import {Game} from "@/hooks/useGames.tsx";
import {Card, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import GamePlatformIcons from "@/components/GamePlatformIcons.tsx";

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
            <CardFooter>
                {game.parent_platforms?.map(({platform}) => {

                    return <div className={'flex mx-1 text-gray-500'}>
                        <GamePlatformIcons key={platform.id} platform={platform}/>
                    </div>
                })}
            </CardFooter>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    );
};

export default GameCard;