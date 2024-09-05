import useGenres, {Genre} from "@/hooks/useGenres.ts";
import getCroppedImage from "@/services/GetCroppedImage.ts";
import Spinner from "@/components/Spinner.tsx";
import {Button} from "@/components/ui/button.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {

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
                        <Button variant={"link"} onClick={() => onSelectGenre(genre)}>
                            <h5>{genre.name}</h5>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;