import useScreenShots from "@/hooks/useScreenShots.ts";

interface Props {
    gameId: number;
}

const GameScreenShots = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenShots(gameId);
    if (isLoading || !data?.results?.length) {
        return null;
    }
    if (error) {
        throw error;
    }
    return (
        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-2 "}>
            {data.results.map(img => (<img key={img.id} src={img.image} alt={"img"}/>))}
        </div>
    );
};

export default GameScreenShots;