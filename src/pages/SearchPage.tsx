import { ReactElement, useState } from "react";
import { SearchForm, SearchResult } from "../components";
import { Game } from "../interfaces";
import { DEFAULT_OPTION_VALUE } from "../utils";

export function SearchPage(): ReactElement {
    const [searchResult, setSearchResult] = useState<Game[]>([]);
    const [showHeading, setShowHeading] = useState<boolean>(false);
    
    function search(title: string, category: string, publisher: string, developer: string): void {
        const games = localStorage.getItem("games") || "[]";
        let result = JSON.parse(games);

        result = filter(result, "category", category);
        result = filter(result, "publisher", publisher);
        result = filter(result, "developer", developer);
        result = filter(result, "title", title);
        
        setShowHeading(true);
        setSearchResult(result);
    }

    function filter(list: Game[], filter: string, value: string): Game[] {
        if (value !== DEFAULT_OPTION_VALUE) {
            return list.filter((game: { [x: string]: any; }) => game[filter]?.toLowerCase().includes(value.toLocaleLowerCase()));
        } else {
            return list;
        }
    }

    return (
        <main id="searchPage">
            <SearchForm search={search} />
            <SearchResult result={searchResult} showHeading={showHeading} />
        </main>
    );
}