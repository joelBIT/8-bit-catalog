import { getAllGames } from "../data/game";
import { Game } from "../interfaces";

export function RandomGameLoader(): Game {
    const games = getAllGames();
    return games[Math.floor(Math.random() * games.length + 1)];
}