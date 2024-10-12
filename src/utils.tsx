import { getAllGames, getAllUsers } from "./data";

export const ALL_OPTION_VALUE = "All";
export const ACTION_OPTION_VALUE = "Action";
export const PAGINATION_PAGE_SIZE = 15;
export const COVER_URL = "src/assets/covers";

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

/**
 * 
 * @returns   a list containing the choosable options for players in a game.
 */
export function getPlayersList(): string[] {
    return ["1", "2", "3", "4", "5", "6"];
}

/**
 * The types of files that a user is permitted to upload.
 */
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

/**
 * Generates a new user ID by adding 1 to the current maximum id.
 * 
 * @returns     a generated ID for a new user
 */
export function generateUserId(): number {
    return getAllUsers().map(user => user.id).reduce((a, b) => a > b ? a : b, 0) + 1;
}

export function joinParagraphs(text: string[]): string {
    return text ? text.join("\n\n") : text;
}

export function createParagraphs(text: string): string[] {
    return text.split('\n').filter((element: string) => element !== "");
}