import { Game, GameRequest, User } from "./interfaces";
import games from './assets/database/games.json';
import { generateUserId } from "./utils";

export function getAllUsers(): User[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

export function storeAllUsers(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
}

export function updateUser(updatedUser: User): void {
    const users = getAllUsers().filter(user => user.id !== updatedUser.id);
    users.push(updatedUser);
    storeAllUsers(users);
}

export function createAnonymousUser(): User {
    return {
         id: -1,
         username: "anonymous",
         isAdmin: false,
         isAuthenticated: false,
         password: "",
         email: ""
     }
 }
 
 export function createNewUser(username: string, password: string, passwordRepeat: string, email: string): User {
    if (userExists(username)) {
        throw new Error(`User ${username} already exists!`);
    }

    if (password !== passwordRepeat) {
        throw new Error('Passwords do not match!');
    }

     const user =  {
         id: generateUserId(),
         username : username,
         password : password,
         isAdmin: false,
         email: email,
         isAuthenticated: false
     }

    const users = getAllUsers();
    users.push(user);
    storeAllUsers(users);

    return user;
 }

 export function getUser(username: string): User {
    const user = getAllUsers().find((user: { username: string; }) => user.username === username);
    if (user) {
        return user;
    } else {
        throw new Error(`User ${username} does not exist`);
    }
}

export function userExists(username: string): boolean {
    const users = getAllUsers();
    return users.find((user: { username: string; }) => user.username === username) ? true : false;
}

export function authenticate(user: User): void {
    user.isAuthenticated = true;
    setActiveUser(user);
}

export function validatePassword(storedPassword: string, givenPassword: string): void {
    if(storedPassword !== givenPassword) {
        throw new Error('Incorrect password');
    }
}

/**
 * The game data source is created if it does not exist yet. Will be migrated to a database later.
 * 
 * @returns list of all games in data source.
 */
export function getAllGames(): Game[] {
    createGameData();
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
export function createGameData(): void {
    if (!localStorage.getItem('games')) {
        const cartridges = games.map((game: any) => {
            game.cover = game.cover ? game.cover : "notavailable.jpg";
            game.players = game.players ? game.players : 1;
            game.description = game.description ? game.description : [];
            game.releaseDate = game.releaseDate ? game.releaseDate : "";
            return copyGame(game);
        });

        storeAllGames(cartridges);
    }
}

export function copyGame(game: Game): Game {
    return {
        id: game.id,
        title: game.title,
        category: game.category,
        cover: game.cover,
        publisher: game.publisher,
        description: game.description,
        developer: game.developer,
        players: game.players,
        releaseYear: game.releaseYear,
        releaseDate: game.releaseDate
    }
}

export function createGame(id: number, title: string, category: string, publisher: string, developer: string, 
                                releaseYear: number, releaseDate: string, description: string[], players = 1, cover = "notavailable.jpg"): Game {
    return {
        id: id,
        title: title,
        category: category,
        cover: cover,
        publisher: publisher,
        developer: developer,
        players: players,
        description: description,
        releaseYear: releaseYear,
        releaseDate: releaseDate
    }
}

export function createRequest(game: Game): void {
    const requests = getAllRequests();

    const request = {
        id: requests.length,
        game: game,
        submitter: getActiveUser(),
        status: "Pending"
    }

    requests.push(request);
    storeAllRequests(requests);
}

export function getAllRequests(): GameRequest[] {
    return JSON.parse(localStorage.getItem('requests') || '[]');
}

export function storeAllRequests(requests: GameRequest[]): void {
    localStorage.setItem('requests', JSON.stringify(requests));
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

export function getActiveUser(): User {
    const activeUser = localStorage.getItem('activeUser') || "{}";
    return JSON.parse(activeUser);
}

export function setActiveUser(user: User): void {
    localStorage.setItem('activeUser', JSON.stringify(user));
}

export function activeUserExists(): boolean {
    return localStorage.getItem('activeUser') ? true : false;
}