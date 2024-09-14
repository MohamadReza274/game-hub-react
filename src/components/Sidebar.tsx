import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import GenreList from "@/components/GenreList.tsx";
import {MenuIcon} from "@/icons";


const Sidebar = () => {
    const [openSheet, setOpenSheet] = useState(false);
    return (
        <div>
            <div className={"hidden sm:flex"}>
                <GenreList />
            </div>
            <div className={"sm:hidden"}>
                <Sheet open={openSheet} onOpenChange={() => setOpenSheet(!openSheet)}>
                    <SheetTrigger className={""} asChild>
                        <Button className={"p00"} variant={"link"}><MenuIcon className={"h-5 w-5"}/></Button>
                    </SheetTrigger>
                    <SheetContent forceMount={true} className={" w-1/2 md:w-1/4 overflow-auto"} side={"left"}>
                        <GenreList onOpenDialog={(open) => setOpenSheet(open)}
                                  />
                    </SheetContent>

                </Sheet>
            </div>
        </div>
    );
};

export default Sidebar;