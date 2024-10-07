import { Game, Role } from "./interfaces";

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

export const DEFAULT_OPTION_VALUE = "All";

export const PAGINATION_PAGE_SIZE = 15;

export function createAnonymousUser() {
   return {
        id: -1,
        username: "anonymous",
        role: 'User' as Role,
        isAuthenticated: false,
        password: "",
        email: ""
    }
}

export function createNewUser(id: number, username: string, password: string, email: string, role: Role) {
    return {
        id: id,
        username : username,
        password : password,
        role: role,
        email: email,
        isAuthenticated: false
      }
}