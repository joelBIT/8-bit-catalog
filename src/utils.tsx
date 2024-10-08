import { Game, Role, User } from "./interfaces";
import games from './assets/database/nes_games.json';

export const DEFAULT_OPTION_VALUE = "All";

export const PAGINATION_PAGE_SIZE = 15;

export function createAnonymousUser(): User {
   return {
        id: -1,
        username: "anonymous",
        role: 'User' as Role,
        isAuthenticated: false,
        password: "",
        email: ""
    }
}

export function createNewUser(id: number, username: string, password: string, email: string, role: Role): User {
    return {
        id: id,
        username : username,
        password : password,
        role: role,
        email: email,
        isAuthenticated: false
      }
}

export function getAllGames(): Game[] {
    const games = localStorage.getItem('games') || "[]";
    return JSON.parse(games);
}

/**
 * A check is done to see if local storage contains the game objects. If data is missing, game data 
 * is read from a json file and transformed into Game objects before being added to local storage.
 */
export function createGameData() {
    if (!localStorage.getItem('games')) {
        const cartridges = games.map((game: any) => {
            game.cover = game.cover ? game.cover : "notavailable.jpg";
            game.players = game.players ? game.players : 1;
            game.releaseYear = game.releaseYear ? game.releaseYear : 1000;
            return createGame(game);
        });

        localStorage.setItem('games', JSON.stringify(cartridges));
    }
}

export function createGame(game: Game) {
    return {
        id: game.id,
        title: game.title,
        category: game.category,
        cover: game.cover,
        publisher: game.publisher,
        developer: game.developer,
        players: game.players,
        releaseYear: game.releaseYear
    }
}