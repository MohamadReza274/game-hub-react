import useGenres, {Genre} from "@/hooks/useGenres.ts";
import getCroppedImage from "@/services/GetCroppedImage.ts";
import {Button} from "@/components/ui/button.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {

    const {data: genres} = useGenres();

    return (
        <div>
            <h1 className={"mb-2 ml-4 text-2xl"}>Genres</h1>
            <ul className={"list-none px-3"}>
                {genres.map((genre) => (<li key={genre.id} className={"flex gap-x-2 py-2"}>
                        <img src={getCroppedImage(genre.image_background)}
                             className={"w-8 h-8 rounded-full object-cover"}
                             alt={"genreImage"}/>
                        <Button
                            className={`text-gray-800 text-wrap dark:text-gray-300 ${genre.id === selectedGenre?.id && "font-bold tracking-wide text-gray-900 dark:text-gray-200"}`}
                            variant={"link"}
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