import { ReactElement, useEffect, useState } from "react";
import { Game } from "../interfaces";
import { GameCard } from "./GameCard";
import { Pagination } from "./Pagination";
import { PAGINATION_PAGE_SIZE } from "../utils";

export function SearchResult( {result, showHeading}: {result: Game[], showHeading: boolean} ): ReactElement {
    const [currentPage, setCurrentPage] = useState<number>(1);
    let totalPages = Math.floor(result.length / PAGINATION_PAGE_SIZE) + 1;

    useEffect(() => {
        setCurrentPage(1);
        totalPages = Math.floor(result.length / PAGINATION_PAGE_SIZE) + 1;
    }, [result]);
    
    return (
        <section id="searchResult">
            {showHeading ? <h1 id="resultHeading">Games found: <p>{result.length}</p></h1> : <></>}
            {totalPages > 1 ? <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} /> : <></>}

            <section id="gameCards">
                {result.slice((currentPage-1) * PAGINATION_PAGE_SIZE, (currentPage-1) * PAGINATION_PAGE_SIZE + PAGINATION_PAGE_SIZE).map((game, index) => <GameCard key={index} game={game} />)}
            </section>

            {totalPages > 1 ? <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} /> : <></>}
        </section>
    );
}