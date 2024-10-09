import { Game, Role, User } from "./interfaces";
import games from './assets/database/nes_games.json';

export function getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

export function storeAllUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
}

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

 export function getUserIfExists(username: string): User {
    const users = getAllUsers();
    const user = users.find((user: { username: string; }) => user.username === username);

    if (!user) {
        throw new Error(`User ${username} does not exist`);
    }

    return user;
}

export function getAllGames(): Game[] {
    const games = localStorage.getItem('games') || "[]";
    return JSON.parse(games);
}

export function storeAllGames(games: Game[]): void {
    localStorage.setItem('games', JSON.stringify(games));
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
            game.description = game.description ? game.description : "";
            game.releaseYear = game.releaseYear ? game.releaseYear : 1000;
            return copyGame(game);
        });

        storeAllGames(cartridges);
    }
}

export function copyGame(game: Game) {
    return {
        id: game.id,
        title: game.title,
        category: game.category,
        cover: game.cover,
        publisher: game.publisher,
        description: game.description,
        developer: game.developer,
        players: game.players,
        releaseYear: game.releaseYear
    }
}

export function createGame(id: number, title: string, category: string, publisher: string, developer: string, 
                                releaseYear: number, description: string, players = 1, cover = "notavailable.jpg") {
    return {
        id: id,
        title: title,
        category: category,
        cover: cover,
        publisher: publisher,
        developer: developer,
        players: players,
        description: description,
        releaseYear: releaseYear
    }
}

export function storeGame(game: Game): void {
    const games = getAllGames();
    games.push(game);
    storeAllGames(games);
}

export function getGame(id: number): Game {
    const game =  getAllGames().find(game => game.id === id);
    if (!game) {
        throw new Error(`Game with id ${id} does not exist`);
    }

    return game;
}

export function deleteGame(id: number): void {
    const games = getAllGames();
    const updatedList = games.filter(game => game.id !== id);
    storeAllGames(updatedList);
}

export function updateGame(updatedGame: Game): void {
    const games = getAllGames();
    const updatedList = games.filter(game => game.id !== updatedGame.id);
    updatedList.push(updatedGame);
    storeAllGames(updatedList);
}