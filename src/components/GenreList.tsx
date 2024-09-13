import useGenres, {Genre} from "@/hooks/useGenres.ts";
import getCroppedImage from "@/services/GetCroppedImage.ts";
import {Button} from "@/components/ui/button.tsx";
import Spinner from "@/components/Spinner.tsx";
import genres from '../data/genres'

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
    onOpenDialog?: (open: boolean) => void;
}

const GenreList = ({onSelectGenre, selectedGenre, onOpenDialog}: Props) => {

    const {data, isLoading} = useGenres();

    if (isLoading) {
        return (<Spinner/>)
    }
    const {results} = data!;

    return (
        <div>
            <h1 className={"mb-2 ml-4 text-2xl"}>Genres</h1>
            <ul className={"list-none px-3"}>
                {results?.map((genre: Genre) => (<li key={genre.id} className={"flex gap-x-2 py-2"}>
                        <img src={getCroppedImage(genre.image_background)}
                             className={"w-8 h-8 rounded-full object-cover"}
                             alt={"genreImage"}/>
                        <Button
                            className={`text-gray-800 text-wrap dark:text-gray-300 ${genre.id === selectedGenre?.id && "font-bold tracking-wide text-gray-900 dark:text-gray-200"}`}
                            variant={"link"}
                            onClick={() => {
                                onSelectGenre(genre);
                                if (onOpenDialog) {
                                    onOpenDialog(false);
                                }
                            }}>
                            <h5>{genre.name}</h5>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;