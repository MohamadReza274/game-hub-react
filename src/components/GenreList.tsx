import useGenres, {Genre} from "@/hooks/useGenres.ts";
import getCroppedImage from "@/services/GetCroppedImage.ts";
import Spinner from "@/components/Spinner.tsx";
import {Button} from "@/components/ui/button.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data: genres, isLoading} = useGenres();

    if (isLoading) {
        return <Spinner/>;
    }
    return (
        <div>
            <ul className={"list-none px-3"}>
                {genres.map((genre) => (<li key={genre.id} className={"flex gap-x-4 py-2"}>
                        <img src={getCroppedImage(genre.image_background)} className={"w-8 h-8 rounded-full"}
                             alt={"genreImage"}/>
                        <Button className={`text-gray-800 dark:text-gray-300 ${genre.id == selectedGenre?.id && "font-bold tracking-wide text-gray-900 dark:text-gray-200"}`} variant={"link"}
                                onClick={() => onSelectGenre(genre)}>
                            <h5>{genre.name}</h5>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;