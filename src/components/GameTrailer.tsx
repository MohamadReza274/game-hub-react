import useTrailers from "@/hooks/useTrailers.tsx";

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const {data: trailers, isLoading, error} = useTrailers(gameId);

    if (isLoading || !trailers?.results[0]) {
        return null;
    }

    if (error) {
        throw error;
    }

    return (
        <video src={trailers?.results[0].data[480]} poster={trailers?.results[0].preview} controls/>
    );
};

export default GameTrailer;