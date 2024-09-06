import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

const sortOptions = ["Relevance", "Date Added", "Name", "Release Date", "Popularity", "Average rating"]

const SortGames = () => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sort Options</SelectLabel>
                    {sortOptions.map((sort) => (<SelectItem value={sort.toLowerCase()}>{sort}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SortGames;