import {Game} from "@/hooks/useGames.ts";
import {Card, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import GamePlatformIcons from "@/components/GamePlatformIcons.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImage from "@/services/GetCroppedImage.ts";

interface GameProps {
    game: Game;
}

const GameCard = ({game}: GameProps) => {
    return (
        <Card className="w-[350px] overflow-hidden transform transition-transform delay-75 ease-in-out hover:scale-105">
            <a href={"#"}>
                <img className={"w-full max-h-[250px] h-full"} src={getCroppedImage(game.background_image)}
                     alt={"Game Image"}/>
            </a>
            <CardHeader>
                <h2 className={"text-2xl"}>{game.name}</h2>
            </CardHeader>
            <CardFooter className={"flex justify-between"}>
                <div className={'flex mx-1 text-gray-500 gap-x-2'}>
                    {game.parent_platforms?.map(({platform}) => {
                        return <GamePlatformIcons key={platform.id} platform={platform}/>
                    })}
                </div>
                {game.metacritic > 0 && <CriticScore score={game.metacritic}/>}
            </CardFooter>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
    );
};

export default GameCard;