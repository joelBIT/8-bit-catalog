import { ReactElement, useEffect, useState } from "react";
import games from '../assets/database/nes_games.json';
import { HeroCard } from "../components";
import { createGame } from "../utils";
import { Game } from "../interfaces";

export function LandingPage(): ReactElement {
    const [randomGame, setRandomGame] = useState<Game>({} as Game);

    /**
     * A random game is presented to the user every time the landing page is visited. A check is done to see 
     * if local storage contains the game objects. If data is missing, game data is read from a json file and
     * transformed into Game objects before being added to local storage.
     */
    useEffect(() => {
        if (!localStorage.getItem('games')) {
            const cartridges = games.map(game => {
                game.cover = game.cover ? game.cover : "notavailable.jpg";
                game.players = game.players ? game.players : 1;
                return createGame(game);
            });
    
            localStorage.setItem('games', JSON.stringify(cartridges));
        }

        addRandomGame();
    }, []);

    /**
     * Retrieves a random game from the list of games and presents it to the user.
     */
    function addRandomGame(): void {
        const games = localStorage.getItem('games') || "[]";
        const cartridges = JSON.parse(games);
  
        setRandomGame(cartridges[Math.floor(Math.random() * cartridges.length + 1)]);
    }

    return (
        <main id="landingPage">
            <HeroCard id={randomGame.id} title={randomGame.title} cover={randomGame.cover}/>
        </main>
    );
}