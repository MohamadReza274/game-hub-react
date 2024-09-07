import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
import {AlignJustify} from "lucide-react";
import getCroppedImage from "@/services/GetCroppedImage.ts";
import useGenres, {Genre} from "@/hooks/useGenres.ts";
import {useState} from "react";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const Sidebar = ({onSelectGenre, selectedGenre}: Props) => {
    const {data: genres} = useGenres();
    const [openSheet, setOpenSheet] = useState(false);
    return (
        <Sheet open={openSheet} onOpenChange={() => setOpenSheet(!openSheet)}>
            <SheetTrigger className={""} asChild>
                <Button className={"p00"} variant={"link"}><AlignJustify className={"h-5 w-5"}/></Button>
            </SheetTrigger>
            <SheetContent forceMount={true} className={"w-2/5 md:w-1/4"} side={"left"}>
                <div>
                    <h1 className={"mb-2 ml-4 text-2xl"}>Genres</h1>
                    <ul className={"list-none px-3"}>
                        {genres.map((genre) => (<li key={genre.id} className={"flex gap-x-2 py-2"}>
                                <img src={getCroppedImage(genre.image_background)}
                                     className={"w-8 h-8 rounded-full object-cover"}
                                     alt={"genreImage"}/>
                                <Button
                                    className={`text-gray-800 dark:text-gray-300 ${genre.id === selectedGenre?.id && "font-bold tracking-wide text-gray-900 dark:text-gray-200"}`}
                                    variant={"link"}
                                    onClick={() => {
                                        onSelectGenre(genre)
                                        setOpenSheet(false)
                                    }}>
                                    <h5>{genre.name}</h5>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </SheetContent>

        </Sheet>
    );
};

export default Sidebar;