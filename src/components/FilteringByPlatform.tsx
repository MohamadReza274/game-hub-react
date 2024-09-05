import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";
import usePlatforms from "@/hooks/usePlatforms.ts";
import Spinner from "@/components/Spinner.tsx";


const FilteringByPlatform = () => {

    const {data: platforms, isLoading, error} = usePlatforms();

    if (isLoading) {
        return <Spinner/>;
    }
    if (error) return null;
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Platform"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Platforms</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    {platforms.map((platform) => (
                        <SelectItem key={platform.id} value={platform.slug}>{platform.name}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default FilteringByPlatform;