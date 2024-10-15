import { ReactElement, useState } from "react";
import { SearchForm, SearchResult } from "../components";
import { Game } from "../interfaces";
import { ALL_OPTION_VALUE } from "../utils";
import { getAllGames } from "../data/game";

export function SearchPage(): ReactElement {
    const [searchResult, setSearchResult] = useState<Game[]>([]);
    const [showHeading, setShowHeading] = useState<boolean>(false);
    
    /**
     * Searches for games that matches the supplied filter values as well as the given title text.
     * The searchResult state contains the games that matches the search query. The showHeading state
     * is set on each search to inform the user about how many games that matches the search query.
     * 
     * @param title         can be any letter or string that is included in game titles
     * @param category      the game category
     * @param publisher     the publisher of games
     * @param developer     the developer of games
     */
    function search(title: string, category: string, publisher: string, developer: string): void {
        let games = getAllGames();

        games = filter(games, "category", category);
        games = filter(games, "publisher", publisher);
        games = filter(games, "developer", developer);
        games = games.filter(game => game.title?.toLowerCase().includes(title.toLocaleLowerCase()));
        
        setShowHeading(true);
        setSearchResult(games);
    }

    /**
     * Filters a list of games based on the supplied filter value. The filter value must be an exact match of the game property value.
     * 
     * @param list          the list of games to be filtered
     * @param filter        the type of filter (may be category, publisher, etc)
     * @param value         the filter value (e.g., the name of a publisher)
     * @returns             a list of games matching the filter value
     */
    function filter(list: Game[], filter: string, value: string): Game[] {
        if (value !== ALL_OPTION_VALUE) {
            return list.filter((game: { [x: string]: any; }) => game[filter]?.toLowerCase() === value.toLocaleLowerCase());
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