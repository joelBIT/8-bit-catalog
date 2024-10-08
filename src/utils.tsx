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

export function getPlayersList(): string[] {
    return ["1", "2", "3", "4", "5", "6"];
}

export const fileTypes = [
    'image/apng',
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/pjpeg',
    'image/png',
    'image/svg+xml',
    'image/tiff',
    'image/webp',
    `image/x-icon`
];

/**
 * Generates a new game ID by adding 1 to the current maximum id.
 * 
 * @returns     a generated ID for a new game
 */
export function generateGameId(): number {
    return getAllGames().map(game => game.id).reduce((a, b) => a > b ? a : b, 0) + 1;
}