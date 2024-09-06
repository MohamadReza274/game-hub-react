import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

const sortOptions = [
    {value: "_", label: "Relevance"},
    {value: "-added", label: "Date Added"},
    {value: "name", label: "Name"},
    {value: "-released", label: "Release Date"},
    {value: "-metacritic", label: "Popularity"},
    {value: "-rating", label: "Average rating"}
]

interface Props {
    onSelectedSortOrder: (sort: string) => void;
}

const SortGames = ({onSelectedSortOrder}: Props) => {
    return (
        <Select onValueChange={(value) => {
            onSelectedSortOrder(value)
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