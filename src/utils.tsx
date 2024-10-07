
export function createGame(game: any) {
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
        isAuthenticated: false,
        password: "",
        email: ""
    }
}