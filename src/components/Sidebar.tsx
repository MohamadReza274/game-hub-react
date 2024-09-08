import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
import {AlignJustify} from "lucide-react";
import {Genre} from "@/hooks/useGenres.ts";
import {useState} from "react";
import GenreList from "@/components/GenreList.tsx";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}


const Sidebar = ({onSelectGenre, selectedGenre}: Props) => {
    const [openSheet, setOpenSheet] = useState(false);
    return (
        <div>
            <div className={"hidden sm:flex"}>
                <GenreList onSelectGenre={onSelectGenre} selectedGenre={selectedGenre}/>
            </div>
            <div className={"sm:hidden"}>
                <Sheet open={openSheet} onOpenChange={() => setOpenSheet(!openSheet)}>
                    <SheetTrigger className={""} asChild>
                        <Button className={"p00"} variant={"link"}><AlignJustify className={"h-5 w-5"}/></Button>
                    </SheetTrigger>
                    <SheetContent forceMount={true} className={" w-1/2 md:w-1/4 overflow-auto"} side={"left"}>
                        <GenreList onSelectGenre={onSelectGenre} selectedGenre={selectedGenre}/>
                    </SheetContent>

                </Sheet>
            </div>
        </div>
    );
};

export default Sidebar;