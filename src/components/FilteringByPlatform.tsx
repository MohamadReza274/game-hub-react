import usePlatforms from "@/hooks/usePlatforms.ts";
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
import usePlatformStore from "@/store/usePlatformStore.ts";

const FilteringByPlatform = () => {

    const {data: platforms, isLoading, error} = usePlatforms();
    const setPlatform = usePlatformStore(state => state.setPlatform)

    if (isLoading) {
        return <Spinner/>;
    }
    if (error) return null;

    const handleChangePlatform = (value: number) => {
        platforms?.results.filter(platform => platform.id == value).map(p => {
            setPlatform(p);
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
                    {platforms?.results.map((platform) => (
                        <SelectItem key={platform.id} value={platform.id.toString()}>{platform.name}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default FilteringByPlatform;