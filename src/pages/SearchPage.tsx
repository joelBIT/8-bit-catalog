import { ReactElement, useState } from "react";
import { SearchForm, SearchResult } from "../components";
import { Game } from "../interfaces";

export function SearchPage(): ReactElement {
    const [searchResult, setSearchResult] = useState<Game[]>([]);
    const [showHeading, setShowHeading] = useState(false);
    
    function search(query: string) {
        const games = localStorage.getItem("games") || "[]";
        const result = JSON.parse(games).filter((game: { [x: string]: any; }) => game.title.toLowerCase().includes(query.toLocaleLowerCase()));
        setShowHeading(true);
        setSearchResult(result);
    }

    return (
        <main id="searchPage">
            <SearchForm search={search} />
            <SearchResult result={searchResult} showHeading={showHeading} />
        </main>
    );
}