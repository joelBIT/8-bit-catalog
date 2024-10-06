import { KeyboardEvent, ReactElement, useRef } from "react";
import { Select } from ".";

export function SearchForm( {search}: {search: (query: string) => void} ): ReactElement {
    const searchRef = useRef<HTMLInputElement>(null);

    function getSearchFilterList(property: string): string[] {
        const games = localStorage.getItem('games') || "[]";
        let cartridges = JSON.parse(games).map((game: { [x: string]: any; }) => game[property]);
        cartridges.sort();
        cartridges = cartridges.filter((element: any) => element != null);
        return Array.from(new Set(cartridges));
    }

    function executeSearch() {
        if (searchRef.current) {
            search(searchRef.current.value);
        }
    }

    function searchIfEnter(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            executeSearch();
        }
    }

    return (
        <section id="searchForm">
            <h1>Search Games</h1>
            <article id="searchFilters">
                <Select title={"Category"} list={getSearchFilterList("category")} />
                <Select title={"Publisher"} list={getSearchFilterList("publisher")} />
                <Select title={"Developer"} list={getSearchFilterList("developer")} />
            </article>

            <article id="searchInput">
                <input id="searchTitle" type="text" placeholder="Game Title" ref={searchRef} onKeyDown={event => searchIfEnter(event)} />
                <button onClick={() => executeSearch()}>Search</button>
            </article>
        </section>
    );
}