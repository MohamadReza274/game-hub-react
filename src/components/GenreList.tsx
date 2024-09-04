import useGenres from "@/hooks/useGenres.ts";
import getCroppedImage from "@/services/GetCroppedImage.ts";


const GenreList = () => {
    const {data: genres} = useGenres();
    return (
        <div>
            <ul className={"list-none px-3"}>
                {genres.map((genre) => (<li key={genre.id}>
                        <a href={"#"} className={"flex gap-x-4 py-2"}>
                            <img src={getCroppedImage(genre.image_background)} className={"w-8 h-8 rounded-full"}
                                 alt={"genreImage"}/>
                            <h5>{genre.name}</h5>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;