import useGenres from "@/hooks/useGenres.ts";


const GenreList = () => {
    const {data: genres} = useGenres();
    return (
        <div>
            <ul>
                {genres.map((genre) => (<li key={genre.id}>{genre.name}</li>))}
            </ul>
        </div>
    );
};

export default GenreList;