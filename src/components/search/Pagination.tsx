import { ReactElement } from "react";

export function Pagination({ currentPage, setCurrentPage, totalPages }: { currentPage: number, setCurrentPage: Function, totalPages: number }): ReactElement {

    function nextPage(): void {
        setCurrentPage((page: number) => page + 1);
    }

    function previousPage(): void {
        setCurrentPage((page: number) => page - 1);
    }

    return (
        <section id="pagination">
            <button id="previous" onClick={() => previousPage()} disabled={currentPage > 1 ? false : true}>Previous</button>
            <div id="pageNumber">Page <p>{currentPage} / {totalPages} </p></div>
            <button id="next" onClick={() => nextPage()} disabled={currentPage < totalPages ? false : true}>Next</button>
        </section>
    );
}