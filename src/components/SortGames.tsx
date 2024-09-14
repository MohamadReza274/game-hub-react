import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";
import useSortOrderStore from "@/store/useSortOrderStore.ts";

const sortOptions = [
    {value: "_", label: "Relevance"},
    {value: "-added", label: "Date Added"},
    {value: "name", label: "Name"},
    {value: "-released", label: "Release Date"},
    {value: "-metacritic", label: "Popularity"},
    {value: "-rating", label: "Average rating"}
]

const SortGames = () => {
    const setSortOrder = useSortOrderStore(state => state.setSortOrder);
    return (
        <Select onValueChange={(value) => {
            setSortOrder(value)
        }}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sort Options</SelectLabel>
                    {sortOptions.map((sort) => (
                        <SelectItem key={sort.label} value={sort.value}>{sort.label}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SortGames;