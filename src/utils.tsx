import { getAllGames } from "./data";

export const DEFAULT_OPTION_VALUE = "All";

export const PAGINATION_PAGE_SIZE = 15;

   /**
     * Creates a list of option values for a Select filter. The list of option values is sorted
     * alphabetically in the Select list, and empty values are removed.
     * 
     * @param property      the game property which values are to be included in an option values list
     * @returns             a list containing option values of a game property sorted alphabetically
     */
export function createFilterList(property: string): string[] {
    let games = getAllGames().map((game: { [x: string]: any; }) => game[property]);
    games.sort();
    games = games.filter((element: any) => element != null);
    return Array.from(new Set(games));
}