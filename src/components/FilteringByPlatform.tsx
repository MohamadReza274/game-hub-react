import usePlatforms, {Platform} from "@/hooks/usePlatforms.ts";
import Spinner from "@/components/Spinner.tsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
}

const FilteringByPlatform = ({onSelectPlatform}: Props) => {

    const {data: platforms, isLoading, error} = usePlatforms();

    if (isLoading) {
        return <Spinner/>;
    }
    if (error) return null;

    const handleChangePlatform = (value: number) => {
        platforms.filter(platform => platform.id == value).map(p => {
            onSelectPlatform(p);
        });

    }

    return (
        <Select onValueChange={(value) => {
            handleChangePlatform(parseInt(value));
        }}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Platform"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Platforms</SelectLabel>
                    {platforms.map((platform) => (
                        <SelectItem key={platform.id} value={platform.id.toString()}>{platform.name}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default FilteringByPlatform;