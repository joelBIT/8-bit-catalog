import { KeyboardEvent, ReactElement, useRef, useState } from "react";
import { Select } from "..";
import { DEFAULT_OPTION_VALUE } from "../../utils";

export function SearchForm( {search}: {search: Function} ): ReactElement {
    const searchRef = useRef<HTMLInputElement>(null);
    const [category, setCategory] = useState<string>(DEFAULT_OPTION_VALUE);
    const [publisher, setPublisher] = useState<string>(DEFAULT_OPTION_VALUE);
    const [developer, setDeveloper] = useState<string>(DEFAULT_OPTION_VALUE);

    function createFilterList(property: string): string[] {
        const games = localStorage.getItem('games') || "[]";
        let cartridges = JSON.parse(games).map((game: { [x: string]: any; }) => game[property]);
        cartridges.sort();
        cartridges = cartridges.filter((element: any) => element != null);
        return Array.from(new Set(cartridges));
    }

    function executeSearch(): void {
        if (searchRef.current) {
            search(searchRef.current.value, category, publisher, developer);
        }
    }

    function searchIfEnter(event: KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter') {
            executeSearch();
        }
    }

    return (
        <section id="searchForm">
            <h1>Search Games</h1>
            <article id="searchFilters">
                <Select title={"Category"} list={createFilterList("category")} getOption={setCategory} />
                <Select title={"Publisher"} list={createFilterList("publisher")} getOption={setPublisher} />
                <Select title={"Developer"} list={createFilterList("developer")} getOption={setDeveloper} />
            </article>

            <article id="searchInput">
                <input id="searchTitle" type="text" placeholder="Game Title" ref={searchRef} onKeyDown={event => searchIfEnter(event)} />
                <button onClick={() => executeSearch()}>Search</button>
            </article>
        </section>
    );
}