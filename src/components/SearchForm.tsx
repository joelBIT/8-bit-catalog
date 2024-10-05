import { ReactElement } from "react";
import { Select } from ".";

export function SearchForm(): ReactElement {

    function getSearchFilterList(property: string): string[] {
        const games = localStorage.getItem('games') || "[]";
        let cartridges = JSON.parse(games).map((game: { [x: string]: any; }) => game[property]);
        cartridges.sort();
        cartridges = cartridges.filter((element: any) => element != null);
        return Array.from(new Set(cartridges));
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
                <input id="searchTitle" type="text" placeholder="Game Title"/>
                <button onClick={() => console.log('search game')}>Search</button>
            </article>
        </section>
    );
}