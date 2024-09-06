import usePlatforms, {Platform} from "@/hooks/usePlatforms.ts";
import Spinner from "@/components/Spinner.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
}

const FilteringByPlatform = ({onSelectPlatform}: Props) => {

    const {data: platforms, isLoading, error} = usePlatforms();

    if (isLoading) {
        return <Spinner/>;
    }
    if (error) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={"min-w-[200px]"} >Select Platform</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuRadioGroup>
                    {platforms?.map((platform: Platform) => (
                        <DropdownMenuRadioItem onClick={() => onSelectPlatform(platform)} key={platform.id}
                                               value={platform.slug}>{platform.name}</DropdownMenuRadioItem>))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default FilteringByPlatform;