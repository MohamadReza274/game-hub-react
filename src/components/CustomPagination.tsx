import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";


interface Props {
    page:number;
    pageSize:number;
}

const CustomPagination = ({page,page_size}:Props) => {

    const pages = pages

    return (
        <Pagination  className={"mt-4"}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#"/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default CustomPagination;